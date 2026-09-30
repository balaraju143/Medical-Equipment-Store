document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       GET USER INFORMATION
    ===================================================== */

    let userEmail =
        sessionStorage.getItem("stacklySignupEmail") ||
        sessionStorage.getItem("stacklyLoginEmail") ||
        localStorage.getItem("stacklyUserEmail") ||
        "client@stackly.com";


    let userName =
        sessionStorage.getItem("stacklySignupName") ||
        sessionStorage.getItem("stacklyLoginName") ||
        "Client";



    /* =====================================================
       FIRST LETTER
    ===================================================== */

    function getFirstLetter(email) {

        if (!email || email.length === 0) {

            return "C";

        }

        return email
            .trim()
            .charAt(0)
            .toUpperCase();

    }


    const firstLetter =
        getFirstLetter(userEmail);


    /* =====================================================
       DYNAMIC USER DATA
    ===================================================== */

    const avatarElements = [

        document.getElementById("headerAvatar"),

        document.getElementById("sidebarAvatar"),

        document.getElementById("largeProfileAvatar"),

        document.getElementById("profilePageAvatar"),


    ];



    avatarElements.forEach((element) => {

        if (element) {

            element.textContent =
                firstLetter;

        }

    });


    const emailElements = [

        document.getElementById("headerUserEmail"),

        document.getElementById("profileDisplayEmail"),

        document.getElementById("profilePageEmail"),

        document.getElementById("profileEmailField"),
        

    ];




    emailElements.forEach((element) => {

        if (element) {

            element.textContent =
                userEmail;

        }

    });


    const nameElements = [

        document.getElementById("headerUserName"),

        document.getElementById("sidebarUserName"),

        document.getElementById("profileDisplayName"),

        document.getElementById("profilePageName")

    ];


    nameElements.forEach((element) => {

        if (element) {

            element.textContent =
                userName;

        }

    });

const welcomeName =
    document.getElementById("welcomeName");

if (welcomeName) {
    welcomeName.textContent = userEmail;
}
    /* =====================================================
       MOBILE SIDEBAR
    ===================================================== */

    const sidebar =
        document.getElementById(
            "dashboardSidebar"
        );


    const toggle =
        document.getElementById(
            "mobileMenuToggle"
        );


    const overlay =
        document.getElementById(
            "dashboardOverlay"
        );


    function openSidebar() {

        sidebar.classList.add("open");

        overlay.classList.add("active");

        document.body.style.overflow =
            "hidden";

    }


    function closeSidebar() {

        sidebar.classList.remove("open");

        overlay.classList.remove("active");

        document.body.style.overflow =
            "";

    }


    if (toggle) {

        toggle.addEventListener(
            "click",
            () => {

                if (
                    sidebar.classList.contains(
                        "open"
                    )
                ) {

                    closeSidebar();

                } else {

                    openSidebar();

                }

            }
        );

    }


    if (overlay) {

        overlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       MENU
       #menu LINKS CONTROL SECTIONS
    ===================================================== */

    const menuLinks =
        document.querySelectorAll(
            ".dashboard-menu-link[data-page]"
        );


    const dashboardPages =
        document.querySelectorAll(
            ".dashboard-page"
        );


    const headerTitle =
        document.getElementById(
            "headerPageTitle"
        );


    const pageNames = {

        overview:
            "Overview",

        appointments:
            "Appointments",

        orders:
            "My Orders",

        equipment:
            "Medical Equipment",

        reports:
            "Medical Reports",

        profile:
            "My Profile",

        settings:
            "Settings"

    };


    function openDashboardPage(
        pageName,
        updateHash = true
    ) {


        dashboardPages.forEach(
            (page) => {

                page.classList.remove(
                    "active-page"
                );

            }
        );


        menuLinks.forEach(
            (link) => {

                link.classList.remove(
                    "active"
                );

            }
        );


        const targetPage =
            document.getElementById(
                "page-" + pageName
            );


        const targetLink =
            document.querySelector(
                `[data-page="${pageName}"]`
            );


        if (!targetPage) {

            return;

        }


        targetPage.classList.add(
            "active-page"
        );


        if (targetLink) {

            targetLink.classList.add(
                "active"
            );

        }


        if (headerTitle) {

            headerTitle.textContent =
                pageNames[pageName] ||
                "Overview";

        }


        if (updateHash) {

            history.replaceState(
                null,
                "",
                "#" + pageName
            );

        }


        closeSidebar();


        /* GSAP PAGE REVEAL */

        gsap.fromTo(
            targetPage.children,
            {
                opacity: 0,
                y: 18
            },
            {
                opacity: 1,
                y: 0,
                duration: .45,
                stagger: .06,
                ease: "power2.out"
            }
        );

    }


    menuLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                (event) => {

                    event.preventDefault();


                    const pageName =
                        link.dataset.page;


                    openDashboardPage(
                        pageName
                    );

                }
            );

        }
    );


    /* =====================================================
       OPEN PAGE FROM HASH
    ===================================================== */

    function loadHashPage() {

        let hash =
            window.location.hash
                .replace("#", "")
                .trim();


        if (
            !pageNames[hash]
        ) {

            hash = "overview";

        }


        openDashboardPage(
            hash,
            false
        );

    }


    window.addEventListener(
        "hashchange",
        loadHashPage
    );


    loadHashPage();


    /* =====================================================
       SEARCH → 404
    ===================================================== */

    const searchButton =
        document.getElementById(
            "headerSearch"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "404.html";

            }
        );

    }


    /* =====================================================
       NOTIFICATION → 404
    ===================================================== */

    const notification =
        document.getElementById(
            "headerNotification"
        );


    if (notification) {

        notification.addEventListener(
            "click",
            () => {

                window.location.href =
                    "404.html";

            }
        );

    }


    /* =====================================================
       INITIAL GSAP
    ===================================================== */

    gsap.fromTo(
        ".dashboard-header",
        {
            opacity: 0,
            y: -20
        },
        {
            opacity: 1,
            y: 0,
            duration: .6,
            ease: "power3.out"
        }
    );


    gsap.fromTo(
        ".welcome-card",
        {
            opacity: 0,
            y: 25,
            scale: .98
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .7,
            ease: "power3.out"
        }
    );


    gsap.fromTo(
        ".dashboard-stat-card",
        {
            opacity: 0,
            y: 25
        },
        {
            opacity: 1,
            y: 0,
            duration: .55,
            stagger: .08,
            delay: .2,
            ease: "power2.out"
        }
    );


});

