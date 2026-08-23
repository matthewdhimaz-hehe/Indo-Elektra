document.addEventListener("DOMContentLoaded", () => {

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".main-navigation");

    const navigationLinks =
        document.querySelectorAll(
            ".main-navigation a"
        );

    const currentYear =
        document.querySelector("#current-year");


    /*
    ================================
    MOBILE NAVIGATION
    ================================
    */

    if (menuToggle && navigation) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navigation.classList.toggle(
                        "active"
                    );


                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );

            }
        );

    }


    /*
    ================================
    CLOSE MENU AFTER CLICK
    ================================
    */

    navigationLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navigation?.classList.remove(
                        "active"
                    );


                    menuToggle?.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


    /*
    ================================
    CURRENT YEAR
    ================================
    */

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});