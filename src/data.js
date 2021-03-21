export function buscarCampeones (input,selector) {
    document.addEventListener("keyup",(e) =>{
        if(e.target.matches(input)){
           console.log(e.target.value);
            
            document.querySelectorAll(selector).forEach((element) => 
             element.textContent.toLowerCase().includes(e.target.value)
            ?element.classList.remove("filter")
            :element.classList.add("filter")
            );            
        }
    });    
}
      