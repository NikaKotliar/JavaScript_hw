let menuItems = document.querySelectorAll('.menu__item')

menuItems.forEach(function (menuItem) {
    menuItem.onmouseover = function (event) {
        let target = event.target
        console.log('event', event)
        console.log('event.target', target)
        console.log(menuItem.className)
        let activeMenuItem = menuItem.querySelectorAll('.menu_sub')
        console.log("activeMenuIte", activeMenuItem[0])
        if (activeMenuItem[0]) {
            console.log("close_menu", closeMenu())
            activeMenuItem[0].style.display = 'block'

        }

    }
})

document.onmouseover = function (event) {
    let target = event.target
    console.log(" onmouseover target.className", target.className)
    if (target.className != 'menu__item' && target.className != 'menu__link' && target.className != 'menu menu_sub' ) {
        closeMenu()
    }
}

function closeMenu() {
    menuItems.forEach(function (menuItem) {
        subMenu = menuItem.querySelectorAll('.menu_sub')
        for (let i = 0; i < subMenu.length; i++) {
            subMenu[i].style.display = "none"

        }
    })
}

    //     if (target.classList.contains("menu__item")){
    //         console.log("Попали")
    //         let activeMenuItem = target.querySelectorAll('.menu_sub')
    //         console.log('activeMenuItem', activeMenuItem)
    //         // closeMenu()
    //         activeMenuItem[0].style.display = 'block'
    //         }
