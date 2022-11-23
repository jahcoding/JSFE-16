let num = 11
let str = "Open Web"
let bool = true

// console.log(typeof (num + ""))
// console.log(typeof String(num))
// console.log(num.toString())

console.log(Boolean("0"))

console.log(true + "false")
console.log(true + 1)

console.log({ name: "Alex" } + {}) //{} = "[object Object]"" => toString
console.log(typeof ([] + [])) // ""

console.log({} + [1, 2, {}])

let a = [1, 2, 3]
let b = [1, 2, 3]

console.log(a[0] === b[0])

//Taqqoslash operatorlari

// ==
// ===
// > < <= >=

console.log(5 > 5)

//unary, binary, operators, operand, argument
//operand1   operator operand2
console.log(8 - 6) // - binary

console.log(-5) // - unary
console.log(+"5")

let p = +"3"
let p1 = +"5"

console.log(p + p1)
//let var const function class for if else while do switch break contin return delete

//increment(++), dicrement(--), prefix(++num, --num), postfix(num++, num--)

let num1 = 5
let num2 = 6

// num1 = num1 + 1

console.log(num1++)
console.log(num1)(
	//ternary ? :

	3 > 4
)
	? console.log("done")
	: console.log("error")

// if else
let num4 = 50

if (num4 > 50) {
	console.log("Bu son 50dan katta")
} else if (num4 === 50) {
	console.log("Bu son 50ga teng")
} else {
	console.log("Bu son 50dan kichik")
}

if (num4 > 50) {
	console.log("Bu son 50dan katta")
} else {
	console.log("Bu son 50dan kichik")
}

if (num4 === 50) {
	console.log("Bu son 50ga teng")
}

// name, surname, age promptlardan keladigan ma'lumot object ko'rinishida saqlansin
// agar age 16dan kichik bo'lsa "promptname maktab o'quvchisi" , 16dan katta bo'lsa "promptname maktabni tugatgan", agar age 16ga teng bo'lsa "propmtname pasport olgan"
