const MENU = document.querySelector('#menu-mobile')
const ICON_MENU = document.querySelector('#menu-icon')
const EXIT = document.querySelector('#exit-menu')

function abrirMenu() {
    MENU.classList.remove('menu-display')
}

function fecharMenu() {
    MENU.classList.add('menu-display')
}

ICON_MENU.onclick = abrirMenu
EXIT.onclick = fecharMenu

