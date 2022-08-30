function showTooltip(elem, value) {
    const tooltip = document.createElement('div')

    tooltip.classList.add('tooltip', 'tooltip_active')

    tooltip.textContent = value
    elem.append(tooltip)
    let coords = elem.getBoundingClientRect();
    tooltip.style.left = coords.left + "px";
    tooltip.style.top = coords.bottom + "px";


    return (tooltip)
}

ElemsWithTooltip = Array.from(document.querySelectorAll('.has-tooltip'))
console.log(ElemsWithTooltip)
ElemsWithTooltip.forEach((ElemWithTooltip) => {
    ElemWithTooltip.onclick = () => { return false }


    ElemWithTooltip.addEventListener("click", () => {
        let openTooltip = ElemWithTooltip.querySelector(".tooltip")
        if (openTooltip) {
            if (openTooltip.classList.contains('tooltip_active')) {
                console.log(openTooltip.classList.contains('tooltip_active'))
                openTooltip.classList.remove('tooltip_active')
            }else{
                openTooltip.classList.add('tooltip_active')
            }
        }
        else {
            showTooltip(ElemWithTooltip, ElemWithTooltip.title)
        }

    })
})