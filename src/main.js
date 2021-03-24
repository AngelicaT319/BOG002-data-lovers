import data from './data/lol/lol.js';

import {buscarCampeones} from  './data.js';
import {filtrorol} from  './data.js';

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
    name.innerText = campeon.name
    div.appendChild(name)
    div.appendChild(imagenCampeon)
    contenido.appendChild(div);
   
}

    
buscarCampeones(".card-filter", ".card");


var roles=document.getElementsByClassName("roles");
var roleslista=""
for (let i = 0; i < roles.length; i++) {
    roles[i].addEventListener("click", ()=>{
    if (roles[i].textContent=="Central" ){   
     roleslista="Support"
    } else if(roles[i].textContent=="Ataque"){
      roleslista="Fighter"
    } else if(roles[i].textContent=="Tanque"){
        roleslista="Tank"
    }
    var listaderoles=[]
    for (var rep in data.data){
    console.log(data.data[rep].tags);
    //includes verifica si dentro de un array hay un elemento 
    //que tenga la palabra que le meti xd
    if (data.data[rep].tags.includes(roleslista)){
      console.log(data.data[rep].name);
      listaderoles.push(data.data[rep].name);  
    }
 }
 filtrorol(".card",listaderoles);
    
}
)}



const botonabrir = document.getElementById('menudesple');
botonabrir.addEventListener('mouseover',abrir);
botonabrir.addEventListener('mouseout',cerrar);

const posiciones2 = document.getElementById('posiciones2');
posiciones2.addEventListener('mouseover',abrir2);
posiciones2.addEventListener('mouseout',cerrar2);

const posiciones1 = document.getElementById('posiciones1');
posiciones1.addEventListener('mouseover',abrir1);
posiciones1.addEventListener('mouseout',cerrar1);

function abrir(){
    var elem=document.getElementById('desplegables');
    elem.style.display = "block";
   }
   
   function cerrar(){
    var elem=document.getElementById('desplegables');
    elem.style.display = "none";
   }
   
   function abrir1(){
    var elem=document.getElementById('subitem1');
    elem.style.display = "block";
   }
   
   function cerrar1(){
    var elem=document.getElementById('subitem1');
    elem.style.display = "none";
   }
   function abrir2(){
    var elem=document.getElementById('subitem2');
    elem.style.display = "block";
   }
   
   function cerrar2(){
    var elem=document.getElementById('subitem2');
    elem.style.display = "none";
   }