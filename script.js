document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE NAVIGATION
    ========================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-navigation");
    const navigationLinks = document.querySelectorAll(".main-navigation a");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =========================
       CLOSE MENU AFTER CLICK
    ========================== */

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            if (!navigation || !menuToggle) {
                return;
            }

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* =========================
       CURRENT YEAR
    ========================== */

    const currentYear = document.querySelector("#current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =========================
       CATALOG LINKS
    ========================== */

    const catalogLinks = document.querySelectorAll(
        "[data-catalog]"
    );

    const catalogUrls = {
        k3: "",
        sppg: ""
    };

    catalogLinks.forEach((link) => {

        const catalogType = link.dataset.catalog;

        if (
            catalogType &&
            catalogUrls[catalogType]
        ) {
            link.href = catalogUrls[catalogType];
        }

    });

});