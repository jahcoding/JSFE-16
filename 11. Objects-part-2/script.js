let user = {
	name: 'John',
	surname: 'Smith',
	age: 45,
	colors: {
		first: 'black',
		second: 'pink'
	}
}

// 1-method
let admin = {}

for (let key in user) {
	admin[key] = user[key]
	// admin["name"] = user["name"]// John
}
// console.log(user['name'])

admin.name = 'Alex'
admin.colors.first = 'red'

console.log(user)
console.log(admin)

// 2-method
user = {
	name: 'John',
	surname: 'Smith',
	age: 45
}

let superAdmin = Object.assign({}, user)

superAdmin.name = 'Lisa'

console.log(user)
console.log(superAdmin)

// 3-method
user = {
	name: 'John',
	surname: 'Smith',
	age: 45,
	colors: {
		first: 'black',
		second: 'pink'
	}
}

let host = { ...user, colors: {...user.colors} }

host.name = 'Alex'
host.colors.first = 'red'

console.log(user)
console.log(host)

// ... - spread, ... - rest

function some( name, surname, ...smth ){
	console.log(smth)
}
some(5, 6, 7, 8, 9, 0, 10, 1, 23, 35)

function getCardNumber(str){
	//code
}

getCardNumber('8600123456789101') //8600 **** **** 9101
getCardNumber('86001234567891012') // karta xato kiritildi
getCardNumber('860012345678910a') // karta xato kiritildi
getCardNumber('8600123456789101') // 8600 **** **** 9101, bu uzkard
getCardNumber('9860123456789101') // 9680 **** **** 9101, bu humo
getCardNumber('1233123456789101') // 1233 **** **** 9101, aniqlanmadi 1 ball