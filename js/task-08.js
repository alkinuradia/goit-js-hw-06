const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: {email, password},
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Заповни всі поля!");
    }
    const infoUser = {
        email: email.value,
        password: password.value,
    };
    console.log(infoUser);

    event.currentTarget.reset();
 }
