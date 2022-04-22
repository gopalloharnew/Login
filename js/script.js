const passwordToggleButton = document.querySelector(".password-toggle-button");
const passwordInput = document.getElementById("password");

passwordToggleButton.addEventListener("click", (e) => {
  e.preventDefault();
  let passwordInputType =
    passwordInput.type === "password" ? "text" : "password";
  passwordInput.type = passwordInputType;
});

document.querySelector(".login-form").addEventListener("submit", (e)=>{
  e.preventDefault();
  document.querySelector(".message").classList.add("show");
  setTimeout(()=>{
  document.querySelector(".message").classList.remove("show");
  }, 2000)
})