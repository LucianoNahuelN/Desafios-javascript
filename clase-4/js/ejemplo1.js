// Funciones con parametros

/** 
* Description: Lo que hace nuestra funcion
* @param {number} x: primer numero a sumar
* @param {number} y: segundo numero a sumar
*/

/*function sumar(x,y){
    let total = x + y;
    alert(total);
}

sumar(3,4);
sumar(10,12);
sumar(0,4);*/

// Funcion con menos parametros

/*let a = 3;
let b;
function sumar(x,y=1){ // una de las bondades de ES6
    let total = x + y;
    alert(total);
}

sumar(a,b);*/

//Funcioanes con parametros con resultado
//CASO 1- obetener respuesta de una funcion a traves de una variable.

/*let response;
function hola(userName){
    response = "Bienvenido "+ userName;
}
hola("Victor");
alert(response);*/

//CASO 2 - obtener respuesta de una funcion haciendo uso de "return"
//hacer uso del ejemplo anterior para transformar la funcion

/*let response;
function hola(userName){
    //response = "Bienvenido "+ userName;
    return "Bienvenido "+ userName;
}
response = hola("Victor");
alert(response);*/

//LA SGTE FUNCION DEVUELVE UNDEFINED EN LUGAR DE MULTIPLICACION, SE PIDE ARREGLARLA

function multiply(a, b){
   return a * b
}
let response = multiply(3,5);
console.log(response)

