const password = document.getElementById('pwd');
const confirmPassword = document.getElementById('cpwd');

confirmPassword.addEventListener("input",() => {
    if(confirmPassword.value !== password.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.style.borderColor = "red";
        password.style.borderColor = "red";
    }
    else{
        confirmPassword.setCustomValidity("");
        confirmPassword.style.borderColor = "#d0d3d7";
        password.style.borderColor = "#d0d3d7"
    }
}

);