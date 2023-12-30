
var signNameInput=document.getElementById("signNameInput");
var signEmailInput=document.getElementById("signEmailInput");
var signPasswordInput=document.getElementById("signPasswordInput");
var confirmPasswordInput=document.getElementById("confirmPasswordInput");


var nameTextInput=document.getElementById("nameTextInput");
var nameValid=document.getElementById("nameValid");

var emailTextInput=document.getElementById("emailTextInput");
var emailValid=document.getElementById("emailValid");
var emailExists=document.getElementById("emailExists");

var passwordTextInput=document.getElementById("passwordTextInput");
var passwordValid=document.getElementById("passwordValid");

var confirmTextInput=document.getElementById("confirmTextInput");
var confirmValid=document.getElementById("confirmValid");

var inputsRequired=document.getElementById("inputsRequired");
var userList=[];

if(JSON.parse(localStorage.getItem("userList")) !=null){
    userList=JSON.parse(localStorage.getItem("userList"));
}

function addUser(){
    
    if(noInput()){
        inputsRequired.classList.remove("d-none")
    }else{
        inputsRequired.classList.add("d-none")

    if(nameValidation() & emailValidation() & passwordValidation() & confirmPassword()){
        var user={
            name:signNameInput.value,
            email:signEmailInput.value,
            password:signPasswordInput.value
       }
          
       userList.push(user);
       localStorage.setItem("userList",JSON.stringify(userList))

  // clearData()
   window.location='./index.html';

    }

}
}

function  noInput(){

    return(signNameInput.value=="" || signEmailInput.value==""
    || signPasswordInput.value==""||confirmPasswordInput.value=="")
}

function nameValidation(){
    var name=signNameInput.value;
    var nameRegex=/^[a-zA-Z]{3,}/

    if(nameRegex.test(name)) {
        nameTextInput.classList.remove("borderRed")
        nameValid.classList.add("d-none");
        return true;
    }else{
        nameTextInput.classList.add("borderRed")
        nameValid.classList.remove("d-none");
        return false;
    }
        
}

function emailValidation(){

    if(emailExistsRepeat()){
        emailExists.classList.remove("d-none")
    }else{
        emailExists.classList.add("d-none")

    
    var email=signEmailInput.value;
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailRegex.test(email)) {
        emailTextInput.classList.remove("borderRed");
        emailValid.classList.add("d-none");
        return true;
    }else{
        emailTextInput.classList.add("borderRed");
        emailValid.classList.remove("d-none");
        return false;
    }

}
        
}

function emailExistsRepeat(){

    for(var i=0;i<userList.length;i++){
        if(userList[i].email == signEmailInput.value){
            
            return true
        }   
    }
    return false
}


function passwordValidation(){
    var password=signPasswordInput.value;
    var passwordRegex=/[a-zA-Z0-9]{4,}/

    if(passwordRegex.test(password)) {
        passwordTextInput.classList.remove("borderRed");
        passwordValid.classList.add("d-none");
        return true;
    }else{
        passwordTextInput.classList.add("borderRed");
        passwordValid.classList.remove("d-none");
        return false;
    }
        
}

function confirmPassword(){

    if(signPasswordInput.value == confirmPasswordInput.value){
        confirmTextInput.classList.remove("borderRed");
        confirmValid.classList.add("d-none");
        return true;
    }else{
        confirmTextInput.classList.add("borderRed");
        confirmValid.classList.remove("d-none");
        return false;
    }
}
function clearData(){
    signNameInput.value='';
    signEmailInput.value='';
    signPasswordInput.value='';
    confirmPasswordInput.value='';

}


function goLogin(){
    window.location='./index.html'
   
}