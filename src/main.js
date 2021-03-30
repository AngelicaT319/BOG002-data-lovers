import data from "./data/lol/lol.js";

import { buscarCampeones } from "./data.js";

import { filtrorol } from "./data.js";

import {listaRoles } from "./data.js";

import {ListaAtaque} from "./data.js";

import {ListaPosisiones} from "./data.js";

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
  div.onclick = function () {
    mostrarPopup(campeon);
  };

  contenido.appendChild(div);
}

//ventana emergente al seleccionar campeon para mirar caracteristicas
function mostrarPopup(campeon) {
  const contenido = document.getElementById("popup");
  const name = document.createElement("h1");
  const image = document.createElement("img");
  const div = document.createElement("div");
  div.id = "popupdiv";
  name.innerText = campeon.id;
  image.src = campeon.splash;
  div.appendChild(name);
  div.appendChild(image);
  contenido.appendChild(div);
}

//function cerrarPopup (){
//const contenido = document.getElementById("popup");
//contenido.innerHTML = '';

//}

//Funcion donde usamos la barra de busqueda para hallar al campeon especifico
buscarCampeones(".card-filter", ".card");




const botonabrir = document.getElementById("menudesple");
botonabrir.addEventListener("mouseover", abrir);
botonabrir.addEventListener("mouseout", cerrar);

const posiciones2 = document.getElementById("posiciones2");
posiciones2.addEventListener("mouseover", abrir2);
posiciones2.addEventListener("mouseout", cerrar2);

const posiciones1 = document.getElementById("posiciones1");
posiciones1.addEventListener("mouseover", abrir1);
posiciones1.addEventListener("mouseout", cerrar1);

function abrir() {
  var elem = document.getElementById("desplegables");
  elem.style.display = "block";
}

function cerrar() {
  var elem = document.getElementById("desplegables");
  elem.style.display = "none";
}

function abrir1() {
  var elem = document.getElementById("subitem1");
  elem.style.display = "block";
}

function cerrar1() {
  var elem = document.getElementById("subitem1");
  elem.style.display = "none";
}
function abrir2() {
  var elem = document.getElementById("subitem2");
  elem.style.display = "block";
}

function cerrar2() {
  var elem = document.getElementById("subitem2");
  elem.style.display = "none";
}
