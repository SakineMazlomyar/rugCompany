


function init(){
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
    var div = document.createElement("div");
    div.classList.add("mainDiv")

    for(var i = 0; i <rugs.length; i++){
        var divForSingleProduct = document.createElement("div");
        divForSingleProduct.classList.add("singleDiv")
        console.log(divForSingleProduct)
        //divForSingleProduct.appendChild(rugs[i])
        div.appendChild(divForSingleProduct);
    }
    var section = document.querySelector("section");
    section.appendChild(div)
}