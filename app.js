let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

function asignarTextoElemento (elemento, texto){
    let elmentoHTML = document.querySelector(elemento);
    elmentoHTML.innerHTML = texto;
    return;
}

function verificarNumero (){
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
    if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p', '¡El número secreto es menor!');
        }else{
            asignarTextoElemento('p', '¡El número secreto es mayor!');  
        }
       intentos ++;
       limpiarCaja();
   }
   return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja (){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}
function condicionesIniciales(){
    asignarTextoElemento ('h1', 'Juega el número secreto');
    asignarTextoElemento ('p', '!Escoge un número del 1 al 10!');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalos de números
    //generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();