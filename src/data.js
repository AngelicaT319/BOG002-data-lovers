import data from './data/lol/lol.js';




export function filtrotop (selector,top) {
    document.querySelectorAll(selector).forEach((element) => 
    top.includes(element.textContent ) 
    ?element.classList.remove("filter")
    :element.classList.add("filter"))
    }

    export function filtrojungla (selector,jungla) {
        document.querySelectorAll(selector).forEach((element) => 
        jungla.includes(element.textContent ) 
        ?element.classList.remove("filter")
        :element.classList.add("filter"))
        }
    
