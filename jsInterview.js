                         //  QUESTION 1
// console.log('a');
// let timmy = setTimeout(function (){
//     console.log('b')
// },1);

// let timothy = setTimeout(function (){
//     console.log('c')
// },10)

// let timer = setTimeout(function (){
//     console.log('d')
// },0)

// console.log('e')


//                          QUESTION 2
let num = 0;

async function increment() {
    num += await 2;
    console.log(num)
}


increment();//since we placed increment function over here we get the result 1 and 2 over here.
num += 1; //operation plays an important role for the result

//if we placed increment() function here result will be 1 and 3;

console.log(num);

                    // QUESTION 3

//revealing module patterns
//Turn this object literal into a module that only exposes the render method

let myModule = (function () {
    let _data = [];
    let _render = function () {

    }
    let _add = function () {

    };

    let _remove = function () {

    };

    return {
        render: _render
    }
})()

myModule.render();


// let myModule = {
//     data: [],
//     render: () => {

//     },
//     add: () => {

//     },
//     remove: () => {

//     }
// };

                    //  QUESTION 4
//determine if the function received the number of params it expected


let f = function (a, b) {

    if (arguments.length === f.length) {
        console.log('it is matched')
    } else {
        console.log('it is not matched')
    }
}
           


f(1);
f(1, 2);
f(1, 2, 3);
                 //Question 5
//ASI, object literals, square bracket syntax, hoisting
//what happens when you run this code? why?
//How would you fix this?

let a = {
    a: 123
};//this semicolon is needed over here because the compiler need to first makesure that it is assigned that is 'a' object


[a].forEach(function (x) {
    console.log(x);
})

                            //QUESTION 6

/**
* Create an example of a JavaScript Singleton.
* After the first object is created, it will return additional 
* references to itself
*/

let obj = (function () {
    let objInstance; //private variable
    function create() { //private function to create methods and properties
        let _isRunning = false;

        let start = function () {
            _isRunning = true;
        }
        let stop = function () {
            _isRunning = false
        }

        let currentState = function () {
            return _isRunning;
        }

        return {
            start: start,
            stop: stop,
            currentState: currentState

        }
    }
    return {
        getInstance: function () {
            if (!objInstance) { //this if sentence will create a singleton
                objInstance = create();
            }
            return objInstance
        }
    };
})();

let obj1 = obj.getInstance();
let obj2 = obj.getInstance();

obj1.start();

console.log(obj1.currentState());
console.log(obj2.currentState());

//QUESTION 7

//SOLVE THE PROBLEM OCCURING IN THE SECOND CLOSURE EXAMPLE

//SIMPLE CLOSURE

function f1(a) {
    let b = 2;
    setTimeout(function () {
        console.log(a, b)

    }, 1000)
}

//closure with a problem
function f2() {
    for (var i = 1; i < 11; i++) {
        setTimeout(function () {
            console.log('you got: ' + i)
        }, 1000 * i);
    }
}

f2()
//solution changing var to let;
//solution 
function f3() {
    for (let i = 1; i < 11; i++) {
        setTimeout(function () {
            console.log('you got: ' + i)
        }, 1000 * i);
    }
    //i no longer exist
}


//another solution is using the bind method

function f4() {
    for (var i = 0; i < 11; i++) {
        setTimeout((function () {
            console.log(i)
        }).bind(null, i), 1000 * i)
    }
}

//QUESTION 8
//create an array that is prepopulated
//with 5 random numbers

function randomNumberInc(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}
let a1 = Array.from({
    length: 5
}, n => randomNumberInc(2, 5))

console.log('this is the number from Array.from method', a1)

let a2 = new Array(5).fill(null).map(n =>
    randomNumberInc(1, 20)
)
console.log('This is the number from New Array object', a2)

//Practise in random number generator

// function randomNum(max) {
//    return Math.floor(Math.random() * max)
// }

// function randomNumint(min, max){
//     max = Math.floor(max)
//     min = Math.ceil(min)

//     return Math.floor(Math.random()*(max-min+1) + min)
// }

// console.log('this is the random number ' + [randomNumint(1,5)])



