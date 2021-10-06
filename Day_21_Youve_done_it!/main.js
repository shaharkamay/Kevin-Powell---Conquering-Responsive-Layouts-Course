"use strict";

( () => {
    const hamburger = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("nav--visible");
    })
    // const middleMediaQuery = window.matchMedia("(min-width: 700px)");
    // const largeMediaQuery = window.matchMedia("(min-width: 1000px)");

    // if(middleMediaQuery.matches) {
        
    // }
    // if(largeMediaQuery.matches) {
        
    // }
})()