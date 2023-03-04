let a: number = 1;

let b: string = "1";

function sum(a: number, b: number):number {
    return a + b;
}


function printCar(car: {
    make: string
    model: string
    year: number,
    defaultFeatures?: string // optional
}) {
    console.log(`${car.make}, ${car.model}, ${car.year}`);
}


const testObj = {
    make: "Honda",
    model: "Honda City",
    year: 2000
}
printCar(testObj);

// Touples  year    make     model
let myCar: [number, string, string] = [ 
    2000, 
    "Honda", 
    "Honda City"
];

myCar = [2000, "Honda", "Honda City"];


interface IUser {
    name: string
    age: number
}

function printUser(user: IUser): void {
    console.log(`${user.name}, ${user.age}`);
}



function getIdentity<T>(property: T): T {
    return property;
}

let resAge: IUser = getIdentity<IUser>({name: "adsa", age: 123});
let resName: string = getIdentity<string>("name");

