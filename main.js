addEventListener("DOMContentLoaded", (e)=>{
    let formulario = document.querySelector("#formulario")
    let pagar =document.querySelector("#pagar")
    let hora = 5208.33
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        let dato = Object.fromEntries(new FormData(e.target));
        input1= dato.input1
        input1=input1*hora
        pagar.innerHTML=`su dinero es : ${input1}`
    
    })

})