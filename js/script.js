function mostrarMensaje(elemento){
    alert("Cargando informe meteorológico…");
    /* muestra msje de cargado  */
}

function removerCookie(elemento){
    // elemento.closest('.cookies').remove();
    let cookie = elemento.closest('.cookies');
    cookie.classList.add('ocultar');
}


function cambiarTemperatura(elemento){
    let opcion = elemento.value;
    let temperaturas = document.querySelectorAll('.max > span, .min > span');

    if(opcion === 'f'){
        for(let i = 0; i < temperaturas.length; i ++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura * 1.8) + 32;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
        /* Genera un alerta al cambiar la temperatura  */
        alert('Temperatura cambiada a Fahrenheit');
    }
    else{
        for(let i = 0; i < temperaturas.length; i ++){
            let temperatura = temperaturas[i].innerText;
            let temperaturaFinal = (temperatura - 32) / 1.8;
            temperaturas[i].innerText = Math.round(temperaturaFinal);
        }
        /* Genera un alerta al cambiar la temperatura  */
        alert('Temperatura cambiada a Celsius');
    }
}


function removerCookie(elemento) {
    // Encuentra el elemento padre de la cookie y lo elimina
    elemento.parentNode.parentNode.remove();
}
