/* =====================================================
   NAVIRA SETTINGS
   ===================================================== */


/* =====================================================
   DEFAULT SETTINGS
   ===================================================== */

const naviraDefaultSettings = {
    notifications: true,
    darkMode: false,
    fontSize: "medium",
    fontStyle: "default",
    theme: "darkblue",
    rating: 0
};


/* =====================================================
   LOAD SAVED SETTINGS
   ===================================================== */

let oldSettings = null;

try {
    oldSettings = JSON.parse(
        localStorage.getItem("naviraSettings") || "null"
    );
} catch (error) {
    oldSettings = null;
}


/* Convert old "blue" theme to new Dark Blue */

if (
    oldSettings &&
    oldSettings.theme === "blue"
) {
    oldSettings.theme = "darkblue";
}


/* Create final settings */

let naviraSettings = {
    ...naviraDefaultSettings,
    ...(oldSettings || {})
};


/* =====================================================
   SAVE SETTINGS
   ===================================================== */

function saveSettings() {

    localStorage.setItem(
        "naviraSettings",
        JSON.stringify(naviraSettings)
    );

}


/* =====================================================
   OPEN SETTINGS
   ===================================================== */

window.openSettings = function() {

    const settings =
        document.getElementById("settingsOverlay");

    if (!settings) {
        alert("Settings not found.");
        return;
    }

    settings.style.display = "flex";

    loadSettings();

};


/* =====================================================
   CLOSE SETTINGS
   ===================================================== */

window.closeSettings = function() {

    const settings =
        document.getElementById("settingsOverlay");

    if (settings) {
        settings.style.display = "none";
    }

};


/* =====================================================
   LOAD SETTINGS
   ===================================================== */

function loadSettings() {

    const fontSize =
        document.getElementById("fontSizeSetting");

    const fontStyle =
        document.getElementById("fontStyleSetting");


    if (fontSize) {
        fontSize.value =
            naviraSettings.fontSize;
    }


    if (fontStyle) {
        fontStyle.value =
            naviraSettings.fontStyle;
    }


    updateSettingButtons();

    applyDarkMode();
    applyFontSize();
    applyFontStyle();
    applyTheme();
    updateRating();

}


/* =====================================================
   NOTIFICATIONS
   ===================================================== */

window.toggleNotifications = function() {

    naviraSettings.notifications =
        !naviraSettings.notifications;

    saveSettings();

    updateSettingButtons();

};


/* =====================================================
   DARK MODE
   ===================================================== */

window.toggleDarkMode = function() {

    naviraSettings.darkMode =
        !naviraSettings.darkMode;

    saveSettings();

    applyDarkMode();

    updateSettingButtons();

};


function applyDarkMode() {

    if (naviraSettings.darkMode) {

        document.body.classList.add(
            "naviraDark"
        );

    } else {

        document.body.classList.remove(
            "naviraDark"
        );

    }


    applyVisualSettings();

}


/* =====================================================
   ON / OFF BUTTONS
   ===================================================== */

function updateSettingButtons() {

    const notificationButton =
        document.getElementById(
            "notificationButton"
        );

    const darkModeButton =
        document.getElementById(
            "darkModeButton"
        );


    if (notificationButton) {

        notificationButton.textContent =
            naviraSettings.notifications
                ? "ON"
                : "OFF";


        notificationButton.classList.toggle(
            "naviraToggleOn",
            naviraSettings.notifications
        );

    }


    if (darkModeButton) {

        darkModeButton.textContent =
            naviraSettings.darkMode
                ? "ON"
                : "OFF";


        darkModeButton.classList.toggle(
            "naviraToggleOn",
            naviraSettings.darkMode
        );

    }

}


/* =====================================================
   FONT SIZE
   ===================================================== */

window.changeFontSize = function() {

    const input =
        document.getElementById(
            "fontSizeSetting"
        );

    if (!input) return;


    naviraSettings.fontSize =
        input.value;

    saveSettings();

    applyFontSize();

};


function applyFontSize() {

    document.body.classList.remove(
        "naviraFontSmall",
        "naviraFontMedium",
        "naviraFontLarge"
    );


    if (
        naviraSettings.fontSize === "small"
    ) {

        document.body.classList.add(
            "naviraFontSmall"
        );

        document.body.style.zoom =
            "0.90";

    }


    else if (
        naviraSettings.fontSize === "large"
    ) {

        document.body.classList.add(
            "naviraFontLarge"
        );

        document.body.style.zoom =
            "1.10";

    }


    else {

        document.body.classList.add(
            "naviraFontMedium"
        );

        document.body.style.zoom =
            "1";

    }


    applyVisualSettings();

}


/* =====================================================
   FONT STYLE
   ===================================================== */

window.changeFontStyle = function() {

    const input =
        document.getElementById(
            "fontStyleSetting"
        );

    if (!input) return;


    naviraSettings.fontStyle =
        input.value;

    saveSettings();

    applyFontStyle();

};


function applyFontStyle() {

    document.body.classList.remove(
        "naviraDefaultFont",
        "naviraSerifFont",
        "naviraMonoFont",
        "naviraVerdanaFont",
        "naviraTrebuchetFont"
    );


    if (
        naviraSettings.fontStyle === "serif"
    ) {

        document.body.classList.add(
            "naviraSerifFont"
        );

    }


    else if (
        naviraSettings.fontStyle === "mono"
    ) {

        document.body.classList.add(
            "naviraMonoFont"
        );

    }


    else if (
        naviraSettings.fontStyle === "verdana"
    ) {

        document.body.classList.add(
            "naviraVerdanaFont"
        );

    }


    else if (
        naviraSettings.fontStyle === "trebuchet"
    ) {

        document.body.classList.add(
            "naviraTrebuchetFont"
        );

    }


    else {

        document.body.classList.add(
            "naviraDefaultFont"
        );

    }


    applyVisualSettings();

}


/* =====================================================
   THEME
   ===================================================== */

window.changeTheme = function(theme) {

    const allowedThemes = [
        "darkblue",
        "pink",
        "green",
        "purple",
        "orange",
        "red",
        "lightblue"
    ];


    if (
        !allowedThemes.includes(theme)
    ) {
        theme = "darkblue";
    }


    naviraSettings.theme =
        theme;

    saveSettings();

    applyTheme();

};


/* =====================================================
   RESET THEME
   ===================================================== */

window.resetTheme = function() {

    naviraSettings.theme =
        "darkblue";

    saveSettings();

    applyTheme();

};


/* =====================================================
   APPLY THEME
   ===================================================== */

function applyTheme() {

    const themeClasses = [
        "naviraThemeDarkBlue",
        "naviraThemePink",
        "naviraThemeGreen",
        "naviraThemePurple",
        "naviraThemeOrange",
        "naviraThemeRed",
        "naviraThemeLightBlue"
    ];

    document.body.classList.remove(
        ...themeClasses
    );


    /* DEFAULT = DARK BLUE */

    if (naviraSettings.theme === "pink") {

        document.body.classList.add(
            "naviraThemePink"
        );

    }

    else if (naviraSettings.theme === "green") {

        document.body.classList.add(
            "naviraThemeGreen"
        );

    }

    else if (naviraSettings.theme === "purple") {

        document.body.classList.add(
            "naviraThemePurple"
        );

    }

    else if (naviraSettings.theme === "orange") {

        document.body.classList.add(
            "naviraThemeOrange"
        );

    }

    else if (naviraSettings.theme === "red") {

        document.body.classList.add(
            "naviraThemeRed"
        );

    }

    else if (naviraSettings.theme === "lightblue") {

        document.body.classList.add(
            "naviraThemeLightBlue"
        );

    }

    else {

        naviraSettings.theme =
            "darkblue";

        document.body.classList.add(
            "naviraThemeDarkBlue"
        );
    }


    /* Show selected colour */

    updateSelectedTheme();


    /* Apply actual colours */

    applyVisualSettings();
}
function updateSelectedTheme() {

    const buttons =
        document.querySelectorAll(
            ".naviraThemeButton"
        );


    buttons.forEach(function(button) {

        button.classList.remove(
            "naviraSelectedTheme"
        );

    });


    const selected =
        document.querySelector(
            ".naviraThemeButton[data-theme='" +
            naviraSettings.theme +
            "']"
        );


    if (selected) {

        selected.classList.add(
            "naviraSelectedTheme"
        );

    }
}


/* =====================================================
   RATING
   ===================================================== */

window.submitRating = function(number) {

    if (number < 1) {
        number = 1;
    }

    if (number > 5) {
        number = 5;
    }


    naviraSettings.rating =
        number;

    saveSettings();

    updateRating();

};


function updateRating() {

    const stars =
        document.querySelectorAll(
            ".naviraRatingStars button"
        );


    stars.forEach(
        function(star, index) {

            star.classList.toggle(
                "naviraRated",
                index < naviraSettings.rating
            );

        }
    );


    const message =
        document.getElementById(
            "ratingMessage"
        );


    if (message) {

        if (
            naviraSettings.rating > 0
        ) {

            message.textContent =
                "You rated Navira " +
                naviraSettings.rating +
                "/5 ⭐";

        }

        else {

            message.textContent = "";

        }

    }

}
/* =====================================================
   VISUAL SETTINGS
   ===================================================== */

function applyVisualSettings() {

    /*
       DARK BLUE IS THE DEFAULT.

       This is deliberately blue, NOT almost black.
    */

    let themeColor =
        "#9BBBDD";

    let themeDark =
        "#2F5D8C";


    /* ================= PINK ================= */

    if (
        naviraSettings.theme === "pink"
    ) {

        themeColor =
            "#F3B7D2";

        themeDark =
            "#D65F91";

    }


    /* ================= GREEN ================= */

    else if (
        naviraSettings.theme === "green"
    ) {

        themeColor =
            "#B8DFC1";

        themeDark =
            "#4F9961";

    }


    /* ================= PURPLE ================= */

    else if (
        naviraSettings.theme === "purple"
    ) {

        themeColor =
            "#D2BCEB";

        themeDark =
            "#8755B5";

    }


    /* ================= ORANGE ================= */

    else if (
        naviraSettings.theme === "orange"
    ) {

        themeColor =
            "#F1CCA0";

        themeDark =
            "#D17F27";

    }


    /* ================= RED ================= */

    else if (
        naviraSettings.theme === "red"
    ) {

        themeColor =
            "#F0B4B4";

        themeDark =
            "#C84646";

    }


    /* ================= LIGHT BLUE ================= */

    else if (
        naviraSettings.theme === "lightblue"
    ) {

        themeColor =
            "#B9E6F2";

        themeDark =
            "#3D9FBA";

    }


    /* ================= DARK BLUE ================= */

    else {

        themeColor =
            "#9BBBDD";

        themeDark =
            "#2F5D8C";

    }


    document.documentElement.style.setProperty(
        "--navira-theme-color",
        themeColor
    );


    document.documentElement.style.setProperty(
        "--navira-theme-dark",
        themeDark
    );


    /* =================================================
       DYNAMIC CSS
       ================================================= */

    let style =
        document.getElementById(
            "naviraDynamicSettingsCSS"
        );


    if (!style) {

        style =
            document.createElement("style");

        style.id =
            "naviraDynamicSettingsCSS";

        document.head.appendChild(style);

    }


    style.textContent = `

        /* =================================================
           FONT STYLES
           ================================================= */

        body.naviraDefaultFont,
        body.naviraDefaultFont * {
            font-family:
                Arial,
                sans-serif !important;
        }


        body.naviraSerifFont,
        body.naviraSerifFont * {
            font-family:
                Georgia,
                "Times New Roman",
                serif !important;
        }


        body.naviraMonoFont,
        body.naviraMonoFont * {
            font-family:
                "Courier New",
                monospace !important;
        }


        body.naviraVerdanaFont,
        body.naviraVerdanaFont * {
            font-family:
                Verdana,
                Geneva,
                sans-serif !important;
        }


        body.naviraTrebuchetFont,
        body.naviraTrebuchetFont * {
            font-family:
                "Trebuchet MS",
                Arial,
                sans-serif !important;
        }


        /* =================================================
           HOME SEARCH BORDER
           ================================================= */

        body.naviraThemeDarkBlue .homeSearch,
        body.naviraThemePink .homeSearch,
        body.naviraThemeGreen .homeSearch,
        body.naviraThemePurple .homeSearch,
        body.naviraThemeOrange .homeSearch,
        body.naviraThemeRed .homeSearch,
        body.naviraThemeLightBlue .homeSearch {

            border-color:
                var(--navira-theme-dark) !important;

        }


        /* =================================================
           ACCOUNT / ORDER / PRODUCT BORDERS
           ================================================= */

        body.naviraThemeDarkBlue .accountBox,
        body.naviraThemeDarkBlue .orderBox,
        body.naviraThemeDarkBlue .card,

        body.naviraThemePink .accountBox,
        body.naviraThemePink .orderBox,
        body.naviraThemePink .card,

        body.naviraThemeGreen .accountBox,
        body.naviraThemeGreen .orderBox,
        body.naviraThemeGreen .card,

        body.naviraThemePurple .accountBox,
        body.naviraThemePurple .orderBox,
        body.naviraThemePurple .card,

        body.naviraThemeOrange .accountBox,
        body.naviraThemeOrange .orderBox,
        body.naviraThemeOrange .card,

        body.naviraThemeRed .accountBox,
        body.naviraThemeRed .orderBox,
        body.naviraThemeRed .card,

        body.naviraThemeLightBlue .accountBox,
        body.naviraThemeLightBlue .orderBox,
        body.naviraThemeLightBlue .card {

            border-color:
                var(--navira-theme-dark) !important;

        }


        /* =================================================
           INPUT BORDERS
           ================================================= */

        body.naviraThemeDarkBlue input,
        body.naviraThemeDarkBlue select,
        body.naviraThemeDarkBlue textarea,

        body.naviraThemePink input,
        body.naviraThemePink select,
        body.naviraThemePink textarea,

        body.naviraThemeGreen input,
        body.naviraThemeGreen select,
        body.naviraThemeGreen textarea,

        body.naviraThemePurple input,
        body.naviraThemePurple select,
        body.naviraThemePurple textarea,

        body.naviraThemeOrange input,
        body.naviraThemeOrange select,
        body.naviraThemeOrange textarea,

        body.naviraThemeRed input,
        body.naviraThemeRed select,
        body.naviraThemeRed textarea,

        body.naviraThemeLightBlue input,
        body.naviraThemeLightBlue select,
        body.naviraThemeLightBlue textarea {

            border-color:
                var(--navira-theme-dark) !important;

        }


        /* =================================================
           SETTINGS BOX
           ================================================= */

        .naviraSettingsBox {

            border-top:
                4px solid
                var(--navira-theme-dark) !important;

        }


        /* =================================================
           SETTINGS LINES
           ================================================= */

        body.naviraThemeDarkBlue
        .naviraSettingRow,

        body.naviraThemeDarkBlue
        .naviraThemeSection,

        body.naviraThemePink
        .naviraSettingRow,

        body.naviraThemePink
        .naviraThemeSection,

        body.naviraThemeGreen
        .naviraSettingRow,

        body.naviraThemeGreen
        .naviraThemeSection,

        body.naviraThemePurple
        .naviraSettingRow,

        body.naviraThemePurple
        .naviraThemeSection,

        body.naviraThemeOrange
        .naviraSettingRow,

        body.naviraThemeOrange
        .naviraThemeSection,

        body.naviraThemeRed
        .naviraSettingRow,

        body.naviraThemeRed
        .naviraThemeSection,

        body.naviraThemeLightBlue
        .naviraSettingRow,

        body.naviraThemeLightBlue
        .naviraThemeSection {

            border-color:
                var(--navira-theme-color) !important;

        }


        /* =================================================
           THEME BUTTON SELECTED BORDER
           ================================================= */

        .naviraThemeButton {

            cursor: pointer !important;

        }


        /* =================================================
           DARK MODE
           ================================================= */

        body.naviraDark {

            background:
                #181818 !important;

            color:
                #eeeeee !important;

        }


        body.naviraDark
        .naviraSettingsBox {

            background:
                #252525 !important;

            color:
                #eeeeee !important;

        }


        body.naviraDark
        .naviraSettingRow,

        body.naviraDark
        .naviraThemeSection {

            border-color:
                #444444 !important;

        }


        body.naviraDark input,

        body.naviraDark select,

        body.naviraDark textarea {

            background:
                #333333 !important;

            color:
                #ffffff !important;

            border-color:
                #555555 !important;

        }

    `;

}


/* =====================================================
   INITIALIZE
   ===================================================== */

function initializeNaviraSettings() {

    applyDarkMode();

    applyFontSize();

    applyFontStyle();

    applyTheme();

    updateSettingButtons();

    updateRating();

}


if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeNaviraSettings
    );

} else {

    initializeNaviraSettings();

}