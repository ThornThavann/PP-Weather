function checkEmail(email) {
    return email.includes('@');
}

console.log(checkEmail("thavann")); // false
console.log(checkEmail("123")); // false
console.log(checkEmail("")); // false
console.log(checkEmail("thavann@")); // true
console.log(checkEmail("thavann@pse.ngo")); // true

export default checkEmail;