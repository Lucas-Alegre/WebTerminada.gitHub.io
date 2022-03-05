const menu = document.querySelector(".nav-menu");
const tooggle = document.querySelector(".toggle");

tooggle.addEventListener("click", () =>{
    menu.classList.toggle("nav-menu-visible");
   if(menu.classList.contains("nav-menu-visible")){
tooggle.setAttribute("arial-label" , "Cerrar menú");
   }else{
tooggle.setAttribute("arial-lael" , "Abrir menú");
   }


});