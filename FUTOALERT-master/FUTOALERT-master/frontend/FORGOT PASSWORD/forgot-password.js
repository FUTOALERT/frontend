function handleFormSubmission(event) {
    event.preventDefault();
  
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
      alert("If this email is associated with an account, a reset link will be sent.");
    }
  }
  