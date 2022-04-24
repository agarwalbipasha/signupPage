var regexName = /^[a-zA-Z]+$/;
var isValidFirstName = false;
var isValidLastName = false;
var regexEmail = /^[a-zA-Z0-9.-_]+@[a-zA-Z]+.(com|org|co.in|co.uk)$/;
var isValidEmail = false;
var isValidPassword = false;
var isValidConfirmPassword = false;
var isValidAgree = false;

function onLoad() {
  var firstNameWarning = document.getElementById("firstNameWarning");
  var lastNameWarning = document.getElementById("lastNameWarning");
  var emailWarning = document.getElementById("emailWarning");
  var passwordWarning = document.getElementById("passwordWarning");
  var confirmWarning = document.getElementById("confirmWarning");
}

function onSubmitClick() {
  //First Name Validation
  var firstName = document.getElementById("firstname").value;
  if (!regexName.test(firstName) && firstName != "") {
    firstNameWarning.classList.remove("warning-hide");
    firstNameWarning.setAttribute("title", "Only alphabets are allowed");
    isValidFirstName = false;
  } else if (regexName.test(firstName)) {
    firstNameWarning.classList.add("warning-hide");
    isValidFirstName = true;
  } else if (firstName == "") {
    firstNameWarning.classList.remove("warning-hide");
    firstNameWarning.setAttribute("title", "First name is required");
    isValidFirstName = false;
  }

  //Last Name Validation
  var lastName = document.getElementById("lastname").value;
  if (!regexName.test(lastName) && lastName != "") {
    lastNameWarning.classList.remove("warning-hide");
    lastNameWarning.setAttribute("title", "Only alphabets are allowed");
    isValidLastName = false;
  } else if (regexName.test(lastName)) {
    lastNameWarning.classList.add("warning-hide");
    isValidLastName = true;
  } else if (lastName == "") {
    lastNameWarning.classList.remove("warning-hide");
    lastNameWarning.setAttribute("title", "Last name is required");
    isValidLastName = false;
  }

  //Email Validation
  var email = document.getElementById("email").value;
  if (!regexEmail.test(email) && email != "") {
    emailWarning.classList.remove("warning-hide");
    emailWarning.setAttribute("title", "Invalid email address");
    isValidEmail = false;
  } else if (regexEmail.test(email)) {
    emailWarning.classList.add("warning-hide");
    isValidEmail = true;
  } else if (email == "") {
    emailWarning.classList.remove("warning-hide");
    emailWarning.setAttribute("title", "Please enter a valid email ID");
    isValidEmail = false;
  }

  //Create password validation
  var password = document.getElementById("password").value;
  if (password == "") {
    passwordWarning.classList.remove("warning-hide");
    passwordWarning.setAttribute("title", "Password cannot be empty");
    isValidPassword = false;
  } else if (password.length < 8) {
    passwordWarning.classList.remove("warning-hide");
    passwordWarning.setAttribute(
      "title",
      "Password should be atleast of 8 characters"
    );
    isValidPassword = false;
  } else {
    passwordWarning.classList.add("warning-hide");
    isValidPassword = true;
  }

  //Confirm password validation
  var confirmPassword = document.getElementById("confirm").value;
  if (confirmPassword != password) {
    confirmWarning.classList.remove("warning-hide");
    confirmWarning.setAttribute("title", "Password mismatch");
    isValidConfirmPassword = false;
  } else {
    confirmWarning.classList.add("warning-hide");
    isValidConfirmPassword = true;
  }

  //checkbox validation
  var isAgree = document.querySelector(".checkbox");
  var isChecked = isAgree.childNodes[1];
  isChecked.addEventListener("click", checkAgree);
  function checkAgree() {
    if (!isChecked.checked) {
      isValidAgree = false;
    } else {
      isValidAgree = true;
    }
  }

  //On successfull submission
  if (
    isValidFirstName &&
    isValidLastName &&
    isValidEmail &&
    isValidPassword &&
    isValidConfirmPassword &&
    isValidAgree
  ) {
    alert("Success");
    document.getElementById("signup-form").reset();
  }
}

function onCancelClick() {
  firstNameWarning.classList.add("warning-hide");
  lastNameWarning.classList.add("warning-hide");
  emailWarning.classList.add("warning-hide");
  passwordWarning.classList.add("warning-hide");
  confirmWarning.classList.add("warning-hide");
  document.querySelector(".checkbox").childNodes[1].checked = false;
}
