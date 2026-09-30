document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    gsap.set(".blog-hero-overlay", {
        opacity: 0
    });


    gsap.set(".blog-hero-title", {
        opacity: 0,
        y: 55,
        scale: .88
    });


    gsap.set(".blog-hero-breadcrumb", {
        opacity: 0,
        y: 30
    });


    gsap.set(".blog-hero-content::after", {
        opacity: 0
    });


    /* =========================================
       HERO ANIMATION
    ========================================= */

    const blogHeroTimeline = gsap.timeline();


    /* Background overlay */

    blogHeroTimeline.to(
        ".blog-hero-overlay",
        {
            opacity: 1,

            duration: 1.2,

            ease: "power2.out"
        }
    );


    /* Blog title */

    blogHeroTimeline.to(
        ".blog-hero-title",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: 1,

            ease: "power3.out"
        },
        "-=.65"
    );


    /* Breadcrumb */

    blogHeroTimeline.to(
        ".blog-hero-breadcrumb",
        {
            opacity: 1,

            y: 0,

            duration: .75,

            ease: "power3.out"
        },
        "-=.5"
    );

});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    /* BIG IMAGE FROM LEFT */

    gsap.set(".blog-image-left", {
        opacity: 0,
        x: -130,
        scale: .92
    });


    /* SMALL IMAGE FROM BOTTOM */

    gsap.set(".blog-image-bottom", {
        opacity: 0,
        y: 130,
        scale: .9
    });


    /* EXPERIENCE BADGE */

    gsap.set(".blog-experience-badge", {
        opacity: 0,
        scale: .7,
        y: -20
    });


    /* DOTS */

    gsap.set(".blog-dots", {
        opacity: 0,
        scale: .7
    });


    /* RIGHT CONTENT */

    gsap.set(".blog-intro-content", {
        opacity: 0,
        x: 110
    });


    /* FEATURES */

    gsap.set(".blog-feature", {
        opacity: 0,
        x: 30
    });


    /* BUTTON */

    gsap.set(".blog-discover-btn", {
        opacity: 0,
        y: 25
    });


    /* =========================================
       MAIN TIMELINE
    ========================================= */

    const blogIntroTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-blog-intro",

            start: "top 72%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       BIG IMAGE FROM LEFT
    ========================================= */

    blogIntroTimeline.to(
        ".blog-image-left",
        {
            opacity: 1,
            x: 0,
            scale: 1,

            duration: 1.1,

            ease: "power3.out"
        }
    );


    /* =========================================
       SMALL IMAGE FROM BOTTOM
    ========================================= */

    blogIntroTimeline.to(
        ".blog-image-bottom",
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
       DOT PATTERN
    ========================================= */

    blogIntroTimeline.to(
        ".blog-dots",
        {
            opacity: 1,
            scale: 1,

            duration: .7,

            ease: "power2.out"
        },
        "-=.65"
    );


    /* =========================================
       EXPERIENCE BADGE
    ========================================= */

    blogIntroTimeline.to(
        ".blog-experience-badge",
        {
            opacity: 1,
            scale: 1,
            y: 0,

            duration: .7,

            ease: "back.out(1.5)"
        },
        "-=.45"
    );


    /* =========================================
       RIGHT CONTENT
    ========================================= */

    blogIntroTimeline.to(
        ".blog-intro-content",
        {
            opacity: 1,
            x: 0,

            duration: 1.1,

            ease: "power3.out"
        },
        "-=.75"
    );


    /* =========================================
       FEATURE ITEMS
    ========================================= */

    blogIntroTimeline.to(
        ".blog-feature",
        {
            opacity: 1,
            x: 0,

            duration: .6,

            stagger: .12,

            ease: "power2.out"
        },
        "-=.55"
    );


    /* =========================================
       BUTTON
    ========================================= */

    blogIntroTimeline.to(
        ".blog-discover-btn",
        {
            opacity: 1,
            y: 0,

            duration: .7,

            ease: "back.out(1.5)"
        },
        "-=.25"
    );

});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    gsap.set(".stat-left", {
        opacity: 0,
        x: -80
    });

    gsap.set(".stat-right", {
        opacity: 0,
        x: 80
    });

    gsap.set(".stat-icon", {
        scale: .65,
        rotation: -20
    });

    gsap.set(".stat-content", {
        opacity: 0,
        y: 20
    });


    /* =========================================
       MAIN GSAP TIMELINE
    ========================================= */

    const statsTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: ".stackly-stats-section",

            start: "top 82%",

            toggleActions:
                "play none none none"
        }

    });


    /* LEFT ITEMS */

    statsTimeline.to(
        ".stat-left",
        {
            opacity: 1,
            x: 0,

            duration: .9,

            stagger: .15,

            ease: "power3.out"
        }
    );


    /* RIGHT ITEMS */

    statsTimeline.to(
        ".stat-right",
        {
            opacity: 1,
            x: 0,

            duration: .9,

            stagger: .15,

            ease: "power3.out"
        },
        "<"
    );


    /* ICONS */

    statsTimeline.to(
        ".stat-icon",
        {
            scale: 1,
            rotation: 0,

            duration: .8,

            stagger: .12,

            ease: "back.out(1.7)"
        },
        "-=.55"
    );


    /* TEXT */

    statsTimeline.to(
        ".stat-content",
        {
            opacity: 1,
            y: 0,

            duration: .6,

            stagger: .1,

            ease: "power2.out"
        },
        "-=.5"
    );


    /* =========================================
       COUNTER FUNCTION
    ========================================= */

    let counterStarted = false;


    function startCounters() {

        if (counterStarted) return;

        counterStarted = true;


        document
            .querySelectorAll(".counter")
            .forEach((counter) => {

                const target =
                    Number(counter.dataset.target);


                const counterObject = {
                    value: 0
                };


                gsap.to(counterObject, {

                    value: target,

                    duration: 2.2,

                    ease: "power2.out",

                    onUpdate: () => {

                        counter.textContent =
                            Math.floor(
                                counterObject.value
                            ).toLocaleString();

                    },

                    onComplete: () => {

                        counter.textContent =
                            target.toLocaleString();

                    }

                });

            });

    }


    /* =========================================
       START COUNTERS WHEN SECTION ENTERS
    ========================================= */

    ScrollTrigger.create({

        trigger: ".stackly-stats-section",

        start: "top 80%",

        once: true,

        onEnter: startCounters

    });

});


document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       INITIAL STATES
    ========================================= */

    /* Heading */

    gsap.set(".gsap-process-heading", {
        opacity: 0,
        y: -45
    });


    gsap.set(".gsap-plans-heading", {
        opacity: 0,
        x: -70
    });


    /* Process cards */

    gsap.set(".process-item", {
        opacity: 0,
        y: -100,
        scale: .92
    });


    /* Plan cards */

    gsap.set(".plan-card", {
        opacity: 0,
        y: -100,
        scale: .94
    });


    /* =========================================
       PROCESS ANIMATION
    ========================================= */

    const processTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: ".process-container",

            start: "top 75%",

            toggleActions:
                "play none none none"

        }

    });


    processTimeline.to(
        ".gsap-process-heading",
        {
            opacity: 1,
            y: 0,

            duration: .9,

            ease: "power3.out"
        }
    );


    /* Cards fall smoothly from top */

    processTimeline.to(
        ".process-item",
        {
            opacity: 1,
            y: 0,
            scale: 1,

            duration: .9,

            stagger: .16,

            ease: "back.out(1.25)"
        },
        "-=.4"
    );


    /* =========================================
       PLANS ANIMATION
    ========================================= */

    const plansTimeline = gsap.timeline({

        scrollTrigger: {

            trigger: ".plans-container",

            start: "top 78%",

            toggleActions:
                "play none none none"

        }

    });


    plansTimeline.to(
        ".gsap-plans-heading",
        {
            opacity: 1,
            x: 0,

            duration: .9,

            ease: "power3.out"
        }
    );


    /* Cards from TOP */

    plansTimeline.to(
        ".plan-card",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: 1,

            stagger: .18,

            ease: "back.out(1.3)"
        },
        "-=.4"
    );


    /* =========================================
       HEART HOVER
    ========================================= */

    document
        .querySelectorAll(".plan-heart")
        .forEach((heart) => {

            heart.addEventListener("mouseenter", () => {

                gsap.to(heart, {
                    scale: 1.12,
                    duration: .25,
                    ease: "power2.out"
                });

            });


            heart.addEventListener("mouseleave", () => {

                gsap.to(heart, {
                    scale: 1,
                    duration: .25,
                    ease: "power2.out"
                });

            });

        });

});

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =========================================
       HEADING
    ========================================= */

    gsap.set(".blog-heading-reveal", {
        opacity: 0,
        y: -35
    });


    /* =========================================
       BLOG CARDS
    ========================================= */

    gsap.set(".blog-left", {
        opacity: 0,
        x: -100,
        y: 25
    });


    gsap.set(".blog-middle", {
        opacity: 0,
        y: 80,
        scale: .94
    });


    gsap.set(".blog-right", {
        opacity: 0,
        x: 100,
        y: 25
    });


    /* =========================================
       HEADING ANIMATION
    ========================================= */

    gsap.to(".blog-heading-reveal", {

        opacity: 1,

        y: 0,

        duration: .9,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".stackly-blog-section",

            start: "top 80%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       LEFT CARDS
    ========================================= */

    gsap.to(".blog-left", {

        opacity: 1,

        x: 0,

        y: 0,

        scale: 1,

        duration: 1,

        stagger: .18,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".stackly-blog-grid",

            start: "top 78%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       MIDDLE CARDS
    ========================================= */

    gsap.to(".blog-middle", {

        opacity: 1,

        x: 0,

        y: 0,

        scale: 1,

        duration: 1,

        stagger: .18,

        ease: "back.out(1.2)",

        scrollTrigger: {

            trigger: ".stackly-blog-grid",

            start: "top 78%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       RIGHT CARDS
    ========================================= */

    gsap.to(".blog-right", {

        opacity: 1,

        x: 0,

        y: 0,

        scale: 1,

        duration: 1,

        stagger: .18,

        ease: "power3.out",

        scrollTrigger: {

            trigger: ".stackly-blog-grid",

            start: "top 78%",

            toggleActions:
                "play none none none"
        }

    });


    /* =========================================
       BUTTON HOVER
    ========================================= */

    document
        .querySelectorAll(".blog-read-btn")
        .forEach((button) => {

            button.addEventListener("mouseenter", () => {

                gsap.to(button, {
                    scale: 1.05,
                    duration: .25,
                    ease: "power2.out"
                });

            });


            button.addEventListener("mouseleave", () => {

                gsap.to(button, {
                    scale: 1,
                    duration: .25,
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