
export function buscarCampeones (input,selector) {
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

export function filtrorol (selector,tank) {
console.log( typeof entrandotanque)
document.querySelectorAll(selector).forEach((element) => 
 tank.includes(element.textContent ) 
 ?element.classList.remove("filter")
 :element.classList.add("filter")
 )
}
