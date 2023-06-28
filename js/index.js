
let captureName = document.querySelector(".captureName")
/* let name = prompt("Como te llamas? ")
 */
/* captureName.innerHTML = name */

let button = document.getElementById("buttonCv")
let body = document.querySelector("body")

button.addEventListener("click", function(e) {
    button.style.background = "Black"
})

let menuItems = document.querySelectorAll(".menuItems")

menuItems.forEach(function(item){
    item.addEventListener("click", function(e){
        const currentItem = document.querySelector(".active")
        currentItem.classList.remove("active")
        e.target.classList.add("active")
    })
})
