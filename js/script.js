const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("open");
    mobileMenu.classList.toggle("show");

});


/* Close menu after clicking a page */

const mobileLinks = mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("open");
        mobileMenu.classList.remove("show");

    });

});


/* Close menu when clicking outside */

document.addEventListener("click", (event) => {

    if (
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        menuToggle.classList.remove("open");
        mobileMenu.classList.remove("show");

    }

});


// =========================================================
// STACKLY MEDICAL FOOTER
// NEWSLETTER VALIDATION
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("medicalNewsletterForm");
    const emailInput = document.getElementById("medicalEmail");
    const errorMessage = document.getElementById("medicalEmailError");

    if (!form || !emailInput || !errorMessage) {
        return;
    }


    let errorTimer;


    // =====================================================
    // SHOW ERROR
    // =====================================================

    function showEmailError(message) {

        clearTimeout(errorTimer);

        errorMessage.textContent = message;

        errorMessage.classList.add("show");


        errorTimer = setTimeout(function () {

            errorMessage.classList.remove("show");

        }, 3000);
    }


    // =====================================================
    // REMOVE ERROR WHILE TYPING
    // =====================================================

    emailInput.addEventListener("input", function () {

        errorMessage.classList.remove("show");

        clearTimeout(errorTimer);

    });


    // =====================================================
    // FORM SUBMIT
    // =====================================================

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const email = emailInput.value.trim();


        // EMPTY

        if (email === "") {

            showEmailError(
                "Please enter your email address."
            );

            return;
        }


        // EMAIL VALIDATION

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


        if (!emailPattern.test(email)) {

            showEmailError(
                "Please enter a valid email address."
            );

            return;
        }


        // =================================================
        // VALID EMAIL
        // =================================================

        /*
           Save a flag so the field can be reset
           when the user returns from 404.html.
        */

        sessionStorage.setItem(
            "stacklyNewsletterSubmitted",
            "true"
        );


        // Go to 404 page

        window.location.href = "404.html";

    });


    // =====================================================
    // RESET WHEN RETURNING TO PAGE
    // =====================================================

    function resetNewsletter() {

        emailInput.value = "";

        errorMessage.textContent = "";

        errorMessage.classList.remove("show");

        clearTimeout(errorTimer);

        sessionStorage.removeItem(
            "stacklyNewsletterSubmitted"
        );
    }


    /*
       pageshow fires when coming back using
       browser back button / history.
    */

    window.addEventListener("pageshow", function () {

        resetNewsletter();

    });


    /*
       Also reset if the page is restored from
       browser cache.
    */

    window.addEventListener("beforeunload", function () {

        emailInput.value = "";

    });

});

/* =========================================
   PREMIUM LOADER
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const loader = document.getElementById("premiumPageLoader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("loader-hidden");

    }, 1600);

});