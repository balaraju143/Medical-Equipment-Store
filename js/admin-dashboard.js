document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       GET USER DATA
    ========================================= */

    const userEmail =
        sessionStorage.getItem("stacklySignupEmail") ||
        sessionStorage.getItem("stacklyLoginEmail") ||
        localStorage.getItem("stacklyUserEmail") ||
        "admin@stackly.com";


    const userName =
        sessionStorage.getItem("stacklySignupName") ||
        sessionStorage.getItem("stacklyLoginName") ||
        "Admin";


    /* =========================================
       FIRST LETTER OF EMAIL
    ========================================= */

    function getFirstLetter(email) {

        if (!email || email.trim().length === 0) {
            return "A";
        }

        return email.trim().charAt(0).toUpperCase();
    }


    const firstLetter = getFirstLetter(userEmail);


    /* =========================================
       DYNAMIC AVATARS
    ========================================= */

    const avatarElements = [
        document.getElementById("headerAvatar"),
        document.getElementById("sidebarAvatar")
    ];


    avatarElements.forEach((element) => {

        if (element) {
            element.textContent = firstLetter;
        }

    });


    /* =========================================
       DYNAMIC EMAIL
    ========================================= */

    const emailElements = [
        document.getElementById("headerUserEmail")
    ];


    emailElements.forEach((element) => {

        if (element) {
            element.textContent = userEmail;
        }

    });


    /* =========================================
       DYNAMIC NAME
    ========================================= */

    const nameElements = [
        document.getElementById("headerUserName"),
        document.getElementById("sidebarUserName")
    ];


    nameElements.forEach((element) => {

        if (element) {
            element.textContent = userName;
        }

    });


    /* =========================================
       MOBILE SIDEBAR
    ========================================= */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const adminSidebar =
        document.getElementById("adminSidebar");

    const sidebarOverlay =
        document.getElementById("sidebarOverlay");


    function openSidebar() {

        if (adminSidebar) {
            adminSidebar.classList.add("open");
        }

        if (sidebarOverlay) {
            sidebarOverlay.classList.add("show");
        }

    }


    function closeSidebar() {

        if (adminSidebar) {
            adminSidebar.classList.remove("open");
        }

        if (sidebarOverlay) {
            sidebarOverlay.classList.remove("show");
        }

    }


    if (mobileMenuBtn) {

        mobileMenuBtn.addEventListener(
            "click",
            openSidebar
        );

    }


    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =========================================
       ADMIN PAGE NAVIGATION
    ========================================= */

    const navLinks =
        document.querySelectorAll(".admin-nav-link");

    const pages =
        document.querySelectorAll(".admin-page");


    function showPage(pageId) {

        pages.forEach((page) => {

            page.classList.remove("active");

        });


        navLinks.forEach((link) => {

            link.classList.remove("active");

        });


        const targetPage =
            document.getElementById(pageId);


        if (targetPage) {

            targetPage.classList.add("active");

        }


        const activeLink =
            document.querySelector(
                `.admin-nav-link[href="#${pageId}"]`
            );


        if (activeLink) {

            activeLink.classList.add("active");

        }


        closeSidebar();


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


        animatePage(targetPage);

    }


    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

            const pageId =
                link.getAttribute("href").replace("#", "");

            showPage(pageId);

            history.replaceState(
                null,
                "",
                `#${pageId}`
            );

        });

    });


    /* =========================================
       HASH ON PAGE LOAD
    ========================================= */

    const initialHash =
        window.location.hash.replace("#", "");


    if (initialHash && document.getElementById(initialHash)) {

        showPage(initialHash);

    } else {

        showPage("overview");

    }


    /* =========================================
       GSAP PAGE ANIMATION
    ========================================= */

    function animatePage(page) {

        if (!page || typeof gsap === "undefined") {
            return;
        }


        const elements =
            page.querySelectorAll(
                ".admin-page-heading, " +
                ".admin-stat-card, " +
                ".admin-panel, " +
                ".management-card, " +
                ".admin-order-cards > div, " +
                ".customer-summary, " +
                ".inventory-card, " +
                ".supplier-card, " +
                ".report-card, " +
                ".staff-card, " +
                ".settings-card"
            );


        gsap.killTweensOf(elements);


        gsap.fromTo(
            elements,
            {
                opacity: 0,
                y: 25
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.65,
                stagger: 0.08,
                ease: "power2.out"
            }
        );

    }


    /* =========================================
       LOGO → OVERVIEW
    ========================================= */

    const dashboardLogo =
        document.querySelector(".dashboard-logo");


    if (dashboardLogo) {

        dashboardLogo.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

                showPage("overview");

                history.replaceState(
                    null,
                    "",
                    "#overview"
                );

            }
        );

    }


    /* =========================================
       SEARCH / NOTIFICATION
       → 404
    ========================================= */

    const headerButtons =
        document.querySelectorAll(
            ".admin-header-icon"
        );


    headerButtons.forEach((button) => {

        button.addEventListener("click", () => {

            window.location.href = "404.html";

        });

    });

});