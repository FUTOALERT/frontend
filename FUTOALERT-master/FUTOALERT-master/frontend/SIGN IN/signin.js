function validateForm(event) {
    event.preventDefault();
  
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
  
    let isValid = true;
  
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
      alert("Sign-In Successful!");
    }
  }
  