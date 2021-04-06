import data from "./data/lol/lol.js";
const dataCampeones = document.querySelector("#fichasCampeon");



//Funcion para mostrar campeones

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

  dataCampeones.appendChild(div);
}





//ventana emergente al seleccionar campeon para mirar caracteristicas
function mostrarPopup(campeon) {
  const contenido = document.getElementById("popup");
  const div = document.createElement("div");
  const name = document.createElement("h2");
  const imagen = document.createElement("img");
  const description = document.createElement("p");
  
  div.id = "popupdiv";
  
  name.innerText = campeon.id;
  imagen.src = campeon.splash;
  description.innerText = campeon.blurb;
  
  contenido.appendChild(div);
  div.appendChild(name);
  div.appendChild(imagen);
  div.appendChild(description); 
}
