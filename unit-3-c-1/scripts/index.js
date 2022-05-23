//store the products array in localstorage as "products"

document.getElementById("products").addEventListener("submit", myFun)
var arr = JSON.parse(localStorage.getItem("products")) || []
function Obj(m,n,o,p){
    this.type = m 
    this.desc = n 
    this.price = o 
    this.image = p
}

function myFun(){
    event.preventDefault()
    let type = document.getElementById("type").value
    let desc = document.getElementById("desc").value
    let price = document.getElementById("price").value
    let image = document.getElementById("image").value

    var x = new Obj(type, desc, price, image)
    arr.push(x)
    console.log(arr)
    localStorage.setItem("products", JSON.stringify(arr))

    document.getElementById("type").value = ""
    document.getElementById("desc").value = ""
    document.getElementById("price").value = ""
    document.getElementById("image").value = ""
}

function showProducts(){
    window.location.href = "inventory.html"
}


