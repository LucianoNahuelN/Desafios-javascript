

 class Producto {
    constructor(nombre, precio, vendido) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log("Precio final: "+ this.precio);
    }
    cuotas(){
        let numeroCuotas = prompt("Seleccione en cuantas cuotas desea abonar su producto. Cantidad de cuotas permitidas 3, 6 o 12.");
        let resultado = 0;
    
        switch (numeroCuotas){
    
            case "3":
                resultado = (this.precio / 3) + this.precio * 0.10;
                alert("Usted debe abonar 3 cuotas de " + resultado);
                break;
        
            case "6":
                resultado = (this.precio / 6) + this.precio * 0.20;
                alert("Usted debe abonar 6 cuotas de " + resultado);
                break;
                
            case "12":
                resultado = (this.precio / 12) + this.precio * 0.30;
                alert("Usted debe abonar 12 cuotas de " + resultado);
                break;
        
            default:
                alert("Opcion no valida");
                break;
        }
    }
    vender() {
        this.vendido = true;
        alert("¡La compra se ha realizado con exito!")
    }
}
const producto1 = new Producto("mate personalizado", 500);
const producto2 = new Producto("bombilla personalizada", 150);

producto1.sumaIva();
producto2.sumaIva();

producto1.cuotas();
// producto2.cuotas();

producto1.vender();
// producto2.vender();


