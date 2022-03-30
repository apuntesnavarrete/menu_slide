let icono = document.getElementsByClassName("Icono")[0]
let menu = document.getElementsByClassName("oculto")[0]
let Item = document.getElementsByClassName("Item")[0]
let Sub_menu = document.getElementsByClassName("sub_menu")[0]

console.log(Item)
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
let sub_click = 0 ;

Item.addEventListener("click",function(){
   if (sub_click==0) {
      Sub_menu.classList.add("sub_visible");
      Sub_menu.classList.remove("sub_novisible");
      sub_click++;
      console.log(sub_click)

   } 
   else {
      Sub_menu.classList.add("sub_novisible");
      Sub_menu.classList.remove("sub_visible");
      sub_click--;
      console.log(sub_click)
   }   
})