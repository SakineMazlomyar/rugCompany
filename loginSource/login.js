function logIn(){
    const username = document.querySelector("input#username").value;
    const password = document.querySelector("input#password").value;
   

    var users = localStorage.getObject("userRegisterd");
    users.forEach(user => {
    if(username == user.name && password == user.password){
        return window.location.assign('../index.html');
    }
    //Check we the not user does not work
    if(username != user.name && password != user.password){
        alert("Något gick fel")
    }
    });
}