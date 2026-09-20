function loadExtraTrendingProducts() {

    var trending =
        document.getElementById("trendingProducts");

    if (!trending || typeof products === "undefined") {
        return;
    }

    var existingPages = [];

    trending.querySelectorAll(".trendingCard").forEach(function(card) {

        var onclickValue = card.getAttribute("onclick");

        if (onclickValue) {
            existingPages.push(onclickValue);
        }

    });


    var availableProducts = products.filter(function(product) {

        return !existingPages.includes(
            "location.href='" + product.page + "'"
        );

    });


    availableProducts.sort(function() {
        return Math.random() - 0.5;
    });


    var selected =
        availableProducts.slice(0, 10);


    selected.forEach(function(p) {

        if (!p.images || p.images.length === 0) {
            return;
        }

        trending.innerHTML += `

            <div class="trendingCard"
                 onclick="location.href='${p.page}'">

                <div class="trendingImageBox">

                    <img
                        src="${p.images[0]}"
                        alt="${p.name}"
                        class="trendingPhoto"
                    >

                    <span class="trendingDiscount">
                        ${p.discount}
                    </span>

                </div>

                <div class="trendingInfo">

                    <h3>${p.name}</h3>

                    <div class="trendingRating">
                        ${p.rating}
                    </div>

                    <div class="trendingPriceRow">

                        <span class="trendingPrice">
                            ₹${p.price}
                        </span>

                        <span class="trendingOldPrice">
                            ₹${p.oldPrice}
                        </span>

                    </div>

                    <p class="trendingDescription">
                        ${p.description}
                    </p>

                </div>

            </div>

        `;

    });

}


document.addEventListener("DOMContentLoaded", function() {

    setTimeout(function() {

        loadExtraTrendingProducts();

    }, 100);

});