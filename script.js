/* =====================================================
   NAVIRA SCRIPT.JS
   Product + Search + Profile + Wishlist + Orders
   ===================================================== */


/* =====================================================
   PRODUCT IMAGE
   ===================================================== */

var product = document.getElementById("productImage");

var images = [];
var current = 0;

if (product) {
    if (product.dataset.images) {
        images = product.dataset.images.split(",");
    }
}


function showImage() {

    var productImage =
        document.getElementById("productImage");

    if (!productImage || images.length === 0) {
        return;
    }

    productImage.src = images[current];

    var dot1 = document.getElementById("dot1");
    var dot2 = document.getElementById("dot2");
    var dot3 = document.getElementById("dot3");

    if (dot1) {
        dot1.innerHTML =
            current == 0 ? "●" : "○";
    }

    if (dot2) {
        dot2.innerHTML =
            current == 1 ? "●" : "○";
    }

    if (dot3) {
        dot3.innerHTML =
            current == 2 ? "●" : "○";
    }
}


function next() {

    if (images.length === 0) return;

    current++;

    if (current >= images.length) {
        current = 0;
    }

    showImage();
}


function previous() {

    if (images.length === 0) return;

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    showImage();
}


/* =====================================================
   BUY PANEL
   ===================================================== */

function showBuy() {

    var left =
        document.querySelector(".left");

    var rightPanel =
        document.getElementById("rightPanel");

    if (left) {
        left.style.width = "50%";
    }

    if (rightPanel) {
        rightPanel.style.display = "block";
    }
}


function goBack() {

    var left =
        document.querySelector(".left");

    var rightPanel =
        document.getElementById("rightPanel");

    if (left) {
        left.style.display = "block";
    }

    if (rightPanel) {
        rightPanel.style.display = "none";
    }
}


function stock() {

    alert(
        "❌ Sorry!\n\n" +
        "This product is currently OUT OF STOCK.\n" +
        "Please try again later."
    );

    goBack();
}


/* =====================================================
   PROFILE DATA
   ===================================================== */

var profileData =
    JSON.parse(
        localStorage.getItem("naviraProfile") || "null"
    ) || {

        name: "Sreenanda",
        photo: "profile.png",

        address: "",
        email: "",
        phone: "",
        gender: "",
        language: "",
        occupation: "",
        business: "",
        pincode: "",
        city: "",
        state: ""
    };


/* =====================================================
   LOAD PROFILE ON HOME
   ===================================================== */

function loadHomeProfile() {

    var name =
        document.getElementById(
            "homeProfileName"
        );

    var photo =
        document.getElementById(
            "homeProfilePhoto"
        );


    if (name) {

        name.textContent =
            profileData.name || "Sreenanda";
    }


    if (photo) {

        photo.src =
            profileData.photo || "profile.png";
    }
}


/* =====================================================
   OPEN ACCOUNT
   ===================================================== */

function openAccount() {

    var account =
        document.getElementById(
            "accountOverlay"
        );

    if (!account) {
        alert("Account section not found.");
        return;
    }


    account.style.display = "flex";


    var nameInput =
        document.getElementById("nameInput");

    var addressInput =
        document.getElementById("addressInput");

    var emailInput =
        document.getElementById("emailInput");

    var phoneInput =
        document.getElementById("phoneInput");

    var genderInput =
        document.getElementById("genderInput");

    var languageInput =
        document.getElementById("languageInput");

    var occupationInput =
        document.getElementById("occupationInput");

    var businessInput =
        document.getElementById("businessInput");

    var pincodeInput =
        document.getElementById("pincodeInput");

    var cityInput =
        document.getElementById("cityInput");

    var stateInput =
        document.getElementById("stateInput");

    var accountPhoto =
        document.getElementById("accountPhoto");


    if (nameInput)
        nameInput.value =
            profileData.name || "";

    if (addressInput)
        addressInput.value =
            profileData.address || "";

    if (emailInput)
        emailInput.value =
            profileData.email || "";

    if (phoneInput)
        phoneInput.value =
            profileData.phone || "";

    if (genderInput)
        genderInput.value =
            profileData.gender || "";

    if (languageInput)
        languageInput.value =
            profileData.language || "";

    if (occupationInput)
        occupationInput.value =
            profileData.occupation || "";

    if (businessInput)
        businessInput.value =
            profileData.business || "";

    if (pincodeInput)
        pincodeInput.value =
            profileData.pincode || "";

    if (cityInput)
        cityInput.value =
            profileData.city || "";

    if (stateInput)
        stateInput.value =
            profileData.state || "";

    if (accountPhoto)
        accountPhoto.src =
            profileData.photo || "profile.png";
}


/* =====================================================
   CLOSE ACCOUNT
   ===================================================== */

function closeAccount() {

    var account =
        document.getElementById(
            "accountOverlay"
        );

    if (account) {
        account.style.display = "none";
    }
}


/* =====================================================
   SAVE ACCOUNT
   ===================================================== */

function saveAccount() {

    var nameInput =
        document.getElementById("nameInput");

    var addressInput =
        document.getElementById("addressInput");

    var emailInput =
        document.getElementById("emailInput");

    var phoneInput =
        document.getElementById("phoneInput");

    var genderInput =
        document.getElementById("genderInput");

    var languageInput =
        document.getElementById("languageInput");

    var occupationInput =
        document.getElementById("occupationInput");

    var businessInput =
        document.getElementById("businessInput");

    var pincodeInput =
        document.getElementById("pincodeInput");

    var cityInput =
        document.getElementById("cityInput");

    var stateInput =
        document.getElementById("stateInput");


    /* Name */

    if (nameInput) {

        profileData.name =
            nameInput.value.trim();

        if (profileData.name === "") {
            profileData.name = "Sreenanda";
        }
    }


    if (addressInput)
        profileData.address =
            addressInput.value.trim();

    if (emailInput)
        profileData.email =
            emailInput.value.trim();

    if (phoneInput)
        profileData.phone =
            phoneInput.value.trim();

    if (genderInput)
        profileData.gender =
            genderInput.value;

    if (languageInput)
        profileData.language =
            languageInput.value.trim();

    if (occupationInput)
        profileData.occupation =
            occupationInput.value;

    if (businessInput)
        profileData.business =
            businessInput.value.trim();

    if (pincodeInput)
        profileData.pincode =
            pincodeInput.value.trim();

    if (cityInput)
        profileData.city =
            cityInput.value.trim();

    if (stateInput)
        profileData.state =
            stateInput.value;


    /* SAVE */

    localStorage.setItem(
        "naviraProfile",
        JSON.stringify(profileData)
    );


    /* Update Home immediately */

    loadHomeProfile();


    /* Close account */

    closeAccount();


    alert("✅ Profile saved successfully!");
}


/* =====================================================
   PROFILE PHOTO
   ===================================================== */

function showPhotoOptions() {

    var options =
        document.getElementById(
            "photoOptions"
        );

    if (!options) return;


    if (options.style.display === "block") {

        options.style.display = "none";

    } else {

        options.style.display = "block";
    }
}


function selectProfilePhoto(photo) {

    profileData.photo = photo;


    var accountPhoto =
        document.getElementById(
            "accountPhoto"
        );

    if (accountPhoto) {
        accountPhoto.src = photo;
    }


    localStorage.setItem(
        "naviraProfile",
        JSON.stringify(profileData)
    );
}


function uploadProfilePhoto(event) {

    if (!event ||
        !event.target ||
        !event.target.files ||
        !event.target.files[0]) {

        return;
    }


    var file =
        event.target.files[0];


    var reader =
        new FileReader();


    reader.onload = function(e) {

        profileData.photo =
            e.target.result;


        var accountPhoto =
            document.getElementById(
                "accountPhoto"
            );


        if (accountPhoto) {
            accountPhoto.src =
                e.target.result;
        }


        localStorage.setItem(
            "naviraProfile",
            JSON.stringify(profileData)
        );
    };


    reader.readAsDataURL(file);
}


/* =====================================================
   WISHLIST
   ===================================================== */

function openWishlist() {

    window.location.href =
        "wishlist.html";
}


/* =====================================================
   ORDER TRACKING
   ===================================================== */

function openOrders() {

    var orders =
        document.getElementById(
            "orderOverlay"
        );

    if (!orders) {

        alert("Order Tracking section not found.");
        return;
    }


    orders.style.display = "flex";
}


function closeOrders() {

    var orders =
        document.getElementById(
            "orderOverlay"
        );

    if (orders) {
        orders.style.display = "none";
    }
}


/* =====================================================
   SEARCH EVENTS
   ===================================================== */

function setupSearch() {

    var searchBox =
        document.getElementById("searchInput") ||
        document.getElementById("search");


    if (!searchBox) {
        return;
    }


    /* Search while typing */

    searchBox.addEventListener(
        "input",
        searchProducts
    );


    /* Search when pressing Enter */

    searchBox.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                searchProducts();
            }
        }
    );
}


/* =====================================================
   PAGE LOAD
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Product image */

        if (product && images.length > 0) {
            showImage();
        }


        /* Profile */

        loadHomeProfile();


        /* Search */

        setupSearch();

    }
);
/* ================= SEARCH ================= */

function searchProducts() {

    var searchBox = document.getElementById("search");

    if (!searchBox) {
        return;
    }

    var text = searchBox.value.trim().toLowerCase();
var output = "";

var homeContent = document.getElementById("homeContent");
var onamSlider = document.querySelector(".naviraOnamSlider");

if (text === "") {

    document.getElementById("products").innerHTML = "";

    if (homeContent) {
        homeContent.style.display = "";
    }

    if (onamSlider) {
        onamSlider.style.display = "";
    }

    return;
}
if (homeContent) {
    homeContent.style.display = "none";
}

if (onamSlider) {
    onamSlider.style.display = "none";
}

products.forEach(function(p) {

        if (
            p.name.toLowerCase().includes(text) ||
            p.category.toLowerCase().includes(text) ||
            p.price.includes(text) ||
            p.description.toLowerCase().includes(text) ||
            p.keywords.toLowerCase().includes(text) ||
            String(p.id).includes(text)
        ) {

            p.images.forEach(function(img) {

                output += `
                <div class="card"
                     onclick="location.href='${p.page}'">

                    <img src="${img}" class="searchPhoto">

                    <h3>${p.name}</h3>

                    <p class="rating">${p.rating}</p>

                    <p>
                        <span class="searchprice">
                            ₹${p.price}
                        </span>

                        <span class="searcholdPrice">
                            ₹${p.oldPrice}
                        </span>
                    </p>

                    <p class="searchdiscount">
                        ${p.discount}
                    </p>
					<p class="searchDescription">
    ${p.description}
</p>

                </div>
                `;

            });

        }

    });

    if (output === "") {

        output = `
        <p style="text-align:center; padding:30px;">
            ❌ No products found
        </p>
        `;
    }

    document.getElementById("products").innerHTML = output;
}


/* ================= SEARCH EVENT ================= */

document.addEventListener("DOMContentLoaded", function() {

    var searchBox = document.getElementById("search");

    if (searchBox) {
        searchBox.addEventListener("input", searchProducts);
    }

});
/* =====================================================
   NAVIRA TRENDING PRODUCTS
===================================================== */

function loadTrendingProducts() {

    var trending =
        document.getElementById("trendingProducts");

    if (!trending || typeof products === "undefined") {
        return;
    }


    /* Make a copy of products */

    var shuffled =
        products.slice();


    /* Randomize products */

    shuffled.sort(function() {
        return Math.random() - 0.5;
    });


    /* Take only 10 products */

    var selected =
        shuffled.slice(0, 10);


    var output = "";


    selected.forEach(function(p) {

        if (!p.images || p.images.length === 0) {
            return;
        }


        output += `
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

                    <h3>
                        ${p.name}
                    </h3>


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


    trending.innerHTML = output;
}


/* =====================================================
   VIEW ALL TRENDING
===================================================== */

function showMoreTrending() {

    var trending =
        document.getElementById("trendingProducts");

    if (!trending || typeof products === "undefined") {
        return;
    }


    var shuffled =
        products.slice();


    shuffled.sort(function() {
        return Math.random() - 0.5;
    });


    var selected =
        shuffled.slice(0, 20);


    var output = "";


    selected.forEach(function(p) {

        if (!p.images || p.images.length === 0) {
            return;
        }


        output += `
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

                    <h3>
                        ${p.name}
                    </h3>

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


    trending.innerHTML = output;


    /* Scroll to section */

    document.querySelector(".naviraTrending")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =====================================================
   LOAD TRENDING ON HOME
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadTrendingProducts();

    }
);/* =====================================================
   NAVIRA - DIRECT ONAM TO TRENDING POSITION FIX
   ===================================================== */

function positionTrendingAfterOnam() {

    var onam = document.querySelector(".naviraOnamSlider");
    var trending = document.querySelector(".naviraTrending");

    if (!onam || !trending) {
        return;
    }

    /* Get the actual bottom of the Onam section */
    var onamBottom = onam.getBoundingClientRect().bottom;

    /* Get current Trending position */
    var trendingTop = trending.getBoundingClientRect().top;

    /* Difference between them */
    var gap = trendingTop - onamBottom;

    /*
       Keep only 5px space between
       Onam posters and Trending
    */
    if (gap > 5) {

        trending.style.position = "relative";

        trending.style.top =
            "-" + (gap - 5) + "px";
    }
}


/* Run after everything is loaded */
window.addEventListener("load", function() {

    setTimeout(function() {
        positionTrendingAfterOnam();
    }, 300);

});


/* Run again when Trending is inserted */
document.addEventListener("DOMContentLoaded", function() {

    var homeContent =
        document.getElementById("homeContent");

    if (!homeContent) {
        return;
    }

    var observer =
        new MutationObserver(function() {

            setTimeout(function() {
                positionTrendingAfterOnam();
            }, 50);

        });

    observer.observe(homeContent, {
        childList: true,
        subtree: true
    });

});
