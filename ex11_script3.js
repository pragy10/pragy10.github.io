function startTimer() {
    var timer = document.getElementById("timer");
    setInterval(function(){
        var now = new Date();
        var hours = now.getHours().toString().padStart(2, '0');
        var minutes = now.getMinutes().toString().padStart(2, '0');
        var seconds = now.getSeconds().toString().padStart(2, '0');
        timer.innerHTML = hours + ":" + minutes + ":" + seconds;
    }, 1000);
}
 
function validateForm(){
    document.querySelectorAll('.error').forEach(function(element) {
        element.textContent = '';
    });
 
    var name = document.getElementById("name");
    var addr = document.getElementById("addr");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("ph");
    var email = document.getElementById("email");
    var pwd = document.getElementById("pwd");
    var vpwd = document.getElementById("vpwd");
    var pan = document.getElementById("pan");
    var country = document.getElementById("country");
 
    let isValid = true;
 
    if (name.value == "" || name.value.length > 15) {
        document.getElementById('nameError').textContent = 'Please enter your name!';
        isValid = false;
    }
 
    if (addr.value == "") {
        document.getElementById('addrError').textContent = 'Please enter your address!';
        isValid = false;
    }
 
    if (zip.value == "" || isNaN(zip.value) || zip.value.length > 6) {
        document.getElementById('zipError').textContent = "Zip code should be numeric and max 6 digits.";
        isValid = false;
    }
 
    if (phone.value == "" || isNaN(phone.value) || phone.value.length != 10) {
        document.getElementById('phoneError').textContent = "Phone number should be numeric and exactly 10 digits.";
        isValid = false;
    }
 
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value == "" || !emailPattern.test(email.value)) {
        document.getElementById('emailError').textContent = "Please enter a valid email address.";
        isValid = false;
    }
 
    var pwdPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
    if (pwd.value == "" || !pwdPattern.test(pwd.value)) {
        document.getElementById('pwdError').textContent = "Password should contain a letter, number, special character, and be between 8 to 15 characters.";
        isValid = false;
    }
 
    if (pwd.value != vpwd.value) {
        document.getElementById('vpwdError').textContent = "Passwords do not match.";
        isValid = false;
    }
 
    var panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (pan.value == "" || !panPattern.test(pan.value)) {
        document.getElementById('panError').textContent = "Please enter a valid PAN number.";
        isValid = false;
    }
 
    if (country.value == "") {
        document.getElementById('countryError').textContent = "Please select a country.";
        isValid = false;
    }
 
    return isValid;
}
 
window.onload = function() {
    startTimer();
};