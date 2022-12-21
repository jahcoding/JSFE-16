let user = {
	name: 'John',
	surname: 'Smith',
	age: 45
}

// 1-method

let admin = {}

for (let key in user) {
	admin[key] = user[key]
	// admin["name"] = user["name"]// John
}
// console.log(user['name'])

admin.name = 'Alex'
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
	age: 45
}

let host = { 
	...user, 
	pet: 'Bobik',
	sayHello: function(){
		console.log('Hello')
	},
	color: 'black'
}

host.name = 'Alex'

console.log(user)
console.log(host)

// ... - spread, ... - rest

function some( name, surname, ...smth ){
	console.log(smth)
}
some(5, 6, 7, 8, 9, 0, 10, 1, 23, 35)