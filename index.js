let icono = document.getElementsByClassName("Icono")[0]
let menu = document.getElementsByTagName("ul")[0]

console.log(menu)
let click = 0 ;

icono.addEventListener("click", function(){
    
    if (click==0) {
        menu.style.display = "block";
        click++;
        console.log(click)

     } 
     else {
        menu.style.display = "none";
        click--;
        console.log(click)
     }
}) 