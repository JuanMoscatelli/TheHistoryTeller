var inputName = document.getElementById('name');
var submitBtn = document.getElementById('button');
var errorName = document.getElementById('name-container');
console.log(errorName);
inputName.addEventListener('blur', validateName);

function validateName(e){
    console.log(e);
    e.preventDefault();
    var name = inputName.value;
    if (name.length < 6 || name.isElementContentWhitespace){
        //var errorName.lastChildElement.innerContent = '';
        console.log(false);
    }else{
        console.log(name);
    }
}
        
