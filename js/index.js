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

menu.addEventListener("click",function(){
    navlink.classList.toggle('open');
})