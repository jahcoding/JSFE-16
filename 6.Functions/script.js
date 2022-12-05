//Declaration, Expression, Arrow Functions
//Scopes

//Function Declaration

// function sayHi() {
// 	console.log("Salom")
// }

// function sayBye() {
// 	console.log("Hayr")
// }

// function showMessage() {
// 	console.log("Akbar salom berishga tayyorlanyabdi...")
// 	sayHi()
// 	console.log("Akbar gaplashyabdi...")
// 	console.log("Akbar hayrlashishga tayyorlanyabdi...")
// 	sayBye()
// }

// showMessage()

// Function Expression

// sayHi()

let sayHi = function () {
	console.log("Hello")
}

// let say = sayHi

//Function Declaration

// sayBye()

// function sayBye() {
// 	console.log("Bye")
// }

//Arrow Function

let sayHello = () => {
	console.log("Hello")
}

sayHello()

// return

// function teaching() {
// 	console.log("Run...")
// }

// function run() {
// 	console.log("Run...")
// 	return 5
// }

// let card = run() //teaching()

// console.log(card)

//Local Scope
let num = 6

function showMessage() {
	num = 125
	console.log(num)
}

showMessage()
console.log(num)

//Arguments

function getInfo(name = "Alex", surname = "Smith", age = 15) {
	console.log(name, surname, age)
}

getInfo("Akbar", "Vayisov")

//Homework
// 1. Ism, Familiya, Age (prompt)
// 2. setInfo funksiya - bu funksiya 3ta promptdan keladigan qiymatlar object ko'rinishida qaytarsin
// 3. infos o'zgaruvchiga object saqlaymiz undagi students keyinda objectlar saqlansin

// setInfo(name, surname, age)

// {
// 	name:
// 	surname:
// 	age:
// }

// let infos = {
// 	student1: {
// 		name:
// 	},
// 	student2: {

// 	},
// 	student3: {

// 	}
// }

// infos["student" + i] = setInfo()
