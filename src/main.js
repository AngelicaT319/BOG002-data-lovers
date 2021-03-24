import data from "./data/lol/lol.js";

import { buscarCampeones } from "./data.js";

import {filtrorol} from  './data.js';

const contenido = document.getElementById("cartas");

//Funcion para mostrar campeones
//genera reflow
for (var campeones in data.data) {
  const campeon = data.data[campeones];
  const div = document.createElement("div");
  const name = document.createElement("h3");
  const imagenCampeon = document.createElement("img");
  div.className = "card";

  imagenCampeon.src = campeon.img;
  name.innerText = campeon.name;
  div.appendChild(name);
  div.appendChild(imagenCampeon);
  div.onclick = function(){
    mostrarPopup(campeon);
};

  contenido.appendChild(div);

}

//ventana emergente al seleccionar campeon para mirar caracteristicas
function mostrarPopup (campeon){
    const contenido = document.getElementById("popup");
    const name = document.createElement("h1");
    const div = document.createElement("div");    
    div.id=('popupdiv');   
    name.innerText = campeon.id 
    div.appendChild(name);
    contenido.appendChild(div);
    }

    
    //function cerrarPopup (){
        //const contenido = document.getElementById("popup");             
      //contenido.innerHTML = '';       
    
    //}


//Funcion donde usamos la barra de busqueda para hallar al campeon especifico
buscarCampeones(".card-filter", ".card");


//Funcion para filtrar por roles y demas a los campeones
var roles = document.getElementsByClassName("roles");
var roleslista = "";
for (let i = 0; i < roles.length; i++) {
  roles[i].addEventListener("click", () => {
    if (roles[i].textContent == "Apoyo") {
      roleslista = "Support";
    } else if (roles[i].textContent == "Asesino") {
      roleslista = "Assassin";
    } else if (roles[i].textContent == "Luchador") {
      roleslista = "Fighter";
    } else if (roles[i].textContent == "Tirador") {
      roleslista = "Marksman";
    } else if (roles[i].textContent == "Mago") {
      roleslista = "Mage";
    } else if (roles[i].textContent == "Tanque") {
      roleslista = "Tank";
    }
    var listaderoles = [];
    for (var rep in data.data) {
      console.log(data.data[rep].tags);
      //includes verifica si dentro de un array hay un elemento
      //que tenga la palabra que le meti xd
      if (data.data[rep].tags.includes(roleslista)) {
        //console.log(data.data[rep].name);
        listaderoles.push(data.data[rep].name);
      }
    }

    filtrorol (".card", listaderoles);
  });
}


const botonabrir = document.getElementById("menudesple");
botonabrir.addEventListener("mouseover", abrir1);
botonabrir.addEventListener("mouseout", cerrar1);

const posicion = document.getElementById("posiciones");
posicion.addEventListener("click", abrir2);
posicion.addEventListener("click", cerrar2);
function abrir1() {
  var elem = document.getElementById("desplegables");
  elem.style.display = "block";
}

function cerrar1() {
  var elem = document.getElementById("desplegables");
  elem.style.display = "none";
}

function abrir2() {
  var elem = document.getElementById("subitem1");
  elem.style.display = "block";
}

function cerrar2() {
  var elem = document.getElementById("subitem1");
  elem.style.display = "none";
}
