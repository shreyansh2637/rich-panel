const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginToggle = document.getElementById("login-toggle");
const registerToggle = document.getElementById("register-toggle");
const switchFormLink = document.getElementById("switch-form");

loginToggle.addEventListener("click", () => {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    switchFormLink.textContent = "Don't have an account? Register here";
});

registerToggle.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    switchFormLink.textContent = "Already have an account? Login here";
});

switchFormLink.addEventListener("click", () => {
    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        switchFormLink.textContent = "Already have an account? Login here";
    } else {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        switchFormLink.textContent = "Don't have an account? Register here";
    }
});

// Initially, show the login form
loginForm.style.display = "block";
registerForm.style.display = "none";
