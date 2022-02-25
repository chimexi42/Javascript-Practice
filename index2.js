// var css = document.querySelector('h3');
// var color1 = document.querySelector('.color1');
// var color2 = document.querySelector('.color2');
// var body = document.getElementById('gradient')
// function setGradient(){
//     body.style.background = 'linear-gradient(to right,'+ 
//     color1.value + ','+ color2.value + '  )'
//     css.textContent = body.style.background 
// }
// color1.addEventListener('input',setGradient)
// color2.addEventListener('input',setGradient)
// advanced control flow
function isUserValid(bool){
    return bool;
}
var answer = isUserValid(true) ? 'You may enter': 'Access Denied'
var automatedAnswer = 'Your account number is ' + (isUserValid(false)? '1234': 'Not available')

function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case 'forward':
            whatHappens = 'You encounter a monster'
            break;
        case 'back':
                whatHappens = 'You arrived home'
                break;
        case 'right':
            whatHappens = 'You found a river'
            break;
        case 'left':
            whatHappens = 'You run into a troll'
            break;
        default: 
            whatHappens = 'Please enter a valid direction'
    }
    return whatHappens;
}

// Ecmascript 6
// const player = 'bobby';
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90){
//     let wizardLevel = true;
//     console.log('inside',wizardLevel)
// }
// console.log('outside',wizardLevel)


const first =()=>{
    const greet = 'Hi';
    const second =()=>{
        // alert(greet)
    }
    return second;
}

const newFunc = first();
console.log(newFunc())

const multiply = (a, b) => a*b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyBy5 = curriedMultiply(5);

console.log(multiplyBy5(10))

// compose
const compose =(f,g) =>(a) => f(g(a));

const sum =(num)=> num + 1

compose(sum, sum)(5);

const array = [1,2,10,16, 8, 17, 18, 20, 25, 30, 32]

const multiplied = array.forEach((arr)=>{
    console.log(arr *3)
    return arr *3
})
console.log(array)
console.log(multiplied)


const mapArray = array.map((num)=>{
    return num * 2
})
console.log('Mapped Array', mapArray)
console.log(array)


const filtered = array.filter((num)=>{
    return num > 5
})

console.log('filter',filtered)
// reduce

const reducedArray = array.reduce((accumulator, num)=>{
    return accumulator + num
}, 0)

console.log('Reduced: ', reducedArray)

// advanced Objects 
// reference types

var object1 = {value: 10}
var object2 = object1
var object3 = {value: 10}

console.log(object1 === object3)
object1.value = 15
console.log(object2.value)

console.log(object3.value)
console.log([1] === [1])

// context vs scope 
// const object4 = {
//     a: function(){
//         console.log(this);
//     }
// }
// instatiation
class Player {
    constructor(name, type){
        console.log(this)
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`i am a ${this.name} i am a this  ${this.type}`)
    }
}
class Wizard extends Player{
    constructor(name, type){
        super(name, type)
    }
    play(){
        console.log(`Weeeee i am a ${this.type}`)
    }
}

const player = new Player('Chimtex', 'Warlord')
console.log(player.introduce())

const wizard1= new Wizard('saun', 'Healer')
const wizard2= new Wizard('neme', 'power ranger')   

console.log(wizard1.play())
console.log(wizard2.play())
console.log(wizard1.introduce())

console.log('Helloooo'.includes('o'))

const pets = ['dog', 'cat', 'goat']
console.log(pets.includes('bird'))

const squares = (x)=> x**2
const cube = (x)=> x**3

console.log(squares(5))
console.log(cube(5))

// ES8



console.log("Turtle".padStart(10));
console.log("Turtle".padEnd(10));

const fun = (a,b,c,d,) => console.log(a, b)

fun(1,2,3,4,)

let obj = {
    username0: 'Santa',
    username1: 'Rudolf',
    username2: 'Mr Grinch'
}
console.log(Object.keys(obj))
Object.keys(obj).forEach((key, index)=>{
    console.log(key, obj[key]);

})


Object.entries(obj)
let values = Object.values(obj).forEach((value)=>{
    console.log(value)
})
console.log(values)
let entries = Object.entries(obj).forEach((value)=>{
    console.log(value)
})
console.log(values)
console.log(entries)
console.log(Object.entries(obj))

Object.entries(obj).map(value=>{
    return value[1] + value[0].replace('username', '')
})


// recursion is a function that calls itself
function foo(){
    foo()
}

// CALL STACK
console.log('1');
setTimeout(()=>{
    console.log('2')
}, 0)
console.log('3')

setTimeout(()=>{
    console.log('2')
}, 2000)
// WEB API

// CALLBACK QUE

// EVENT LOOP
// Debugging is figuring out why the code isn't working, alot of time is spent debugging

const flattened = [[0,1], [2,3], [4,5]].reduce(
    (accumulator,array)=>{
        console.log('array', array)
        console.log('accumulator', accumulator)
        return accumulator.concat(array)
    },[]);

console.log(flattened)
// var myApp= {}
// (function(){
//     myApp.add = function(a,b){
//         return a+b
//     }
// })();


// export const add =()=> a+b;

// export default function add(){
//     return a+b
// }
































