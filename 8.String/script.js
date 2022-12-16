// let str = "O'rmon"
// let str2 = 'Frontend "Smth"'
// let str3 = `O'rmon "Smth"`

// let text = `jasldfjlksa
// 							jdflksjadlkfjklsadjfkls
// 							ajdfklasjdfkjaslkd
// 							fjklsadjf`
// let smthText = `Men o'qiyman: ${str}da ${str2} - ${str3}`

// // console.log(smthText)
// console.log(text)

// let str = 'Open \n W\teb'

// let str2 = 'O\'rmon "Smth"'

console.log(str)
// console.log(str.length)
// console.log(str[1])
// console.log(str.charAt(1))
// console.log(str.indexOf('m', 5))

function getLettersCount(str, letter) {
	let pos = 0
	let count = 0
	while (true) {
		let foundPos = str.indexOf(letter, pos)
		if (foundPos === -1) break
		// console.log(foundPos)
		pos = foundPos + 1
		count++
	}
	console.log(count)
}

getLettersCount(str3, 'o')

// console.log(str.includes('n'))
// console.log(str.startsWith('Lor'))
// console.log(str.endsWith('et'))

let str = 'Lorem Ipsum Lorem ipsum dolor sit amet'

// console.log(str.substr(3, 8))
// console.log(str.slice(3, 8))

// console.log(str.slice(6, 8))
// console.log(str.slice(-8, -1))
// console.log('slice: ', str.slice(-4, -1))// sliceda ishlaydi
// console.log('subtring: ', str.substring(-4, -1)) //substringda ishlamaydi

// console.log('slice: ', str.slice(10, 5)) // sliceda ishlamaydi
// console.log('subtring: ', str.substring(10, 5)) // substringda ishlaydi

let userName = 'rustaM' //Akbar
console.log(userName.repeat(9))

function rectangle(count) {
	let rectangleStr = ''
	for (let i = 1; i <= count; i++) {
		rectangleStr = rectangleStr + '*'.repeat(i) + '\n'
	}
	return rectangleStr
}

console.log(rectangle(4))
//    *
//   * *
//  * * *
// * * * *

// validation

if (userName.length >= 2 && userName !== null && userName !== '') {
	console.log(
		`${userName.slice(0, 1).toUpperCase()}${userName.slice(1).toLowerCase()}`
	)
}

console.log('Akbar'.codePointAt(1))
console.log(String.fromCodePoint(107))

let str1 = ''

for (let i = 65; i <= 220; i++) {
	str1 += String.fromCodePoint(i)
	if (i === 219) {
		console.log(str1)
	}
}

console.log('a' > 'A')

console.log('A'.localeCompare('a'))

// 'str'.indexOf('search')

//indexOf

// function customIndexOf(str, searchStr, start = 0) {
// 	start = start === 0 ? start : start + 1

// 	let status = false

// 	for (; start < str.length - 1; start++) {
// 		// "W"						'Web'
// 		if (str[start] === searchStr) {
// 			return start
// 		}
// 		for (let j = 0; j < searchStr.length; j++) {
// 			// "W"                  "W"
// 			if (str[start] === searchStr[j]) {
// 				start++
// 				status = true
// 			} else {
// 				status = false
// 			}
// 		}
// 		if (status) {
// 			return start - searchStr.length
// 		}
// 	}
// 	return -1
// }
// // O(n^2)

// console.log(customIndexOf(example, 'W', 2))

//startsWith

// function customStartsWith(str, searchStr) {
// 	let status = false

// 	if (str[0] === searchStr) return true

// 	for (let i = 0; i < str.length; i++) {
// 		// 'Open Web'   'Opeb'
// 		if (str[i] === searchStr[i] && i < searchStr.length) {
// 			status = true
// 		} else if (i < searchStr.length) {
// 			status = false
// 		}
// 	}

// 	return status
// }

// console.log(customStartsWith(example, 'Open'))

// function customEndsWith(str, searchStr) {
// 	let status = false
// 	let some = str.length - searchStr.length

// 	if (str[str.length - 1] === searchStr) return true

// 	for (let i = str.length - 1; i >= 0; i--) {
// 		if (str[i] === searchStr[i - some] && i >= some) {
// 			status = true
// 		} else if (i >= some) {
// 			status = false
// 		}
// 	}

// 	return status
// }

// console.log(customEndsWith(example, 'Web'))

//indexof, includes, startsWith, endsWith, slice, substring, substr

let example = 'Open Web' // 8

//slice

function slice(str, start, end = str.length) {
	let result = ''
	for (; start < end; start++) {
		result += str[start]
	}
	return result
}

console.log(slice(example, 1, 3)) //pen
