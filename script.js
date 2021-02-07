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

/*onClick Nav Body Highlight function*/
//figure out how to write so it is scalable
//For now it is done for each element

let navElements = document.querySelectorAll('.navText');

let highlightBody = event => {
    if (event.target.innerText === 'Bio') {
        document.getElementById('bio').style.backgroundColor = 'lightgray';
    } else if (event.target.innerText === 'Projects') {
        document.getElementById('projects').style.backgroundColor = 'lightgray';
    } else if (event.target.innerText === 'Languages') {
        document.getElementById('languages').style.backgroundColor = 'lightgray';
    } else if (event.target.innerText === 'Special Skills') {
        document.getElementById('specialSkills').style.backgroundColor = 'lightgray';
    } else if (event.target.innerText === 'Education') {
        document.getElementById('education').style.backgroundColor = 'lightgray';
    } else if (event.target.innerText === 'Contact') {
        document.getElementById('contact').style.backgroundColor = 'lightgray';
    }
}

let returnBodyColor = event => {
    if (event.target.innerText === 'Bio') {
        document.getElementById('bio').style.backgroundColor = '';
    } else if (event.target.innerText === 'Projects') {
        document.getElementById('projects').style.backgroundColor = '';
    } else if (event.target.innerText === 'Languages') {
        document.getElementById('languages').style.backgroundColor = '';
    } else if (event.target.innerText === 'Special Skills') {
        document.getElementById('specialSkills').style.backgroundColor = '';
    } else if (event.target.innerText === 'Education') {
        document.getElementById('education').style.backgroundColor = '';
    } else if (event.target.innerText === 'Contact') {
        document.getElementById('contact').style.backgroundColor = '';
    }
}

let onNavClick = navElement => {
    navElement.onmousedown = highlightBody;
    navElement.onmouseup = returnBodyColor;
}
navElements.forEach(onNavClick);
