document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');

    if (password !== confirmPassword) {
      passwordError.style.display = 'block';
    } else {
      passwordError.style.display = 'none';
      // Submit the form or perform any action
      alert('Sign up successful!');
    }
  });