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
