//aqui lo del DOM xd
import { example } from './data.js';
import datos from './data/lol/lol.js';
const aver=datos.data;


var filtro1= function(nombrecampeon){
    for (var i in aver){
        console.log(aver[i].id);
        document.getElementById('root').innerHTML+=aver[i].id;
        
        /*if (nombrecampeon===i){
            return aver[i];

        }*/
    }

}
example(aver)


filtro1('Aatrox');

//for(var i in filtro1('Aatrox')){
    //console.log(filtro1('Aatrox')[i]);
   // if ('info'===i){
        //console.log(filtro1('Aatrox')[i].attack);

//}
//}
/*console.log( aver);
console.log(typeof aver)
console.log(Object.keys(aver))*/
