document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GSAP CARD REVEAL
    ===================================================== */

    gsap.set(".stackly-signup-card", {
        opacity: 0,
        y: 45,
        scale: .97
    });

    gsap.set(".stackly-signup-left", {
        opacity: 0,
        x: -60
    });

    gsap.set(".signup-form-wrapper", {
        opacity: 0,
        x: 60
    });


    const signupAnimation = gsap.timeline();


    signupAnimation.to(
        ".stackly-signup-card",
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: .8,
            ease: "power3.out"
        }
    );


    signupAnimation.to(
        ".stackly-signup-left",
        {
            opacity: 1,
            x: 0,
            duration: .8,
            ease: "power3.out"
        },
        "-=.5"
    );


    signupAnimation.to(
        ".signup-form-wrapper",
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
        document.getElementById("stacklySignupForm");

    const name =
        document.getElementById("signupName");

    const email =
        document.getElementById("signupEmail");

    const password =
        document.getElementById("signupPassword");

    const confirmPassword =
        document.getElementById("signupConfirmPassword");

    const terms =
        document.getElementById("signupTerms");


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById(
            "confirmPasswordError"
        );

    const termsError =
        document.getElementById("termsError");


    const roleButtons =
        document.querySelectorAll(".signup-role");


    let selectedRole = "client";


    /* =====================================================
       ROLE
    ===================================================== */

    roleButtons.forEach((button) => {

        button.addEventListener("click", () => {

            roleButtons.forEach((item) => {

                item.classList.remove("active");

            });


            button.classList.add("active");


            selectedRole =
                button.dataset.role;

        });

    });


    /* =====================================================
       PASSWORD TOGGLE
    ===================================================== */

    document
        .querySelectorAll(".signup-password-toggle")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const targetId =
                        button.dataset.target;

                    const input =
                        document.getElementById(
                            targetId
                        );

                    const icon =
                        button.querySelector(
                            ".material-symbols-outlined"
                        );


                    if (
                        input.type === "password"
                    ) {

                        input.type = "text";

                        icon.textContent =
                            "visibility";

                    } else {

                        input.type = "password";

                        icon.textContent =
                            "visibility_off";

                    }

                }
            );

        });


    /* =====================================================
       ERROR FUNCTION
    ===================================================== */

    function showError(
        errorElement,
        inputElement,
        message
    ) {

        errorElement.textContent =
            message;

        errorElement.classList.add(
            "show"
        );


        if (inputElement) {

            const box =
                inputElement.closest(
                    ".signup-input-box"
                );

            if (box) {

                box.classList.add(
                    "input-error"
                );

            }

        }


        setTimeout(() => {

            errorElement.classList.remove(
                "show"
            );


            if (inputElement) {

                const box =
                    inputElement.closest(
                        ".signup-input-box"
                    );

                if (box) {

                    box.classList.remove(
                        "input-error"
                    );

                }

            }

        }, 3000);

    }


    /* =====================================================
       SUCCESS
    ===================================================== */

    function showSuccess(inputElement) {

        const box =
            inputElement.closest(
                ".signup-input-box"
            );

        if (box) {

            box.classList.add(
                "input-success"
            );

        }

    }


    /* =====================================================
       NAME VALIDATION
       ONLY LETTERS + SPACES
    ===================================================== */

    function validateName() {

        const value =
            name.value.trim();


        const namePattern =
            /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;


        if (!value) {

            showError(
                nameError,
                name,
                "Please enter your full name."
            );

            return false;

        }


        if (!namePattern.test(value)) {

            showError(
                nameError,
                name,
                "Name can contain letters and spaces only."
            );

            return false;

        }


        if (value.length < 2) {

            showError(
                nameError,
                name,
                "Please enter a valid name."
            );

            return false;

        }


        showSuccess(name);

        return true;

    }


    /* =====================================================
       BLOCK NUMBERS / SPECIAL CHARACTERS WHILE TYPING
    ===================================================== */

    name.addEventListener(
        "input",
        () => {

            name.value =
                name.value.replace(
                    /[^A-Za-z\s]/g,
                    ""
                );

        }
    );


    /* =====================================================
       EMAIL
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
       PASSWORD
    ===================================================== */

    function validatePassword() {

        const value =
            password.value;


        if (!value) {

            showError(
                passwordError,
                password,
                "Please enter a password."
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
       CONFIRM PASSWORD
    ===================================================== */

    function validateConfirmPassword() {

        const value =
            confirmPassword.value;


        if (!value) {

            showError(
                confirmPasswordError,
                confirmPassword,
                "Please confirm your password."
            );

            return false;

        }


        if (
            value !== password.value
        ) {

            showError(
                confirmPasswordError,
                confirmPassword,
                "Passwords do not match."
            );

            return false;

        }


        showSuccess(confirmPassword);

        return true;

    }


    /* =====================================================
       TERMS
    ===================================================== */

    function validateTerms() {

        if (!terms.checked) {

            termsError.textContent =
                "Please accept the terms to continue.";

            termsError.classList.add(
                "show"
            );


            setTimeout(() => {

                termsError.classList.remove(
                    "show"
                );

            }, 3000);


            return false;

        }


        return true;

    }


    /* =====================================================
       BLUR VALIDATION
    ===================================================== */

    name.addEventListener(
        "blur",
        validateName
    );


    email.addEventListener(
        "blur",
        validateEmail
    );


    password.addEventListener(
        "blur",
        validatePassword
    );


    confirmPassword.addEventListener(
        "blur",
        validateConfirmPassword
    );


    /* =====================================================
       SUBMIT
    ===================================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const nameValid =
                validateName();


            const emailValid =
                validateEmail();


            const passwordValid =
                validatePassword();


            const confirmValid =
                validateConfirmPassword();


            const termsValid =
                validateTerms();


            if (
                !nameValid ||
                !emailValid ||
                !passwordValid ||
                !confirmValid ||
                !termsValid
            ) {

                return;

            }


            /* =========================================
               SAVE ACCOUNT DATA
            ========================================= */

            sessionStorage.setItem(
                "stacklySignupRole",
                selectedRole
            );

            sessionStorage.setItem(
                "stacklySignupName",
                name.value.trim()
            );

            sessionStorage.setItem(
                "stacklySignupEmail",
                email.value.trim()
            );


            /* =========================================
               GO TO LOGIN
            ========================================= */

            window.location.href =
                "login.html";

        }
    );


    /* =====================================================
       RESET FORM
    ===================================================== */

    function resetSignupForm() {

        form.reset();


        password.type =
            "password";

        confirmPassword.type =
            "password";


        [
            nameError,
            emailError,
            passwordError,
            confirmPasswordError,
            termsError
        ].forEach((error) => {

            error.textContent = "";

            error.classList.remove(
                "show"
            );

        });


        document
            .querySelectorAll(
                ".signup-input-box"
            )
            .forEach((box) => {

                box.classList.remove(
                    "input-error",
                    "input-success"
                );

            });


        document
            .querySelectorAll(
                ".signup-password-toggle .material-symbols-outlined"
            )
            .forEach((icon) => {

                icon.textContent =
                    "visibility_off";

            });


        roleButtons.forEach((button) => {

            button.classList.remove(
                "active"
            );

        });


        const defaultRole =
            document.querySelector(
                '.signup-role[data-role="client"]'
            );


        if (defaultRole) {

            defaultRole.classList.add(
                "active"
            );

            selectedRole =
                "client";

        }

    }


    /* =====================================================
       RESET WHEN RETURNING
    ===================================================== */

    window.addEventListener(
        "pageshow",
        () => {

            resetSignupForm();

        }
    );


    resetSignupForm();

});