/* =====================================================
   NAVIRA BOTTOM NAVIGATION + RECENTLY VIEWED
   ===================================================== */


/* =====================================================
   HOME
   ===================================================== */

function goNaviraHome() {

    window.location.href = "index.html";

}


/* =====================================================
   CATEGORIES
   ===================================================== */

function openCategories() {

    window.location.href = "categories.html";

}


/* =====================================================
   RECENTLY VIEWED
   ===================================================== */

function openRecentlyViewed() {

    window.location.href = "recently-viewed.html";

}


/* =====================================================
   SAVE CURRENT PRODUCT
   ===================================================== */

function saveRecentlyViewed() {

    /* products.js must be loaded first */

    if (typeof products === "undefined") {
        return;
    }


    /* Get current page name */

    var currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    /* Ignore Home and other non-product pages */

    if (
        currentPage === "" ||
        currentPage === "index.html" ||
        currentPage === "recently-viewed.html" ||
        currentPage === "wishlist.html" ||
        currentPage === "categories.html" ||
        currentPage === "about.html"
    ) {
        return;
    }


    /* Find product using its page */

    var currentProduct =
        products.find(function(product) {

            return String(product.page).toLowerCase()
                === currentPage;

        });


    /* If this is not a product page */

    if (!currentProduct) {
        return;
    }


    /* Get existing recently viewed */

    var recentlyViewed =
        JSON.parse(
            localStorage.getItem(
                "naviraRecentlyViewed"
            )
        ) || [];


    /* Remove this product if already present */

    recentlyViewed =
        recentlyViewed.filter(function(id) {

            return Number(id)
                !== Number(currentProduct.id);

        });


    /* Put newest product first */

    recentlyViewed.unshift(
        currentProduct.id
    );


    /* Keep maximum 20 products */

    recentlyViewed =
        recentlyViewed.slice(0, 20);


    /* Save */

    localStorage.setItem(
        "naviraRecentlyViewed",
        JSON.stringify(recentlyViewed)
    );

}


/* =====================================================
   SHOW RECENTLY VIEWED PRODUCTS
   ===================================================== */

function loadRecentlyViewed() {

    var box =
        document.getElementById(
            "recentlyViewedProducts"
        );

    if (!box) {
        return;
    }


    if (typeof products === "undefined") {

        box.innerHTML =
            "<p>Products could not be loaded.</p>";

        return;

    }


    var recentlyViewed =
        JSON.parse(
            localStorage.getItem(
                "naviraRecentlyViewed"
            )
        ) || [];


    /* EMPTY */

    if (recentlyViewed.length === 0) {

        box.innerHTML = `

            <div class="naviraRecentEmpty">

                <div class="naviraRecentEmptyIcon">
                    ◉
                </div>

                <h2>
                    No Recently Viewed Products
                </h2>

                <p>
                    Products you view will appear here.
                </p>

                <button
                    type="button"
                    onclick="goNaviraHome()">

                    Continue Shopping

                </button>

            </div>

        `;

        return;
    }


    var output = "";


    recentlyViewed.forEach(function(id) {

        var product =
            products.find(function(p) {

                return Number(p.id)
                    === Number(id);

            });


        if (!product) {
            return;
        }


        var image =
            product.images &&
            product.images.length > 0
                ? product.images[0]
                : "";


        output += `

            <div class="naviraRecentCard">

                <img
                    src="${image}"
                    alt="${product.name}"
                    class="naviraRecentImage"
                >


                <div class="naviraRecentInfo">

                    <h3>
                        ${product.name}
                    </h3>


                    <div class="naviraRecentRating">
                        ${product.rating || ""}
                    </div>


                    <div class="naviraRecentPrice">

                        <span>
                            ₹${product.price}
                        </span>

                        ${
                            product.oldPrice
                            ? `<del>₹${product.oldPrice}</del>`
                            : ""
                        }

                    </div>


                    ${
                        product.discount
                        ? `
                            <div class="naviraRecentDiscount">
                                ${product.discount}
                            </div>
                          `
                        : ""
                    }


                    <button
                        type="button"
                        class="naviraRecentViewButton"
                        onclick="location.href='${product.page}'">

                        View Product

                    </button>

                </div>

            </div>

        `;

    });


    box.innerHTML = output;

}


/* =====================================================
   RUN AUTOMATICALLY
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Save product if this is a product page */

        saveRecentlyViewed();


        /* Load Recently Viewed page */

        loadRecentlyViewed();

    }
);
function openAbout() {
    var about = document.getElementById("aboutOverlay");

    if (about) {
        about.classList.add("showAbout");
    }
}

function closeAbout() {
    var about = document.getElementById("aboutOverlay");

    if (about) {
        about.classList.remove("showAbout");
    }
}