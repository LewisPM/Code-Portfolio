let bodyElement = document.querySelector('section');

//bodyElements.forEach(bodyElement => )

let highlight = () => {
    bodyElement.style.backgroundColor = 'lightgray';
}
let returnColor = () => {
    bodyElement.style.backgroundColor = 'white';
}

bodyElement.onmouseover = highlight;
bodyElement.onmouseout = returnColor;

//let navElement = document.getElementsByClassName('.navText');



