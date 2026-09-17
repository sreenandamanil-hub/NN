/* =========================================
   NAVIRA ONAM COLLECTION
========================================= */

(function () {

    "use strict";


    /* =========================================
       ONAM COLLECTIONS
    ========================================= */

    const onamCollections = [

        {
            key: "ssaree",

            title: "Set Saree",

            subtitle:
                "Kerala traditional Kasavu and festive set sarees",

            categories: [
                "ssaree"
            ]
        },


        {
            key: "sms",

            title: "Shirt & Mundu Sets",

            subtitle:
                "Traditional festive shirt and mundu combinations",

            categories: [
                "sms"
            ]
        },


        {
            key: "fsk",

            title: "Full Skirt",

            subtitle:
                "Traditional festive skirt and blouse sets",

            categories: [
                "fsk"
            ]
        },


        {
            key: "dhavani",

            title: "Dhavani",

            subtitle:
                "Traditional festive Dhavani styles",

            categories: [
                "dhav"
            ]
        }

    ];


    /* =========================================
       ESCAPE HTML
    ========================================= */

    function escapeHTML(value) {

        if (
            value === undefined ||
            value === null
        ) {
            return "";
        }

        return String(value)

            .replace(/&/g, "&amp;")

            .replace(/</g, "&lt;")

            .replace(/>/g, "&gt;")

            .replace(/"/g, "&quot;")

            .replace(/'/g, "&#039;");

    }


    /* =========================================
       FORMAT PRICE
    ========================================= */

    function formatPrice(price) {

        if (
            price === undefined ||
            price === null ||
            price === ""
        ) {
            return "";
        }


        const number = Number(
            String(price).replace(/,/g, "")
        );


        if (Number.isNaN(number)) {

            return String(price);

        }


        return "₹" +
            number.toLocaleString("en-IN");

    }


    /* =========================================
       GET PRODUCTS
    ========================================= */

    function getCollectionProducts(categories) {

        if (
            !Array.isArray(window.products)
        ) {

            return [];

        }


        return window.products.filter(

            function (product) {

                if (!product) {
                    return false;
                }


                const category =
                    String(
                        product.category || ""
                    ).toLowerCase();


                return categories.some(

                    function (wantedCategory) {

                        return category ===
                            String(
                                wantedCategory
                            ).toLowerCase();

                    }

                );

            }

        );

    }


    /* =========================================
       GET PRODUCT IMAGES
    ========================================= */

    function getProductImages(product) {

        if (
            !product ||
            !Array.isArray(product.images)
        ) {

            return [];

        }


        return product.images.filter(

            function (image) {

                return (
                    typeof image === "string" &&
                    image.trim() !== ""
                );

            }

        );

    }


    /* =========================================
       CREATE ONE CARD
       
       IMPORTANT:
       One product image = one card.

       Therefore:
       9 products × 3 images
       = 27 cards.
    ========================================= */

    function createOnamProductCard(
        product,
        image
    ) {

        const card =
            document.createElement("article");


        card.className =
            "onamProductCard";


        /* =====================================
           IMAGE
        ===================================== */

        const imageArea =
            document.createElement("div");


        imageArea.className =
            "onamProductImageArea";


        const productImage =
            document.createElement("img");


        productImage.className =
            "onamProductImage";


        productImage.src =
            image;


        productImage.alt =
            product.name ||
            "Onam Product";


        productImage.loading =
            "lazy";


        imageArea.appendChild(
            productImage
        );


        card.appendChild(
            imageArea
        );


        /* =====================================
           PRODUCT INFORMATION
        ===================================== */

        const info =
            document.createElement("div");


        info.className =
            "onamProductInfo";


        /* NAME */

        const name =
            document.createElement("h3");


        name.className =
            "onamProductName";


        name.textContent =
            product.name ||
            "Product";


        info.appendChild(
            name
        );


        /* =====================================
           PRICE ROW
        ===================================== */

        const priceRow =
            document.createElement("div");


        priceRow.className =
            "onamPriceRow";


        /* PRICE */

        const price =
            document.createElement("span");


        price.className =
            "onamPrice";


        price.textContent =
            formatPrice(
                product.price
            );


        priceRow.appendChild(
            price
        );


        /* OLD PRICE */

        if (
            product.oldPrice !== undefined &&
            product.oldPrice !== null &&
            product.oldPrice !== ""
        ) {

            const oldPrice =
                document.createElement("span");


            oldPrice.className =
                "onamOldPrice";


            oldPrice.textContent =
                formatPrice(
                    product.oldPrice
                );


            priceRow.appendChild(
                oldPrice
            );

        }


        /* DISCOUNT */

        if (product.discount) {

            const discount =
                document.createElement("span");


            discount.className =
                "onamDiscount";


            discount.textContent =
                product.discount;


            priceRow.appendChild(
                discount
            );

        }


        info.appendChild(
            priceRow
        );


        /* =====================================
           RATING
        ===================================== */

        if (product.rating) {

            const rating =
                document.createElement("div");


            rating.className =
                "onamRating";


            rating.textContent =
                product.rating;


            info.appendChild(
                rating
            );

        }


        /* =====================================
           DESCRIPTION
        ===================================== */

        if (product.description) {

            const description =
                document.createElement("p");


            description.className =
                "onamDescription";


            description.textContent =
                product.description;


            info.appendChild(
                description
            );

        }


        /* =====================================
           VIEW PRODUCT
        ===================================== */

        const viewButton =
            document.createElement("a");


        viewButton.className =
            "onamViewProduct";


        viewButton.textContent =
            "View Product";


        if (product.page) {

            viewButton.href =
                product.page;

        } else {

            viewButton.href =
                "#";

        }


        info.appendChild(
            viewButton
        );


        card.appendChild(
            info
        );


        return card;

    }


    /* =========================================
       CREATE COLLECTION
    ========================================= */

    function createCollection(
        collection
    ) {

        const productsForCollection =
            getCollectionProducts(
                collection.categories
            );


        const section =
            document.createElement("section");


        section.className =
            "onamCollection";


        section.id =
            "onam-" +
            collection.key;


        /* =====================================
           HEADER
        ===================================== */

        const header =
            document.createElement("div");


        header.className =
            "onamCollectionHeader";


        const titleBox =
            document.createElement("div");


        const title =
            document.createElement("h2");


        title.textContent =
            collection.title;


        titleBox.appendChild(
            title
        );


        if (collection.subtitle) {

            const subtitle =
                document.createElement("div");


            subtitle.style.fontSize =
                "13px";


            subtitle.style.color =
                "#777";


            subtitle.style.marginTop =
                "4px";


            subtitle.textContent =
                collection.subtitle;


            titleBox.appendChild(
                subtitle
            );

        }


        header.appendChild(
            titleBox
        );


        /* =====================================
           COUNT

           Count = actual products,
           NOT number of images.
        ===================================== */

        const count =
            document.createElement("span");


        count.className =
            "onamCollectionCount";


        count.textContent =
            productsForCollection.length +
            " products";


        header.appendChild(
            count
        );


        section.appendChild(
            header
        );


        /* =====================================
           EMPTY COLLECTION
        ===================================== */

        if (
            !productsForCollection.length
        ) {

            const empty =
                document.createElement("div");


            empty.className =
                "onamEmpty";


            empty.textContent =
                "No products available in this collection.";


            section.appendChild(
                empty
            );


            return section;

        }


        /* =====================================
           PRODUCT GRID
        ===================================== */

        const grid =
            document.createElement("div");


        grid.className =
            "onamProductGrid";


      

        productsForCollection.forEach(

            function (product) {

                const images =
                    getProductImages(
                        product
                    );


                images
                    .slice(0, 3)
                    .forEach(

                        function (image) {

                            const card =
                                createOnamProductCard(
                                    product,
                                    image
                                );


                            grid.appendChild(
                                card
                            );

                        }

                    );

            }

        );


        section.appendChild(
            grid
        );


        return section;

    }


    /* =========================================
       RENDER PAGE
    ========================================= */

    function renderOnamPage() {

        const container =
            document.getElementById(
                "onamContainer"
            );


        if (!container) {

            return;

        }


        container.innerHTML = "";


        /* =====================================
           CHECK PRODUCTS.JS
        ===================================== */

        if (
            !Array.isArray(
                window.products
            )
        ) {

            const error =
                document.createElement("div");


            error.className =
                "onamMessage";


            error.textContent =
                "Products could not be loaded.";


            container.appendChild(
                error
            );


            console.error(
                "Navira Onam: products.js was not loaded."
            );


            return;

        }


        console.log(
            "Navira Onam: products loaded =",
            window.products.length
        );


        /* =====================================
           CREATE COLLECTIONS
        ===================================== */

        onamCollections.forEach(

            function (collection) {

                const section =
                    createCollection(
                        collection
                    );


                container.appendChild(
                    section
                );

            }

        );

    }


    /* =========================================
       START AFTER PRODUCTS.JS
    ========================================= */

    function startOnam() {

        renderOnamPage();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            startOnam
        );

    } else {

        startOnam();

    }

})();