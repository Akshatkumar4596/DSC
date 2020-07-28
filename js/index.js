console.log("HEY");
window.onscroll = function(e) {
    console.log(window.scrollY);
    if(window.scrollY>0){
        document.getElementById("navbar").style.backgroundColor = "rgb(53, 54, 58,0.99)";    

        document.getElementById("navbar").style.transition = "background-color 1s ease"; 

    }
    else{  
        document.getElementById("navbar").style.backgroundColor = "rgb(0,0,0,0.2)";
    }
}

var navlink = document.querySelector(".nav-links");
var menu = document.querySelector(".menu-icon");
var cards = document.querySelectorAll(".card")
var card1 = cards[0]
var card2 = cards[1]
var card3 = cards[2]


menu.addEventListener("click",function(){
    navlink.classList.toggle('open');
})

card1.addEventListener("click",function(){
    card1.classList.toggle("is-flipped");
})
card2.addEventListener("click",function(){
    card2.classList.toggle("is-flipped");
})
card3.addEventListener("click",function(){
    card3.classList.toggle("is-flipped");
})