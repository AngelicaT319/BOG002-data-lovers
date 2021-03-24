
//Funcion para la barra de busqueda//
export function buscarCampeones (input,selector) {
    document.addEventListener("keyup",(e) =>{
        if(e.target.matches(input)){
           //console.log(e.target.value);
            
            document.querySelectorAll(selector).forEach((element) => 
             element.textContent.toLowerCase().includes(e.target.value)//para que no descrimine si hay minisculas o mayuscula al escribir
            ?element.classList.remove("filter")
            :element.classList.add("filter")
            );            
        }
    });    
}
   
export function filtrorol (selector,tank) {
    console.log( typeof entrandotanque);
    document.querySelectorAll(selector).forEach((element) => 
     tank.includes(element.textContent ) 
     ?element.classList.remove("filter")
     :element.classList.add("filter")
     )
    }