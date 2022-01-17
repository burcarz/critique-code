
window.onload = function() {
	const logInBtn = document.getElementById("logIn");
	const signUpBtn = document.getElementById("signUp");
	const firstForm = document.getElementById("form1");
	const secondForm = document.getElementById("form2");
	const container = document.querySelector(".container");

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
}