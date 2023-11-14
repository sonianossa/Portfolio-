const menu = document.querySelector(".menu__navegacion");
const btnAbrir = document.querySelector(".menu__abrir");
const btnCerrar = document.querySelector(".menu__cerrar");

function menuToggle() {
  menu.classList.toggle("menu__abierto");
}
btnAbrir.addEventListener("click", menuToggle);
btnCerrar.addEventListener("click", menuToggle);

const menuLinks = document.querySelectorAll('.menu__navegacion a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu__navegacion a[href="#${id}"]`);

      if (entry.isIntersecting) {
        menuLink.classList.add("seleccionado")}
        else{
        menuLink.classList.remove("seleccionado")};
      
    });
  },
  { rootMargin: "-50% 0px -50% 0px" }
);

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu__abierto");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
