const form = document.getElementById("registration");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {  /* (e) es un parámetro que representa el evento que ocurrió. */
    e.preventDefault(); /*Evita el comportamiento por defecto del evento (e). */

    const firstName = document.getElementById("first-name").value.trim();
    const familyName = document.getElementById("family-name").value.trim();
    const mail = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if (!firstName || !familyName || !mail || !password || !confirmPassword) {
        message.textContent = "Please enter all the information!";
        message.style.color = '#F3A26D';
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "The passwords do not match, please enter them correctly!";
        message.style.color = "#F3A26D";
        return;
    }

    message.textContent = "Succesfully registered!";
    message.style.color = "#B6F500";


});