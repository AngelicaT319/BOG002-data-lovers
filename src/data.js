//Funcion para la barra de busqueda//
export function buscarCampeones(input, selector) {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //console.log(e.target.value);
      document.querySelectorAll(selector).forEach((element) =>
        element.textContent.toLowerCase().includes(e.target.value) //para que no descrimine si hay minisculas o mayuscula al escribir
          ? element.classList.remove("filter")
          : element.classList.add("filter")
      );
    }
  });
}

export function filtrorol(selector, tank) {
  //console.log(typeof entrandotanque);
  document
    .querySelectorAll(selector)
    .forEach((element) =>
      tank.includes(element.textContent)
        ? element.classList.remove("filter")
        : element.classList.add("filter")
    );
}

//Funcion para filtrar por roles y demas a los campeones
export function listaRoles (){
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
}

export function listaAtque (){
var contenedorgrande = [];

var listadecampeones = {};

for (var r in data.data) {
  var nombre = data.data[r].name;
  var ataque = data.data[r].stats.attackdamage;
  var nuevalista = new listadecampeones(nombre, ataque);
  contenedorgrande.push(nuevalista);
}
}

//console.log(contenedorgrande);
export function ListaPosisiones (){
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
}