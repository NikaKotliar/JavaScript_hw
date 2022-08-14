document.querySelectorAll('.dropdown').forEach(function (dropDown) {
    
    const dropdownValue = dropDown.querySelector(".dropdown__value")
    const DropDowmList = dropDown.querySelector('.dropdown__list')
    const dropdownItems = DropDowmList.querySelectorAll(".dropdown__item")


    showDropDowm = () => {
        DropDowmList.classList.toggle('dropdown__list--visible')
    }

    dropdownValue.addEventListener('click', showDropDowm)



    dropdownItems.forEach(function (dropdownItem) {

        dropdownItem.querySelector("a").onclick = () => { return false }

        dropdownItem.addEventListener('click', function (e) {
            e.stopPropagation()
            dropdownValue.innerText = dropdownItem.querySelector(".dropdown__link").innerText
            DropDowmList.classList.remove('dropdown__list--visible')
        })
    });

    document.addEventListener("click", function (e) {
        console.log("click")
        if (e.target !== dropdownValue) {
            DropDowmList.classList.remove('dropdown__list--visible')

        }
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
            DropDowmList.classList.remove('dropdown__list--visible')

        }
    })
})



