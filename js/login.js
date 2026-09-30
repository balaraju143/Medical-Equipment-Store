document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GSAP
    ===================================================== */

    gsap.set(".stackly-login-card", {
        opacity: 0,
        y: 45,
        scale: .97
    });

    gsap.set(".stackly-login-left", {
        opacity: 0,
        x: -60
    });

    gsap.set(".login-form-wrapper", {
        opacity: 0,
        x: 60
    });


    const loginAnimation = gsap.timeline();


    loginAnimation.to(
        ".stackly-login-card",
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .8,
            ease: "power3.out"
        }
    );


    loginAnimation.to(
        ".stackly-login-left",
        {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power3.out"
        },
        "-=.5"
    );


    loginAnimation.to(
        ".login-form-wrapper",
        {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power3.out"
        },
        "-=.6"
    );


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const form =
        document.getElementById("stacklyLoginForm");

    const email =
        document.getElementById("loginEmail");

    const password =
        document.getElementById("loginPassword");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const passwordToggle =
        document.getElementById("passwordToggle");

    const roleButtons =
        document.querySelectorAll(".login-role");


    let selectedRole = "client";

    let selectedDashboard =
        "client-dashboard.html";


    /* =====================================================
       ROLE SELECTION
    ===================================================== */

    roleButtons.forEach((button) => {

        button.addEventListener("click", () => {

            roleButtons.forEach((item) => {

                item.classList.remove("active");

            });


            button.classList.add("active");


            selectedRole =
                button.dataset.role;


            selectedDashboard =
                button.dataset.dashboard;

        });

    });


    /* =====================================================
       PASSWORD SHOW / HIDE
    ===================================================== */

    passwordToggle.addEventListener(
        "click",
        () => {

            const icon =
                passwordToggle.querySelector(
                    ".material-symbols-outlined"
                );


            if (password.type === "password") {

                password.type = "text";

                icon.textContent =
                    "visibility";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                password.type = "password";

                icon.textContent =
                    "visibility_off";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

            }

        }
    );


    /* =====================================================
       VALIDATION HELPERS
    ===================================================== */

    function showError(
        errorElement,
        inputElement,
        message
    ) {

        errorElement.textContent =
            message;

        errorElement.classList.add("show");

        inputElement
            .closest(".login-input-box")
            .classList.add("input-error");


        setTimeout(() => {

            errorElement.classList.remove("show");

            inputElement
                .closest(".login-input-box")
                .classList.remove("input-error");

        }, 3000);

    }


    function showSuccess(inputElement) {

        inputElement
            .closest(".login-input-box")
            .classList.add("input-success");

    }


    /* =====================================================
       EMAIL VALIDATION
    ===================================================== */

    function validateEmail() {

        const value =
            email.value.trim();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


        if (!value) {

            showError(
                emailError,
                email,
                "Please enter your email address."
            );

            return false;
        }


        if (!emailPattern.test(value)) {

            showError(
                emailError,
                email,
                "Please enter a valid email address."
            );

            return false;
        }


        showSuccess(email);

        return true;

    }


    /* =====================================================
       PASSWORD VALIDATION
    ===================================================== */

    function validatePassword() {

        const value =
            password.value;


        if (!value) {

            showError(
                passwordError,
                password,
                "Please enter your password."
            );

            return false;
        }


        if (value.length < 6) {

            showError(
                passwordError,
                password,
                "Password must contain at least 6 characters."
            );

            return false;
        }


        showSuccess(password);

        return true;

    }


    /* =====================================================
       LIVE VALIDATION
    ===================================================== */

    email.addEventListener(
        "blur",
        validateEmail
    );


    password.addEventListener(
        "blur",
        validatePassword
    );


    /* =====================================================
       FORM SUBMIT
    ===================================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const emailValid =
                validateEmail();


            const passwordValid =
                validatePassword();


            if (
                !emailValid ||
                !passwordValid
            ) {

                return;

            }


            /* =================================================
               STORE SELECTED ROLE
            ================================================= */

            sessionStorage.setItem(
                "stacklyLoginRole",
                selectedRole
            );


            sessionStorage.setItem(
                "stacklyLoginEmail",
                email.value.trim()
            );


            /* =================================================
               GO TO SELECTED DASHBOARD
            ================================================= */

            window.location.href =
                selectedDashboard;

        }
    );


    /* =====================================================
       RESET FORM WHEN RETURNING TO PAGE
    ===================================================== */

    function resetLoginForm() {

        form.reset();


        email.type = "email";

        password.type = "password";


        emailError.textContent = "";

        passwordError.textContent = "";


        emailError.classList.remove(
            "show"
        );

        passwordError.classList.remove(
            "show"
        );


        document
            .querySelectorAll(".login-input-box")
            .forEach((box) => {

                box.classList.remove(
                    "input-error",
                    "input-success"
                );

            });


        passwordToggle
            .querySelector(
                ".material-symbols-outlined"
            )
            .textContent =
            "visibility_off";


        roleButtons.forEach((button) => {

            button.classList.remove(
                "active"
            );

        });


        const defaultRole =
            document.querySelector(
                '.login-role[data-role="client"]'
            );


        if (defaultRole) {

            defaultRole.classList.add(
                "active"
            );

            selectedRole = "client";

            selectedDashboard =
                "client-dashboard.html";

        }

    }


    /* =====================================================
       WHEN PAGE IS SHOWN AGAIN
    ===================================================== */

    window.addEventListener(
        "pageshow",
        () => {

            resetLoginForm();

        }
    );


    /* =====================================================
       INITIAL RESET
    ===================================================== */

    resetLoginForm();

});