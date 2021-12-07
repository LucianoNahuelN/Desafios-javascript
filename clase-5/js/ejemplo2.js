// Constructores

function Car(brand, model, year, owner){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

//let mycar = new Car("Eagle", "Talon TSi", 1993);
//let kenscar = new Car("Nissan", "300ZX", 1992);
//let vpgscar = new Car("Mazda", "Miata", 1990);

//console.log(mycar);
//console.log(kenscar);
//console.log(vpgscar);

function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let rand = new Person("Rand McKinnon", 33, "M");
let ken = new Person("Ken Jones", 19, "M");

console.log(rand);
console.log(ken);

let car1 = new Car("Eagle", "Talon TSi", 1993, rand); 
let car2 = new Car("Nissan", "300ZX", 1992, ken);

console.log(car1);
console.log(car2);