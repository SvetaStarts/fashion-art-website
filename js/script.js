function showMenu() {
    let iconMenu = document.getElementById('icon-menu');
    let menu = document.getElementsByClassName('menu')[0];

    iconMenu.onclick = function(){
        if (menu.style.display == 'none'){
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }

    }

}