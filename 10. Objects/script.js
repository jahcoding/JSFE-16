let obj = {
	name: 'Alex',
	surname: 'Smith',
	age: 5,
	
}

// obj.pets = ['dog', 'cat']

// let obj2 = {
// 	name1: 'John',
// 	surname1: 'Smith',
// 	age1: 6
// }

// let obj3 = Object.assign(obj, obj2, obj4)

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

obj = {
	name: 'Alex',
	surname: 'Smith',
	age: 5,
	key: true
}

for(key in obj){
	console.log(obj[key])
	// console.log(obj[key])
}

obj = {
	name: 'Alex',
	surname: 'Smith',
	age: 5,
	key: true
}// faqat for in

// console.log("name" in obj)


let arr = [1, 2, 3 ,4, 5, 6] //for in va for of massivda ishlaydi

// for(value of arr){
// 	console.log(value)
// }

for(key in obj){
	console.log(arr[key])
	// console.log(obj[key])
}
// Array
// Object

// let arr1 = new Array()
// let obj1 = new Object()

// Map
// Set
let map = new Map()
let set = new Set()

// map.set({title: 'isMap'}, 'Alex')
// map.set('surname', 'Smith')
set.add('apple')
set.add('orange')
// console.log(set.get(0))

for (let fruit of set) {
  console.log(fruit); // John (потом Pete и Mary)
}

// let user = { name: 'Alex', surname: 'Smith' }

// let { surname, name  } = user

// let surname = obj.surname
// let name = obj.name

let fruits = ['apple', 'orange', 'kiwi']

let [ a, b, c ] = fruits

// let a = fruits[0]
// let b = fruits[1]
// let c = fruits[2]

console.log(a)

let user = { name: 'Alex', pets: { name1: 'Tuzik', name2: 'Bobik' } }

// let { name, pets: {name1, name2} } = user

let { name1, name2 } = user.pets

console.log(name2)