"use strict";

(function () {
  // Name
  const nameEl = document.querySelector(".register-name");
  nameEl.addEventListener("input", (event) => {
    console.log(event.target.value);
  });

  // nameErr
  const nameErr = document.querySelector(".req-name-error");

  // Email
  const emailEl = document.querySelector(".register-email");
  emailEl.addEventListener("input", (event) => {
    console.log(event.target.value);
  });

  //Email Error
  const emailErr = document.querySelector(".register-email-error");

  // Confirm Email
  const confirmEmailEl = document.querySelector(".register-confirm-email");
  emailEl.addEventListener("input", (event) => {
    console.log(event.target.value);
  });

  // Confirm Email Error
  const confirmEmailErr = document.querySelector(
    ".register-confirm-email-error"
  );

  // Email Match Error
  const emailMatchErr = document.querySelector(".email-match-error");

  // Name change eventListener
  nameEl.addEventListener("change", (event) => {
    const name = nameEl.value;
    let isnameInvalid = false;

    if (!name) {
      nameErr.classList.remove("register-name-error");
      isnameInvalid = true;
    }

    if (isnameInvalid) {
      event.preventDefault();
    } else {
      nameErr.classList.add("register-name-error");
    }
  });

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

  const formEl = document.querySelector(".register");

  formEl.addEventListener("submit", (event) => {
    const name = nameEl.value;
    const emailGroupEl = emailEl.value;
    const confirmGroupEl = confirmEmailEl.value;

    // const isFormnameInvalid = !name;
    // if (isFormnameInvalid) {
    //     let name_error = document.querySelector(".register-name-error");
    //     name_error.classList.toggle("register-name");
    //     event.preventDefault();
    // }

    // Name
    let isnameInvalid = false;

    if (!name) {
      nameErr.classList.remove("register-name-error");
      isnameInvalid = true;
    }

    if (isnameInvalid) {
      event.preventDefault();
    } else {
      nameErr.classList.add("register-name-error");
    }

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
  });
})();
