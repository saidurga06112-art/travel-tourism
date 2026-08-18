```javascript
/* ================= MOBILE NAVIGATION ================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {

        const menuButton = document.createElement("button");

        menuButton.className = "menu-btn";
        menuButton.innerHTML = "☰";

        navbar.appendChild(menuButton);

        menuButton.addEventListener("click", function () {

            navLinks.classList.toggle("show");

            if (navLinks.classList.contains("show")) {
                menuButton.innerHTML = "✕";
            } else {
                menuButton.innerHTML = "☰";
            }

        });


        /* Close menu after clicking a link */

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuButton.innerHTML = "☰";

            });

        });

    }


    /* ================= SCROLL EFFECT ================= */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (header) {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        }

    });


    /* ================= SMOOTH SCROLL ================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    /* ================= SCROLL ANIMATION ================= */

    const animatedElements = document.querySelectorAll(
        ".destination-large-card, .package-card, .gallery-item, .section-heading"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {

        element.classList.add("animate");

        observer.observe(element);

    });


    /* ================= BOOKING BUTTONS ================= */

    const bookingButtons = document.querySelectorAll(
        ".book-btn, .primary-btn"
    );

    bookingButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.classList.add("clicked");

            setTimeout(() => {

                this.classList.remove("clicked");

            }, 300);

        });

    });


    /* ================= CURRENT YEAR ================= */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });

});
```
