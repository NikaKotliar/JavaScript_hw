bookControls = Array.from(document.querySelectorAll(".font-size"))
bookContent = document.querySelector(".book__content")

function removeClasses() {
    for (i = 0; i < bookControls.length; i++) {
        bookControls[i].classList.remove('font-size_active')
    }
}
function removeFontSize() {
    console.log("убрали размер")
    console.log("до", bookContent.className)

    bookContent.className = "book__content"
    console.log('after',bookContent.className)

}


function deletedLinks() {
    for (i = 0; i < bookControls.length; i++) {
        bookControls[i].onclick = () => { return false }
    }
}
deletedLinks()


function fontSize(elem) {
    size = elem.dataset.size
    if (size) {
        let classToAdd = "book_fs-" + size
        removeFontSize()
        bookContent.classList.add(classToAdd)
    }else{
        bookContent.className = "book__content"
    }

}

bookControls.forEach((bookControl) => {

    bookControl.addEventListener('click',
        () => {
            fontSize(bookControl)
            removeClasses()
            bookControl.classList.add("font-size_active")
        }
    )
})




