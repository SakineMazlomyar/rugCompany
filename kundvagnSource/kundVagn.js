function init(){

    var rugs = localStorage.getObject("shoppingCart");
    createMainDiv(rugs)
    //checkSignedInPerson()
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
        divForSingleProduct.appendChild(createDeleteButton(rugs, rugs ))
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
function createDeleteButton(rugsArray,rugs){
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Ta bort product";
    var shoppingCartParsed = localStorage.getObject("shoppingCart");
    var i = document.querySelector("i.fa-shopping-cart");
    i.innerText =  shoppingCartParsed.length;
    deleteButton.onclick = function(){
    for(var i = 0; i<rugsArray.length; i++){
        rugsArray.splice(rugsArray[i], 1);
        
    }
    localStorage.setObject("shoppingCart", rugsArray);


    var shoppingCartParsed = localStorage.getObject("shoppingCart");
    var i = document.querySelector("i.fa-shopping-cart");
    i.innerText =  shoppingCartParsed.length;
    var section = document.querySelector("section");
    section.innerHTML = "";
    createMainDiv(rugs)
    


    
    }
    return deleteButton
}
function createFinishShopButton(){
    var x = undefined;  
    var finishShopButton = document.createElement("button");
    finishShopButton.innerText = "Slurför ditt köp";
    finishShopButton.onclick = (function(){
        var order = localStorage.getObject("order");
        if(order){
            var makeEmptyShoppingCart = localStorage.getObject("shoppingCart");
            localStorage.setObject("shoppingCart", []);
            alert("Tack för ditt köp!")
            var section = document.querySelector("section#content");
            section.innerHTML = "";
            order.forEach(element => {
                console.log(element.usersOrder)
            })
    
        } else {
            alert("Du har inte loggats in")
        }

    })

    return finishShopButton
 
}
/* function checkSignedInPerson(){
    var order = localStorage.getObject("order");
    if(order){
        var paragraph = document.querySelector("p#userLoggedIn");
        order.forEach(function(element) {
            paragraph.innerText = "Hi "+ element.username +"!";
            var buttonLogOut = document.querySelector("button#logOutButton")
            buttonLogOut.style.opacity = "1"
            var buttonLogIn = document.querySelector("a#logInButton")
            buttonLogIn.style.opacity = "0"
          });

    }

}

function logOut(){
    var paragraph = document.querySelector("p#userLoggedIn");
    paragraph.style.display = "none"
    var buttonLogOut = document.querySelector("button#logOutButton")
    buttonLogOut.style.opacity = "0"
    var buttonLogIn = document.querySelector("a#logInButton")
    buttonLogIn.style.opacity = "1"


} */