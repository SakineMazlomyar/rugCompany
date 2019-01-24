
var userRegisteration;
function init(){

    //We initialize the database and put every single user in array
    userRegisteration = [];
    if (localStorage.userRegisterd) {
        userRegisteration = localStorage.getObject("userRegisterd")

    }
}


function registerUser(){
    const name = document.querySelector("input#name").value;
    const password = document.querySelector("input#password").value;
    const user = {
        name: name,
        password: password
    };

    //If the user does not exist then the system will register it
    userRegisteration.push(user)
    localStorage.setObject("userRegisterd", userRegisteration);

    
  

}

function checkExistUser(name, password){
    var usersRegistered = localStorage.getObject("userRegisterd");
    usersRegistered.forEach(user => {
    if(name == user.name && password == user.password){
        alert("Du finns redan i systemet");
        return;
    }
});
}