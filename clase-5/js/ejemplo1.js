 // Objetos

 /*const producto = {
     nombre: "manzana",
     categoria: "frutas",
     precio: 1.99
 }
 console.log(producto);*/ 

 //EJ 2, tipo arbol

 /*const producto = {
    nombre: "manzana",
    categoria: "frutas",
    precio: 1.99,
    nutrientes: {
        carbs: 0.95,
        grasas: 0.3,
        proteina: 0.2
    },
    prueba: function (){ return "probando"} //funcion anonima
 }

 console.log(producto.nutrientes.carbs);
 console.log(producto["nutrientes"]["grasas"]);
 console.log(producto["nutrientes"].grasas);

 // asignar valores a una propiedad:

 producto.nutrientes.carbs = 1;
 console.log(producto.nutrientes);*/

 // EJ 3, abreviado

 const nombre = "manzana";
 const categoria = "frutas";
 const precio = 1.99;
 const producto = {
     nombre,
     categoria,
     precio
 }
 console.log(producto)