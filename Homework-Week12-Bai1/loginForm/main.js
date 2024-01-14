const form = document.getElementById("formId");
const email = document.getElementById('email');
const pass = document.getElementById('password');
const but = document.getElementById('sign-in');
function submitForm(event) {
    console.log(email.value);
    console.log(pass.value);
    event.preventDefault();
}


but.addEventListener('click', submitForm);
