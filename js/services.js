/* =========================================================
   STACKLY SERVICES HERO GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* INITIAL STATES */

    gsap.set(".stackly-services-hero-overlay", {
        opacity: 0
    });

    gsap.set(".stackly-services-hero-content h1", {
        opacity: 0,
        y: 55,
        scale: .92
    });

    gsap.set(".stackly-services-breadcrumb", {
        opacity: 0,
        y: 30
    });


    /* TIMELINE */

    const servicesHeroTimeline = gsap.timeline();


    /* OVERLAY */

    servicesHeroTimeline.to(
        ".stackly-services-hero-overlay",
        {
            opacity: 1,
            duration: 1.1,
            ease: "power2.out"
        }
    );


    /* TITLE */

    servicesHeroTimeline.to(
        ".stackly-services-hero-content h1",
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out"
        },
        "-=.65"
    );


    /* BREADCRUMB */

    servicesHeroTimeline.to(
        ".stackly-services-breadcrumb",
        {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power3.out"
        },
        "-=.45"
    );

});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    gsap.set(".gsap-left", {
        opacity: 0,
        x: -80
    });

    gsap.set(".gsap-right", {
        opacity: 0,
        x: 100
    });

    gsap.set(".gsap-card-left", {
        opacity: 0,
        x: -100,
        y: 50,
        scale: 0.94
    });

    gsap.set(".gsap-card-right", {
        opacity: 0,
        x: 100,
        y: 50,
        scale: 0.94
    });


    /* =========================================
       MAIN SECTION ANIMATION
    ========================================= */

    const serviceTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".service-industries",
            start: "top 75%",
            toggleActions: "play none none none"
        }
    });


    /* LEFT HEADING */

    serviceTimeline.to(".gsap-left", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
    });


    /* RIGHT DESCRIPTION */

    serviceTimeline.to(".gsap-right", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.65");


    /* =========================================
       CARDS LEFT / RIGHT REVEAL
    ========================================= */

    serviceTimeline.to(".gsap-card-left", {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18
    }, "-=0.45");


    serviceTimeline.to(".gsap-card-right", {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18
    }, "<0.12");


    /* =========================================
       EXTRA IMAGE REVEAL
    ========================================= */

    gsap.utils.toArray(".industry-image img").forEach((image) => {

        gsap.fromTo(
            image,
            {
                scale: 1.12
            },
            {
                scale: 1,
                duration: 1.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: image,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );

    });


});


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    gsap.set(".gsap-service-label", {
        opacity: 0,
        y: -25
    });


    gsap.set(".gsap-service-title", {
        opacity: 0,
        y: 35,
        scale: .96
    });


    gsap.set(".gsap-service-intro", {
        opacity: 0,
        y: 25
    });


    /* LEFT CARDS */

    gsap.set(".service-card-left", {
        opacity: 0,
        x: -110,
        y: 45,
        scale: .94
    });


    /* RIGHT CARDS */

    gsap.set(".service-card-right", {
        opacity: 0,
        x: 110,
        y: 45,
        scale: .94
    });


    /* =========================================
       MAIN TIMELINE
    ========================================= */

    const featuredTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-featured-services",

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* LABEL */

    featuredTimeline.to(".gsap-service-label", {

        opacity: 1,

        y: 0,

        duration: .7,

        ease: "power3.out"

    });


    /* TITLE */

    featuredTimeline.to(".gsap-service-title", {

        opacity: 1,

        y: 0,

        scale: 1,

        duration: .9,

        ease: "power3.out"

    }, "-=.35");


    /* DESCRIPTION */

    featuredTimeline.to(".gsap-service-intro", {

        opacity: 1,

        y: 0,

        duration: .75,

        ease: "power3.out"

    }, "-=.5");


    /* =========================================
       LEFT CARDS
    ========================================= */

    featuredTimeline.to(".service-card-left", {

        opacity: 1,

        x: 0,

        y: 0,

        scale: 1,

        duration: 1,

        stagger: .16,

        ease: "power3.out"

    }, "-=.35");


    /* =========================================
       RIGHT CARDS
    ========================================= */

    featuredTimeline.to(".service-card-right", {

        opacity: 1,

        x: 0,

        y: 0,

        scale: 1,

        duration: 1,

        stagger: .16,

        ease: "power3.out"

    }, "<");


    /* =========================================
       ICON REVEAL
    ========================================= */

    gsap.utils.toArray(".service-icon-box").forEach((icon) => {

        gsap.fromTo(
            icon,
            {
                opacity: 0,
                scale: .5,
                rotation: -20
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,

                duration: .8,

                ease: "back.out(1.7)",

                scrollTrigger: {
                    trigger: icon,
                    start: "top 88%",
                    toggleActions:
                        "play none none none"
                }
            }
        );

    });


});


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL GSAP STATES
    ========================================= */

    gsap.set(".gsap-specialty-heading", {
        opacity: 0,
        x: -80
    });


    gsap.set(".gsap-specialty-slider", {
        opacity: 0,
        x: -90
    });


    gsap.set(".gsap-specialty-right", {
        opacity: 0,
        x: 120,
        scale: .96
    });


    gsap.set(".specialty-review", {
        opacity: 0,
        y: 30,
        scale: .9
    });


    /* =========================================
       MAIN REVEAL
    ========================================= */

    const specialtyTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-specialty-section",

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* LEFT HEADING */

    specialtyTimeline.to(
        ".gsap-specialty-heading",
        {
            opacity: 1,
            x: 0,

            duration: 1,

            ease: "power3.out"
        }
    );


    /* LEFT SLIDER */

    specialtyTimeline.to(
        ".gsap-specialty-slider",
        {
            opacity: 1,
            x: 0,

            duration: 1,

            ease: "power3.out"
        },
        "-=.55"
    );


    /* RIGHT IMAGE */

    specialtyTimeline.to(
        ".gsap-specialty-right",
        {
            opacity: 1,
            x: 0,
            scale: 1,

            duration: 1.15,

            ease: "power3.out"
        },
        "-=.55"
    );


    /* REVIEW BOX */

    specialtyTimeline.to(
        ".specialty-review",
        {
            opacity: 1,
            y: 0,
            scale: 1,

            duration: .7,

            ease: "back.out(1.5)"
        },
        "-=.45"
    );


    /* =========================================
       AUTOMATIC IMAGE SLIDER
       
       3 TOTAL IMAGES
       SHOW 2 AT A TIME
    ========================================= */

    const slider = document.querySelector(".specialty-slider");

    const slides = document.querySelectorAll(".specialty-slide");

    let currentSlide = 0;

    let autoSlide;


    function getSlideDistance() {

        const slideWidth =
            slides[0].offsetWidth;

        const gap =
            parseFloat(
                getComputedStyle(slider).gap
            );

        return slideWidth + gap;

    }


    function moveSlider() {

        currentSlide++;

        /*
         * With 3 images and 2 visible,
         * only one movement is required.
         */

        if (currentSlide > slides.length - 2) {

            currentSlide = 0;

        }


        gsap.to(slider, {

            x: -(
                currentSlide *
                getSlideDistance()
            ),

            duration: 1,

            ease: "power2.inOut"

        });

    }


    function startSlider() {

        clearInterval(autoSlide);

        autoSlide = setInterval(
            moveSlider,
            3500
        );

    }


    /* Start after page is ready */

    setTimeout(() => {

        startSlider();

    }, 1500);


    /* Recalculate on resize */

    window.addEventListener(
        "resize",
        () => {

            currentSlide = 0;

            gsap.set(slider, {
                x: 0
            });

        }
    );


    /* =========================================
       EXTRA IMAGE REVEAL
    ========================================= */

    gsap.fromTo(
        ".specialty-slide img",
        {
            scale: 1.12
        },
        {
            scale: 1,

            duration: 1.2,

            stagger: .12,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".specialty-slider-wrapper",

                start: "top 82%",

                toggleActions:
                    "play none none none"
            }

        }
    );


});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    // LEFT IMAGE
    gsap.set(".team-photo-left", {
        opacity: 0,
        x: -140,
        scale: .92
    });


    // TOP IMAGE
    gsap.set(".team-photo-top", {
        opacity: 0,
        y: -160,
        scale: .92
    });


    // RIGHT IMAGE
    gsap.set(".team-photo-right", {
        opacity: 0,
        x: 140,
        scale: .92
    });


    // BOTTOM IMAGE
    gsap.set(".team-photo-bottom", {
        opacity: 0,
        y: 160,
        scale: .92
    });


    // CONTENT
    gsap.set(".team-expert-content", {
        opacity: 0,
        x: 100
    });


    // FEATURES
    gsap.set(".team-feature", {
        opacity: 0,
        x: 35
    });


    // BUTTON
    gsap.set(".team-expert-btn", {
        opacity: 0,
        y: 25
    });


    /* =========================================
       MAIN TIMELINE
    ========================================= */

    const teamTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: ".stackly-team-expert",

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       LEFT IMAGE
    ========================================= */

    teamTimeline.to(
        ".team-photo-left",
        {
            opacity: 1,
            x: 0,
            scale: 1,

            duration: 1,

            ease: "power3.out"
        }
    );


    /* =========================================
       TOP IMAGE
    ========================================= */

    teamTimeline.to(
        ".team-photo-top",
        {
            opacity: 1,
            y: 0,
            scale: 1,

            duration: 1,

            ease: "power3.out"
        },
        "-=.65"
    );


    /* =========================================
       RIGHT IMAGE
    ========================================= */

    teamTimeline.to(
        ".team-photo-right",
        {
            opacity: 1,
            x: 0,
            scale: 1,

            duration: 1,

            ease: "power3.out"
        },
        "-=.65"
    );


    /* =========================================
       BOTTOM IMAGE
    ========================================= */

    teamTimeline.to(
        ".team-photo-bottom",
        {
            opacity: 1,
            y: 0,
            scale: 1,

            duration: 1,

            ease: "power3.out"
        },
        "-=.65"
    );


    /* =========================================
       CONTENT FROM RIGHT
    ========================================= */

    teamTimeline.to(
        ".team-expert-content",
        {
            opacity: 1,
            x: 0,

            duration: 1.1,

            ease: "power3.out"
        },
        "-=.75"
    );


    /* =========================================
       FEATURES
    ========================================= */

    teamTimeline.to(
        ".team-feature",
        {
            opacity: 1,
            x: 0,

            duration: .65,

            stagger: .12,

            ease: "power2.out"
        },
        "-=.5"
    );


    /* =========================================
       BUTTON
    ========================================= */

    teamTimeline.to(
        ".team-expert-btn",
        {
            opacity: 1,
            y: 0,

            duration: .7,

            ease: "back.out(1.5)"
        },
        "-=.3"
    );


});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    // FAQ content from RIGHT
    gsap.set(".faq-content", {
        opacity: 0,
        x: 100
    });


    // IMAGE from LEFT
    gsap.set(".faq-image-wrapper", {
        opacity: 0,
        x: -120,
        scale: .94
    });


    // FAQ items
    gsap.set(".faq-item", {
        opacity: 0,
        y: 25
    });


    // Badge
    gsap.set(".faq-image-badge", {
        opacity: 0,
        y: 30,
        scale: .9
    });


    /* =========================================
       MAIN GSAP TIMELINE
    ========================================= */

    const faqTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-faq-section",

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       IMAGE FROM LEFT
    ========================================= */

    faqTimeline.to(
        ".faq-image-wrapper",
        {
            opacity: 1,
            x: 0,
            scale: 1,

            duration: 1.15,

            ease: "power3.out"
        }
    );


    /* =========================================
       CONTENT FROM RIGHT
    ========================================= */

    faqTimeline.to(
        ".faq-content",
        {
            opacity: 1,
            x: 0,

            duration: 1.1,

            ease: "power3.out"
        },
        "-=.75"
    );


    /* =========================================
       FAQ ITEMS
    ========================================= */

    faqTimeline.to(
        ".faq-item",
        {
            opacity: 1,
            y: 0,

            duration: .65,

            stagger: .12,

            ease: "power2.out"
        },
        "-=.55"
    );


    /* =========================================
       BADGE
    ========================================= */

    faqTimeline.to(
        ".faq-image-badge",
        {
            opacity: 1,
            y: 0,
            scale: 1,

            duration: .7,

            ease: "back.out(1.5)"
        },
        "-=.45"
    );


    /* =========================================
       FAQ ACCORDION
    ========================================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach((item) => {

        const button =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        const icon =
            item.querySelector(".faq-icon");


        /* First FAQ open */

        if (item.classList.contains("active")) {

            gsap.set(answer, {
                height: "auto",
                opacity: 1
            });

        }


        button.addEventListener("click", () => {

            const isActive =
                item.classList.contains("active");


            /* Close all other FAQs */

            faqItems.forEach((otherItem) => {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");

                    const otherAnswer =
                        otherItem.querySelector(".faq-answer");

                    const otherIcon =
                        otherItem.querySelector(".faq-icon");


                    gsap.to(otherAnswer, {
                        height: 0,
                        opacity: 0,
                        duration: .35,
                        ease: "power2.inOut"
                    });


                    otherIcon.textContent = "add";

                }

            });


            /* Toggle clicked FAQ */

            if (!isActive) {

                item.classList.add("active");

                icon.textContent = "remove";


                gsap.fromTo(
                    answer,
                    {
                        height: 0,
                        opacity: 0
                    },
                    {
                        height: "auto",
                        opacity: 1,

                        duration: .45,

                        ease: "power2.out"
                    }
                );

            } else {

                item.classList.remove("active");

                icon.textContent = "add";


                gsap.to(answer, {

                    height: 0,
                    opacity: 0,

                    duration: .35,

                    ease: "power2.inOut"

                });

            }

        });

    });

});