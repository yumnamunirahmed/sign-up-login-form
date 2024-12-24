function toggleForm(formType) {
    if (formType === 'signup') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    } else {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
}
function loginValidation(event) {
    event.preventDefault(); 
 const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    alert('Login successful');
    return true;
}
function signupValidation(event) {
    event.preventDefault(); 
  const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (name.trim() === '') {
        alert('Full name is required');
        return false;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    alert('Signup successful');
    return true;
}
