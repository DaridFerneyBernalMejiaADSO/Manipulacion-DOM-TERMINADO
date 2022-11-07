addEventListener("DOMContentLoaded", (e)=>{
    let formulario=document.querySelector(`#formulario`)
    formulario.addEventListener(`submit`,(e)=>{
        e.preventDefault();
        let dato = Object.fromEntries( new FormData(e.target));
        venta1=Number(dato.venta1)
        venta2=Number(dato.venta2)
        venta3=Number(dato.venta3)
        sueldobase=Number(dato.sueldobase)
        nombre=dato.nombre
        comision=(venta1+venta2+venta3)*0.10     
        mostrar.innerHTML=`el usuario ${nombre} el pago es de : ${sueldobase+comision}`





    })


})