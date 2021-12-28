class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log("Precio final(+IVA): "+ this.precio);
    }
}


const productos = [
    new Producto("mate personalizado", 500),
    new Producto("bombilla personalizada", 150),
    new Producto("chopp cervecero", 1200),
    
];

//ALMACENAMIENTO EN STORAGE

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

guardarLocal("listaProductos", JSON.stringify(productos));

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));


//MODIFICO EL DOM

for (const producto of almacenados) {
    let stock = document.getElementById("stock");
    let contenedor = document.createElement("div"); 
contenedor.innerHTML = `<h3>${producto.nombre}</h3>
                        <p> $ ${producto.precio} </p>
                        <button id="btn-comprar">${"Comprar"}</button>
                        <button id="btn-cuotas">${"Calcular precio en cuotas"}</button>`; 
stock.appendChild(contenedor);
}

// AGREGO EVENTO EN EL BOTON COMPRAR

let boton = document.getElementById("btn-comprar")
boton.addEventListener("click", vender)
function vender (){
  alert("¡La compra se ha realizado con exito!");
}

// AGREGO EVENTO EN EL BOTON CUOTAS

let boton2 = document.getElementById("btn-cuotas")
boton2.addEventListener("click", cuotas)


function cuotas(){
    let resultado = 0;
    let numeroCuotas = parseInt(prompt("Seleccione en cuantas cuotas desea abonar su producto. Cantidad de cuotas permitidas 3, 6 o 12."));
       
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


// USO LOS METODOS 

for (const producto of productos)
    producto.sumaIva();






