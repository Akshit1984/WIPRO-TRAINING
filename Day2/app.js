const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "audi" && password === "280502") {
        alert("Login successful!");
        window.location.href = "app.html";
    } else {
        alert("Invalid username or password.");
    }
}