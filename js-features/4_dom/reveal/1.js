reveals = document.querySelectorAll(".reveal")


reveals.forEach((reveal) => {
    window.addEventListener('scroll', () => {
        const { top, bottom } = reveal.getBoundingClientRect()
        console.log(top, bottom)
        if (bottom > 0 && top <= window.innerHeight) {
            reveal.classList.add("reveal_active")
            console.log("добавляем")
        } else {
            console.log("убрали")
            reveal.classList.remove("reveal_active")

        }
    }
    )
}
)


