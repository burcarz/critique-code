const logInBtn = document.getElementById("log-btn");
const signUpBtn = document.getElementById("signup-btn");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const searchForm = document.querySelector('.search-form');
const searchBtn = document.getElementById('search-btn');
const container = document.querySelector(".container");

window.onload = function() {
	logInBtn.addEventListener("click", () => {
		container.classList.remove("right-panel-active");
	});

	signUpBtn.addEventListener("click", () => {
		container.classList.add("right-panel-active");
	});

	fistForm.addEventListener("submit", (e) => e.preventDefault());
	secondForm.addEventListener("submit", (e) => e.preventDefault());
	searchForm.addEventListener('submit', (e) => {
		e.preventDefault();
		const searchText = document.querySelector('input[name="search"]');
		getPostByLanguage(searchText);
	});
}