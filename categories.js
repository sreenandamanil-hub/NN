/* =========================================================
   NAVIRA - CATEGORIES PAGE
   Complete Categories System
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       STATE
       ===================================================== */

    var state = {
        activeGender: "men",
        filters: {},
        openedSections: {}
    };


    /* =====================================================
       CATEGORY IMAGES
       
       These are CATEGORY images, NOT product images.
       Change filenames later if your actual category-image
       filenames are different.
       ===================================================== */

    var categoryImages = {

        men: "men.jpeg",
        women: "women.jpeg",
        boys: "boys.jpeg",
        girls: "girls.jpeg",
        baby: "baby.jpeg",
        common: "common.jpeg",

        cap: "caps.jpeg",
        blazer: "blazers.jpeg",
        jacket: "jackets.jpeg",
        hoodie: "hoodies.jpeg",
        shirt: "shirts.jpeg",
        tshirt: "tshirts.jpeg",
        pant: "pants.jpeg",
        jeans: "jeans.jpeg",
        shoes: "shoes.jpeg",
        bag: "bags.jpeg",
        watch: "watches.jpeg",
        belt: "belts.jpeg",
        mundu: "mundu.jpeg",
        nightwear: "nightwear.jpeg",
        saree: "sarees.jpeg",
        skirt: "skirts.jpeg",

        beauty: "beauty.jpeg",
        jewellery: "jewellery.jpeg",
        perfume: "perfume.jpeg",

        bedsheet: "bedsheet.jpeg",
        blanket: "blanket.jpeg",
        towel: "towel.jpeg"
    };


    /* =====================================================
       CATEGORY DEFINITIONS
       ===================================================== */

    var CATEGORY_DEFINITIONS = [

        {
            key: "cap",
            title: "Caps",
            sourceCategories: ["cap", "bcap", "gcap"]
        },

        {
            key: "blazer",
            title: "Blazers",
            sourceCategories: [
                "blazer",
                "men blazer",
                "women blazer",
                "wbla"
            ]
        },

        {
            key: "jacket",
            title: "Jackets",
            sourceCategories: [
                "jacket",
                "women jacket"
            ]
        },

        {
            key: "hoodie",
            title: "Hoodies",
            sourceCategories: ["hoodie"]
        },

        {
            key: "shirt",
            title: "Shirts",
            sourceCategories: [
                "shirt",
                "women shirt"
            ]
        },

        {
            key: "tshirt",
            title: "T-Shirts",
            sourceCategories: ["tshirt"]
        },

        {
            key: "pant",
            title: "Pants & Trousers",
            sourceCategories: [
                "pant",
                "women pant",
                "women trousers"
            ]
        },

        {
            key: "jeans",
            title: "Jeans",
            sourceCategories: [
                "women jeans"
            ]
        },

        {
            key: "shoes",
            title: "Shoes & Footwear",
            sourceCategories: [
                "footwear",
                "men shoes",
                "wshoes",
                "wsandle",
                "heel",
                "gf",
                "bba",
                "gba"
            ]
        },

        {
            key: "bag",
            title: "Bags",
            sourceCategories: [
                "bbag",
                "ubag",
                "women bag",
                "gbag",
                "bbag"
            ]
        },

        {
            key: "watch",
            title: "Watches",
            sourceCategories: [
                "watch",
                "bwatch",
                "gwatch"
            ]
        },

        {
            key: "belt",
            title: "Belts",
            sourceCategories: ["belt"]
        },

        {
            key: "mundu",
            title: "Mundu",
            sourceCategories: ["mundu"]
        },

        {
            key: "nightwear",
            title: "Nightwear",
            sourceCategories: [
                "nightwear",
                "wnight"
            ]
        },

        {
            key: "saree",
            title: "Sarees",
            sourceCategories: ["ssaree"]
        },

        {
            key: "skirt",
            title: "Skirts",
            sourceCategories: ["skirt"]
        },

        {
            key: "beauty",
            title: "Beauty",
            sourceCategories: [
                "eyeliner",
                "bush",
                "nail",
                "cream",
                "makeup"
            ]
        },

        {
            key: "jewellery",
            title: "Jewellery",
            sourceCategories: [
                "neck",
                "nring",
                "bangle",
                "ring",
                "earrings",
                "meh"
            ]
        },

        {
            key: "perfume",
            title: "Perfume",
            sourceCategories: ["per"]
        },

        {
            key: "bedsheet",
            title: "Bedsheets",
            sourceCategories: [
                "wbed",
                "mbed",
                "bgbed",
                "bbbed"
            ]
        },

        {
            key: "blanket",
            title: "Blankets",
            sourceCategories: [
                "wbla",
                "mbla",
                "bgbla",
                "bbbla"
            ]
        },

        {
            key: "towel",
            title: "Towels",
            sourceCategories: ["ktowel"]
        },

        {
            key: "haircare",
            title: "Hair Care",
            sourceCategories: [
                "hhair",
                "comb",
                "clip"
            ]
        },

        {
            key: "mirror",
            title: "Mirrors",
            sourceCategories: ["mirror"]
        },

        {
            key: "bindi",
            title: "Bindis",
            sourceCategories: ["bindi"]
        },{
            key: "fsk",
            title: "Full Skirts",
            sourceCategories: ["fsk"]
        },

        {
            key: "eyewear",
            title: "Eyewear",
            sourceCategories: [
                "weye",
                "eye"
            ]
        },

        {
            key: "yoga",
            title: "Yoga & Fitness",
            sourceCategories: [
                "mmat",
                "gyoga",
                "byoga"
            ]
        },

        {
            key: "kurta",
            title: "Kurta",
            sourceCategories: ["kurta"]
        },

        {
            key: "baby",
            title: "Baby",
            sourceCategories: [
                "baby",
                "bbaby",
                "gbaby"
            ]
        }
    ];


    /* =====================================================
       SOURCE CATEGORY -> AUDIENCE
       ===================================================== */

    var commonCategories = [
        "cap",
        "hhair",
        "per",
        "ubag",
        "mmat",
        "ktowel"
    ];


    var womenCategories = [
        "women blazer",
        "women jacket",
        "women coat",
        "women pant",
        "women jeans",
        "women trousers",
        "women shirt",
        "skirt",
        "ssaree",
        "sms",
        "kurta",
        "women bag",
        "wnight",
        "wshoes",
        "wsandle",
        "heel",
        "eyeliner",
        "bush",
        "mirror",
        "clip",
        "nail",
        "hhair",
        "comb",
        "meh",
        "cream",
        "neck",
        "nring",
        "weye",
        "eye",
        "leg",
        "bangle",
        "ring",
        "earrings",
        "makeup",
        "wbed",
        "wbla",
        "bindi"
		
    ];


    var girlsCategories = [
        "gcap",
        "gwatch",
        "gbag",
        "gyoga",
        "gf",
        "gba",
        "gbed",
        "bgbla",
        "gbaby",
		"fsk"
    ];


    var boysCategories = [
        "bcap",
        "bwatch",
        "bba",
        "bbag",
        "byoga",
        "bbbed",
        "bbbla",
        "bbaby"
    ];


    var babyCategories = [
        "baby",
        "gbaby",
        "bbaby",
        "gba"
    ];


    var menCategories = [
        "jacket",
        "hoodie",
        "overcoat",
        "coat",
        "mundu",
        "shirt",
        "tshirt",
        "footwear",
        "blazer",
        "men blazer",
        "men shoes",
        "pant",
        "watch",
        "belt",
        "nightwear",
        "mbed",
        "mbla"
    ];


    /* =====================================================
       TEXT HELPERS
       ===================================================== */

    function normalize(value) {

        return String(value || "")
            .toLowerCase()
            .replace(/&/g, " and ")
            .replace(/[^a-z0-9]+/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }


    function getSourceCategory(product) {

        return normalize(product && product.category);
    }


    function getProductText(product) {

        return normalize(
            [
                product && product.name,
                product && product.description,
                product && product.keywords
            ].join(" ")
        );
    }


    function containsAny(text, words) {

        return words.some(function (word) {

            return text.indexOf(normalize(word)) !== -1;

        });
    }


    /* =====================================================
       AUDIENCE CLASSIFICATION

       IMPORTANT:
       Common / Unisex is separate.
       We do NOT automatically put Unisex products into
       both Men and Women.

       Bindi -> Women
       Hair dryer -> Common
       ===================================================== */

    function getAudience(product) {

        var category = getSourceCategory(product);
        var text = getProductText(product);


        /* ---------- COMMON / UNISEX ---------- */

        if (commonCategories.indexOf(category) !== -1) {

            return "common";
        }


        /* ---------- BINDI -> WOMEN ---------- */

        if (category === "bindi") {

            return "women";
        }
		        if (category === "fsk") {

            return "girls";
        }


        /* ---------- BABY ---------- */

        if (babyCategories.indexOf(category) !== -1) {

            return "baby";
        }


        /* ---------- GIRLS ---------- */

        if (girlsCategories.indexOf(category) !== -1) {

            return "girls";
        }


        /* ---------- BOYS ---------- */

        if (boysCategories.indexOf(category) !== -1) {

            return "boys";
        }


        /* ---------- WOMEN ---------- */

        if (womenCategories.indexOf(category) !== -1) {

            return "women";
        }


        /* ---------- MEN ---------- */

        if (menCategories.indexOf(category) !== -1) {

            return "men";
        }


        /* ---------- TEXT BASED CLASSIFICATION ---------- */

        if (
            /\bgirls?\b/.test(text) ||
            /\bbaby girl\b/.test(text)
        ) {

            return "girls";
        }


        if (
            /\bboys?\b/.test(text) ||
            /\bbaby boy\b/.test(text)
        ) {

            return "boys";
        }


        if (
            /\bwomens?\b/.test(text) ||
            /\bwoman\b/.test(text) ||
            /\bladies\b/.test(text) ||
            /\bfemale\b/.test(text)
        ) {

            return "women";
        }


        if (
            /\bmens?\b/.test(text) ||
            /\bman\b/.test(text) ||
            /\bmale\b/.test(text)
        ) {

            return "men";
        }


        /* Explicit unisex */

        if (/\bunisex\b/.test(text)) {

            return "common";
        }


        /* ---------- SAFE FALLBACK ---------- */

        return "common";
    }


    /* =====================================================
       CATEGORY CLASSIFICATION
       ===================================================== */

    function getCategoryDefinition(key) {

        return CATEGORY_DEFINITIONS.find(function (item) {

            return item.key === key;

        });
    }


    function classifyProduct(product) {

        var category = getSourceCategory(product);


        /*
         * First use the exact source category.
         * This prevents accidental classification from words
         * inside product names/descriptions.
         */

        for (var i = 0; i < CATEGORY_DEFINITIONS.length; i++) {

            var definition = CATEGORY_DEFINITIONS[i];

            if (
                definition.sourceCategories.indexOf(category) !== -1
            ) {

                return definition.key;
            }
        }


        /* Text fallback */

        var text = getProductText(product);


        if (
            text.indexOf("hair dryer") !== -1 ||
            text.indexOf("hair curler") !== -1 ||
            text.indexOf("hair straightener") !== -1
        ) {

            return "haircare";
        }


        if (
            text.indexOf("bedsheet") !== -1 ||
            text.indexOf("bed sheet") !== -1
        ) {

            return "bedsheet";
        }


        if (
            text.indexOf("blanket") !== -1
        ) {

            return "blanket";
        }


        if (
            text.indexOf("towel") !== -1
        ) {

            return "towel";
        }


        if (
            text.indexOf("perfume") !== -1 ||
            text.indexOf("fragrance") !== -1
        ) {

            return "perfume";
        }


        return null;
    }


    /* =====================================================
       PRODUCT HELPERS
       ===================================================== */

    function getProducts() {

        if (
            typeof products === "undefined" ||
            !Array.isArray(products)
        ) {

            return [];
        }

        return products;
    }


    function getProductsForCategory(key) {

        return getProducts().filter(function (product) {

            return classifyProduct(product) === key;

        });
    }


    function getProductsForAudience(gender) {

        return getProducts().filter(function (product) {

            return getAudience(product) === gender;

        });
    }


    function firstImage(product) {

    if (
        product &&
        Array.isArray(product.images) &&
        product.images.length > 0
    ) {
        return product.images[0];
    }

    return "";
}


    function escapeHTML(value) {

        return String(value == null ? "" : value)

            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }


    function rupee(value) {

        return "₹" + escapeHTML(value);
    }


    /* =====================================================
       GET CATEGORIES AVAILABLE FOR AN AUDIENCE
       ===================================================== */

    function getCategoriesForAudience(gender) {

        var result = [];

        CATEGORY_DEFINITIONS.forEach(function (definition) {

            var list = getProductsForCategory(definition.key);

            var hasProducts = list.some(function (product) {

                return getAudience(product) === gender;

            });


            if (hasProducts) {

                result.push({

                    key: definition.key,
                    title: definition.title,
                    products: list
                });
            }
        });


        return result;
    }


    /* =====================================================
       PRODUCT CARD
       ===================================================== */

    function renderProductCards(list) {

        if (!list.length) {

            return `
                <div class="naviraEmpty">
                    No products found.
                </div>
            `;
        }


        return list.map(function (product) {

            var image = firstImage(product);

            var name = escapeHTML(
                product.name || "Product"
            );

            var price = rupee(
                product.price || ""
            );

            var oldPrice = product.oldPrice
                ? `
                    <del class="naviraProductOld">
                        ${rupee(product.oldPrice)}
                    </del>
                  `
                : "";


            var discount = product.discount
                ? `
                    <div class="naviraProductDiscount">
                        ${escapeHTML(product.discount)}
                    </div>
                  `
                : "";


            var rating = product.rating
                ? `
                    <div class="naviraProductRating">
                        ${escapeHTML(product.rating)}
                    </div>
                  `
                : "";


            var description = product.description
                ? `
                    <div class="naviraProductDescription">
                        ${escapeHTML(product.description)}
                    </div>
                  `
                : "";


            var page = escapeHTML(
                product.page || ""
            );


            return `
                <article
                    class="naviraProductCard"
                    onclick="openNaviraProduct('${page}')"
                >

                   <img
    class="naviraProductImage"
    src="${escapeHTML(image)}"
    alt="${name}"
    loading="lazy"
    onerror="this.onerror=null; this.src='${escapeHTML(
        product.images && product.images.length > 1
            ? product.images[1]
            : ""
    )}'"
>

                    <div class="naviraProductName">
                        ${name}
                    </div>

                    <div class="naviraProductPrice">
                        ${price}
                        ${oldPrice}
                    </div>

                    ${discount}

                    ${rating}

                    ${description}

                </article>
            `;

        }).join("");
    }


    /* =====================================================
       FILTER BUTTONS
       ===================================================== */

    function filterButtons(key) {

        var list = getProductsForCategory(key);


        var audiences = [
            "men",
            "women",
            "boys",
            "girls",
            "baby",
            "common"
        ];


        var available = audiences.filter(function (gender) {

            return list.some(function (product) {

                return getAudience(product) === gender;

            });

        });


        var currentFilter =
            state.filters[key] || "all";


        var html = `
            <button
                type="button"
                class="naviraFilterButton ${
                    currentFilter === "all" ? "active" : ""
                }"
                onclick="filterNaviraSection('${key}','all')"
            >
                All
            </button>
        `;


        available.forEach(function (gender) {

            var label =
                gender.charAt(0).toUpperCase() +
                gender.slice(1);


            html += `
                <button
                    type="button"
                    class="naviraFilterButton ${
                        currentFilter === gender
                            ? "active"
                            : ""
                    }"
                    onclick="filterNaviraSection(
                        '${key}',
                        '${gender}'
                    )"
                >
                    ${label}
                </button>
            `;
        });


        return html;
    }


    /* =====================================================
       FILTER PRODUCT LIST
       ===================================================== */

    function getFilteredProducts(key) {

        var list = getProductsForCategory(key);

        var filter =
            state.filters[key] || "all";


        if (filter === "all") {

            return list;
        }


        return list.filter(function (product) {

            return getAudience(product) === filter;

        });
    }


    /* =====================================================
       SUBCATEGORY CIRCLE
       ===================================================== */

    function renderSubcategoryCircle(
        definition,
        gender
    ) {

        var list =
            getProductsForCategory(definition.key);


        var audienceProducts =
            list.filter(function (product) {

                return getAudience(product) === gender;

            });


        if (!audienceProducts.length) {

            return "";
        }


        var imageProduct =
            audienceProducts.find(function (product) {

                return firstImage(product);

            });


        if (!imageProduct) {

            return "";
        }


        var image = firstImage(imageProduct);


        return `
            <button
                type="button"
                class="naviraSubcategoryButton"
                onclick="
                    naviraSelectCategory(
                        '${definition.key}',
                        '${gender}'
                    )
                "
            >

                <img
                    class="naviraSubcategoryImage"
                    src="${escapeHTML(image)}"
                    alt="${escapeHTML(definition.title)}"
                    loading="lazy"
                >

                <span>
                    ${escapeHTML(definition.title)}
                </span>

            </button>
        `;
    }


    /* =====================================================
       GENDER SECTION
       ===================================================== */

    function genderTitle(gender) {

        if (gender === "men") {
            return "Men's Collection";
        }

        if (gender === "women") {
            return "Women's Collection";
        }

        if (gender === "boys") {
            return "Boys' Collection";
        }

        if (gender === "girls") {
            return "Girls' Collection";
        }

        if (gender === "baby") {
            return "Baby Collection";
        }

        if (gender === "common") {
            return "Common / Unisex";
        }

        return "Collection";
    }


    function renderGenderSection(gender) {

        var categories =
            getCategoriesForAudience(gender);


        var html = `

            <section
                class="naviraGenderSection"
                id="gender-${gender}"
            >

                <h2 class="naviraGenderHeading">
                    ${genderTitle(gender)}
                </h2>

                <p class="naviraGenderSubheading">
                    Choose a category below.
                </p>

                <div
                    class="naviraSubcategoryScroller"
                >

                    ${categories.map(function (definition) {

                        return renderSubcategoryCircle(
                            definition,
                            gender
                        );

                    }).join("")}

                </div>

        `;


        /*
         * Product sections are created but HIDDEN.
         * They appear only after the user clicks a category.
         */

        categories.forEach(function (definition) {

            html += renderProductSection(
                definition.key,
                gender,
                true
            );

        });


        html += `
            </section>
        `;


        return html;
    }


    /* =====================================================
       PRODUCT SECTION
       ===================================================== */

    function renderProductSection(
        key,
        gender,
        hidden
    ) {

        var definition =
            getCategoryDefinition(key);


        if (!definition) {

            return "";
        }


        var productsForSection =
            getProductsForCategory(key).filter(function (product) {

                return getAudience(product) === gender;

            });


        if (!productsForSection.length) {

            return "";
        }


        var sectionId =
            gender + "-" + key;


        var display =
            hidden ? "display:none;" : "";


        return `

            <section
                class="naviraProductSection"
                id="${sectionId}"
                data-category="${key}"
                data-gender="${gender}"
                style="${display}"
            >

                <div
                    class="naviraProductSectionTop"
                >

                    <h3>
                        ${escapeHTML(definition.title)}
                    </h3>

                    <div
                        class="naviraFilterRow"
                        id="filters-${gender}-${key}"
                    >
                        ${filterButtons(key)}
                    </div>

                </div>


                <div
                    class="naviraProductGrid"
                    id="products-${gender}-${key}"
                >
                    ${renderProductCards(
                        productsForSection
                    )}
                </div>

            </section>

        `;
    }


    /* =====================================================
       DIRECT CATEGORY SECTION
       ===================================================== */

    function renderDirectCategorySection(key) {

        var definition =
            getCategoryDefinition(key);


        if (!definition) {

            return "";
        }


        var list =
            getProductsForCategory(key);


        if (!list.length) {

            return "";
        }


        var sectionId =
            "direct-" + key;


        return `

            <section
                class="naviraProductSection"
                id="${sectionId}"
                data-direct-category="${key}"
                style="display:none;"
            >

                <div
                    class="naviraProductSectionTop"
                >

                    <h3>
                        ${escapeHTML(definition.title)}
                    </h3>

                    <div
                        class="naviraFilterRow"
                        id="filters-direct-${key}"
                    >
                        ${filterButtons(key)}
                    </div>

                </div>


                <div
                    class="naviraProductGrid"
                    id="products-direct-${key}"
                >
                    ${renderProductCards(list)}
                </div>

            </section>

        `;
    }


    /* =====================================================
       SET MAIN CATEGORY IMAGES
       ===================================================== */

    function setMainCategoryImages() {

        var mapping = {

            mainMenImage: "men",
            mainWomenImage: "women",
            mainBoysImage: "boys",
            mainGirlsImage: "girls",
            mainBabyImage: "baby",
            mainCommonImage: "common"

        };


        Object.keys(mapping).forEach(function (id) {

            var image =
                document.getElementById(id);


            var key =
                mapping[id];


            if (
                image &&
                categoryImages[key]
            ) {

                image.src =
                    categoryImages[key];
            }

        });


        /*
         * Direct category images
         */

        document
            .querySelectorAll(
                "[data-category-image]"
            )
            .forEach(function (image) {

                var key =
                    image.getAttribute(
                        "data-category-image"
                    );


                if (categoryImages[key]) {

                    image.src =
                        categoryImages[key];
                }

            });
    }


    /* =====================================================
       RENDER EVERYTHING
       ===================================================== */

    function renderAll() {

        var container =
            document.getElementById(
                "naviraCategoryContent"
            );


        if (!container) {

            return;
        }


        if (
            typeof products === "undefined" ||
            !Array.isArray(products)
        ) {

            container.innerHTML = `
                <div class="naviraEmpty">
                    Products could not be loaded.
                    Please check products.js.
                </div>
            `;

            return;
        }


        state.filters = {};
        state.openedSections = {};


        var html = "";


        /*
         * AUDIENCE SECTIONS
         */

        html += renderGenderSection("men");

        html += renderGenderSection("women");

        html += renderGenderSection("boys");

        html += renderGenderSection("girls");

        html += renderGenderSection("baby");

        html += renderGenderSection("common");


        /*
         * DIRECT CATEGORY SECTIONS
         *
         * These are hidden initially.
         */

        CATEGORY_DEFINITIONS.forEach(
            function (definition) {

                html += renderDirectCategorySection(
                    definition.key
                );

            }
        );


        container.innerHTML = html;


        setMainCategoryImages();


        /*
         * Make sure no product section is visible
         * after initial loading.
         */

        document
            .querySelectorAll(
                ".naviraProductSection"
            )
            .forEach(function (section) {

                section.style.display = "none";

            });
    }


    /* =====================================================
       SCROLL TO GENDER
       ===================================================== */

    window.scrollToGender = function (gender) {

        state.activeGender = gender;


        /*
         * Remove active state
         */

        document
            .querySelectorAll(
                ".naviraMainCategoryButton"
            )
            .forEach(function (button) {

                button.classList.remove("active");

            });


        /*
         * Find matching main button
         */

        var buttonId = "";


        if (gender === "men") {
            buttonId = "mainMenButton";
        }

        else if (gender === "women") {
            buttonId = "mainWomenButton";
        }

        else if (gender === "boys") {
            buttonId = "mainBoysButton";
        }

        else if (gender === "girls") {
            buttonId = "mainGirlsButton";
        }

        else if (gender === "baby") {
            buttonId = "mainBabyButton";
        }

        else if (gender === "common") {
            buttonId = "mainCommonButton";
        }


        var activeButton =
            document.getElementById(buttonId);


        if (activeButton) {

            activeButton.classList.add("active");
        }


        var target =
            document.getElementById(
                "gender-" + gender
            );


        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });
        }
    };


    /* =====================================================
       SELECT CATEGORY
       
       Called by left-side category buttons.

       Example:
       naviraSelectCategory("cap")
       naviraSelectCategory("blazer")
       ===================================================== */

    window.naviraSelectCategory = function (
        key,
        gender
    ) {

        /*
         * If gender was supplied, use the gender section.
         *
         * Example:
         * naviraSelectCategory("cap","men")
         */

        if (gender) {

            showGenderCategory(
                key,
                gender
            );

            return;
        }


        /*
         * Direct category from left menu.
         */

        var directSection =
            document.getElementById(
                "direct-" + key
            );


        if (!directSection) {

            return;
        }


        /*
         * Hide all product sections.
         */

        document
            .querySelectorAll(
                ".naviraProductSection"
            )
            .forEach(function (section) {

                section.style.display =
                    "none";

            });


        /*
         * Show selected direct category.
         */

        directSection.style.display =
            "block";


        state.openedSections[
            "direct-" + key
        ] = true;


        setTimeout(function () {

            directSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 50);
    };


    /* =====================================================
       SHOW CATEGORY INSIDE GENDER
       ===================================================== */

    function showGenderCategory(
        key,
        gender
    ) {

        /*
         * Hide product sections first.
         */

        document
            .querySelectorAll(
                ".naviraProductSection"
            )
            .forEach(function (section) {

                section.style.display =
                    "none";

            });


        var targetId =
            gender + "-" + key;


        var target =
            document.getElementById(targetId);


        if (!target) {

            /*
             * If this audience does not have
             * that category, use direct category.
             */

            var direct =
                document.getElementById(
                    "direct-" + key
                );


            if (direct) {

                direct.style.display =
                    "block";


                setTimeout(function () {

                    direct.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }, 50);
            }


            return;
        }


        target.style.display =
            "block";


        state.openedSections[targetId] =
            true;


        setTimeout(function () {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }, 50);
    }


    /* =====================================================
       FILTER CATEGORY
       ===================================================== */

    window.filterNaviraSection = function (
        key,
        filter
    ) {

        state.filters[key] =
            filter;


        /*
         * Update audience sections
         */

        [
            "men",
            "women",
            "boys",
            "girls",
            "baby",
            "common"
        ].forEach(function (gender) {

            var grid =
                document.getElementById(
                    "products-" +
                    gender +
                    "-" +
                    key
                );


            var filterBox =
                document.getElementById(
                    "filters-" +
                    gender +
                    "-" +
                    key
                );


            if (grid) {

                var list =
                    getProductsForCategory(
                        key
                    ).filter(function (product) {

                        if (filter === "all") {

                            return (
                                getAudience(product) ===
                                gender
                            );
                        }


                        return (
                            getAudience(product) ===
                            filter
                        );

                    });


                grid.innerHTML =
                    renderProductCards(list);
            }


            if (filterBox) {

                filterBox.innerHTML =
                    filterButtons(key);
            }

        });


        /*
         * Update direct category section
         */

        var directGrid =
            document.getElementById(
                "products-direct-" + key
            );


        var directFilters =
            document.getElementById(
                "filters-direct-" + key
            );


        if (directGrid) {

            var directList =
                getProductsForCategory(key);


            if (filter !== "all") {

                directList =
                    directList.filter(
                        function (product) {

                            return (
                                getAudience(product) ===
                                filter
                            );

                        }
                    );
            }


            directGrid.innerHTML =
                renderProductCards(
                    directList
                );
        }


        if (directFilters) {

            directFilters.innerHTML =
                filterButtons(key);
        }
    };


    /* =====================================================
       OPEN PRODUCT
       ===================================================== */

    window.openNaviraProduct = function (
        page
    ) {

        if (page) {

            window.location.href =
                page;
        }
    };


    /* =====================================================
       TOP BUTTON
       ===================================================== */

    window.scrollToTop = function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });
    };


    /* =====================================================
       INITIALIZE
       ===================================================== */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            renderAll();

        }
    );


})();