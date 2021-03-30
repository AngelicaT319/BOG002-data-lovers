import data from "./data/lol/lol.js";

import { buscarCampeones } from "./data.js";

import { filtrorol } from "./data.js";

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
      //console.log(data.data[rep].tags);
      //includes verifica si dentro de un array hay un elemento
      //que tenga la palabra que le meti xd
      if (data.data[rep].tags.includes(roleslista)) {
        //console.log(data.data[rep].name);
        listaderoles.push(data.data[rep].name);
      }
    }
    filtrorol(".card", listaderoles);
  });
}

var contenedorgrande = [];

var listadecampeones = {};

for (var r in data.data) {
  var nombre = data.data[r].name;
  var ataque = data.data[r].stats.attackdamage;
  var nuevalista = new listadecampeones(nombre, ataque);
  contenedorgrande.push(nuevalista);
}
//console.log(contenedorgrande);
var toplaner = document.getElementsByClassName("posiciones");

for (let i = 0; i < toplaner.length; i++) {
  toplaner[i].addEventListener("click", () => {
    var listamaxattack = [];
    for (var campeones in data.data) {
      listamaxattack.push(data.data[campeones].stats.attackdamage);
      var maximo = Math.max.apply(null, listamaxattack);
    }

    //console.log(listamaxattack);
    //console.log(maximo);
    var valores = [];

    valores = listamaxattack.filter((item) => {
      return item > maximo * 0.95 || item == 60;
    });

    console.log(valores);
    var listadeposiciones = [];
    if (toplaner[i].textContent == "Toplaner") {
      for (var a in data.data) {
        if (
          (data.data[a].tags.includes("Tank") &&
            data.data[a].stats.attackdamage < 0.95 * maximo) ||
          data.data[a].tags.includes("Fighter")
        ) {
          listadeposiciones.push(data.data[a].name);
        }
      }
      //console.log(listadeposiciones);
      //console.log(listadeposiciones.length);
    }
  });
}


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
