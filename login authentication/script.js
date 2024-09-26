// DOM element references
var name = document.getElementById("firstName");
var email = document.getElementById("email");
var pass = document.getElementById("password");
var cpass = document.getElementById("confirmPassword");
const toggleButton = document.getElementById("togglebutton");
const eye = document.getElementById("showpass");
const confirmToggleButton = document.getElementById("confirmtogglebutton");
const confirmEye = document.getElementById("confirmeye");

// Toggle password visibility
toggleButton.addEventListener('click', () => {
  if (pass.type === "password") {
    pass.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    pass.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
});

// Toggle confirm password visibility
confirmToggleButton.addEventListener('click', () => {
  if (cpass.type === "password") {
    cpass.type = "text";
    confirmEye.classList.remove("fa-eye-slash");
    confirmEye.classList.add("fa-eye");
  } else {
    cpass.type = "password";
    confirmEye.classList.remove("fa-eye");
    confirmEye.classList.add("fa-eye-slash");
  }
});

// Registration form validation and submission
function registration(event) {
  event.preventDefault();

  var name = document.getElementById("firstName").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var cpass = document.getElementById("confirmPassword").value;

  // Validate if all fields are filled
  if (!name || !email || !pass || !cpass) {
    Swal.fire({
      title: 'Error!',
      text: 'All fields are required!',
      icon: 'error',
      confirmButtonText: 'Go Back'
    });
    return;
  }

  // Password regex pattern
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  // Check if passwords match
  if (pass !== cpass) {
    Swal.fire({
      title: 'Error!',
      text: 'Passwords should be the same',
      icon: 'error',
      confirmButtonText: 'Go Back'
    });
    return;
  }

  // Check if password follows the required format
  if (!regex.test(pass)) {
    Swal.fire({
      title: 'Error!',
      html: `Your password must contain: 
            <ul>
              <li>At least one lowercase letter [a-z]</li>
              <li>At least one uppercase letter [A-Z]</li>
              <li>At least one number [0-9]</li>
              <li>At least one special character [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]</li>
              <li>Length must be between 8-15 characters</li>
            </ul>`,
      icon: 'error',
      confirmButtonText: 'Go Back'
    });
    return;
  }

  // Create userdata object and store in localStorage
  var userdata = {
    name: name,
    email: email,
    pass: pass,
    cpass: cpass
  };

  localStorage.setItem("userdata", JSON.stringify(userdata));
  console.log("Stored userdata:", JSON.stringify(userdata));

  // Success message and redirect to login page
  Swal.fire({
    title: 'Success!',
    text: 'Sign up successful!',
    icon: 'success'
  });

  setTimeout(() => {
    window.location.href = "./login.html";

  }, 2000);
}

// Fetch data from localStorage and display
function getlocaldata() {
  var getdata = localStorage.getItem("userdata");
  if (getdata) {
    var parsedata = JSON.parse(getdata);
    console.log(parsedata);
    var dataget = document.getElementById("dataget");
    dataget.innerHTML = `${parsedata.name}, Welcome to the dashboard`;
  }
}

// Logout function
function logout() {
  window.location.href = "./login.html";
}

// Login function
function login(event) {
  event.preventDefault();

  var getdata = localStorage.getItem("userdata");
  var parsedata = JSON.parse(getdata);
  var emailInput = document.getElementById("email").value;
  var passwordInput = document.getElementById("password").value;

  // Validate if localStorage data exists
  if (!getdata) {
    Swal.fire({
      title: 'Error!',
      text: 'No user data found! Please sign up first.',
      icon: 'error',
      confirmButtonText: 'Go Back'
    });
    return;
  }

  // Validate email and password
  if (parsedata.email !== emailInput) {
    Swal.fire({
      title: 'Error!',
      text: 'Invalid Email',
      icon: 'error',
      confirmButtonText: 'Go Back'
    });
    return;
  } else if (parsedata.pass !== passwordInput) {
    Swal.fire({
      title: 'Error!',
      text: 'Invalid Password',
      icon: 'error',
      confirmButtonText: 'Go Back'
    });
    return;
  }

  // Success message and redirect to dashboard
  Swal.fire({
    title: 'Success!',
    text: 'Login successful!',
    icon: 'success',
    confirmButtonText: 'Proceed'
  });

  setTimeout(() => {
    window.location.href = "./dashboard.html";
  }, 2000);
}

// Attach event listeners to forms
document.getElementById('signupForm').addEventListener('submit', registration);
document.getElementById("login").addEventListener("submit", login);
