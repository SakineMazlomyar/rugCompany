
//fix navbar bootstrap 
//fix section

function init(){
    //This is an asyncron function which means that it will pull the download
    //prccoess beside to download and go on 
    var rugs = undefined;
    fetch("rugs.json")
    .then(function(getAllInfo){
        return getAllInfo.json()

    }).then(function(data){
        rugs = data;
        //console.log(data)
        createMainDiv(rugs)
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
        section.appendChild(divForSingleProduct)
    }
}

function createSingleDiv(){
    var singlDiv = document.createElement("div");
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
    img.src = infoAboutProduct.image;
    return img
}
function createPrice(infoAboutProduct){
    var h4 = document.createElement("h4")
    h4.innerText = infoAboutProduct.price;
    return h4
}