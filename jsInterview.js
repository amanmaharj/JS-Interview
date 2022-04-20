//                          QUESTION 1
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

