function logIn(){
    var signedIn = undefined;
    const username = document.querySelector("input#username").value;
    const password = document.querySelector("input#password").value;
   
    
    var users = localStorage.getObject("userRegisterd");
    if(!users){

        alert("Du har inte registerat dig än")

    } else {
        users.forEach(user => {
            
            if(username == user.name && password == user.password){
                signedIn = true;
                return;  
                
            }
        });
        var order = [];
        if(localStorage.order){
            order = localStorage.getObject("order")
        }
        if(signedIn){
            var shoppingCart = localStorage.getObject("shoppingCart");
                
            var user = localStorage.getObject("userRegisterd");
            var addedOrder;
            user.forEach(customer => {
                var s = []
                addedOrder = {
                    usersOrder: s.concat(shoppingCart),
                    username: username,
                    userId: Math.floor(Math.random() * 10),
                    orderDate: new Date()
                }  


            });

            order.push(addedOrder);
            var shoppingCart = localStorage.setObject("order", order);
            window.location.href = "../index.html";
        } else {
            alert("Du har inte registerat dig än!")
        }

    }
}

