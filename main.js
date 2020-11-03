
//Name
var inputName = document.getElementById('name');
var submitBtn = document.getElementById('button');
var errorName = document.getElementById('name-container');
inputName.addEventListener('blur', validateName);
var nameRegex = /^[ ]+$/;
function validateName(e){
    e.preventDefault();
    var name = inputName.value;
    if (name.length > 5 && name.match(nameRegex)){
        console.log(name);
    }else{
        errorName.lastElementChild.style.display = 'block';
    }
}
//Email Loading to the form
var inputEmail = document.getElementById('email');
var errorEmail = document.getElementById('email-container');
inputEmail.addEventListener('blur', validateEmail);
var emailRegex = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{3}$/
function validateEmail(e){
    console.log(e);
    var email = inputEmail.value;
    if (email.match(emailRegex)){
        console.log(email);
    }else{
        errorEmail.lastElementChild.style.display = 'block';
    }
}
//Password
var inputPass = document.getElementById('password');
var errorPass = document.getElementById('pass-container');
inputPass.addEventListener('blur', validatePass);
var passRegex = /^[0-9a-zA-Z]+$/;

function validatePass(e){
    e.preventDefault();
    var pwd = inputPass.value;
    if (pwd.length > 7 && pwd.match(passRegex)){
        console.log(pwd);
    }else{
        errorPass.lastElementChild.style.display = 'block';
    }
}
// Edad
var inputAge = document.getElementById('age');
var errorAge = document.getElementById('age-container');
inputAge.addEventListener('blur', validateAge);

function validateAge(e){
    e.preventDefault();
    var age = inputAge.value;
    if (age.value > 18){
        console.log(age);
    }else{
        errorAge.lastElementChild.style.display = 'block';
    }
}
//Numero Telefonico
var inputPhone = document.getElementById('phone-number');
var errorPhone = document.getElementById('phone-container');
inputPhone.addEventListener('blur', validatePhone);
var phoneRegex = /^[ -()]+$/;
function validatePhone(e){ 
    e.preventDefault();
    var phone = inputPhone.value;
    if (phone.length < 5 || phone.match(phoneRegex)){
        console.log(false);
    }else{
        errorPhone.lastElementChild.style.display = 'block';
    }
}
//Direccion 
var form = document.getElementById('form');
var inputAddress = document.getElementById('address');
var errorAddress = document.getElementById('address-container');
function validateAddress(e){
    e.preventDefault();
    var address = inputAddress.value;
    if (address.length > 4 || address.isElementContentWhitespace){
        console.log(address);
    }else{
        errorAddress.lastElementChild.style.display = 'block';
    }
}
inputAddress.addEventListener('blur', validateAddress);
//City
var inputCity = document.getElementById('city');
var errorCity = document.getElementById('city-container');
inputCity.addEventListener('blur', validateCity);

function validateCity(e){
    e.preventDefault();
    var city = inputCity.value;
    if (city.length > 3){
        //var errorName.lastChildElement.innerContent = '';
        console.log(city);
    }else{
        errorCity.lastElementChild.style.display = 'block';
    }
}
//Codigo Postal
var inputCodpos = document.getElementById('pc');
var errorCodpos = document.getElementById('codpos-container');
inputCodpos.addEventListener('blur', validateCodpost);

function validateCodpost(e){
    e.preventDefault();
    var cpos = inputCodpos.value;
    if (cpos > 3){
        //var errorName.lastChildElement.innerContent = '';
        console.log(cpos);
    }else{
        errorCodpos.lastElementChild.style.display = 'block';
    }
}
//DNI
var inputDoc = document.getElementById('id-number');
var errorDoc = document.getElementById('id-container');
inputDoc.addEventListener('blur', validateDoc);

function validateDoc(e){
    e.preventDefault();
    var doc = inputDoc.value;
    if (doc.length > 6 || doc.length < 8){
        console.log(doc);
    }else{
        errorDoc.lastElementChild.style.display = 'block';
    }
}