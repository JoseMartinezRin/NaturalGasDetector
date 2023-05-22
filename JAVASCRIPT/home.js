const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".openMenu");
const closeMenuBtn = document.querySelector(".closeMenu");

function toogleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toogleMenu);
closeMenuBtn.addEventListener("click", toogleMenu);
