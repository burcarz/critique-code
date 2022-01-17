
// modal activation, threads to the signup/login handlers
async function btnClickHandler(event) {
    event.preventDefault();
    const logInBtn = document.getElementById("logIn");
	const signUpBtn = document.getElementById("signUp");
	const firstForm = document.getElementById("form1");
	const secondForm = document.getElementById("form2");
	const container = document.querySelector(".container");

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
    logInBtn.addEventListener("click", () => {
		console.log('clicked')
		container.classList.remove("right-panel-active");
	});

	signUpBtn.addEventListener("click", () => {
		console.log('clicked')
		container.classList.add("right-panel-active");
	});

    firstForm.addEventListener("submit", (e) => e.preventDefault());
	secondForm.addEventListener("submit", (e) => e.preventDefault());
    console.log('clicked!');
    document.querySelector('#log-btn').addEventListener('click', loginFormHandler);
    document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);
}
// sign up form that POSTS new user data to /api/users
async function signupFormHandler(event) {
    event.preventDefault();
    let modal = document.getElementById('signup-modal');
    console.log('clicked')
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    console.log(email);
    console.log(username);
    console.log(password);
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
            modal.style.display = 'none';
            document.location.replace('/')
        } else {
            console.log('failure to signup');
        }
    }
}
// login form posts user info to our login route
async function loginFormHandler(event) {
    event.preventDefault();
    let modal = document.getElementById('signup-modal');
    console.log('clicked')
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
            modal.style.display = 'none';
            document.location.replace('/');
        } else {
            console.log('failure to login')
        }
    }
}

window.onload = function() {
    document.querySelector('#signup-btn').addEventListener('click', btnClickHandler);
    document.querySelector('#login-btn').addEventListener('click', btnClickHandler);
}
