"use strict";

(function () {
    // Menu
    // const buttonEl = document.querySelector(".gg-menu");
    // const dropDownList = document.querySelector(".globalnav__menu");

    // buttonEl.addEventListener(
    //     "click",
    //     (function () {
    //         console.log("inside");
    //         dropDownList.classList.toggle("show");
    //     })()
    // );

    // Modal open and Close
    const modal = document.querySelector(".modal");
    //   const openModal = document.querySelector(".cats__card-content-subscribe")
    const openModal = document.getElementsByClassName(
        "cats__card-content-subscribe"
    );

    for (let i = 0; i < openModal.length; i++) {
        console.log("inside loop");
        openModal[i].addEventListener("click", () => {
            modal.showModal();
        });
    }

    // Cancel Button
    const cancelModal = document.querySelector(".cancel-button");

    cancelModal.addEventListener("click", () => {
        modal.close();
    });

    // Email
    const emailEl = document.querySelector(".subscribe-email");
    emailEl.addEventListener("input", (event) => {
        console.log(event.target.value);
    });

    //Email Error
    const emailErr = document.querySelector(".subscribe-email-error");

    // Confirm Email
    const confirmEmailEl = document.querySelector(".subscribe-confirm-email");
    emailEl.addEventListener("input", (event) => {
        console.log(event.target.value);
    });

    // Confirm Email Error
    const confirmEmailErr = document.querySelector(
        ".subscribe-confirm-email-error"
    );

    // Email Match Error
    const emailMatchErr = document.querySelector(".email-match-error");

    // Email Validation Error
    const validateEmail = document.querySelector(".invalid-email");

    // Remove Email Error after input
    emailEl.addEventListener("input", (event) => {
        const emailGroupEl = emailEl.value;
        let isEmailInvalid = false;
        if (!emailGroupEl) {
            emailErr.innerText = "* Please enter email ID";
            isEmailInvalid = true;
        }

        if (isEmailInvalid) {
            event.preventDefault();
        } else {
            emailErr.innerText = "";
        }
    });

    // Remove Confirm Email Error after input
    confirmEmailEl.addEventListener("input", (event) => {
        const confirmGroupEl = confirmEmailEl.value;
        let isConfirmEmailInvalid = false;
        if (!confirmGroupEl) {
            confirmEmailErr.innerText = "* Please confirm email ID";
            isConfirmEmailInvalid = true;
        }

        if (isConfirmEmailInvalid) {
            event.preventDefault();
        } else {
            confirmEmailErr.innerText = "";
        }
    });

    // Validate Email
    emailEl.addEventListener("change", (event) => {
        const emailGroupEl = emailEl.value;
        let isEmailValid = false;
        let regex = "@";
        if (!emailGroupEl.match(regex)) {
            emailErr.innerText = "* Please enter valid email with @";
            isEmailValid = true;
        }

        if (isEmailValid) {
            event.preventDefault();
        } else {
            emailErr.innerText = "";
        }
    });

    // Validate Confirm Email
    confirmEmailEl.addEventListener("change", (event) => {
        const confirmGroupEl = confirmEmailEl.value;
        let isConfirmEmailValid = false;
        let regex = "@";
        if (!confirmGroupEl.match(regex)) {
            confirmEmailErr.innerText = "* Please enter valid email with @";
            isConfirmEmailValid = true;
        }

        if (isConfirmEmailValid) {
            event.preventDefault();
        } else {
            confirmEmailErr.innerText = "";
        }
    });

    const formEl = document.querySelector(".subscription-form");

    formEl.addEventListener("submit", (event) => {
        const emailGroupEl = emailEl.value;
        const confirmGroupEl = confirmEmailEl.value;

        // Email
        let isEmailInvalid = false;
        if (!emailGroupEl) {
            emailErr.innerText = "* Please enter email ID";
            isEmailInvalid = true;
        }

        if (isEmailInvalid) {
            event.preventDefault();
        } else {
            emailErr.innerText = "";
        }

        // Confirm Email
        let isConfirmEmailInvalid = false;
        if (!confirmGroupEl) {
            confirmEmailErr.innerText = "* Please confirm email ID";
            isConfirmEmailInvalid = true;
        }

        if (isConfirmEmailInvalid) {
            event.preventDefault();
        } else {
            confirmEmailErr.innerText = "";
        }

        // Match Email
        if (emailGroupEl != confirmGroupEl) {
            emailMatchErr.innerText = "* Email not matching";
            event.preventDefault();
        } else {
            emailMatchErr.innerText = "";
        }

        // Validate Email
        let isEmailValid = false;
        let regex = "@";
        if (!emailGroupEl.match(regex)) {
            emailErr.innerText = "* Please enter valid email with @";
            isEmailValid = true;
        }

        if (isEmailValid) {
            event.preventDefault();
        } else {
            emailErr.innerText = "";
        }

        // Validate Confirm Email
        let isConfirmEmailValid = false;
        if (!confirmGroupEl.match(regex)) {
            confirmEmailErr.innerText = "* Please enter valid email with @";
            isConfirmEmailValid = true;
        }

        if (isConfirmEmailValid) {
            event.preventDefault();
        } else {
            confirmEmailErr.innerText = "";
        }
    });
})();


let buttonEl = document.querySelector(".gg-menu");
function myFunction()
  {
    let dropDownList = document.querySelector(".globalnav__menu");
    dropDownList.classList.toggle("show");
  }

  buttonEl.addEventListener("click", myFunction);