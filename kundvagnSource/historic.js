function checkHistoric(){
    var historicSite = document.createElement("a");
    historicSite.innerText = "Vill gå tillbaka till kundvagn";
    historicSite.href= "./kundVagn.html";
    historicSite.style.fontSize ="1.5em";
    historicSite.style.color ="blue";
    document.body.appendChild(historicSite)
    var rugs = localStorage.getObject("order");
    var rugsHistoric = rugs[0].usersOrder;
  
    createMainDiv(rugsHistoric)

}


function createMainDiv(rugs){
    var section = document.querySelector("section");
    section.style.marginTop = "1.5em";
    section.style.display = "flex";
    section.style.flexDirection = "row";
   
    for(var i = 0; i <rugs.length; i++){

        var divForSingleProduct = createDiv();
        divForSingleProduct.appendChild(createTitle(rugs[i]))
        divForSingleProduct.appendChild(createMade(rugs[i]))
        divForSingleProduct.appendChild(createYear(rugs[i]))
        divForSingleProduct.appendChild(createColor(rugs[i]))
        divForSingleProduct.appendChild(createImg(rugs[i]))
        divForSingleProduct.appendChild(createPrice(rugs[i]))
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