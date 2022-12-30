const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const eye = document.querySelector(".eye");
const hide = document.querySelector(".hide");
const view = document.querySelector(".view");
const hide2 = document.querySelector(".hide2");
const view2 = document.querySelector(".view2");
const password = document.querySelector(".psw");
const password2 = document.querySelector(".psw2");

const inputFirstName = document.querySelector('#firstname');
const inputLastName = document.querySelector('#lastname');
const inputLogin = document.querySelector('#login');
const inputEmail = document.querySelector('#email');
const inputPhoneNumber = document.querySelector('#phoneNumber');
const inputPassword = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

nextBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		changeStep("next");
	});
});

prevBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		changeStep("prev");
	});
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const inputs = [];
	form.querySelectorAll("input").forEach((input) => {
		const { name, value } = input;
		inputs.push({ name, value });
	});
	console.log(inputs);
	form.reset();
});

function changeStep(btn) {
	let index = 0;
	const active = document.querySelector(".active");
	if (inputFirstName.value == "" || inputLastName.value == "" || inputLogin.value == "") {
		alert("Заполните поля");
	} else if (inputEmail.value == "" || inputPhoneNumber.value == "") {
		alert("Заполните поля");
	} else if (inputPassword.value == "" || confirmPassword.value == "") {
		alert("Заполните поля");
	} else {
		index = steps.indexOf(active);
		steps[index].classList.remove("active");
		if (btn === "next") {
			index++;
		} else if (btn === "prev") {
			index--;
		}
		steps[index].classList.add("active");
	}
}

hide.addEventListener('click', () => {
	hide.classList.remove('on');
	view.classList.add('on');
	password.type = 'text';
});

view.addEventListener('click', () => {
	hide.classList.add('on');
	view.classList.remove('on');
	password.type = 'password';

});

hide2.addEventListener('click', () => {
	hide2.classList.remove('on');
	view2.classList.add('on');
	password2.type = 'text';
});

view2.addEventListener('click', () => {
	hide2.classList.add('on');
	view2.classList.remove('on');
	password2.type = 'password';
});