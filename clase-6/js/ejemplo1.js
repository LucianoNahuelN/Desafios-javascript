class Producto {
    constructor(nombre, precio, numeroCuotas, vendido) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.numeroCuotas = parseInt(numeroCuotas);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log("Precio final(+IVA): "+ this.precio);
    }
    cuotas(){
        let resultado = 0;
        
        switch (this.numeroCuotas){
    
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
        alert("¡La compra se ha realizado con exito!")
    }
}


const productos = [
    new Producto("mate personalizado", "500", 3),
    new Producto("bombilla personalizada", "150", 3),
    new Producto("chopp cervecero", "1200", 12),
];
productos.push(new Producto("mate personalizado2", "50", 3));
productos.push(new Producto("bombilla personalizada2", "15", 3));
productos.push(new Producto("chopp cervecero2", "120", 6));

console.log( productos.find( producto => producto.nombre === "chopp cervecero" ) );


for (const producto of productos)
    producto.sumaIva(),
    producto.cuotas(),
    producto.vender()





 