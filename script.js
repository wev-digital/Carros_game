function menu_mobile() {
    var menu_oculto = document.querySelector('.nav_listas');

    if (menu_oculto.style.display === "none") {
        menu_oculto.style.display = "block";
    } else {
        menu_oculto.style.display = "none";
    }
}