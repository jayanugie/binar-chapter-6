const loginForm = document.getElementById('loginForm');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

const expectedEmail = 'challenge_nugie@binar.com';
const expectedPassword = 'superpassword';

loginForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const email = inputEmail.value;
    const password = inputPassword.value;

    if (email == expectedEmail && password == expectedPassword) {
        location.href = '/dashboard';
    } else {
        alert('email or password is wrong, try again!');
    }
});

