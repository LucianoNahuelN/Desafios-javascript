// Calculadora

let operation = prompt("Ingrese operacion (+, -, x, /)")

while (operation !== '+' && operation !== '-' && operation !== 'x' && operation !== '/') {
     operation = prompt('Ingrese operacion (+, -, x, /)');
}

let firstNumber = parseInt(prompt("Ingrese primer numero"));

let secondNumber = parseInt(prompt("Ingrese segundo numero"));

switch (operation) {
    case "+":
        alert(firstNumber + secondNumber);
        break;
    
    case "-":
        if( firstNumber > secondNumber){

            alert(firstNumber - secondNumber);
        } else {
            alert(secondNumber - firstNumber);
        }
        break;
    
    case "x":
        alert(firstNumber*secondNumber);
        break;
    
    case "/":
        alert(firstNumber/secondNumber);
        break;
    
    default:
        alert("Operacion no valida");

        let operation = prompt("Ingresa operacion (+, -, x, /)");
        break;    

}


 