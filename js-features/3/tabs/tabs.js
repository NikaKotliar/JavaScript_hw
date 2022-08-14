let tabs = document.querySelectorAll(".tab")
console.log(tabs)
let contens = document.querySelectorAll(".tab__content")

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', (e) => {

        let tabsCurrent = Array.from(e.target.parentElement.children)
        for (let t = 0; t < tabsCurrent.length; t++) {
            tabsCurrent[t].classList.remove('tab_active')
        }

        e.target.classList.add('tab_active');


        let contensCurrent = Array.from(e.target.parentElement.nextElementSibling.children)
        for (let c = 0; c < contensCurrent.length; c++) {
            contensCurrent[c].classList.remove('tab__content_active')
        }

        contens[i].classList.add('tab__content_active');

    })
}