const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const field = form.querySelectorAll("input");

    let fullField = true;

    field.forEach(input => {
        if (input.value.trim() === "")
            fullField = false;
    });
    if (!fullField) {
        alert('Please fill in all fields.');
        return;
    }
    const emailValue = document.getElementById("email").value.trim();

    if (!emailValue.includes("@") || emailValue.includes(" ")) {
        alert("please input valied E-mail.");
        return;
    }
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        alert("password can't be less than 8 characters.")
        return;
    }
    const registerPage = form.querySelector("h1").textContent.toLowerCase().includes("register");
    if (registerPage) {
        const confirm = document.getElementById("confirm").value;


        if (password !== confirm) {
            alert("password and Confirm password don't match.")
            return;
        }
        alert("Registered successfully.")
        window.location.href = "../Home/home.html"
    }
    else {
        alert("logged in successfully.")
        window.location.href = "../Home/home.html"
    }
    form.reset();
})


