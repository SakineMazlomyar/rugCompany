function init(){ 
    //This is an asyncron function which means that it will pull the download
    //prccoess beside to download and go on // not blocking
    // Since this is an asyncron operation then it should have the add item product after
    var rugs = undefined;
    fetch("rugs.json")
    .then(function(getAllInfo){
        return getAllInfo.json()
        
    }).then(function(data){
        rugs = data;
        createMainDiv(rugs);
        var buttonLogOut = document.querySelector("button#logOutButton")
        buttonLogOut.style.opacity = "0"
        checkSignedInPerson()
       
        //So we save the data and if there is no data we put is a null array for now 
        var signedInUser = localStorage.getObject("signedInUser");
        if(!signedInUser) {

            localStorage.setObject('shoppingCart', [])
        }
       
        var shoppingCart = [];
        if (localStorage.shoppingCart) {
            shoppingCart = localStorage.getObject('shoppingCart')
            var i = document.querySelector("i.fa-shopping-cart");
            i.innerText =  shoppingCart.length;
        }

    })
    
}

        

function createMainDiv(rugs){

    var section = document.querySelector("section");
   
    for(var i = 0; i <rugs.length; i++){

        var divForSingleProduct = createSingleDiv();
        divForSingleProduct.appendChild(createTitle(rugs[i]))
        divForSingleProduct.appendChild(createMade(rugs[i]))
        divForSingleProduct.appendChild(createYear(rugs[i]))
        divForSingleProduct.appendChild(createColor(rugs[i]))
        divForSingleProduct.appendChild(createImg(rugs[i]))
        divForSingleProduct.appendChild(createPrice(rugs[i]))
        divForSingleProduct.appendChild(createPutButton(rugs[i]))
        section.appendChild(divForSingleProduct)
    }
}

function createSingleDiv(){
    var singlDiv = document.createElement("div");
    singlDiv.style.width = "100%";
    singlDiv.style.textAlign = "center";
    singlDiv.style.position= "relative";
    //singlDiv.classList.add("singleDivDesign")
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
    img.src = infoAboutProduct.image;
    return img
}
function createPrice(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.price +"kr";
    return h4
}
// Finish the put button and localstorage 
function createPutButton(listOfProducts){
    var putButton = document.createElement("button");
    putButton.innerText = "Lägg till product";
    putButton.onclick = function(){ addProduct(listOfProducts)}
    return putButton
}
function addProduct(listOfProducts){
    var x = localStorage.getObject('shoppingCart');
    var date = new Date();
    var timeStamp = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds();
    listOfProducts.id = timeStamp;
 
    x.push(listOfProducts);
    localStorage.setObject('shoppingCart', x);

    var i = document.querySelector("i.fa-shopping-cart");
    i.innerText =  x.length;
    updateOrder()

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

function updateOrder(name){
    var shoppingCart = localStorage.getObject("shoppingCart");
    localStorage.removeItem("order");
    var updateOrder = []
    if(localStorage.order){
        updateOrder = localStorage.getObject("order")
    }
    var oneUpdated = {
        username: name,
        usersOrder: shoppingCart
    }
    updateOrder.push(oneUpdated)
    localStorage.setObject("order", updateOrder);
    

}