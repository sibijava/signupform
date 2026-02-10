console.log("This is Sparta!!!");

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

console.log(password.value.length);
console.log(email.validity.valid);
console.log(password);

firstName.addEventListener("input", () => {
  if (firstName.value.length < 1) {
    firstName.classList.add("invalid");
    firstNameError.style.display = "block";
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
    lastNameErrorImage.style.display = "block";
  } else {
    lastName.classList.remove("invalid");
    lastNameError.style.display = "none";
    lastNameErrorImage.style.display = "none";
  }
});

email.addEventListener("input", () => {
  if (email.value.length < 1) {
    email.classList.add("invalid");
    emailError.style.display = "block";
    emailErrorImage.style.display = "block";
    console.log(email.validity.valid);
  } else {
    email.classList.remove("invalid");
    emailError.style.display = "none";
    emailErrorImage.style.display = "none";
    console.log(email.validity.valid);
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 1) {
    password.classList.add("invalid");
    passwordError.style.display = "block";
    passwordErrorImage.style.display = "block";
  } else {
    password.classList.remove("invalid");
    passwordError.style.display = "none";
    passwordErrorImage.style.display = "none";
  }
});

button.addEventListener("click", () => {
  console.log("this was clicked!!!");
});
