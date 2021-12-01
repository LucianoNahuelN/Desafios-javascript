//Codificar 3 funciones

//Una funcion entrada(), la cual solicite un valor al usuario y lo retorne.

let entrada = function(){
    let valor = prompt("Ingrese un valor");
    return valor;
} 

//Una funcion procesamiento(valor), donde se transforme la entrada.

let procesamiento = (valor)=> {
    return valor.toUpperCase();
}

//Una funcion de salida(valor), la cual mostrara el resultado por alerta.

let salida = function(valor){
    alert(valor);
}

//Luego, invocat las tres funciones

let entradaUno = entrada();
let procesamientoUno = procesamiento(entradaUno);
let salidaUno = salida(entradaUno);
let salidaDos = salida(procesamientoUno);

salidaUno();
salidaDos();