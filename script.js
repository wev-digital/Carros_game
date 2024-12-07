function menu_mobile() {
    var menu_oculto = document.querySelector('.nav_listas');

    if (menu_oculto.style.display === "block") {
        menu_oculto.style.display = "none";
    } else { 
        menu_oculto.style.display = "block"; 
    }
}