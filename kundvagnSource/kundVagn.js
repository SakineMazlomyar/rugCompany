function init(){

    var rugs = localStorage.getObject("shoppingCart");
    createMainDiv(rugs)
    var buttonLogOut = document.querySelector("button#logOutButton")
    buttonLogOut.style.opacity = "0"
    checkSignedInPerson()
}


function createMainDiv(rugs){

    var section = document.querySelector("section");
   
    for(var i = 0; i <rugs.length; i++){

        var divForSingleProduct = createDiv();
        divForSingleProduct.appendChild(createTitle(rugs[i]))
        divForSingleProduct.appendChild(createMade(rugs[i]))
        divForSingleProduct.appendChild(createYear(rugs[i]))
        divForSingleProduct.appendChild(createColor(rugs[i]))
        divForSingleProduct.appendChild(createImg(rugs[i]))
        divForSingleProduct.appendChild(createPrice(rugs[i]))
        divForSingleProduct.appendChild(createDeleteButton(rugs[i]))
        divForSingleProduct.appendChild(createFinishShopButton())
        section.appendChild(divForSingleProduct)
    }
}

function createDiv(){
    var singlDiv = document.createElement("div");
    singlDiv.classList.add("singleDivDesign")
    return singlDiv
    
}
function createTitle(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.title;

    return h4
}
function createMade(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.made;
    return h4
}
function createYear(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.year;
    return h4
}
function createColor(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.color;
    return h4
}
function createImg(infoAboutProduct){
    var img = document.createElement("img")
    img.classList.add("imgProduct")
    img.src = "."+ infoAboutProduct.image;
    return img
}
function createPrice(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.price +"kr";
    return h4
}
function createDeleteButton(rugs){
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Ta bort product";

    var shoppingCartParsed = localStorage.getObject("shoppingCart");
    var i = document.querySelector("i.fa-shopping-cart");
    i.innerText =  shoppingCartParsed.length;
    deleteButton.onclick = function(){
        var shoppingCartJson= localStorage.getObject("shoppingCart");
        var index = 0;
        
        for(var i = 0; i < shoppingCartJson.length; i++) {
            if(rugs.id == shoppingCartJson[i].id) {
               index = i;
            }
        };
        
        shoppingCartJson.splice(index, 1);
        localStorage.setObject("shoppingCart", shoppingCartJson);
        var i = document.querySelector("i.fa-shopping-cart");
        i.innerText =  shoppingCartJson.length;
        var section = document.querySelector("section");
        section.innerHTML = "";
        init()
        updateOrder()
    }
    
    return deleteButton
}


function createFinishShopButton(){
    var x = undefined;  
    var finishShopButton = document.createElement("button");
    finishShopButton.innerText = "Slurför ditt köp";
    finishShopButton.onclick = (function(){
    
    var signedInUser = localStorage.getObject("signedInUser");
    if(signedInUser.length != 0){
        var makeEmptyShoppingCart = localStorage.getObject("shoppingCart");
        localStorage.setObject("shoppingCart", []);
        alert("Tack för ditt köp!")
        var section = document.querySelector("section#content");
        section.innerHTML = "";
        var order = localStorage.getObject("order");
        order.forEach(element => {
            console.log(element.usersOrder);
            return;
        
        })


    } else {
        alert("Du har inte loggats in")
    }

    })

    return finishShopButton
 
}


function checkSignedInPerson(){
    var signedInUser = localStorage.getObject("signedInUser");
    if(signedInUser){
        var paragraph = document.querySelector("p#userLoggedIn");
        signedInUser.forEach(function(element) {
            paragraph.innerText = "Hi "+ element.username +"!";
            var buttonLogOut = document.querySelector("button#logOutButton")
            buttonLogOut.style.opacity = "1"
            var buttonLogIn = document.querySelector("a#logInButton")
            buttonLogIn.style.opacity = "0"
          });

    }

}

function logOut(){
    var signedInUser = localStorage.getObject("signedInUser");
    localStorage.setObject("signedInUser", []) 
    var paragraph = document.querySelector("p#userLoggedIn");
    paragraph.style.display = "none"
    var buttonLogOut = document.querySelector("button#logOutButton")
    buttonLogOut.style.opacity = "0"
    var buttonLogIn = document.querySelector("a#logInButton")
    buttonLogIn.style.opacity = "1"


}
function checkSignedInPerson(){
    var signedInUser = localStorage.getObject("signedInUser");
    if(signedInUser){
        var paragraph = document.querySelector("p#userLoggedIn");
        signedInUser.forEach(function(element) {
            
            paragraph.innerText = "Hi "+ element.username +"!";
            var buttonLogOut = document.querySelector("button#logOutButton")
            buttonLogOut.style.opacity = "1"
            var buttonLogIn = document.querySelector("a#logInButton")
            buttonLogIn.style.opacity = "0"
            updateOrder(element.username)
        });
    }

}
function updateOrder(name){
    var shoppingCart = localStorage.getObject("shoppingCart");
    localStorage.removeItem("order");
    var updateOrder = []
    var oneUpdated = {
        username: name,
        usersOrder: shoppingCart
    }
    updateOrder.push(oneUpdated)
    localStorage.setObject("order", updateOrder);
    

}