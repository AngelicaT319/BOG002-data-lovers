//Aqui lo del DOM
import data from './data/lol/lol.js';

//import {DataCampeones} from  './data.js';

const contenido = document.getElementById('contenido');

//Funcion para buscar campeones
//genera reflow
for (var campeones in data.data){
    const campeon = (data.data[campeones])
   
    var div = document.createElement("div");
    var name = document.createElement("h3");
    var imagenCampeon = document.createElement("img");
    name.className='namechamp';
    imagenCampeon.className='imgchamp';
    div.className='cards';
    imagenCampeon.src = campeon.img;
    name.innerText = campeon.name
    div.appendChild(name)
    div.appendChild(imagenCampeon)
    contenido.appendChild(div);
    

    div.onclick = function(){
        alert("yo que se");
     }
    
}
