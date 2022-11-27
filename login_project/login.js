const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
//przy kliknieciu w przycisk przypisuje to co wpisal uzytkownik
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    //jezeli nazwa i haslo sa poprawne
    if (username === "sawko" && password === "pukawko") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        //jezeli nazwa/haslo jest niepoprawna
        alert("Incorrect username and/or password");
        return false;
    }
})