// Utilizamos "for" cuando sabemos la cantidad exacta en la que queremos repetir un codigo

/*for(let i = 0; i < 10; i++){ // Por cada i, siempre q sea menor q 10

    console.log(i); // Haz esto 
}*/


// Utilizamos while cuando queremos repetir un codigo siempre q se cumple alguna condicion.

/*let userName = prompt("Ingrese su nombre: ");
while (userName === "") { //Siempre q username sea vacio

    userName = prompt("No ingreso nada, ingrese su nombre"); // Haz esto
}*/

//Do while hace lo mismo que while, solo q realiza aunque sea un recorrido.

/*let userInput = parseInt(prompt("Ingrese un numero"));

do { // Haz
    userInput++; //Esto
    console.log(userInput);
} while (userInput < 10); //Siempre q userAge sea menor q 10*/

// Usamos break cuando queremos salirnos de cualquier ciblo

/*for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 7) { //si i es igual a 7
        break; // sal
    }
}
console.log("Se salio del ciclo");*/

//Usamos continue para saltarnos iteraciones

/*for (let i = 1; i < 11; i++){
    if(i % 2 !== 0) { //Si no es par
        continue; // Salta esta iteracion
    }
    else { //si es par
        console.log(i); //muestrame por consola i
    }
}*/


// switch es como un condicional

let option = prompt("Ingrese la opcion que desea (añadir, eliminar o actualizar)");

switch (option){

    case "añadir":
        let newContact = prompt("Ingrese el nombre del contacto que desea agregar");
        let newPhone = prompt("Ingrese el numero");

        alert(newContact + " guardado con exito!");
        break;

    case "eliminar":
        let contactName = prompt("Ingrese el nombre dek contacto q desea eliminar");
        
        alert(contactName + " eliminado con exito!");
        break;
        
    case "actualizar":
        let contact = prompt("Ingrese el nombre del contacto que desea actualizar");
        let newNumber = prompt("Ingrese el nuevo numero");
        
        alert(contact + " actualizado con exito!");
        break;

    default:
        alert("Opcion no valida");
        break;
}