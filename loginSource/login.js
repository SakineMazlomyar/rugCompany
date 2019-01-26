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
            order = localStorage.getObject("order");
        }
        if(signedIn){
            var addedOrder = {
                    usersOrder: checkShoppingCart(),
                }  

            //We add new user with new order
            order.push(addedOrder);
            var shoppingCart = localStorage.setObject("order", order);
            //We add if someone has singed in
            var account = []
            var user = {
                username: username,
                password: password
            }
            account.push(user)
            account = localStorage.setObject("signedInUser", account);

            window.location.href = "../index.html";
    
        } else {
            alert("Du har inte registerat dig än!")
        }

    }
}


var shoppingCart = [];
function checkShoppingCart(){
    if (localStorage.shoppingCart) {
        shoppingCart = localStorage.getObject('shoppingCart')
    }
    return shoppingCart;

}