var data = JSON.parse(localStorage.getItem("products"))
console.log(data)

data.forEach(function(el, index){

    let box = document.createElement("div")
    box.id = "box"

    let img = document.createElement("img")
    img.src = el.image

    let type = document.createElement("p")
    type.innerText= el.type  

    let desc = document.createElement("p")
    desc.innerText = el.desc   

    let price = document.createElement("h3")
    price.innerText = el.price  

    var btn = document.createElement("button")
    btn.innerText = "Remove"
    btn.id = "remove_product"
    btn.addEventListener("click", function(){
        removeItem(el, index)
    })

    box.append(img, type, desc, price, btn)
    document.getElementById("all_products").append(box)

})

function addMore(){
    window.location.href = "index.html"
}

//for removing items 

function removeItem(el, index){
    console.log(el, index)
    data.splice(index, 1)
    console.log(data)
    localStorage.setItem("products", JSON.stringify(data))
    window.location.reload()
}