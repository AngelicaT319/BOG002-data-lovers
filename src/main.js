import { example } from './data.js';
import datos from './data/lol/lol.js';
/*/aqui lo del DOM xd

const aver=datos.data;


var filtro1= function(nombrecampeon){
    for (var i in aver){
        console.log(aver[i].id);
        document.getElementById('root').innerHTML+=aver[i].id;
        
        /*if (nombrecampeon===i){
            return aver[i];

        }*/
    /*}

}
example(aver)


filtro1('Aatrox');*/

//for(var i in filtro1('Aatrox')){
    //console.log(filtro1('Aatrox')[i]);
   // if ('info'===i){
        //console.log(filtro1('Aatrox')[i].attack);

//}
//}
/*console.log( aver);
console.log(typeof aver)
console.log(Object.keys(aver))

//Aqui lo del DOM
import data from './data/lol/lol.js';

import {DataCampeones} from  './data.js';*/

const contenido = document.getElementById('contenido');

//Funcion para buscar campeones
for (var campeones in data.data){
    const campeon = (data.data[campeones])
    var div = document.createElement("div");
    var name = document.createElement("h3");
    var imagenCampeon = document.createElement("img");
    imagenCampeon.src = campeon.img;
    name.innerText = campeon.name
    div.appendChild(name)
    div.appendChild(imagenCampeon)
    contenido.appendChild(div);
}
