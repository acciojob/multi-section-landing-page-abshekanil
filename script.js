//your JS code here. If required.
let name = document.getElementById('name');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('number');
let message = document.getElementById('message');
let submitBtn = document.getElementById('btn');
let validationForm = document.getElementById('validation');

submitBtn.addEventListener('click', function(){
	validationForm.style.display = "block";
});