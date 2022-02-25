// console.log([1,2,3,4,5,6].splice(2,3))

// console.log([1,2,3,4,5,6].slice(2,4))

// console.log(['x', 'y', 'z'].join(','))

// arr = [2,3,6, 14, 18, 29]
// console.log(arr.map(x => x * 2))

// console.log(arr.reduce((x,y, z) => x * y * z ))
// console.log(arr.every(x => x >= 2))

// console.log(arr.reverse())
// console.log(arr.filter(x => x >6))
// console.log(arr.some(x => x>5))

// const arr2 = [1,2,'a', 'b']
// console.log(arr2.toString())

// console.log(arr2.indexOf(2))

// console.log(arr.concat(arr2))

// console.log([1,2,3,4].map((x) => x/2))

// console.log([1,2,3].some(x => x< 2))
// console.log([1,2,3,4,5,6].every(x => x< 5))

// console.log([1,2,3].reduce((x,y) => x * y))

// console.log([10,24,12,39,34].filter(x=> x < 20))

// console.log(['a', 'b', 'd', 'e', 'd'].lastIndexOf('d'))
// // 

// var string = 'I love Javascript and python '

// console.log(string.slice(1,6))

// console.log(string.split(' '))

// console.log(string.includes('and'))


// Object literal
const car = {
    make: 'ferrari',
    model: 500,
    color: 'red',
    price :  "$100000"
}
delete car.model;
console.log(car.model);

console.log(car.make)
console.log(car['make'].toLocaleUpperCase())
for (props in car){
    console.log(props)
}

// object instance
const car2 = new Object()
car2.make = 'Volkswagen'
car2.model = 350
car2.color = 'red'

// Object constructor

function car3(make, model){
    this.make =make
    this.model = model
}

const selectedCar = new car3('Benz', 500)
console.log(selectedCar)

const arr = [1,2,3,4]
for ( ar in arr){
    console.log(ar)
}

const target = {a:1, b:2};
const source = {b:4, c:5}

const returnedTarget = Object.assign(target, source)
console.log(target)
console.log(returnedTarget)
// Object.freeze


const obj = {
    prop: 42
}

Object.freeze(obj);

obj.prop = 33;
obj.name = 'chika'

console.log(obj)

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
}

for (const [key, value] of Object.entries(object1)){
    console.log(`${key}: ${value}`)
}

console.log(Object.entries(object1))

console.log(Object.values(object1))



// const z = 32
// const myPromise = new Promise((resolve, reject){
//     if (z= 32){
//         resolve('Promise was fufiles')
//     } else{
//         reject('Promise was rejected')
//     }
// });



const obj1 = {
    'name': 'chima',
    'age': 53,
    'city': 'Moscow'
}

JSON.stringify(obj1);


const items = [1,4,56, 'sean', 'mels', 45, 887]

const randomItem = items[Math.floor(Math.random() * items.length)];

console.log(randomItem)

// const copyToClipBoard = (text) => {
//     navigator.clipboard.writeText(text);
// }

// copyToClipBoard('I am one of a kind ')


var d = new Date();

console.log(`${d.getHours()}: ${d.getMinutes()}: ${d.getSeconds()}`)

console.log(d.getDate())

const string = 'chimankpam'
const array = Array.from(string)

console.log(array.reverse('').join(''))

const array2 = [1,2]

const newArray = [...array2, 3,4,5]
console.log(newArray)





const isPalindrone = (str)=>{
    const regex = /[W_]/g;
    const cleaned = str.toLowerCase().replace(regex, '');
    const len = str.length;

    for (let i = 0; i < len/2; i++){
        if (cleaned[i] !== cleaned(len-1-i)){
            return false
        }
    }
    return true;
};






















