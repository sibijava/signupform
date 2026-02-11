const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("button");
const firstNameError = document.querySelector(".first-name-error");
const lastNameError = document.querySelector(".last-name-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const firstNameErrorImage = document.querySelector(".first-name-error__img");
const lastNameErrorImage = document.querySelector(".last-name-error__img");
const emailErrorImage = document.querySelector(".email-error__img");
const passwordErrorImage = document.querySelector(".password-error__img");

firstName.addEventListener("input", () => {
  if (firstName.value.length < 1) {
    firstName.classList.add("invalid");
    firstNameError.style.display = "block";
    firstName.placeholder = "";
    firstNameErrorImage.style.display = "block";
  } else {
    firstName.classList.remove("invalid");
    firstNameError.style.display = "none";
    firstNameErrorImage.style.display = "none";
  }
});

lastName.addEventListener("input", () => {
  if (lastName.value.length < 1) {
    lastName.classList.add("invalid");
    lastNameError.style.display = "block";
    lastName.placeholder = "";
    lastNameErrorImage.style.display = "block";
  } else {
    lastName.classList.remove("invalid");
    lastNameError.style.display = "none";
    lastNameErrorImage.style.display = "none";
  }
});

email.addEventListener("input", () => {
  if (!email.validity.valid) {
    if (email.value.length < 1) {
      email.placeholder = "";
      emailError.textContent = "Email cannot be empty";
    } else {
      emailError.textContent = "Looks like this is not an email";
      email.classList.add("invalid");
      emailError.style.display = "block";
      emailErrorImage.style.display = "block";
    }
  } else {
    email.classList.remove("invalid");
    emailError.style.display = "none";
    emailErrorImage.style.display = "none";
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 1) {
    password.classList.add("invalid");
    passwordError.style.display = "block";
    password.placeholder = "";
    passwordErrorImage.style.display = "block";
  } else {
    password.classList.remove("invalid");
    passwordError.style.display = "none";
    passwordErrorImage.style.display = "none";
  }
});

button.addEventListener("click", () => {
  if (
    firstName.validity.valid &&
    lastName.validity.valid &&
    email.validity.valid &&
    password.validity.valid
  ) {
    alert("Thank you for signing up!!!");
  } else {
    alert(
      "Please fill out the form properly with valid information. All fields are required!",
    );
  }
});
