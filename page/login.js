function checkEmail(email) {
    return email.includes('@');
}
document.getElementById('btn btn-primary').addEventListener('click', function() {
    var email = document.getElementById('floatingInput').value;
    if (checkEmail(email)) {
        // Store email in local storage
        localStorage.setItem('userEmail', email);
        alert('Login successful!');
    } else {
        // Prompt for valid email
        alert('Invalid email format!');
    }
});
// When the page loads, check if there's a stored email and display it in the input field
window.onload = function() {
    var storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
        document.getElementById('floatingInput').value = storedEmail;
    }
};
