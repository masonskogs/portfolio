// ============================================================
// 1. AUTOMATIC COPYRIGHT YEAR
// ============================================================

// Find the HTML element with the ID "year"
const year = document.getElementById("year");

// Get the current year from the computer's date
const currentYear = new Date().getFullYear();

// Put the year inside the HTML element
year.textContent = currentYear;


// ============================================================
// 2. MOBILE NAVIGATION MENU
// ============================================================

// Find the menu button
const menuButton = document.getElementById("menu-button");

// Find the navigation menu
const navMenu = document.getElementById("nav-menu");


// When the menu button is clicked...
menuButton.addEventListener("click", function () {

    // Add "active" if it isn't there.
    // Remove "active" if it is already there.
    navMenu.classList.toggle("active");

});


// Find all navigation links
const navLinks = document.querySelectorAll("#nav-menu a");


// Add a click event to every navigation link
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Close the mobile menu after selecting a page section
        navMenu.classList.remove("active");

    });

});


// ============================================================
// 3. DARK / LIGHT MODE
// ============================================================

// Find the theme button
const themeButton = document.getElementById("theme-button");


// When the theme button is clicked...
themeButton.addEventListener("click", function () {

    // Add or remove the light-mode class
    document.body.classList.toggle("light-mode");


    // Check if light mode is currently active
    if (document.body.classList.contains("light-mode")) {

        // Change the button's text
        themeButton.textContent = "Dark Mode";

    }

    else {

        // Change the button's text back
        themeButton.textContent = "Light Mode";

    }

});


// ============================================================
// 4. PROJECT FILTERING
// ============================================================

// Find every project filter button
const filterButtons = document.querySelectorAll(".filter-button");


// Find every project card in the All Projects section
const projectCards = document.querySelectorAll(
    ".project-container .project-card"
);


// Give every filter button a click event
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get the filter value from the button
        //
        // Example:
        // data-filter="python"
        //
        // becomes:
        // "python"

        const filter = button.dataset.filter;


        // Remove "active" from every button
        filterButtons.forEach(function (button) {

            button.classList.remove("active");

        });


        // Add "active" to the button that was clicked
        button.classList.add("active");


        // Check every project
        projectCards.forEach(function (card) {

            // Get the project's language
            const language = card.dataset.language;


            // If the user selected "All"
            if (filter === "all") {

                // Show the project
                card.style.display = "block";

            }


            // If the project matches the selected language
            else if (language === filter) {

                // Show the project
                card.style.display = "block";

            }


            // If it doesn't match
            else {

                // Hide the project
                card.style.display = "none";

            }

        });

    });

});


// ============================================================
// 5. SCROLL / REVEAL ANIMATIONS
// ============================================================

// Find every section
const sections = document.querySelectorAll("section");


// Create an Intersection Observer
//
// The browser will tell us when an element
// enters the visible part of the screen.

const observer = new IntersectionObserver(

    function (entries) {

        // Look at every section being observed
        entries.forEach(function (entry) {

            // Check if the section is visible
            if (entry.isIntersecting) {

                // Add the "visible" class
                entry.target.classList.add("visible");

            }

        });

    },

    {
        // The animation starts when 15%
        // of the section is visible.
        threshold: 0.15
    }

);


// Tell the observer to watch every section
sections.forEach(function (section) {

    observer.observe(section);

});


// ============================================================
// 6. CONTACT FORM VALIDATION
// ============================================================

// Find the contact form
const contactForm = document.getElementById("contact-form");


// Make sure the form exists before adding an event
if (contactForm) {

    // Run this code when the form is submitted
    contactForm.addEventListener("submit", function (event) {

        // Prevent the browser from actually submitting
        // the form because we don't have a backend yet.
        event.preventDefault();


        // Get the user's name
        //
        // trim() removes unnecessary spaces
        // from the beginning and end.

        const name =
            document.getElementById("name").value.trim();


        // Get the user's email
        const email =
            document.getElementById("email").value.trim();


        // Get the user's message
        const message =
            document.getElementById("message").value.trim();


        // Check whether a field is empty
        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert("Please fill out all fields.");

            return;

        }


        // Simple email validation
        if (!email.includes("@")) {

            alert("Please enter a valid email address.");

            return;

        }


        // Everything passed our basic checks
        alert(
            "Thank you! Your message has been submitted."
        );

    });

}