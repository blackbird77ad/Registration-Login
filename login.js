//declare variable loginForm to collect Form by ID
const loginForm = document.querySelector("#login");

//loginForm handler
loginForm.addEventListener = ("submit", function(event) {
  event.preventDefault();

  //collect formData
  const formData = new FormData(loginForm);
  //send Data to Backend later
  //Display Success message
  const messageH1 = document.querySelector("#message");
  // messageH1.textContent = "Login Successful!";
})

//write Fullname Function: parameters: first name and last name and return function.
function fullName (firstName, lastName) {
    // return firstName + LastName;
    return `${firstName} ${lastName}`;
}

const myName = fullName("Davida", "Prempeh")
console.log(myName);