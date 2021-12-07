/**
 * Crear una funcion anonima q cumple con las siguientes condiciones.
 * 1- si se pasa un numero, retornar el valor multiplicado por 3.
 * 2- si se pasa un string, retornar el string "ARRR!".
 * 3- si se pasa cualquier otro tipo, retornar el mismo valor.
 */

// (const / let) variable = function(){instruccion}

const input = function(value){
    if( typeof value === "number"){
        return value*3;
    } else if (typeof value === "string"){
        return "ARRR!";
    } else{
        return value;
    }
}

//transformarla en funcion flecha.

const input2 = (value) => {
    if( typeof value === "number"){
        return value*3;
    } else if (typeof value === "string"){
        return "ARRR!";
    } else{
        return value;
    }
}

console.log(input(4));
console.log(input2(4));