let precioKilometro = 0;
let vehiculo = prompt("Cuál vehículo desea?").toUpperCase();
let kmsRecorridos = parseInt(prompt("Kilometros recorridos"));
let litrosConsumidos = parseInt(prompt("Cuántos litros consumiste?"));

if(vehiculo === "COCHE"){
    precioKilometro = 20;
}else if(vehiculo === "MOTO"){
    precioKilometro = 30;
}else if(vehiculo === "COLECTIVO"){
    precioKilometro = 50;
} else{
    document.write("elije un vehiculo disponible");
};

let totalKms = kmsRecorridos * precioKilometro;

if(litrosConsumidos > 0 && litrosConsumidos <= 100){
    totalKms = totalKms + 100;
}else {
    totalKms = totalKms + 200;
};

console.log("Vehiculo: " + vehiculo)
console.log(kmsRecorridos + " x " + precioKilometro + "=" + totalKms + "$");
console.log(totalKms + "$");