var loginEmailInput=document.getElementById("loginEmailInput");
var loginpasswordInput=document.getElementById("loginpasswordInput");

var invalidEmail=document.getElementById("invalidEmail");
var incorrectPassword=document.getElementById("incorrectPassword");


var inputsRequired=document.getElementById("inputsRequired");

userList=[];
if(JSON.parse(localStorage.getItem("userList")) !=null){
    userList=JSON.parse(localStorage.getItem("userList"));
}

 
function login(){

    if(!noInput()){
        console.log("tamam")
        check();
    }
}

function  noInput(){

    if(loginEmailInput.value=="" || loginpasswordInput.value==""){
        inputsRequired.classList.remove("d-none")
        return true;
    }else{
        inputsRequired.classList.add("d-none")
           return false;
    }
}



function check(){
    for(var i=0;i<userList.length;i++){
        if(userList[i].email == loginEmailInput.value){
            invalidEmail.classList.add("d-none");

            if(userList[i].password == loginpasswordInput.value){
                incorrectPassword.classList.add("d-none")

                localStorage.setItem("name",userList[i].name)
                window.location='./home.html'
                      return true;
            }else{
                invalidEmail.classList.add("d-none");
                incorrectPassword.classList.remove("d-none");
                return false;
            }
        }   
    }
    invalidEmail.classList.remove("d-none");
    return false
}



function goSignUp(){
    window.location='./sign-up.html'
   
}