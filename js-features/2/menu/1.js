let menuItems = Array.from(document.querySelector('.menu').children)


menuItems.forEach(function (menuItem) {
    if (menuItem.querySelector('ul')) {
        menuItem.querySelector("a").onclick = () => { return false }
        menuItem.addEventListener('click', () => {
            closeMenu()
            menuItem.querySelector("ul").classList.toggle('menu_active')

        })
    }
}
)


function closeMenu() {
    menuItems.forEach(function (menuItem) {
        if (menuItem.querySelector("ul")) {
            menuItem.querySelector("ul").classList.remove('menu_active')
        }
    }
    )
}
