/* =========================================
   HERO GSAP ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Make sure GSAP exists */

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    gsap.set(".hero-small-title", {
        opacity: 0,
        y: 25
    });


    gsap.set(".hero-title", {
        opacity: 0,
        y: 45
    });


    gsap.set(".hero-description", {
        opacity: 0,
        y: 30
    });


    gsap.set(".hero-button", {
        opacity: 0,
        y: 25
    });


    gsap.set(".customer-area", {
        opacity: 0,
        y: 30
    });


    /* DOCTOR COMES FROM RIGHT */

    gsap.set(".doctor-image", {
        opacity: 0,
        x: 180
    });


    /* CLIENT CARD */

    gsap.set(".happy-client-card", {
        opacity: 0,
        scale: 0.8,
        y: 30
    });


    /* BACKGROUND */

    gsap.set(".hero-shape", {
        opacity: 0
    });


    /* =====================================
       MASTER TIMELINE
    ===================================== */

    const heroTimeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    /* BACKGROUND */

    heroTimeline.to(".hero-shape", {

        opacity: 1,

        duration: 1.2,

        stagger: 0.12

    });


    /* SMALL TITLE */

    heroTimeline.to(".hero-small-title", {

        opacity: 1,
        y: 0,

        duration: 0.6

    }, "-=0.7");


    /* TITLE */

    heroTimeline.to(".hero-title", {

        opacity: 1,
        y: 0,

        duration: 0.9

    }, "-=0.35");


    /* DESCRIPTION */

    heroTimeline.to(".hero-description", {

        opacity: 1,
        y: 0,

        duration: 0.7

    }, "-=0.5");


    /* BUTTON */

    heroTimeline.to(".hero-button", {

        opacity: 1,
        y: 0,

        duration: 0.6

    }, "-=0.35");


    /* CUSTOMER */

    heroTimeline.to(".customer-area", {

        opacity: 1,
        y: 0,

        duration: 0.8

    }, "-=0.25");


    /* =====================================
       DOCTOR FROM RIGHT
    ===================================== */

    heroTimeline.to(".doctor-image", {

        opacity: 1,

        x: 0,

        duration: 1.3,

        ease: "power3.out"

    }, "-=1.0");


    /* =====================================
       HAPPY CLIENT CARD
    ===================================== */

    heroTimeline.to(".happy-client-card", {

        opacity: 1,

        scale: 1,

        y: 0,

        duration: 0.7,

        ease: "back.out(1.5)"

    }, "-=0.7");


    /* =====================================
       AVATAR SMALL REVEAL
    ===================================== */

    gsap.from(".avatar", {

        opacity: 0,

        scale: 0.5,

        y: 20,

        duration: 0.5,

        stagger: 0.1,

        delay: 1.8,

        ease: "back.out(1.7)"

    });

});



/* =========================================
   HEALTH PRIORITY GSAP + COUNTERS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    gsap.set(".priority-heading", {
        opacity: 0,
        x: -80
    });


    gsap.set(".priority-description", {
        opacity: 0,
        x: 80
    });


    gsap.set(".priority-counter", {
        opacity: 0,
        y: 35
    });


    /* =====================================
       COUNTER FUNCTION
    ===================================== */

    function animateCounter(element) {

        const target = parseInt(
            element.getAttribute("data-target"),
            10
        );

        const counterObject = {
            value: 0
        };


        gsap.to(counterObject, {

            value: target,

            duration: 2.2,

            ease: "power2.out",

            onUpdate: function () {

                element.textContent =
                    Math.floor(counterObject.value)
                        .toLocaleString("en-US") + "+";

            },

            onComplete: function () {

                element.textContent =
                    target.toLocaleString("en-US") + "+";

            }

        });

    }


    /* =====================================
       SECTION OBSERVER
    ===================================== */

    const prioritySection =
        document.querySelector(
            ".health-priority-section"
        );


    if (!prioritySection) {
        return;
    }


    let animationStarted = false;


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !animationStarted
                    ) {

                        animationStarted = true;


                        /* =====================
                           CONTENT REVEAL
                        ===================== */

                        const timeline =
                            gsap.timeline({
                                defaults: {
                                    ease: "power3.out"
                                }
                            });


                        /* LEFT */

                        timeline.to(
                            ".priority-heading",
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.9
                            }
                        );


                        /* RIGHT */

                        timeline.to(
                            ".priority-description",
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.9
                            },
                            "-=0.65"
                        );


                        /* COUNTERS */

                        timeline.to(
                            ".priority-counter",
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.7,
                                stagger: 0.15
                            },
                            "-=0.4"
                        );


                        /* =====================
                           START COUNTERS
                        ===================== */

                        setTimeout(() => {

                            const counters =
                                document.querySelectorAll(
                                    ".counter-number"
                                );


                            counters.forEach(
                                (counter) => {

                                    animateCounter(
                                        counter
                                    );

                                }
                            );

                        }, 450);

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    observer.observe(prioritySection);

});


/* =========================================
   MEDICAL OFFERS GSAP ANIMATIONS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    /* First card image - from right */

    gsap.set(".offer-card-1 .offer-image", {
        opacity: 0,
        x: 120
    });


    /* Second card image - from left */

    gsap.set(".offer-card-2 .offer-image", {
        opacity: 0,
        x: -120
    });


    /* Surgical image - from right */

    gsap.set(".offer-card-4 .offer-image", {
        opacity: 0,
        x: 120
    });


    /* Card contents */

    gsap.set(
        ".offer-card .offer-content",
        {
            opacity: 0,
            y: 35
        }
    );


    /* =====================================
       INTERSECTION OBSERVER
    ===================================== */

    const offersSection =
        document.querySelector(
            ".medical-offers-section"
        );


    if (!offersSection) {
        return;
    }


    let started = false;


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !started
                    ) {

                        started = true;


                        /* =================================
                           CONTENT ANIMATION
                        ================================= */

                        gsap.to(
                            ".offer-card .offer-content",
                            {
                                opacity: 1,

                                y: 0,

                                duration: 0.8,

                                stagger: 0.12,

                                ease: "power3.out"
                            }
                        );


                        /* =================================
                           IMAGES FROM DIFFERENT DIRECTIONS
                        ================================= */

                        gsap.to(
                            ".offer-card-1 .offer-image",
                            {
                                opacity: 1,

                                x: 0,

                                duration: 1.1,

                                ease: "power3.out"
                            }
                        );


                        gsap.to(
                            ".offer-card-2 .offer-image",
                            {
                                opacity: 1,

                                x: 0,

                                duration: 1.1,

                                delay: 0.15,

                                ease: "power3.out"
                            }
                        );


                        gsap.to(
                            ".offer-card-4 .offer-image",
                            {
                                opacity: 1,

                                x: 0,

                                duration: 1.1,

                                delay: 0.25,

                                ease: "power3.out"
                            }
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    observer.observe(offersSection);

});



/* =========================================
   MEDICAL ABOUT GSAP ANIMATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    /* Entire left content comes from LEFT */

    gsap.set(".medical-about-content", {
        opacity: 0,
        x: -100
    });


    /* Image comes from RIGHT */

    gsap.set(".medical-about-image", {
        opacity: 0,
        x: 120
    });


    /* Feature items */

    gsap.set(".about-feature", {
        opacity: 0,
        y: 25
    });


    /* =====================================
       SECTION
    ===================================== */

    const aboutSection =
        document.querySelector(
            ".medical-about-section"
        );


    if (!aboutSection) {
        return;
    }


    let animationStarted = false;


    /* =====================================
       INTERSECTION OBSERVER
    ===================================== */

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !animationStarted
                    ) {

                        animationStarted = true;


                        /* =================================
                           MAIN TIMELINE
                        ================================= */

                        const timeline =
                            gsap.timeline({
                                defaults: {
                                    ease: "power3.out"
                                }
                            });


                        /* LEFT CONTENT */

                        timeline.to(
                            ".medical-about-content",
                            {
                                opacity: 1,
                                x: 0,
                                duration: 1
                            }
                        );


                        /* RIGHT IMAGE */

                        timeline.to(
                            ".medical-about-image",
                            {
                                opacity: 1,
                                x: 0,
                                duration: 1.1
                            },
                            "-=0.7"
                        );


                        /* FEATURES */

                        timeline.to(
                            ".about-feature",
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.65,
                                stagger: 0.15
                            },
                            "-=0.5"
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    observer.observe(aboutSection);

});


/* =========================================
   FEATURED PRODUCTS GSAP
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    gsap.set(".featured-products-header", {
        opacity: 0,
        y: 35
    });


    /* First two from LEFT */

    gsap.set(".product-left", {
        opacity: 0,
        x: -100
    });


    /* Last two from RIGHT */

    gsap.set(".product-right", {
        opacity: 0,
        x: 100
    });


    gsap.set(".view-products-btn", {
        opacity: 0,
        y: 25
    });


    /* =====================================
       SECTION
    ===================================== */

    const section =
        document.querySelector(
            ".featured-products-section"
        );

    if (!section) {
        return;
    }


    let started = false;


    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !started
                    ) {

                        started = true;


                        const timeline =
                            gsap.timeline({
                                defaults: {
                                    ease: "power3.out"
                                }
                            });


                        /* HEADER */

                        timeline.to(
                            ".featured-products-header",
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.7
                            }
                        );


                        /* LEFT CARDS */

                        timeline.to(
                            ".product-left",
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.9,
                                stagger: 0.15
                            },
                            "-=0.35"
                        );


                        /* RIGHT CARDS */

                        timeline.to(
                            ".product-right",
                            {
                                opacity: 1,
                                x: 0,
                                duration: 0.9,
                                stagger: 0.15
                            },
                            "-=0.75"
                        );


                        /* VIEW ALL */

                        timeline.to(
                            ".view-products-btn",
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.6
                            },
                            "-=0.35"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    observer.observe(section);

});


/* =========================================
   WHY CHOOSE US - GSAP
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    gsap.set(".why-choose-header", {
        opacity: 0,
        y: 35
    });


    gsap.set(".why-image", {
        opacity: 0,
        scale: 0.35,
        rotation: -180
    });


    gsap.set(".why-content", {
        opacity: 0,
        y: 35
    });


    /* =====================================
       SECTION
    ===================================== */

    const section =
        document.querySelector(
            ".why-choose-section"
        );


    if (!section) {
        return;
    }


    let started = false;


    /* =====================================
       INTERSECTION OBSERVER
    ===================================== */

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !started
                    ) {

                        started = true;


                        /* =================================
                           MAIN TIMELINE
                        ================================= */

                        const timeline =
                            gsap.timeline({
                                defaults: {
                                    ease: "power3.out"
                                }
                            });


                        /* =================================
                           HEADER
                        ================================= */

                        timeline.to(
                            ".why-choose-header",
                            {
                                opacity: 1,

                                y: 0,

                                duration: 0.8
                            }
                        );


                        /* =================================
                           CIRCLES
                           ROTATE + SCALE
                        ================================= */

                        timeline.to(
                            ".why-image",
                            {
                                opacity: 1,

                                scale: 1,

                                rotation: 0,

                                duration: 1.2,

                                stagger: 0.18,

                                ease: "back.out(1.4)"
                            },
                            "-=0.35"
                        );


                        /* =================================
                           CONTENT
                        ================================= */

                        timeline.to(
                            ".why-content",
                            {
                                opacity: 1,

                                y: 0,

                                duration: 0.7,

                                stagger: 0.15,

                                ease: "power3.out"
                            },
                            "-=0.7"
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    observer.observe(section);

});


/* =========================================
   MEDICAL TEAM GSAP
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (typeof gsap === "undefined") {
        return;
    }


    /* =====================================
       INITIAL STATES
    ===================================== */

    gsap.set(".medical-team-header", {

        opacity: 0,

        y: 35
    });


    /*
       Images start above the section
       and fall down into position.
    */

    gsap.set(".doctor-image-wrap", {

        opacity: 0,

        y: -180,

        scale: 0.92,

        rotation: -2
    });


    gsap.set(".doctor-info", {

        opacity: 0,

        y: 25
    });


    /* =====================================
       SECTION
    ===================================== */

    const section =
        document.querySelector(
            ".medical-team-section"
        );


    if (!section) {
        return;
    }


    let started = false;


    /* =====================================
       INTERSECTION OBSERVER
    ===================================== */

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !started
                    ) {

                        started = true;


                        const timeline =
                            gsap.timeline({

                                defaults: {

                                    ease:
                                        "power3.out"
                                }

                            });


                        /* =================================
                           HEADER
                        ================================= */

                        timeline.to(
                            ".medical-team-header",
                            {

                                opacity: 1,

                                y: 0,

                                duration: 0.8

                            }
                        );


                        /* =================================
                           CARDS FALL FROM TOP
                        ================================= */

                        timeline.to(
                            ".doctor-image-wrap",
                            {

                                opacity: 1,

                                y: 0,

                                scale: 1,

                                rotation: 0,

                                duration: 1.05,

                                stagger: 0.16,

                                ease:
                                    "bounce.out"

                            },

                            "-=0.35"
                        );


                        /* =================================
                           DOCTOR INFORMATION
                        ================================= */

                        timeline.to(
                            ".doctor-info",
                            {

                                opacity: 1,

                                y: 0,

                                duration: 0.65,

                                stagger: 0.12

                            },

                            "-=0.65"
                        );

                    }

                });

            },

            {

                threshold: 0.15

            }

        );


    observer.observe(section);

});


// =========================================================
// MOBILE APP GSAP ANIMATION
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        return;
    }


    // -----------------------------------------------------
    // INITIAL STATES
    // -----------------------------------------------------

    gsap.set(".mobile-app-content", {
        opacity: 0,
        x: 100
    });

    gsap.set(".phone-one", {
        opacity: 0,
        x: -180,
        rotation: -18
    });

    gsap.set(".phone-two", {
        opacity: 0,
        y: -180,
        rotation: 18
    });


    // -----------------------------------------------------
    // SECTION OBSERVER
    // -----------------------------------------------------

    const section = document.querySelector(".mobile-app-section");

    if (!section) return;


    let animated = false;


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (
                    entry.isIntersecting &&
                    !animated
                ) {

                    animated = true;


                    // -------------------------------------------------
                    // FIRST PHONE - FROM LEFT
                    // -------------------------------------------------

                    gsap.to(".phone-one", {

                        opacity: 1,

                        x: 0,

                        rotation: -10,

                        duration: 1.25,

                        ease: "power3.out"

                    });


                    // -------------------------------------------------
                    // SECOND PHONE - FROM TOP
                    // -------------------------------------------------

                    gsap.to(".phone-two", {

                        opacity: 1,

                        y: 0,

                        rotation: 9,

                        duration: 1.3,

                        delay: 0.25,

                        ease: "power3.out"

                    });


                    // -------------------------------------------------
                    // RIGHT CONTENT - FROM RIGHT
                    // -------------------------------------------------

                    gsap.to(".mobile-app-content", {

                        opacity: 1,

                        x: 0,

                        duration: 1.15,

                        delay: 0.35,

                        ease: "power3.out"

                    });

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    observer.observe(section);

});

// =========================================================
// LAB VIDEO SECTION - GSAP
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        return;
    }

    const section = document.querySelector(".lab-video-section");

    if (!section) {
        return;
    }


    // =====================================================
    // INITIAL STATES
    // =====================================================

    gsap.set(".lab-main-image", {
        opacity: 0,
        x: -150,
        scale: 1.15
    });

    gsap.set(".lab-small-image", {
        opacity: 0,
        x: -180,
        scale: 1.12
    });

    gsap.set(".lab-blue-block", {
        opacity: 0,
        x: -80,
        scale: 0.8
    });

    gsap.set(".lab-play-btn", {
        opacity: 0,
        scale: 0.2
    });

    gsap.set(".lab-video-content", {
        opacity: 0,
        x: 120
    });


    // =====================================================
    // OBSERVER
    // =====================================================

    let played = false;

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (
                    entry.isIntersecting &&
                    !played
                ) {

                    played = true;


                    // =================================================
                    // BLUE BACKGROUND BLOCK
                    // =================================================

                    gsap.to(".lab-blue-block", {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 0.9,
                        ease: "power3.out"
                    });


                    // =================================================
                    // LARGE IMAGE - LEFT + ZOOM OUT
                    // =================================================

                    gsap.to(".lab-main-image", {

                        opacity: 1,

                        x: 0,

                        scale: 1,

                        duration: 1.25,

                        ease: "power3.out"

                    });


                    // =================================================
                    // SMALL IMAGE - LEFT + ZOOM OUT
                    // =================================================

                    gsap.to(".lab-small-image", {

                        opacity: 1,

                        x: 0,

                        scale: 1,

                        duration: 1.2,

                        delay: 0.25,

                        ease: "power3.out"

                    });


                    // =================================================
                    // PLAY BUTTON
                    // =================================================

                    gsap.to(".lab-play-btn", {

                        opacity: 1,

                        scale: 1,

                        duration: 0.8,

                        delay: 0.65,

                        ease: "back.out(1.7)"

                    });


                    // =================================================
                    // RIGHT CONTENT
                    // =================================================

                    gsap.to(".lab-video-content", {

                        opacity: 1,

                        x: 0,

                        duration: 1.2,

                        delay: 0.25,

                        ease: "power3.out"

                    });

                }

            });

        },
        {
            threshold: 0.2
        }
    );


    observer.observe(section);

});