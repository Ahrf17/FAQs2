let span1 = document.getElementById("span1")
let span2 = document.getElementById("span2")
let span3 = document.getElementById("span3")
let span4 = document.getElementById("span4")
let icon = document.getElementById("icon")

function showSpan(id){
    id.classList.remove("hide")
    icon.src = "assets/images/icon-minus.svg"
}

function hideSpan(id){
    id.classList.add("hide")
    icon.src = "assets/images/icon-plus.svg"
    
}

