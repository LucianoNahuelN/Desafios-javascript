//Calcular pagos en cuotas sobre un monto determinado.


let valor = parseInt(prompt("Ingrese un valor"));
let numeroCuotas = prompt("Seleccione en cuantas cuotas desea abonar su producto. Cantidad de cuotas permitidas 3, 6 o 12.");
let resultado = 0;

function cuotas(valor){
    
    switch (numeroCuotas){

        case "3":
            resultado = (valor / 3) + valor * 0.10;
            alert("Usted debe abonar 3 cuotas de " + resultado);
            break;
    
        case "6":
            resultado = (valor / 6) + valor * 0.20;
            alert("Usted debe abonar 6 cuotas de " + resultado);
            break;
            
        case "12":
            resultado = (valor / 12) + valor * 0.30;
            alert("Usted debe abonar 12 cuotas de " + resultado);
            break;
    
        default:
            alert("Opcion no valida");
            break;
    }
}

cuotas(valor);

