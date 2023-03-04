var a = 1;
var b = "1";
function sum(a, b) {
    return a + b;
}
function printCar(car) {
    console.log("".concat(car.make, ", ").concat(car.model, ", ").concat(car.year));
}
var testObj = {
    make: "Honda",
    model: "Honda City",
    year: 2000
};
printCar(testObj);
// Touples  year    make     model
var myCar = [
    2000,
    "Honda",
    "Honda City"
];
myCar = [2000, "Honda", "Honda City"];
function printUser(user) {
    console.log("".concat(user.name, ", ").concat(user.age));
}
function getIdentity(property) {
    return property;
}
var resAge = getIdentity({ name: "adsa", age: 123 });
var resName = getIdentity("name");
