let icono = document.getElementsByClassName("Icono")[0]
let menu = document.getElementsByClassName("oculto")[0]

console.log(menu)
let click = 0 ;

icono.addEventListener("click", function(){
    
    if (click==0) {
        menu.classList.add("visible");
        menu.classList.remove("oculto");
        click++;
        console.log(click)

     } 
     else {
        menu.classList.add("oculto");
        menu.classList.remove("visible");
        click--;
        console.log(click)
     }
})  