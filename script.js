// ============================================================
// AUTOMATIC COPYRIGHT YEAR
// ============================================================

const year = document.getElementById("year");

const currentYear = new Date().getFullYear();

year.textContent = currentYear;


// ============================================================
// MOBILE NAVIGATION MENU
// ============================================================

const menuButton = document.getElementById("menu-button");

const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ============================================================
// DARK / LIGHT MODE
// ============================================================

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "Dark Mode";

    }

    else {

        themeButton.textContent = "Light Mode";

    }

});


// ============================================================
// PROJECT FILTERING
// ============================================================

const filterButtons = document.querySelectorAll(".filter-button");

const projectCards = document.querySelectorAll(
    ".project-container .project-card"
);

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.dataset.filter;

        filterButtons.forEach(function (button) {

            button.classList.remove("active");

        });

        button.classList.add("active");

        projectCards.forEach(function (card) {

            const language = card.dataset.language;

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (language === filter) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});


// ============================================================
// SCROLL / REVEAL ANIMATIONS
// ============================================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);

sections.forEach(function (section) {

    observer.observe(section);

});


// ============================================================
// CONTACT FORM VALIDATION
// ============================================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            event.preventDefault();

            alert("Please fill out all fields.");

        }

    });

}