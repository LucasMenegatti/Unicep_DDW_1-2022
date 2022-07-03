const hamburguer = document.querySelector(".hamburguer");
const burguerMenu = document.querySelector(".burguer__menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    burguerMenu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    burguerMenu.classList.remove("active");
}))