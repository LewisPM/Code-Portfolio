/*onHover body Highlight function*/

//static array of 'section' elements
let bodyElements = document.querySelectorAll('section');

//movement actions
let highlight = event => {
    event.target.style.backgroundColor = 'lightgray';
}
let returnColor = event => {
    event.target.style.backgroundColor = '';
}

//onHover highlight function
let onHover = bodyElement => {
    bodyElement.onmouseover = highlight;
    bodyElement.onmouseout = returnColor;
}

bodyElements.forEach(onHover);

/*onClick Nav Body Highlight function

let navElements = document.querySelectorAll('.navText');

let onNavClick = navElement => {
    navElement.onclick = highlight;
    navElement.onmouseup = returnColor;
}
navElements.forEach(onNavClick);


*/
