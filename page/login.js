
// import checkEmail from "../js/isEmailValid.js";

function checkEmail(email) {
    return email.includes('@');
}
 document.getElementById('btnbtn-primary').addEventListener('click', function() {
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
// store in localStorage and delete
localStorage.getItem('userEmail');
localStorage.removeItem("userEmail");
 
let emails = JSON.parse(checkEmail);

export default emails ;