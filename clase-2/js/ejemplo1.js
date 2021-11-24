let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad"));



if (nombre != "" && nombre.toUpperCase() === "LUCIANO" ){
    if(edad > 18){
        alert("usted es mayor de edad");
    } else if(edad < 18 && edad > 0){
        alert("usted es menor de edad");
    }else {
        alert("usted escribio mal la edad");
    }
    
} else {
    alert("no tenes permitido ingresar");
}

