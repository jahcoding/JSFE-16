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

/* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли 

let obj = {
	count:,
	movies: {
		"logan": "8.1"
	}
}


1) numberOfFilms o'zgaruvchisini yarating va undagi (— Qancha film ko'rgansiz?) savoliga foydalanuvchining javobini saqlang

2) personalMovieDB ob'ektini yarating va unga quyidagi keylarni qo'ying:
    - count - birinchi savolga javob shu erda saqlanadi
    - movies - bu keyda bo'sh ob'ektni saqlang
    - actors - bu keyda bo'sh ob'ektni saqlang
    - genres - bu erda bo'sh massiv saqlanadi
    - privat - bu key o'zida boolean qiymatini false saqlaydi

3) Foydalanuvchiga ikkita savol bering:
    - "Oxirgi ko'rgan filmlaringizdan biri?"
    - "Uni qancha baholagan bo'lardingiz?"
Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak
personalMovieDB.movies ga javoblarni quyidagi formatda yozing:
    movies: {
        'logan': '8.1'
    }

Konsolda hamma narsa xatosiz ishlashini tekshiring */