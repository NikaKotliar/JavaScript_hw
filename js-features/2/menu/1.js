let menuItems = Array.from(document.querySelector('.menu').children)


menuItems.forEach(function (menuItem) {
    if (menuItem.querySelector('ul')) {
        menuItem.querySelector("a").onclick = () => { return false }
        menuItem.addEventListener('click', () => {
            
            if (menuItem.querySelector("ul").classList.contains("menu_active")) {
                // menuItem.querySelector("ul").classList.remove('menu_active')
                 closeMenu()
            } else {
                closeMenu()
                menuItem.querySelector("ul").classList.add('menu_active')
            }
        })

    }
})




function closeMenu() {
    menuItems.forEach(function (menuItem) {
        if (menuItem.querySelector("ul")) {
            menuItem.querySelector("ul").classList.remove('menu_active')
        }
    }
    )
}
