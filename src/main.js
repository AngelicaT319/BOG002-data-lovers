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

//se crean filtros paraa buscar por nombre especifico al personaje

function buscarCampeones (input,selector) {
  //utilizar metodos aca de los puros para filter
  //y esto es lo que hay que testear
  document.addEventListener("keyup",(e) =>{
      //target funciona pa saber cuando avtive el evento jiji
       
      if(e.target.matches(input)){
          //matches verifica que la clase sea la misma
          //element generalizacion para representar un objeto en html y sacar cositas de ahi jiji xd
          document.querySelectorAll(selector).forEach((element) => 
          //tolower pasa todo a minuscula pa que sea mas sencillo
           element.textContent.toLowerCase().includes(e.target.value)
           //despues del signo de pregunta es como el true :D si la condicion de arriba se cumple
          ?element.classList.remove("filter")
          :element.classList.add("filter")
          );                  
      }      
  });    
}
buscarCampeones(".barra-busqueda", ".card");


//se crea funcion para filtrar por roles
function filtrorol (selector,tank) {
  //console.log( typeof entrandotanque)
  document.querySelectorAll(selector).forEach((element) => 
  tank.includes(element.textContent ) 
  ?element.classList.remove("filter")
  :element.classList.add("filter")
  )
  }
var categorias = document.getElementsByClassName("categorias");
var categorylist = "";
for (let i = 0; i < categorias.length; i++) {
  categorias[i].addEventListener("click", () => {
    if (categorias[i].value == "Apoyo") {
      categorylist = "Support";
    } else if (categorias[i].value == "Asesino") {
      categorylist = "Assassin";
    } else if (categorias[i].value == "Luchador") {
      categorylist = "Fighter";
    } else if (categorias[i].value == "Tirador") {
      categorylist = "Marksman";
    } else if (categorias[i].value == "Mago") {
      categorylist = "Mage";
    } else if (categorias[i].value == "Tanque") {
      categorylist = "Tank";
    }
    var listCategory = [];
    for (var rep in data.data) {
      //console.log(data.data[rep].tags);
      //includes verifica si dentro de un array hay un elemento
      //que tenga la palabra que le meti xd
      if (data.data[rep].tags.includes(categorylist)) {
        //console.log(data.data[rep].name);
        listCategory.push(data.data[rep].name);
      }
    }
    filtrorol(".card", listCategory);
  });
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
