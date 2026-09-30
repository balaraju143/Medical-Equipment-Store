// =========================================================
// ABOUT HERO - GSAP REVEAL
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    if (typeof gsap === "undefined") {
        return;
    }


    const hero = document.querySelector(".about-hero");

    if (!hero) {
        return;
    }


    const title = hero.querySelector(".about-hero-content h1");
    const breadcrumb = hero.querySelector(".about-breadcrumb");
    const overlay = hero.querySelector(".about-hero-overlay");


    // =====================================================
    // INITIAL STATE
    // =====================================================

    gsap.set(overlay, {
        opacity: 0
    });

    gsap.set(title, {
        opacity: 0,
        y: 45
    });

    gsap.set(breadcrumb, {
        opacity: 0,
        y: 25
    });


    // =====================================================
    // HERO ANIMATION
    // =====================================================

    const timeline = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    timeline.to(overlay, {
        opacity: 1,
        duration: 0.9
    });


    timeline.to(title, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.35");


    timeline.to(breadcrumb, {
        opacity: 1,
        y: 0,
        duration: 0.7
    }, "-=0.45");

});


/* =========================================================
   STACKLY ABOUT GSAP ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* -----------------------------------------------------
       INITIAL STATES
    ----------------------------------------------------- */

    gsap.set(".stackly-about-image-wrap", {
        opacity: 0,
        y: 180,
        scale: 0.92
    });

    gsap.set(".stackly-about-bg-shape", {
        opacity: 0,
        y: 100
    });

    gsap.set(".stackly-about-floating-card", {
        opacity: 0,
        y: 60,
        scale: 0.9
    });

    gsap.set(".stackly-about-content", {
        opacity: 0,
        x: 130
    });

    gsap.set(".stackly-about-label", {
        opacity: 0,
        y: 20
    });

    gsap.set(".stackly-about-content h2", {
        opacity: 0,
        y: 30
    });

    gsap.set(".stackly-about-description", {
        opacity: 0,
        y: 25
    });

    gsap.set(".stackly-about-feature", {
        opacity: 0,
        x: 35
    });

    gsap.set(".stackly-about-bottom", {
        opacity: 0,
        y: 25
    });


    /* -----------------------------------------------------
       MAIN TIMELINE
    ----------------------------------------------------- */

    const aboutTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-about-section",
            start: "top 75%",
            once: true
        }
    });


    /* Background shape */

    aboutTimeline.to(".stackly-about-bg-shape", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
    });


    /* IMAGE FROM BOTTOM */

    aboutTimeline.to(".stackly-about-image-wrap", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out"
    }, "-=0.5");


    /* FLOATING CARD */

    aboutTimeline.to(".stackly-about-floating-card", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.5)"
    }, "-=0.6");


    /* RIGHT CONTENT FROM RIGHT */

    aboutTimeline.to(".stackly-about-content", {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.9");


    /* LABEL */

    aboutTimeline.to(".stackly-about-label", {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out"
    }, "-=0.65");


    /* HEADING */

    aboutTimeline.to(".stackly-about-content h2", {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: "power3.out"
    }, "-=0.35");


    /* DESCRIPTION */

    aboutTimeline.to(".stackly-about-description", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out"
    }, "-=0.4");


    /* FEATURES */

    aboutTimeline.to(".stackly-about-feature", {
        opacity: 1,
        x: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out"
    }, "-=0.25");


    /* BOTTOM */

    aboutTimeline.to(".stackly-about-bottom", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out"
    }, "-=0.25");

});


/* =========================================================
   STACKLY CATEGORY GSAP ANIMATIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(".stackly-category-header", {
        opacity: 0,
        y: -30
    });

    gsap.set(".stackly-category-card", {
        opacity: 0,
        scale: 0.8,
        y: 40
    });

    gsap.set(".stackly-promo-card", {
        opacity: 0,
        scale: 0.94
    });

    gsap.set(".stackly-promo-content", {
        opacity: 0,
        y: 30
    });

    gsap.set(".stackly-promo-image", {
        opacity: 0,
        scale: 0.75
    });


    /* =====================================================
       MAIN TIMELINE
    ===================================================== */

    const categoryTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-category-section",
            start: "top 78%",
            once: true
        }
    });


    /* HEADER */

    categoryTimeline.to(".stackly-category-header", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out"
    });


    /* =====================================================
       CATEGORY CARDS
    ===================================================== */

    categoryTimeline.to(".stackly-category-card", {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "back.out(1.5)"
    }, "-=0.25");


    /* =====================================================
       PROMOTIONAL CARDS
    ===================================================== */

    categoryTimeline.to(".stackly-promo-card", {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.16,
        ease: "power3.out"
    }, "-=0.15");


    /* =====================================================
       PROMO CONTENT
    ===================================================== */

    categoryTimeline.to(".stackly-promo-content", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.12,
        ease: "power3.out"
    }, "-=0.65");


    /* =====================================================
       PROMO IMAGES
    ===================================================== */

    categoryTimeline.to(".stackly-promo-image", {
        opacity: 1,
        scale: 1,
        duration: 0.85,
        stagger: 0.14,
        ease: "back.out(1.3)"
    }, "-=0.65");


    /* =====================================================
       INDIVIDUAL PROMO DIRECTION
       LEFT → RIGHT → LEFT
    ===================================================== */

    gsap.set(".promo-one", {
        x: -100
    });

    gsap.set(".promo-two", {
        x: 100
    });

    gsap.set(".promo-three", {
        x: -100
    });


    gsap.to(".promo-one", {
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".stackly-promo-grid",
            start: "top 80%",
            once: true
        }
    });

    gsap.to(".promo-two", {
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".stackly-promo-grid",
            start: "top 80%",
            once: true
        }
    });

    gsap.to(".promo-three", {
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".stackly-promo-grid",
            start: "top 80%",
            once: true
        }
    });

});


/* =========================================================
   STACKLY MEDICAL GALLERY GSAP
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(".stackly-gallery-label", {
        opacity: 0,
        y: -25
    });

    gsap.set(".stackly-gallery-heading h2", {
        opacity: 0,
        y: 35
    });

    gsap.set(".stackly-gallery-heading p", {
        opacity: 0,
        y: 25
    });

    gsap.set(".stackly-gallery-card", {
        opacity: 0,
        y: 100,
        scale: .92
    });


    /* =====================================================
       TIMELINE
    ===================================================== */

    const galleryTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-gallery-section",

            start: "top 75%",

            once: true
        }

    });


    /* LABEL */

    galleryTimeline.to(".stackly-gallery-label", {

        opacity: 1,
        y: 0,

        duration: .6,

        ease: "power3.out"

    });


    /* HEADING */

    galleryTimeline.to(".stackly-gallery-heading h2", {

        opacity: 1,
        y: 0,

        duration: .8,

        ease: "power3.out"

    }, "-=.3");


    /* DESCRIPTION */

    galleryTimeline.to(".stackly-gallery-heading p", {

        opacity: 1,
        y: 0,

        duration: .65,

        ease: "power3.out"

    }, "-=.45");


    /* =====================================================
       IMAGE CARDS FROM BOTTOM
    ===================================================== */

    galleryTimeline.to(".stackly-gallery-card", {

        opacity: 1,

        y: 0,

        scale: 1,

        duration: 1,

        stagger: .12,

        ease: "power3.out"

    }, "-=.25");


    /* =====================================================
       CENTER CARD EXTRA REVEAL
    ===================================================== */

    gsap.fromTo(
        ".stackly-gallery-card.gallery-active img",

        {
            scale: 1.15
        },

        {
            scale: 1,

            duration: 1.5,

            ease: "power3.out",

            scrollTrigger: {
                trigger: ".stackly-gallery-section",
                start: "top 70%",
                once: true
            }
        }
    );


    /* =====================================================
       HOVER CONTENT
       SMOOTH REVEAL
    ===================================================== */

    document
        .querySelectorAll(".stackly-gallery-card")
        .forEach(card => {

            const overlay = card.querySelector(
                ".stackly-gallery-overlay"
            );

            const image = card.querySelector("img");


            card.addEventListener("mouseenter", () => {

                gsap.killTweensOf([
                    overlay,
                    image
                ]);


                gsap.to(overlay, {

                    opacity: 1,

                    y: 0,

                    duration: .45,

                    ease: "power3.out"

                });


                gsap.to(image, {

                    scale: 1.08,

                    duration: .7,

                    ease: "power3.out"

                });

            });


            card.addEventListener("mouseleave", () => {

                /* Keep center card slightly visible */

                if (
                    card.classList.contains("gallery-active")
                ) {

                    gsap.to(overlay, {

                        opacity: .75,

                        y: 0,

                        duration: .35

                    });

                } else {

                    gsap.to(overlay, {

                        opacity: 0,

                        y: 20,

                        duration: .35

                    });

                }


                gsap.to(image, {

                    scale: 1,

                    duration: .7,

                    ease: "power3.out"

                });

            });

        });

});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       INITIAL STATES
    ===================================================== */

    gsap.set(".stackly-trending-header", {
        opacity: 0,
        y: -30
    });

    gsap.set(".stackly-product-card", {
        opacity: 0,
        y: 80,
        scale: .94
    });

    gsap.set(".stackly-service-strip", {
        opacity: 0,
        y: 60
    });

    gsap.set(".stackly-service-item", {
        opacity: 0,
        y: 25
    });


    /* =====================================================
       MAIN TIMELINE
    ===================================================== */

    const trendingTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-trending-section",
            start: "top 78%",
            once: true
        }

    });


    /* HEADER */

    trendingTimeline.to(".stackly-trending-header", {

        opacity: 1,
        y: 0,

        duration: .7,

        ease: "power3.out"

    });


    /* =====================================================
       PRODUCTS
    ===================================================== */

    trendingTimeline.to(".stackly-product-card", {

        opacity: 1,

        y: 0,

        scale: 1,

        duration: .8,

        stagger: .13,

        ease: "back.out(1.3)"

    }, "-=.25");


    /* =====================================================
       SERVICE STRIP
    ===================================================== */

    trendingTimeline.to(".stackly-service-strip", {

        opacity: 1,

        y: 0,

        duration: .8,

        ease: "power3.out"

    }, "-=.25");


    /* =====================================================
       SERVICE CONTENT
    ===================================================== */

    trendingTimeline.to(".stackly-service-item", {

        opacity: 1,

        y: 0,

        duration: .55,

        stagger: .12,

        ease: "power3.out"

    }, "-=.5");


    /* =====================================================
       HOVER PRODUCT IMAGE
    ===================================================== */

    document
        .querySelectorAll(".stackly-product-card")
        .forEach(card => {

            const image =
                card.querySelector(".stackly-product-image img");

            const actions =
                card.querySelector(".stackly-product-actions");


            card.addEventListener("mouseenter", () => {

                gsap.to(image, {

                    scale: 1.08,

                    duration: .55,

                    ease: "power3.out"

                });

                gsap.to(actions, {

                    opacity: 1,

                    y: 0,

                    duration: .4,

                    ease: "power3.out"

                });

            });


            card.addEventListener("mouseleave", () => {

                gsap.to(image, {

                    scale: 1,

                    duration: .55,

                    ease: "power3.out"

                });

                gsap.to(actions, {

                    opacity: 0,

                    y: 25,

                    duration: .3,

                    ease: "power2.out"

                });

            });

        });

});


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".stackly-small-cta-overlay", {
        opacity: 0
    });

    gsap.set(".stackly-small-cta-label", {
        opacity: 0,
        y: -25
    });

    gsap.set(".stackly-small-cta-content h2", {
        opacity: 0,
        y: 35
    });

    gsap.set(".stackly-small-cta-content p", {
        opacity: 0,
        y: 25
    });

    gsap.set(".stackly-small-cta-btn", {
        opacity: 0,
        y: 25,
        scale: .9
    });


    const ctaTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".stackly-small-cta",
            start: "top 80%",
            once: true
        }
    });


    ctaTimeline.to(".stackly-small-cta-overlay", {
        opacity: 1,
        duration: .8,
        ease: "power2.out"
    });


    ctaTimeline.to(".stackly-small-cta-label", {
        opacity: 1,
        y: 0,
        duration: .55,
        ease: "power3.out"
    }, "-=.35");


    ctaTimeline.to(".stackly-small-cta-content h2", {
        opacity: 1,
        y: 0,
        duration: .75,
        ease: "power3.out"
    }, "-=.25");


    ctaTimeline.to(".stackly-small-cta-content p", {
        opacity: 1,
        y: 0,
        duration: .6,
        ease: "power3.out"
    }, "-=.4");


    ctaTimeline.to(".stackly-small-cta-btn", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: .6,
        ease: "back.out(1.5)"
    }, "-=.3");

});