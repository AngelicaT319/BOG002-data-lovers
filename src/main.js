import data from './data/lol/lol.js';

import {buscarCampeones} from  './data.js';

const contenido = document.getElementById('cartas');

//Funcion para buscar campeones
//genera reflow
for (var campeones in data.data){
    const campeon = (data.data[campeones])
    var div = document.createElement("div");
    var name = document.createElement("h3");
    var imagenCampeon = document.createElement("img");
    div.className='card';
     
    
    /*name.className='card';
    imagenCampeon.className='card';*/

    imagenCampeon.src = campeon.img;
    name.innerText = campeon.name;
    div.appendChild(name)
    div.appendChild(imagenCampeon)
    contenido.appendChild(div);
}
  
buscarCampeones(".card-filter", ".card");

const botonabrir = document.getElementById('menudesple');
botonabrir.addEventListener('mouseover',abrir1);
botonabrir.addEventListener('mouseout',cerrar1);

const posicion = document.getElementById('posiciones');
posicion.addEventListener('mouseover',abrir2);
posicion.addEventListener('mouseout',cerrar2);
function abrir1(){
    var elem=document.getElementById('desplegables');
    elem.style.display = "block";
   }
   
   function cerrar1(){
    var elem=document.getElementById('desplegables');
    elem.style.display = "none";
   }
   
   
   function abrir2(){
    var elem=document.getElementById('subitem1');
    elem.style.display = "block";
   }
   
   function cerrar2(){
    var elem=document.getElementById('subitem1');
    elem.style.display = "none";
   }