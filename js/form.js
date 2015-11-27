var section = document.querySelector(".contacts");
var form = section.querySelector(".main-form");

var inputName = form.querySelector(".form-name");
var inputMail = form.querySelector(".form-mail");
var wrapperName = form.querySelector(".name-wrapper");
var wrapperMail = form.querySelector(".mail-wrapper");
var text = form.querySelector(".form-text");
var wrapper = form.querySelector(".textarea-wrapper");

var r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

window.localStorage.clear();

/*скрипт на валидацию поля e-mail*/
inputMail.addEventListener("input", function(event){
	if (!r.test(inputMail.value)) {
		if (wrapperMail.classList.contains("input-valid")){
			event.preventDefault();
			wrapperMail.classList.remove("input-valid");
			wrapperMail.classList.add("input-invalid");
		}
	}
	else if (r.test(inputMail.value)) {
		if (wrapperMail.classList.contains("input-invalid")){
			event.preventDefault();
			wrapperMail.classList.remove("input-invalid");
			wrapperMail.classList.add("input-valid");
		}
	}
});


inputMail.addEventListener("focus", function(event){
	if (!inputMail.value || !r.test(inputMail.value)){
		event.preventDefault();
		wrapperMail.classList.add("input-invalid");
	}
	else {
		event.preventDefault();
		wrapperMail.classList.add("input-valid");
	}
});

inputMail.addEventListener("focusout", function(event){
	if (wrapperMail.classList.contains("input-valid")){
		event.preventDefault();
		wrapperMail.classList.remove("input-valid");
	}
	else if (wrapperMail.classList.contains("input-invalid")){
		event.preventDefault();
		wrapperMail.classList.remove("input-invalid");
	}
});


/*скрипт на валидацию поля имени*/
inputName.addEventListener("focus", function(event){
	if (!inputName.value) {
		event.preventDefault();
		wrapperName.classList.add("input-invalid");
	}
	else {
		event.preventDefault();
		wrapperName.classList.add("input-valid");
	}
});

inputName.addEventListener("input", function(event){
	if (inputName.value){
		if(wrapperName.classList.contains("input-invalid")){
			event.preventDefault();
			wrapperName.classList.remove("input-invalid");
			wrapperName.classList.add("input-valid");
		}
	}
	else if (!inputName.value){
		if (wrapperName.classList.contains("input-valid")){
			event.preventDefault();
			wrapperName.classList.remove("input-valid");
			wrapperName.classList.add("input-invalid");
		}
	}
});

inputName.addEventListener("focusout", function(event){
	if (wrapperName.classList.contains("input-valid")){
		event.preventDefault();
		wrapperName.classList.remove("input-valid");
	}
	else if(wrapperName.classList.contains("input-invalid")){
		event.preventDefault();
		wrapperName.classList.remove("input-invalid");
	}
});

/*скрипт на валидацию текстовой области под сообщение*/
text.addEventListener("focus", function(event){
	if (!text.value) {
		event.preventDefault();
		wrapper.classList.add("textarea-invalid");
	}
	else
	{
		event.preventDefault();
		wrapper.classList.add("textarea-valid");
	}
});

text.addEventListener ("input", function(event){
	if (text.value) {
		if (wrapper.classList.contains("textarea-invalid")){
				event.preventDefault();
				wrapper.classList.remove("textarea-invalid");
				wrapper.classList.add("textarea-valid");
		}
	}
	else if(!text.value){
		if (wrapper.classList.contains("textarea-valid")){
			event.preventDefault();
			wrapper.classList.remove("textarea-valid");
			wrapper.classList.add("textarea-invalid");
		}
	}
});

text.addEventListener("focusout", function(event){
	if (wrapper.classList.contains("textarea-valid")) {
		event.preventDefault();
		wrapper.classList.remove("textarea-valid");
	}
	else if (wrapper.classList.contains("textarea-invalid")) {
		event.preventDefault();
		wrapper.classList.remove("textarea-invalid");
	}
});

/*скрипт на валидацию отправки формы*/
form.addEventListener("submit", function(event){
	if (!inputName.value || !inputMail.value || !text.value || !r.test(inputMail.value)) {
		event.preventDefault();
		form.classList.toggle("form-error");
	}
});

form.addEventListener("webkitAnimationEnd", function(event){
	if(form.classList.contains("form-error")) {
		event.preventDefault();
		form.classList.remove("form-error");
	}
});

