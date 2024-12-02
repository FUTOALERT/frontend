function validateForm(event) {
    event.preventDefault();
  
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    let isValid = true;
  
    if (username.value.trim() === "") {
      usernameError.textContent = "Username is required";
      usernameError.style.display = "block";
      isValid = false;
    } else {
      usernameError.style.display = "none";
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }
  
    if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters long";
      passwordError.style.display = "block";
      isValid = false;
    } else {
      passwordError.style.display = "none";
    }
  
    if (isValid) {
      alert("Sign-Up Successful!");
    }
  }
  