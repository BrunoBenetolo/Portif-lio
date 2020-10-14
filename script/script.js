var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    console.warn(hamburguer);
    document.querySelector(".container").classList.toggle("show-menu");
});