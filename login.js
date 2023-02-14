document.getElementById('submit-button').addEventListener('click', function () {

    const emailField = document.getElementById('user-email')
    const email = emailField.value;
    console.log(email);

    const passField = document.getElementById('user-password')
    const password = passField.value;
    console.log(password);

    if (email == "abc@gmail.com" && password == 1234) {
        window.location.href = 'bank.html'
    }
    else {
        const emailError = document.getElementById('email-error')
        emailError.style.display ='block';
        const passlError = document.getElementById('password-error')
        passlError.style.display ='block';
    }
})