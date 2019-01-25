var userRegisteration;
function init(){

    //We initialize the database and put every single user in array
    userRegisteration = [];
    if (localStorage.userRegisterd) {
        userRegisteration = localStorage.getObject("userRegisterd")

        
    }
}


function registerUser(){
    var userReg = undefined;
    const name = document.querySelector("input#name").value;
    const password = document.querySelector("input#password").value;
    const user = {
        name: name,
        password: password
    };  

    userRegisteration.forEach(user => {
        if(name == user.name && password == user.password){
            userReg = true;
            return;
        }
    })
    
    if(userReg){
        alert("Du finns redan i systemet");
    } else {

        userRegisteration.push(user)
        localStorage.setObject("userRegisterd", userRegisteration);
        alert("Nu är du registerat")
        window.location.href = "./login.html";
    }
}

