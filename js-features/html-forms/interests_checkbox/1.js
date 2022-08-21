let interests = document.querySelectorAll("li.interest");
interests.forEach((el) => {
    let input = el.querySelector("label input"); 
    input.addEventListener("change", () => {
        goDown(el, input.checked);
        goUp(el);
    });
});

function goDown(liElement, newState) {
    liElement.querySelector("label input").checked = newState;
    let arr = Array.from(getChilds(liElement));
    arr.forEach((it) => goDown(it, newState));
}

function goUp(liElement) {
    let hasFoundParent = false;
    let parent = liElement;
    while (!hasFoundParent) {
        parent = parent.parentElement;
        if (parent.classList.contains("interests_main")) {
            return;
        }
        if (parent.classList.contains("interest")) {
            hasFoundParent = true;
        }
    }
    if (validate(parent)) {
        goUp(parent);
    }
}

function validate(element) {
    let subInterests = Array.from(getChilds(element));
    console.log(subInterests);
    let currentState = getState(element);
    let newState = 0;
    if (subInterests.every((it) => getState(it) == 1)) {
        newState = 1;
    } else if (subInterests.every((it) => getState(it) == -1)) {
        newState = -1;
    }
    if (newState != currentState) {
        setState(element, newState);
        return true;
    } 
    return false;
}

function getChilds(element) {
    let ul = element.querySelector("ul");
    if (ul) {
        return ul.children;
    } else {
        return [];
    }
}

function getState(element) {
    let input = element.querySelector("label input");
    if (input.indeterminate) return 0;
    if (input.checked) return 1;
    return -1;
}

function setState(element, newState) {
    let input = element.querySelector("label input");
    input.indeterminate = newState == 0;
    input.checked = newState == 1;
}