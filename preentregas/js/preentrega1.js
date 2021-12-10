
let resultado = 0;
class Producto {
    constructor(nombre, precio, numeroCuotas, vendido) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log("Precio final(+IVA): "+ this.precio);
    }
    cuotas(numeroCuotas){
       
       switch (numeroCuotas){
            case 3:
                resultado = (this.precio * 1.21  /3)  + this.precio * 0.10;
                alert("Usted debe abonar 3 cuotas de " + resultado);
                break;
            case 6:
                resultado = (this.precio * 1.21 /6) + this.precio * 0.20;
                alert("Usted debe abonar 6 cuotas de " + resultado);
                break;
            case 12:
                resultado = (this.precio * 1.21 /12) + this.precio * 0.30;
                alert("Usted debe abonar 12 cuotas de " + resultado);
                break;
            default:
                alert("Opcion no valida");
                break;
        }
    }
    vender() {
        this.vendido = true;
        alert("¡La compra de su Mate de algarrobo grabado, se ha realizado con exito!")
    }
}
let numeroCuotas = parseInt(prompt("Seleccione en cuantas cuotas desea abonar su producto. Cantidad de cuotas permitidas 3, 6 o 12."));
const producto1 = new Producto("Mate de algarrobo grabado", 450);
producto1.sumaIva();
producto1.cuotas(numeroCuotas);
producto1.vender();