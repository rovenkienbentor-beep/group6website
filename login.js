
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

showPassword.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        showPassword.textContent = "Hide Password";
    } else {
        password.type = "password";
        showPassword.textContent = "Show Password";
    }
};