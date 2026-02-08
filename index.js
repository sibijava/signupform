console.log("This is Sparta!!!");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.querySelector("button");
let field = "";
let emptyErrorMessage = `${field} cannot be empty`;

firstName.addEventListener("input", () => {
  if (firstName.value.length < 1) {
    firstName.classList.add("invalid");
    field = "First Name";
    console.log(field);
    console.log(emptyErrorMessage);
  } else {
    firstName.classList.remove("invalid");
  }
});

button.addEventListener("click", () => {
  console.log("this was clicked!!!");
});
