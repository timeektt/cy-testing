// objects

var customer = {
    firstName: "John",
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
// Do notation
customer.firstName = 'Mike'
// bracket notaion
customer['lastName'] = 'Silver'
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])