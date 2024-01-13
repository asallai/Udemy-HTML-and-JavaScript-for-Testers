var a = "Hello world"
var b = 5
var c = true

let name = "John"

const num = 10

console.log("Hello world")
console.info("Hello world")
console.warn("warning")
console.error("error")

function add(num1, num2) {
    let result = num1 + num2
    return result
}

const sum1 = add(5, 7)
console.info(sum1)

const x = (num1, num2) => num1 + num2
const sum2 = x(5, 7)
console.info(sum2)

let cars = [
    "Audi",
    "Mercedes",
    "BMW",
    "Volvo"
]

console.log("First element: " + cars[0])
console.log("Last element: " + cars[cars.length - 1])

let date = new Date()
console.log(date.getTime())
console.log(Date.now())
console.log(date.getDay())

class Car {
    constructor(brand) {
        this.brand = brand
    }

    start() {
        console.warn("Engine started!")
    }
}

anycar = new Car("Volvo")
console.log(anycar.brand)
console.log(anycar.start())
