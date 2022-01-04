//te paso en este orden para que se vaya entendiendo mejor
const productos = [] // empiezo con un array productos


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.id = productos.length + 1 //aca especifico que
// quiero que el producto tenga un id, que sea el largo del array + 1
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        console.log("Precio final(+IVA): "+ this.precio);
    }
}

productos.push(new Producto("mate personalizado", 500)); // este tendria id 1
productos.push( new Producto("bombilla personalizada", 150));// este tendria id 2
productos.push(new Producto("chopp cervecero", 1200));// este tendria id 3


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
                        <button onClick="vender(${producto.id})">${"Comprar"}</button>
                        <button onClick="cuotas(${producto.id})">${"Calcular precio en cuotas"}</button>`;
                        //les mando a las funciones el identificador
stock.appendChild(contenedor);
}

// AGREGO EVENTO EN EL BOTON COMPRAR

// let boton = document.getElementById("btn-comprar") // aca los comento para lanzarlo en el onclick
// boton.addEventListener("click", vender)

function vender(idProducto){//recibo el id del producto
    let miProductoEnviado = productos.find(producto => producto.id == idProducto) // el producto id que sea igual a este id me da el producto identificado
    console.log(miProductoEnviado)
//porque es util esto? porque podes tener un array carrito y le pusheas este producto y listo!
    alert(`¡La compra de ${miProductoEnviado.nombre} se ha realizado con exito!`);
}

// // AGREGO EVENTO EN EL BOTON CUOTAS

// let boton2 = document.getElementById("btn-cuotas") // aca los comento para lanzarlo en el onclick
// boton2.addEventListener("click", cuotas)


function cuotas(idProducto){ // lo mismo en el caso anterior
 //fijate aca podes con el ejemplo anterior lo unico que tendrias que hacer es pasar miProductoEnviado.precio a las cuotas!
    let resultado = 0;
    let numeroCuotas = parseInt(prompt("Seleccione en cuantas cuotas desea abonar su producto. Cantidad de cuotas permitidas 3, 6 o 12."));
    let miProductoEnviado = productos.find(producto => producto.id == idProducto) 

    switch (numeroCuotas){
        case 3:
            resultado = (miProductoEnviado.precio * 1.21 /3) + miProductoEnviado.precio * 0.10;
            alert("Usted debe abonar 3 cuotas de " + resultado);
            break;
        case 6:
            resultado = (miProductoEnviado.precio * 1.21 /6) + miProductoEnviado.precio * 0.20;
            alert("Usted debe abonar 6 cuotas de " + resultado);
            break;
        case 12:
            resultado = (miProductoEnviado.precio * 1.21 /12) + miProductoEnviado.precio * 0.30;
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