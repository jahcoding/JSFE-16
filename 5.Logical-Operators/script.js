// || - && - !
// or - and - not

// console.log(5 && "str" && {} && []) false qiymatga qoqiladi
// console.log(null || undefined || 5 || "str" || {} || [] ) true qiymatga qoqiladi

// false && false && true && true && true && true

// if(5 && undefined){
// 	console.log('done')
// }else{
// 	console.log('error')
// }
let pr = prompt("Ismingizni kiriting")
// pr = 'ali' console.log("Ali") // "Ali"

if (pr === "ali" || pr === "Ali") {
	console.log("done")
}

let age = 40

if (age > 30 || age < 50) {
	console.log("done")
}

// if ((age <= 50 || age >= 60) && !(age < 50 || age > 60)) {
// 	console.log("done")
// }

//!

console.log(!5)
// console.log(!null)

console.log(!!5 == 5)

if (4 != 4) {
	console.log("done")
}
