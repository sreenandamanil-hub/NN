/* =====================================================
   NAVIRA - MEN PRODUCTS
   ALL MEN PRODUCTS FROM products.js
   ===================================================== */

const MEN_CATEGORIES = {

    "Shirts": [
        "shirt1.html",
        "shirt2.html",
        "shirt3.html",
        "shirt4.html",
        "shirt5.html",
        "shirt6.html",
        "shirt7.html",
        "shirt8.html",
        "shirt9.html",
        "shirt10.html",
        "shirt11.html"
    ],

    "Mundu": [
        "mundu1.html",
        "mundu2.html",
        "mundu3.html",
        "mundu4.html",
        "mundu5.html",
        "mundu6.html",
        "mundu7.html",
        "mundu8.html",
        "mundu9.html"
    ],

    "Kurta": [
        "kurta1.html",
        "kurta2.html",
        "kurta3.html",
        "kurta4.html",
        "kurta5.html",
        "kurta6.html",
        "kurta7.html",
        "kurta8.html"
    ],

    "Caps & Hats": [
        "cap1.html",
        "cap2.html",
        "cap3.html",
        "cap9.html",
        "cap4.html",
        "cap5.html",
        "cap6.html",
        "cap7.html",
        "cap8.html",
		"cap9.html"
    ],

    "Nightwear": [
        "night1.html",
        "night2.html",
        "night3.html",
        "night5.html",
        "night6.html",
        "night7.html",
        "night8.html",
        "night9.html",
        "night4.html"
    ],

    "T-Shirts": [
        "tshirt1.html",
        "tshirt2.html",
        "tshirt3.html",
        "tshirt4.html",
        "tshirt5.html",
        "tshirt6.html",
        "tshirt7.html",
        "tshirt9.html"
    ],

    "Pants": [
        "pant1.html",
        "pant2.html",
        "pant9.html",
        "pant8.html",
        "pant7.html",
        "pant6.html",
        "pant5.html",
        "pant4.html",
        "pant3.html"
    ],

    "Jackets": [
        "jacket1.html",
        "jacket2.html",
        "jacket3.html",
        "jacket4.html",
        "jacket5.html",
        "jacket6.html",
        "jacket8.html"
    ],
	"Coats": [
        "jacket7.html",
        "jacket9.html"
    ],

    "Blazers": [
        "blazer1.html",
        "blazer2.html",
        "blazer3.html",
        "blazer4.html",
        "blazer5.html",
        "blazer9.html",
        "blazer7.html",
        "blazer6.html"
    ],

    "Hoodies": [
        "hoodie1.html",
        "hoodie2.html",
        "hoodie3.html",
        "hoodie4.html",
        "hoodie5.html",
        "hoodie6.html",
        "hoodie7.html"
    ],

    "Footwear": [
        "foot1.html",
        "foot2.html",
        "foot3.html",
        "foot4.html",
        "foot5.html"
    ],

    "Watches": [
        "watch1.html",
        "watch2.html",
        "watch3.html",
        "watch4.html",
        "watch5.html",
        "watch6.html",
        "watch7.html",
        "watch9.html"
    ],

    "Belts": [
        "belt1.html",
        "belt2.html",
        "belt3.html",
        "belt4.html",
        "belt5.html"
    ],
	
	 "Bags": [
        "bbag1.html",
            "bbag2.html",
            "bbag4.html",
            "bbag9.html",
            "bbag6.html"
    ],

"Bedsheets": [
       "mbed1.html",
            "mbed2.html",
            "mbed3.html",
            "mbed4.html",
            "mbed5.html",
            "mbed6.html" 
    ],


"Blankets": [
        "mbla1.html",
            "mbla2.html",
            "mbla3.html",
            "mbla4.html",
            "mbla5.html",
            "mbla6.html"
    ],

"Eyewear": [
         "eye1.html",
            "eye2.html",
            "eye3.html",
            "eye4.html",
            "eye5.html",
            "eye6.html",
            "eye7.html",
            "eye8.html",
            "eye9.html"
    ],


    "Perfume": [
        "per1.html",
        "per2.html",
        "per3.html",
        "per4.html",
        "per5.html",
        "per6.html",
        "per7.html",
        "per8.html",
        "per9.html"
    ],
	"Towels": [
         "kt1.html",
        "kt2.html",
        "kt3.html",
        "kt4.html",
        "kt5.html",
        "kt6.html",
        "kt7.html",
        "kt8.html",
        "kt9.html"
	 ],

    "Yoga Mat": [
        "mmat1.html",
        "mmat2.html",
        "mmat3.html",
        "mmat4.html",
        "mmat5.html",
        "mmat6.html",
        "mmat7.html",
        "mmat8.html",
        "mmat9.html"
    ],
	"Comb": [
         "comb1.html",
            "comb2.html",
            "comb3.html",
            "comb4.html",
            "comb5.html"
    ]
};

/* =====================================================
   GET PRODUCTS FROM HTML PAGE NAMES
   ===================================================== */

function getMenProducts(categoryName) {

    var pages = MEN_CATEGORIES[categoryName];

    if (!pages || typeof products === "undefined") {
        return [];
    }

    return products.filter(function(product) {

        return pages.includes(product.page);

    });

}


/* =====================================================
   CREATE MEN PRODUCT CARD
   ===================================================== */

function createMenProductCard(product) {

    if (!product) {
        return "";
    }

    var image =
        product.images &&
        product.images.length > 0
            ? product.images[0]
            : "";

    return `
        <div class="naviraProductCard"
             onclick="location.href='${product.page}'">

            <div class="naviraProductImageBox">

                <img
                    src="${image}"
                    alt="${product.name}"
                    class="naviraProductImage"
                >

                <span class="naviraProductDiscount">
                    ${product.discount || ""}
                </span>

            </div>

            <div class="naviraProductInfo">

                <h3>
                    ${product.name}
                </h3>

                <div class="naviraProductRating">
                    ${product.rating || ""}
                </div>

                <div class="naviraProductPrice">

                    <span>
                        ₹${product.price}
                    </span>

                    <del>
                        ₹${product.oldPrice}
                    </del>

                </div>

                <p>
                    ${product.description || ""}
                </p>

            </div>

        </div>
    `;
}


/* =====================================================
   SHOW ONE MEN CATEGORY
   ===================================================== */

function showMenCategory(categoryName) {

    var container =
        document.getElementById("naviraCategoryContent");

    if (!container) {
        return;
    }

    var categoryProducts =
        getMenProducts(categoryName);

    if (categoryProducts.length === 0) {

        container.innerHTML = `
            <div style="text-align:center;padding:40px;">
                <h2>No products found</h2>
            </div>
        `;

        return;
    }

    var output = `
        <section class="naviraProductSection">

            <div class="naviraSectionHeader">

                <h2>
                    ${categoryName}
                </h2>

                <p>
                    ${categoryProducts.length} products
                </p>

            </div>

            <div class="naviraProductGrid">
    `;


    categoryProducts.forEach(function(product) {

        output +=
            createMenProductCard(product);

    });


    output += `
            </div>

        </section>
    `;


    container.innerHTML = output;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   SHOW ALL MEN PRODUCTS
   ===================================================== */

function showAllMenProducts() {

    var container =
        document.getElementById("naviraCategoryContent");

    if (!container) {
        return;
    }

    var output = `
        <section class="naviraProductSection">

            <div class="naviraSectionHeader">

                <h2>
                    Men's Collection
                </h2>

                <p>
                    All Men's Products
                </p>

            </div>

            <div class="naviraProductGrid">
    `;


    Object.keys(MEN_CATEGORIES).forEach(function(categoryName) {

        var categoryProducts =
            getMenProducts(categoryName);


        categoryProducts.forEach(function(product) {

            output +=
                createMenProductCard(product);

        });

    });


    output += `
            </div>

        </section>
    `;


    container.innerHTML = output;

}


/* =====================================================
   MAKE MEN CATEGORY BUTTONS
   ===================================================== */

function createMenCategoryButtons() {

    var container =
        document.getElementById("menSubcategories");

    if (!container) {
        return;
    }

    var output = "";


    Object.keys(MEN_CATEGORIES).forEach(function(categoryName) {

        output += `

            <button
                type="button"
                class="naviraSubcategoryButton"
                onclick="showMenCategory('${categoryName}')">

                <span class="naviraSubcategoryName">
                    ${categoryName}
                </span>

            </button>

        `;

    });


    container.innerHTML = output;

}


/* =====================================================
   INITIALIZE MEN
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createMenCategoryButtons();

        /*
           If you want all men's products
           immediately when Men is opened,
           use this:
        */

        if (
            document.getElementById(
                "naviraCategoryContent"
            )
        ) {

            showAllMenProducts();

        }

    }
);