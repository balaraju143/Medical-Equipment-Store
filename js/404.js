document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       INITIAL STATES
    ========================================= */

    gsap.set(".stackly-404-card", {
        opacity: 0,
        y: 60,
        scale: .94
    });

    gsap.set(".stackly-404-logo", {
        opacity: 0,
        y: -20
    });

    gsap.set(".error-four", {
        opacity: 0,
        scale: .7
    });

    gsap.set(".error-zero", {
        opacity: 0,
        scale: .5,
        rotation: -15
    });

    gsap.set(".stackly-404-card h1", {
        opacity: 0,
        y: 20
    });

    gsap.set(".error-description", {
        opacity: 0,
        y: 15
    });

    gsap.set(".error-actions", {
        opacity: 0,
        y: 20
    });


    /* =========================================
       MAIN REVEAL
    ========================================= */

    const tl = gsap.timeline();


    tl.to(".stackly-404-card", {

        opacity: 1,

        y: 0,

        scale: 1,

        duration: 1,

        ease: "power3.out"

    });


    /* LOGO */

    tl.to(".stackly-404-logo", {

        opacity: 1,

        y: 0,

        duration: .6,

        ease: "power3.out"

    }, "-=.55");


    /* 4 */

    tl.to(".error-four", {

        opacity: 1,

        scale: 1,

        duration: .8,

        stagger: .12,

        ease: "back.out(1.5)"

    }, "-=.25");


    /* ZERO */

    tl.to(".error-zero", {

        opacity: 1,

        scale: 1,

        rotation: 0,

        duration: .9,

        ease: "back.out(1.5)"

    }, "-=.65");


    /* TITLE */

    tl.to(".stackly-404-card h1", {

        opacity: 1,

        y: 0,

        duration: .65,

        ease: "power3.out"

    }, "-=.35");


    /* DESCRIPTION */

    tl.to(".error-description", {

        opacity: 1,

        y: 0,

        duration: .6,

        ease: "power3.out"

    }, "-=.3");


    /* BUTTONS */

    tl.to(".error-actions", {

        opacity: 1,

        y: 0,

        duration: .6,

        ease: "power3.out"

    }, "-=.3");


    /* =========================================
       BACKGROUND FLOATING ANIMATION
    ========================================= */

    gsap.to(".medical-plus", {

        y: -15,

        rotation: 8,

        duration: 2.5,

        stagger: .35,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".medical-hex", {

        y: -12,

        rotation: "+=8",

        duration: 4,

        stagger: .5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    gsap.to(".medical-glow", {

        scale: 1.08,

        opacity: .75,

        duration: 3,

        stagger: .5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* =========================================
       PREVIOUS PAGE
    ========================================= */

    window.goBack = function () {

        if (
            document.referrer &&
            document.referrer !== window.location.href
        ) {

            window.history.back();

        } else {

            window.location.href = "index.html";

        }

    };

});