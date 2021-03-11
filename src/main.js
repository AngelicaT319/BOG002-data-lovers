//import { example } from './data.js';
//import data from './data/lol/lol.js';

//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';


let contenido = document.querySelector('#contenido')

function traer() {
    fetch('lol.json')
    .then(res => res.json())
    .then( datos =>{
        console.log(datos)

    })

}


