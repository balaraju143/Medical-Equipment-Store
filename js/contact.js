document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATE
    ========================================= */

    gsap.set(".contact-hero-overlay", {
        opacity: 0
    });


    gsap.set(".contact-hero-label", {
        opacity: 0,
        y: -25
    });


    gsap.set(".contact-hero-content h1", {
        opacity: 0,
        y: 45,
        scale: .92
    });


    gsap.set(".contact-hero-breadcrumb", {
        opacity: 0,
        y: 25
    });


    /* =========================================
       HERO REVEAL
    ========================================= */

    const contactHeroTimeline = gsap.timeline();


    contactHeroTimeline.to(
        ".contact-hero-overlay",
        {
            opacity: 1,

            duration: 1.1,

            ease: "power2.out"
        }
    );


    contactHeroTimeline.to(
        ".contact-hero-label",
        {
            opacity: 1,

            y: 0,

            duration: .7,

            ease: "power3.out"
        },
        "-=.55"
    );


    contactHeroTimeline.to(
        ".contact-hero-content h1",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: 1,

            ease: "power3.out"
        },
        "-=.35"
    );


    contactHeroTimeline.to(
        ".contact-hero-breadcrumb",
        {
            opacity: 1,

            y: 0,

            duration: .7,

            ease: "power3.out"
        },
        "-=.5"
    );

});



document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("stacklyContactForm");

    if (!form) return;


    const nameInput = document.getElementById("contactName");
    const emailInput = document.getElementById("contactEmail");
    const phoneInput = document.getElementById("contactPhone");
    const messageInput = document.getElementById("contactMessage");


    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");


    /* =========================================
       ERROR TIMERS
    ========================================= */

    const errorTimers = {};


    function showError(input, errorElement, message) {

        const group = input.closest(".form-group");

        clearTimeout(errorTimers[input.id]);

        errorElement.textContent = message;

        group.classList.add("invalid");

        group.classList.remove("valid");


        errorTimers[input.id] = setTimeout(() => {

            errorElement.textContent = "";

            group.classList.remove("invalid");

        }, 3000);
    }


    function showValid(input, errorElement) {

        const group = input.closest(".form-group");

        clearTimeout(errorTimers[input.id]);

        errorElement.textContent = "";

        group.classList.remove("invalid");

        group.classList.add("valid");
    }


    /* =========================================
       NAME
       ONLY LETTERS + SPACES
    ========================================= */

    nameInput.addEventListener("input", () => {

        /* Remove numbers and special characters */

        nameInput.value =
            nameInput.value.replace(/[^A-Za-z\s]/g, "");

    });


    /* =========================================
       PHONE
       ONLY NUMBERS
    ========================================= */

    phoneInput.addEventListener("input", () => {

        phoneInput.value =
            phoneInput.value.replace(/\D/g, "");

    });


    /* =========================================
       VALIDATE NAME
    ========================================= */

    function validateName() {

        const name = nameInput.value.trim();

        if (!name) {

            showError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            return false;
        }


        if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name)) {

            showError(
                nameInput,
                nameError,
                "Name can contain letters and spaces only."
            );

            return false;
        }


        if (name.length < 2) {

            showError(
                nameInput,
                nameError,
                "Please enter a valid name."
            );

            return false;
        }


        showValid(nameInput, nameError);

        return true;
    }


    /* =========================================
       VALIDATE EMAIL
    ========================================= */

    function validateEmail() {

        const email = emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


        if (!email) {

            showError(
                emailInput,
                emailError,
                "Please enter your email."
            );

            return false;
        }


        if (!emailPattern.test(email)) {

            showError(
                emailInput,
                emailError,
                "Please enter a valid email address."
            );

            return false;
        }


        showValid(emailInput, emailError);

        return true;
    }


    /* =========================================
       VALIDATE PHONE
    ========================================= */

    function validatePhone() {

        const phone = phoneInput.value.trim();


        if (!phone) {

            showError(
                phoneInput,
                phoneError,
                "Please enter your phone number."
            );

            return false;
        }


        if (!/^[6-9]\d{9}$/.test(phone)) {

            showError(
                phoneInput,
                phoneError,
                "Please enter a valid 10-digit phone number."
            );

            return false;
        }


        showValid(phoneInput, phoneError);

        return true;
    }


    /* =========================================
       VALIDATE MESSAGE
    ========================================= */

    function validateMessage() {

        const message =
            messageInput.value.trim();


        if (!message) {

            showError(
                messageInput,
                messageError,
                "Please enter your message."
            );

            return false;
        }


        if (message.length < 10) {

            showError(
                messageInput,
                messageError,
                "Message must contain at least 10 characters."
            );

            return false;
        }


        showValid(messageInput, messageError);

        return true;
    }


    /* =========================================
       LIVE VALIDATION
    ========================================= */

    nameInput.addEventListener(
        "blur",
        validateName
    );

    emailInput.addEventListener(
        "blur",
        validateEmail
    );

    phoneInput.addEventListener(
        "blur",
        validatePhone
    );

    messageInput.addEventListener(
        "blur",
        validateMessage
    );


    /* =========================================
       SUBMIT
    ========================================= */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        const validName = validateName();
        const validEmail = validateEmail();
        const validPhone = validatePhone();
        const validMessage = validateMessage();


        if (
            !validName ||
            !validEmail ||
            !validPhone ||
            !validMessage
        ) {

            return;
        }


        /*
           Store a flag so the form can be reset
           when the user returns from 404.html.
        */

        sessionStorage.setItem(
            "stacklyContactSubmitted",
            "true"
        );


        window.location.href = "404.html";

    });


    /* =========================================
       RESET FORM WHEN RETURNING
    ========================================= */

    function resetStacklyContactForm() {

        form.reset();


        document
            .querySelectorAll(".form-group")
            .forEach((group) => {

                group.classList.remove(
                    "invalid",
                    "valid"
                );

            });


        document
            .querySelectorAll(".form-error")
            .forEach((error) => {

                error.textContent = "";

            });

    }


    /*
       When browser returns to this page,
       clear everything.
    */

    window.addEventListener("pageshow", () => {

        if (
            sessionStorage.getItem(
                "stacklyContactSubmitted"
            ) === "true"
        ) {

            resetStacklyContactForm();

            sessionStorage.removeItem(
                "stacklyContactSubmitted"
            );
        }

    });

});


/* =========================================
   GSAP CONTACT SECTION REVEAL
========================================= */

gsap.registerPlugin(ScrollTrigger);

gsap.set(".contact-image-wrap", {
    opacity: 0,
    x: -100,
    scale: 1.05
});

gsap.set(".contact-info-card", {
    opacity: 0,
    x: -80,
    y: 40
});

gsap.set(".contact-form-area", {
    opacity: 0,
    x: 100
});


const contactReveal = gsap.timeline({
    scrollTrigger: {
        trigger: ".stackly-contact-section",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});


contactReveal.to(".contact-image-wrap", {
    opacity: 1,
    x: 0,
    scale: 1,
    duration: 1.1,
    ease: "power3.out"
});


contactReveal.to(".contact-info-card", {
    opacity: 1,
    x: 0,
    y: 0,
    duration: 1,
    ease: "back.out(1.2)"
}, "-=.65");


contactReveal.to(".contact-form-area", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power3.out"
}, "-=.75");


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATE
    ========================================= */

    gsap.set(".contact-info-box", {
        opacity: 0,
        y: 70,
        scale: .94
    });


    gsap.set(".contact-info-icon", {
        opacity: 0,
        y: -25,
        scale: .7
    });


    gsap.set(".contact-info-box h3", {
        opacity: 0,
        y: 20
    });


    gsap.set(".contact-info-text", {
        opacity: 0,
        y: 18
    });


    gsap.set(".contact-info-btn", {
        opacity: 0,
        y: 20
    });


    /* =========================================
       MAIN CARD REVEAL
    ========================================= */

    const contactInfoTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: ".stackly-contact-info",

            start: "top 78%",

            toggleActions:
                "play none none none"
        }

    });


    contactInfoTimeline.to(
        ".contact-info-box",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: .9,

            stagger: .18,

            ease: "power3.out"
        }
    );


    /* =========================================
       ICON REVEAL
    ========================================= */

    contactInfoTimeline.to(
        ".contact-info-icon",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: .65,

            stagger: .15,

            ease: "back.out(1.7)"
        },
        "-=.65"
    );


    /* =========================================
       HEADINGS
    ========================================= */

    contactInfoTimeline.to(
        ".contact-info-box h3",
        {
            opacity: 1,

            y: 0,

            duration: .6,

            stagger: .12,

            ease: "power3.out"
        },
        "-=.45"
    );


    /* =========================================
       TEXT
    ========================================= */

    contactInfoTimeline.to(
        ".contact-info-text",
        {
            opacity: 1,

            y: 0,

            duration: .6,

            stagger: .12,

            ease: "power3.out"
        },
        "-=.4"
    );


    /* =========================================
       BUTTONS
    ========================================= */

    contactInfoTimeline.to(
        ".contact-info-btn",
        {
            opacity: 1,

            y: 0,

            duration: .6,

            stagger: .12,

            ease: "power3.out"
        },
        "-=.4"
    );

});


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATE
    ========================================= */

    gsap.set(".office-map-heading", {
        opacity: 0,
        y: 40
    });


    gsap.set(".office-map-wrapper", {
        opacity: 0,
        y: 70,
        scale: .97
    });


    gsap.set(".office-map-card", {
        opacity: 0,
        x: -70,
        y: 30
    });


    /* =========================================
       REVEAL
    ========================================= */

    const mapTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: ".stackly-office-map-section",

            start: "top 78%",

            toggleActions:
                "play none none none"
        }

    });


    mapTimeline.to(
        ".office-map-heading",
        {
            opacity: 1,
            y: 0,
            duration: .8,
            ease: "power3.out"
        }
    );


    mapTimeline.to(
        ".office-map-wrapper",
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out"
        },
        "-=.4"
    );


    mapTimeline.to(
        ".office-map-card",
        {
            opacity: 1,
            x: 0,
            y: 0,
            duration: .8,
            ease: "back.out(1.3)"
        },
        "-=.55"
    );

});


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL REVEAL STATES
    ========================================= */

    gsap.set(".faq-image-wrap", {
        opacity: 0,
        x: -120,
        scale: 1.05
    });


    gsap.set(".faq-image-badge", {
        opacity: 0,
        x: -60,
        y: 30
    });


    gsap.set(".faq-content-area", {
        opacity: 0,
        x: 100
    });


    /* =========================================
       GSAP REVEAL
    ========================================= */

    const faqReveal = gsap.timeline({

        scrollTrigger: {

            trigger: ".stackly-faq-section",

            start: "top 75%",

            toggleActions:
                "play none none none"
        }

    });


    faqReveal.to(
        ".faq-image-wrap",
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out"
        }
    );


    faqReveal.to(
        ".faq-image-badge",
        {
            opacity: 1,
            x: 0,
            y: 0,
            duration: .8,
            ease: "back.out(1.3)"
        },
        "-=.65"
    );


    faqReveal.to(
        ".faq-content-area",
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out"
        },
        "-=.7"
    );


    /* =========================================
       FAQ ACCORDION
    ========================================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach((item) => {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        const icon =
            item.querySelector(".faq-icon");


        question.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");


            /* CLOSE ALL */

            faqItems.forEach((otherItem) => {

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                const otherIcon =
                    otherItem.querySelector(".faq-icon");


                otherItem.classList.remove("active");

                gsap.to(otherAnswer, {
                    height: 0,
                    duration: .35,
                    ease: "power2.out"
                });


                otherIcon.textContent = "add";

            });


            /* OPEN CLICKED */

            if (!isActive) {

                item.classList.add("active");

                icon.textContent = "remove";


                gsap.to(answer, {

                    height: "auto",

                    duration: .45,

                    ease: "power2.out"

                });

            }

        });

    });


    /* =========================================
       OPEN FIRST FAQ ON LOAD
    ========================================= */

    const firstItem =
        document.querySelector(".faq-item.active");

    if (firstItem) {

        const firstAnswer =
            firstItem.querySelector(".faq-answer");

        gsap.set(firstAnswer, {
            height: "auto"
        });

    }

});