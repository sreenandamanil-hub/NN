/* =====================================================
   NAVIRA WISHLIST
   ===================================================== */


/* =====================================================
   LOAD WISHLIST
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
   ADD / REMOVE WISHLIST
   ===================================================== */

window.toggleWishlist = function(productId) {

    productId = Number(productId);


    if (isInWishlist(productId)) {

        naviraWishlist =
            naviraWishlist.filter(
                function(id) {
                    return id !== productId;
                }
            );

    }

    else {

        naviraWishlist.push(productId);

    }


    saveWishlist();

    updateWishlistButtons();

    renderWishlist();


    /* Small confirmation */

    if (isInWishlist(productId)) {

        showWishlistMessage(
            "❤️ Added to Wishlist"
        );

    }

    else {

        showWishlistMessage(
            "♡ Removed from Wishlist"
        );

    }

};


/* =====================================================
   UPDATE HEART BUTTONS
   ===================================================== */

function updateWishlistButtons() {

    const buttons =
        document.querySelectorAll(
            "[data-wishlist-id]"
        );


    buttons.forEach(
        function(button) {

            const id =
                Number(
                    button.dataset.wishlistId
                );


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

        }
    );

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


    return products.find(
        function(product) {

            return Number(product.id) ===
                   Number(id);

        }
    ) || null;

}


/* =====================================================
   RENDER WISHLIST PAGE
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


    let output = "";


    naviraWishlist.forEach(
        function(id) {

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

                            <del>
                                ₹${product.oldPrice}
                            </del>

                        </p>


                        <p class="naviraWishlistDiscount">
                            ${product.discount || ""}
                        </p>


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

        }
    );


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

    productId = Number(productId);


    naviraWishlist =
        naviraWishlist.filter(
            function(id) {

                return id !== productId;

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


    setTimeout(
        function() {

            box.classList.remove(
                "naviraWishlistMessageShow"
            );

        },
        1500
    );

}


/* =====================================================
   INITIALIZE
   ===================================================== */

function initializeWishlist() {

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