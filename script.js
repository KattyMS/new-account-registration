const form = document.getElementById("registration");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const familyName = document.getElementById("family-name").value.trim();
    const mail = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value
    
    if (!firstName || !familyName || !mail || !password || !confirmPassword) {
        message.textContent = "Please enter all the information";
        message.style.color = '#00ADB5';
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "The password doesn't match. Please re-enter the password again!";
        message.style.color = "red";
        return;
    }

 //   message.style.color = "green";
    message.textContent = "Succesfully registered!"


});