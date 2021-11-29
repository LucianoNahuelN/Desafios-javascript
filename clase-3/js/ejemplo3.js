//Pedir un numero mediante prompt y sumarle otro numero en cada repeticion, mostrando una salida en cada resultado.

/*for (let i = 1; i <= 10; i++) {
    alert(i);
}*/





//Pedir un texto mediante prompt, concatenar un valor en cada repeticion, mostrando una salida en cada resultado, hasta que se ingrese "ESC".

/*let nombre = prompt("Ingresa tu nombre");
while (nombre != "ESC"){

  alert("Bienvenido "+ nombre);

    nombre = prompt("Ingresa tu nombre");
}*/





//Peir un numero prompt, repetir la salida del mensaje "Hola" la cantidad de veces ingresada.

let i = 0;
let numero = parseInt(prompt("Ingrese un numero"));

while (i < numero){
    i++;
    alert("Hola");
}