// let billion = 1_000_000_000

// let milliard = 2e9

// let num = 1e-6

// console.log(0xf)

//toString

let num1 = 14235

//console.log(num1.toString(16))  numdagi qiymatni 16lik sistemaga o'giradi

// console.dir(Math)
// 2 - 3

// let num = -2.7

// console.log(Math.floor(num)) kichik tomonga qarab
// console.log(Math.ceil(num)) katta tomonga qarab
// console.log(Math.round(num)) haqiqiy yaxlitlash

// console.log(Math.trunc(-2.7)) -2
// console.log(Math.floor(-2.7)) -3

// let rnd = Math.floor(Math.random() * 100)
let rnd2 = Math.random() * 100

// console.log(+rnd2.toFixed(20))

let num3 = '100.5px'

console.log(parseInt(num3))
console.log(parseFloat(num3))

console.log(NaN === NaN)

// function stringToNum(str) {
// 	if (+str > 0 || +str <= 0) {
// 		console.log(+str)
// 	} else {
// 		console.log('Bu NAN')
// 	}
// } Azamat's Method

let string = undefined

function stringToNum(str) {
	if (isNaN(str)) {
		console.log('Bu NAN')
	} else {
		console.log(+str)
	}
}

stringToNum(string)

let inf = Infinity

let inf2 = -Infinity

// console.log(typeof inf)

// console.log(isFinite('3a'))

Math.pow(2, 3) // 8
Math.sqrt(16) // 4

// 1 - function pow(x, n)
//pow(2, 3) 8

function pow(x, n) {
	return x ** 1 / n
}

function pow2(x, n) {
	let total = 1
	for (let i = 0; i < n; i++) {
		total = total * x
		// total *= x
	}
	return total
}

console.log(pow2(2, 3))

function pow3(x, n) {
	if (n === 1) {
		return x
	} else {
		return x * pow3(x, n - 1)
	}
}
console.log(pow3(2, 3))

//2 - function floor(n)
//floor(2.7324234) 2

function floor(n) {
	return n % 1 >= 0.5 ? n.toFixed(0) - 1 : n.toFixed(0)
}

console.log(floor(2.6))

//3 - function ceil(n)
//ceil(2.7)  3

function ceil(n) {
	return n % 1 >= 0.5 ? n.toFixed(0) : +n.toFixed(0) + 1
}

console.log(ceil(2.2))

//4 - function round(n)
//round(2.7)  3
//round(2.7)  2

function round(n) {
	return n.toFixed(0)
}

console.log(round(2.6))

//5 - function sqrt(x, n)
//sqrt(16, 2)  4
//sqrt(8, 3)  2

function sqrt(x, n) {
	return x ** (1 / n)
}
