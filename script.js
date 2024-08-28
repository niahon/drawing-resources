let elMenu = document.getElementById("menu-items");
let elBurger = document.getElementById("burger");


elBurger.addEventListener("click", () => elMenu.style.display = elMenu.style.display ? '' : 'block');