'use strict';

const addEventOnElements = function(elements , type , callback){

    elements.forEach(element => {
        
        element.addEventListener(type , callback);
    });
}


const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const navBar = document.querySelector("[data-nav-bar]");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

addEventOnElements(navTogglers , 'click' , ()=>{

    navBar.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
});


