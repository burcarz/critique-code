// modal activation, threads to the signup/login handlers
async function btnClickHandler(event) {
    event.preventDefault();
    document.getElementById('log-btn').addEventListener('submit', loginFormHandler);
    document.getElementById('signup-btn').addEventListener('submit', signupFormHandler);

    let modal = document.getElementById('signup-modal');
    modal.style.display = "block";

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        modal.style.display = "none"
    });

    window.onclick = function(event) {
        let modal = document.getElementById('signup-modal');
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }
    console.log('clicked!');
}
// sign up form that POSTS new user data to /api/users
async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector("#password-signup").value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            console.log('failure to signup');
        }
    }
}
// login form posts user info to our login route
async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('success');
        } else {
            console.log('failure to login')
        }
    }
}

document.getElementById('signup-btn').addEventListener('click', btnClickHandler);