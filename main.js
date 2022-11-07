addEventListener("DOMContentLoaded", (e)=>{
    let numero=document.querySelector(`#numero`)
    numero.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato = Object.fromEntries( new FormData(e.target));
        num = dato.envio
        let total=0;
        for(let i=1; i <= num / 2; i++){
            if (num%i==0){
                total=total+i;
            }
        }
        if(total !=0 && total == num){
            mostrar.innerHTML=`es perfecto `
        }
        else{
            mostrar.innerHTML=`no es perfecto `
        }     
    })


})