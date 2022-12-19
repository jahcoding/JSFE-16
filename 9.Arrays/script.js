let arr = [1, 6, -5, -30, 60, 90]
let arr3 = ['b', 'w', 't', 'e', 'o', 'a'] 

arr[90] = 100
console.log(arr[4])
console.log(arr)
console.log(arr.length)
console.log(arr[arr.length - 1])

console.log(arr.indexOf(-30, 4))
console.log(arr.includes(-30, 4))

let arr2 = ['apple', 'samsung', 'xiaomi', 'huawei']

if(arr2.includes('apple')){
	console.log('done')
}

//push pop unshift shift

let ind = arr.push('apple')
arr.push('samsung')
arr.pop()
arr.shift()
arr.unshift('apple')

//split join

let arrEx = 'Lorem ipsum dalar sit amet'.split('a')
let strEx = arrEx.join('')

//practice

let str = 'Lorem ipsum apple some test'

function smth(string){
	let arr = string.split(' ')

	let newArr = []
	// arr = [ 'Lorem', 'ipsum', 'apple', 'some', 'test' ]
	// newArr = []
	for(let i = 0; i < arr.length; i++){

		if(arr[i].length === 4){

			newArr.push(arr[i])

		}

	}
	return newArr.join(' ')
}

console.log(smth(str))
console.log(arrEx)
console.log(strEx)

//slice and splice

arr = [1, 6, -5, -30, 60, 90]

let newArr1 = arr.slice(1, 4)

let newArr2 = arr.splice(1, 3)

console.log('New array: ', newArr2)
console.log('Old array: ', arr)

//practice
arr = [1, 6, -5, -30, 60, 90]

function getEvenNumbers(array){
	// let newArr = []
	for(let i = 0; i < array.length; i++){
		// console.log(i)
		if(array[i] % 2 !== 0){
			array.splice(i, 1)
		}
	}
	return array
}
// arr.splice(0, 1)

// console.log(arr)
console.log(getEvenNumbers(arr))

//sort
arr = [1, 11, 23, 2, 3, 39,  6, -5, -30, 60, 90]
arr3 = ['b', 'w', 't', 'e', 'o', 'a'] 

function sortFn(a, b){
	return b - a
}

let arrSort = arr.sort(sortFn)

console.log(arrSort)

//concat
arr = [1, 11, 23, 2, 3, 39,  6, -5, -30, 60, 90]
arr2 = ['apple', 'samsung', 'xiaomi', 'huawei']
arr3 = ['b', 'w', 't', 'e', 'o', 'a'] 

let newConcat = arr.concat(arr2, arr3)

console.log(arr)
console.log(newConcat)

//reverse
arr2 = ['apple', 'samsung', 'xiaomi', 'huawei']

arr2.reverse()

console.log(arr2)

//forEach
arr2 = ['apple', 'samsung', 'xiaomi', 'huawei']

arr2.forEach(function(item, i, arr){
	// console.log(item)
	// console.log(i)
	console.log(arr)
})

arr2 = ['apple', 'samsung', 'xiaomi', 'huawei']

for(let i = 0; i < arr2.length; i++){
	// console.log(arr2[i])
	// console.log(i)
	console.log(arr2)
}


//Homework

arr = ['apple', 'samsung', 'xiaomi', 'huawei']

function push(array, item){
	return array[array.length] = item
}

push(arr, 'poco')
push(arr, 'vivo')

console.log(arr)// ['apple', 'samsung', 'xiaomi', 'huawei', 'poco']

//pop
arr = ['apple', 'samsung', 'xiaomi', 'huawei']

function pop(array){
	array.length = array.length - 1
	return array
}
pop(arr)
pop(arr)


console.log(arr)// ['apple', 'samsung', 'xiaomi']
