/* =====================================================
   NAVIRA WISHLIST
   ===================================================== */


/* =====================================================
   LOAD SAVED WISHLIST
   ===================================================== */

let naviraWishlist = [];

try {

    naviraWishlist =
        JSON.parse(
            localStorage.getItem("naviraWishlist") || "[]"
        );

    if (!Array.isArray(naviraWishlist)) {
        naviraWishlist = [];
    }

} catch (error) {

    naviraWishlist = [];

}


/* =====================================================
   CLEAN INVALID IDS
   ===================================================== */

function cleanWishlist() {

    if (typeof products === "undefined") {
        return;
    }

    naviraWishlist =
        naviraWishlist.filter(function(id) {

            return products.some(function(product) {

                return Number(product.id) === Number(id);

            });

        });

    localStorage.setItem(
        "naviraWishlist",
        JSON.stringify(naviraWishlist)
    );

}


/* =====================================================
   SAVE WISHLIST
   ===================================================== */

function saveWishlist() {

    localStorage.setItem(
        "naviraWishlist",
        JSON.stringify(naviraWishlist)
    );

}


/* =====================================================
   CHECK PRODUCT
   ===================================================== */

function isInWishlist(productId) {

    return naviraWishlist.includes(
        Number(productId)
    );

}


/* =====================================================
   GET CURRENT PRODUCT
   ===================================================== */

function getCurrentProduct() {

    if (typeof products === "undefined") {
        return null;
    }


    var currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    if (
        currentPage === "" ||
        currentPage === "index.html" ||
        currentPage === "wishlist.html" ||
        currentPage === "categories.html"
    ) {
        return null;
    }


    return products.find(function(product) {

        return String(product.page)
            .split("/")
            .pop()
            .toLowerCase()
            === currentPage;

    }) || null;

}


/* =====================================================
   ADD / REMOVE WISHLIST
   ===================================================== */

window.toggleWishlist = function(productId) {

    /*
       IMPORTANT:
       Find the product from the current page.

       This prevents a wrong hard-coded ID
       from another product page.
    */

    var currentProduct =
        getCurrentProduct();


    if (!currentProduct) {

        /*
           Fallback to the supplied ID
           if this is not a normal product page.
        */

        productId = Number(productId);

    }

    else {

        /*
           Current page product ID is always used.
        */

        productId =
            Number(currentProduct.id);

    }


    /* ADD */

    if (!isInWishlist(productId)) {

        naviraWishlist.push(productId);

        showWishlistMessage(
            "❤️ Added to Wishlist"
        );

    }

    /* REMOVE */

    else {

        naviraWishlist =
            naviraWishlist.filter(
                function(id) {

                    return Number(id)
                        !== productId;

                }
            );

        showWishlistMessage(
            "♡ Removed from Wishlist"
        );

    }


    /* SAVE */

    saveWishlist();


    /* UPDATE HEART */

    updateWishlistButtons();


    /* If wishlist page is open */

    renderWishlist();

};


/* =====================================================
   UPDATE HEART BUTTONS
   ===================================================== */

function updateWishlistButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-wishlist-id]"
        );


    buttons.forEach(function(button) {

        /*
           On a product page, identify the
           actual product from the page.
        */

        var currentProduct =
            getCurrentProduct();


        var id;


        if (currentProduct) {

            id =
                Number(currentProduct.id);

        }

        else {

            id =
                Number(
                    button.dataset.wishlistId
                );

        }


        if (isInWishlist(id)) {

            button.classList.add(
                "naviraWishlistActive"
            );

            button.innerHTML = "♥";

            button.setAttribute(
                "aria-label",
                "Remove from Wishlist"
            );

        }

        else {

            button.classList.remove(
                "naviraWishlistActive"
            );

            button.innerHTML = "♡";

            button.setAttribute(
                "aria-label",
                "Add to Wishlist"
            );

        }

    });

}


/* =====================================================
   OPEN WISHLIST
   ===================================================== */

window.openWishlist = function() {

    window.location.href =
        "wishlist.html";

};


/* =====================================================
   GET PRODUCT
   ===================================================== */

function getWishlistProduct(id) {

    if (
        typeof products === "undefined"
    ) {
        return null;
    }


    return products.find(function(product) {

        return Number(product.id)
            === Number(id);

    }) || null;

}


/* =====================================================
   RENDER WISHLIST
   ===================================================== */

function renderWishlist() {

    const container =
        document.getElementById(
            "wishlistProducts"
        );


    if (!container) {
        return;
    }


    if (
        typeof products === "undefined"
    ) {

        container.innerHTML =
            "<p>Products could not be loaded.</p>";

        return;

    }


    /* Remove old / invalid IDs */

    cleanWishlist();


    let output = "";


    naviraWishlist.forEach(function(id) {

        const product =
            getWishlistProduct(id);


        if (!product) {
            return;
        }


        const image =
            product.images &&
            product.images.length > 0
                ? product.images[0]
                : "";


        output += `

            <div class="naviraWishlistCard">

                <div
                    class="naviraWishlistImageArea"
                    onclick="location.href='${product.page}'"
                >

                    <img
                        src="${image}"
                        alt="${product.name}"
                        class="naviraWishlistImage"
                    >

                </div>


                <div class="naviraWishlistInfo">

                    <h3>
                        ${product.name}
                    </h3>


                    <p class="naviraWishlistRating">
                        ${product.rating || "★★★★★"}
                    </p>


                    <p class="naviraWishlistPrice">

                        <span>
                            ₹${product.price}
                        </span>

                        ${
                            product.oldPrice
                            ? `<del>₹${product.oldPrice}</del>`
                            : ""
                        }

                    </p>


                    ${
                        product.discount
                        ? `
                            <p class="naviraWishlistDiscount">
                                ${product.discount}
                            </p>
                          `
                        : ""
                    }


                    <div class="naviraWishlistActions">

                        <button
                            type="button"
                            onclick="location.href='${product.page}'"
                            class="naviraWishlistView"
                        >
                            View Product
                        </button>


                        <button
                            type="button"
                            onclick="removeFromWishlist(${product.id})"
                            class="naviraWishlistRemove"
                        >
                            ♡ Remove
                        </button>

                    </div>

                </div>

            </div>

        `;

    });


    /* EMPTY */

    if (output === "") {

        output = `

            <div class="naviraEmptyWishlist">

                <div class="naviraEmptyWishlistIcon">
                    ♡
                </div>

                <h2>
                    Your Wishlist is Empty
                </h2>

                <p>
                    Save products you love here.
                </p>

                <button
                    type="button"
                    onclick="location.href='index.html'"
                    class="naviraWishlistShop"
                >
                    Continue Shopping
                </button>

            </div>

        `;

    }


    container.innerHTML =
        output;


    updateWishlistButtons();

}


/* =====================================================
   REMOVE FROM WISHLIST
   ===================================================== */

window.removeFromWishlist = function(productId) {

    productId =
        Number(productId);


    naviraWishlist =
        naviraWishlist.filter(
            function(id) {

                return Number(id)
                    !== productId;

            }
        );


    saveWishlist();


    renderWishlist();


    updateWishlistButtons();


    showWishlistMessage(
        "♡ Removed from Wishlist"
    );

};


/* =====================================================
   MESSAGE
   ===================================================== */

function showWishlistMessage(message) {

    let box =
        document.getElementById(
            "naviraWishlistMessage"
        );


    if (!box) {

        box =
            document.createElement("div");

        box.id =
            "naviraWishlistMessage";

        box.className =
            "naviraWishlistMessage";

        document.body.appendChild(box);

    }


    box.textContent =
        message;


    box.classList.add(
        "naviraWishlistMessageShow"
    );


    setTimeout(function() {

        box.classList.remove(
            "naviraWishlistMessageShow"
        );

    }, 1500);

}


/* =====================================================
   INITIALIZE
   ===================================================== */

function initializeWishlist() {

    cleanWishlist();

    updateWishlistButtons();

    renderWishlist();

}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWishlist
    );

}

else {

    initializeWishlist();

}