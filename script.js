
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            const isOpen = navigation.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", isOpen);

            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

        });

        // Close menu after selecting a page
        const links = navigation.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                navigation.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });

        // Close menu with Escape key
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                navigation.classList.remove("open");

                menuButton.setAttribute("aria-expanded", "false");

            }

        });

    }

    // Automatically update footer year
    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });

});
