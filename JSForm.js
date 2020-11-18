const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});
//Event Listener and validation for name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    }
    else {
        textError.textContent = "Name is incorrect";
    }
}); 
//Event Listener and validation for email
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[a-zA-Z0-9_]+[-+.]?[A-Za-z0-9_]+@[A-Za-z0-9]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
    if(emailRegex.test(email.value)){
        emailError.textContent = "";
    }else{
        emailError.textContent = "Email is incorrect";
    }
}); 