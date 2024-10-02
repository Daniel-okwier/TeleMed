const registerButton = document.getElementById("registerButton");
const loginButton = document.getElementById("loginButton");

registerButton.addEventListener("click", function() {
  window.location.href = "register.html";
});

loginButton.addEventListener("click", function() {
  window.location.href = "https://your-login-page.com";
});
