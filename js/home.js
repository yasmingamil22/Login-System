var nameUser=localStorage.getItem("name");

document.getElementById("nameUser").innerHTML=nameUser;


function logout(){
    localStorage.removeItem("name");
    window.location='./index.html';


}