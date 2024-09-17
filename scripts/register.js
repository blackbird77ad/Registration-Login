//Get form element by id
const registerForm = document.querySelector("#register");
//Handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
 // collect form data
  const formData = new FormData(registerForm);
  //send data to backend
  //display success message
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Account registered successfully!";
});






// registerForm.onsubmit = function (event) {
//   event.preventDefault();
//   console.log(event);
// };
 

// declare variable age
const age = 71;
// define square age function
// function squareAge (age) {
//     let newAge = age * age
//     console.log(newAge)
// };

// squareAge(3);

// // method two
// function squareAge (age) {
//     return age ** 2;
// };

// const squaredAge = squareAge(54);
// console.log(squaredAge);

