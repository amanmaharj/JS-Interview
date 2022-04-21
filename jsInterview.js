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


                            //QUESTION 9

//VAR HOISTING VS LET HOISTING
//WHAT WILL BE THE OUTPUT FROM THIS CODE AND WHY?

function foo() {
    //area is hoisted as "area = undefined"
    //name is hoisted as "name"
    if (area !== undefined) {
        console.log('var', area)
    }
    try {
        console.log('let', name)
    } catch (err) {
        console.log(err.name)
        console.log(err.message)
    }



    let name = 'Bert'
    var area = 'Geology'
}

foo()
//LET ARE NOT DEFINED AND THEY HAVEN'T GIVEN ANY DEFAULT VALUE AND CANNOT BE USED. WE CAN USE TRY CATCH TO RUN THE error-CODE.



                                 //QUESTION 10          
// Generate Random Hex Colour Values

function color() {
    let c = Math.random()
    console.log('this is the random number generated', c)
    c = c.toString(16)
    console.log('this is the color hex number with', '#' + c)
    c = c.substring(2, 8)
    console.log('this is the color in hex number with substring', '#' + c)
}

color()


                            //QUESTION 11
//WHY DO WE GET THIS WEIRD RESULT FROM THE MAP METHOD?
//MYARRAY.MAP(FUNC)
//WE WANT TO CONVERT 3 STRING INTO NUMBERS

let result1 = ['1', '7', '11'].map(parseInt)

//parseInt(string, radix)
//parseInt('1', 0)
//parseInt('7', 1)
//parseInt('11', 2)

//will give you 1 nan 3 as the result this is because when we use parseInt we are also sending number and redix as the parameter but since
//the index of the array will act as the redix as the parameter then 1 will print ok as number will be 1 and radix will be 0 but in the second 
//time when 7 will be entered the radix will be 1 which is ok but the number 7 will be invalid and will give nan not a number
//third time when 11 will be enter the radix will be base 2 so 7 in base 2 is 3 in decimal when convert.
let result = ['5', '8', '9'].map((x) => {
    return Number(x)
}
)
console.log(result);

                                //QUESTION 12.


// Differences between dot notation and square bracket syntax

let sam = {
    castiel: "mary"
}
let dean = {
    john: "crowley",
    mary: "chuck"
}

//which, if any, of these three log statements will work?
//console.log(dean[sam.castiel]);//dean['mary'] = chuck
//console.log(dean.sam.castiel);  //WONT WORK
//console.log(dean[sam['castiel']]); //dean['mary'] = chuck
//console.log(dean[sam[castiel]]); //WONT WORK dean[sam[undefined]]

                    //QUESTION 13

//USING 'this' inside an object
//THE OBJECT HAS FUNCTIONS CREATED THREE DIFFERENT WAYS
//WHAT WILL BE THE RESULT OF THE THREE LOG STATEMENTS?

const circle = {
    radius: 10,
    circumference: function () {
        console.log(this)
        return (2 * Math.PI * this.radius);

    },
    //es6 shorthand
    diameter() {
        console.log(this)
        return (this.radius * 2);
    },
    //es6 arrow function
    area: () => {
        console.log(this)
        return (Math.PI * Math.PI * this.radius) //NaN
    }
}

console.log(circle.area()); //NaN
console.log(circle.diameter()); //20
console.log(circle.circumference());//20*pi



                    //QUESTION 14
//write a function to determine if a number is an integer


// let isInt = function(num){
//     if(Number.isInteger(num)){
//         return 'given is a integer'
//     }else{
//         return 'not a integer'
//     }

// }
console.log(typeof 3)
let isInt = function (num) {
    return (typeof num === "number" && parseInt(num) === num)
    //or return (!NaN(num) && parseInt(num) === num)
}

console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(1.0000, isInt(1.00000));



                        //QUESTION 15
//WRITE A FUNCTION TO DETERMINE IF ONE STRING IS
//A CASE-INSENSITIVE ANAGRAM OF ANOTHER STRING

// let inAnagram = function(str1, str2){
//     let store = []
//     if(str1.length === str2.length ){
//         for(i=0;i<str1.length;i++){
//         store.push(str1[i])
//         }

//     }

//     for(i=0;i<store.length;i++){
//         for(j=0;j<store.length;j++){
//             if(store[i]===str2[j]){
//                 return true
//             }else{
//                 return false
//             }

//         }
//     }



// }

let isAnagram = function (str1, str2) {
    let sorted1 = str1.split('').sort().join('').toLowerCase()
    let sorted2 = str2.split('').sort().join('').toLowerCase()

    return (sorted1 === sorted2)
}

console.log(isAnagram('hello', 'jello'));
console.log(isAnagram('hello', 'loelh'));
                          
                            //question 16

                                
//write a function to determine the largest difference between any two numbers in an array of numberts

let numbers = [12, 2, 6, 5, 5, 5, 9, 10, 33];

let difference = (function (arr) {

    //remove duplicates with set
    //pass set back to an array
    //numerical sort
    let answer = Array.from(new Set(arr)).sort((a, b) => a - b);
    //now we need to make sure the highest difference bewteen the sort
    return (answer[answer.length - 1] - answer[0])

})(numbers)

console.log('here is the numbers difference ' + difference)



                            //QUESTION 17
//WRITE A FUNCTION TO DETERMINE IF THE SUPPLIED STRING IS A PALLINDROME
//EG: RADAR, RACECAR
//THEY ARE TEH SPELLED SAME BACKWARDS AND FORWARDS

let palindrome = function (word) {
    let comp = []
    let rword = ''

    for (i = 0; i < word.length; i++) {
        comp.push(word[i])
    }

    for (i = 0; i < word.length; i++) {
        rword += comp.pop()

    }

    if (word === rword) {
        return 'pallindrome'
    }
    return 'not pallindrome'

}

//another method
let pallin = function (word) {
    let len = word.length
    let start = word.substring(0, Math.floor(len / 2)).toLowerCase()

    let end = word.substring(len - Math.floor(len / 2)).toLowerCase()

    let flip = end.split('').reverse().join('')

    return start === flip

}

console.log(palindrome('radar'))
console.log(palindrome('window'));

                     //QUESTION 18


(function f1() {
     var a = 1, b = 1;
    var x = y = 2;
})();


(function f2() {
    let j = 1, k = 1;
    let r = s = 2;
})();

//what are the values for a, b, x, y, j, k, r, s in the global scope?
//which of these variables will exist on the window/global object?
console.log('the global value of s is : ' + global.s); //will return 2 as the variable when created as multiple variable using only one decleration wil make the second one global scope
console.log('the global value of a is : ' + global.a); //will return undefined as the variable is in function scope


                                        //QUESTION 19

//WRITE A SCRIPT TO DETERMINE THE BRIGHTNESS OF THE BACKGROUND COLOUR AND SET THE TEXT COLOR AS EITHER WHITE OR BLACK
//3 6 1


let log = console.log;

let textColor = bg =>{
    bg = bg.replace('#','');
    //check the length
    //11110000 111100000 11110000
    let red = parseInt(bg, 16) >>> 16;  //parseInt(bg.substring(0,2),16)
    let green = (parseInt(bg, 16) >>> 8) & 255; //parseInt(bg.substring(2,5),16)
    let blue = parseInt(bg,16) & 255//parseInt(bg.substring(4),16)

    let intensity = (red*0.3) + (green*0.6) + (blue*0.1)

    if(intensity>181){
        return "#000000";
    }else{
        return "#FFFFFF"
    }
   
}


log(textColor('#BADA55')); //A BRIGHT GREEN
log(textColor('#F0E68C')); //KHAKI
log(textColor('#990000'));//REBECCAPURPLE
log(textColor('#6495ED'));//CORNFLOWERBLUE


                                        //QUESTION 20


//WRITE A SCRIPT THAT WILL FIND ALL THE VOWELS [A,E,I,O,U] INSIDE ANY STRING AND FLIP THE ORDER OF ONLY THE VOWELS. IF THERE IS AN ODD NUMBER OF VOWELS
//THEN THE ONE IN THE MIDDLE STAYS IN THE SAME POSITION. COMPLETE THIS TASK WITH THE EG

//COTTAGE = CETTAGO

//HELLO = HOLLE

//SAUCE = SEUCA

//JAVASCRIPT = JIVASCRIPT


let Log = console.log;
let process = word =>{
    //word = hello
   
    let matches = Array.from(word).reduce((prev,curr, idx)=>{
                
        if(['a','e','i','o','u'].includes(curr)){
            prev.push(idx)
        }
         return prev;
    },[]);
   
    Log(matches)//position of the vowels

    let len = matches.length;//[1,3,7] //the array where the aeiou contains in 'javascript'
    let wordCopy = Array.from(word);//array of the string "javascript"
    console.log('this is the copy of the word',wordCopy)
    for(let i = 1;i<len/2;i++){
        console.log(3/2)
        let ltr = word.substring(matches[len - i], matches[len-i]+1);
        let removed = wordCopy.splice(matches[i-1],1,ltr)
        wordCopy.splice(matches[len-i],1, removed[0])
        word = wordCopy.join('')

    }
    return word;

};

Log(process('javascript'));








            //finding the element using set
// let zea = [1,2,3,3]
// let ass = [2,4,5]

// let setA = new Set(zea)



// for(i=0;i<ass.length;i++){
   
//     let pos = (setA.has(ass[i]))
//     if(pos){
//         console.log(ass[i],'found')
//     }
// }


                    //finding the collection of the both 
// let jack = ['aman','hari','rock','jackson']
// let king = ['rock','jackson']
// jack.map((el)=>{
//     for(i=0;i<king.length;i++){
//        if(king[i]===el){
//            console.log('match')
//        }else{
//            console.log('not match')
//        }
//     }
    
// })

            //the way to reverse all teh array of the elememnt of the array
// let Array1 = ['apple','bananna']

// Array1.forEach((el)=>{
//    let x = el.toString()
//    console.log( el.split('').reverse().join(''))
// })


// Array1.join('').reduce((curr,idx,acc)=>{
//     if(Array1.includes(curr)){
//         return()
//     }
// })

// console.log(Array1)

                        //Question 21                      
                        //what will be the output of the following console.log?


                        let obbj = {
                            'a': 'three',
                            b: 4,
                            'c': "five",
                            a: 3,
                            'b': "four",
                            "c": 'five',
                            "a": "tre",
                            "b": 'fyra',
                            c: 5
                        };
                        //in objects the key is always stored in string whether you defined by the "" or not whaterver

                        console.log(obbj);

                         //QUESTION 22


//WHAT WILL BE THE OUTPUT FROM THE CONSOLE.LOG AND WHY?

let box = {};

let bag = {
    prop: 'bag',
    can: 'box'
};

let can = {
    prop: "can",
    bag: "box"
}

box[bag] = 'Monday';// box['[Object object]'] = 'Monday' box{[{bag}]}
box[can] = "Tuesday"//box['[Object object]'] = 'Tuesday'


console.log(box[bag])//tuesday


                    //QESTION 23

/***
 * What will be the output of this code and why?
 */
 let obja = { a: 1 };
 let objb = { a: 1 };
 
 if ({ a: 1 } === { a: 1 }) {
   console.log("Monday"); //no match because in the case of non primitive data types the two object stored act as different variable.
 } else if ({ a: 1 } == { a: 1 }) {
   console.log("Tuesday");//no match because of non primitive data types.
 } else if (obja == { a: 1 }) {
   console.log("Wednesday");//no match because of non primitive data types
 } else if (obja == objb) {
   console.log("Thursday");//no match because of non primitive data types
 } else if (Object.is(obja, objb)) {
   console.log("Friday");//no match because of non primitive data types
 } else {
   console.log("Saturday");//match
 }
                //Question 24       
//what will be the output of the following two loops be?

const numbs = [1, 2, 3];
numbs[10] = 11;

for (let i = 0; i < numbs.length; i++) {
  console.log(i, numbs[i]);
}//this will print each index and value
numbs.forEach((num, idx) => {
  console.log(idx, num);
  //this will print only the item and index that contains

});



                    //QUESTINS 25


//CREATE AN EXAMPLE OF A CALLBACK FUNCTIONS WITH MULTIPLE PARAMETERS AND THEN SHOW IT BEING USED

let myCallBack = function(goodfunc, badfunc, character){
    let timmy = Math.floor(Math.random)

    if(character.isGood){
        setTimeout(goodfunc, timmy, character.name)
    }else{
        setTimeout(badfunc, timmy, character.name)
    }
}

let ftw = function(name){
    console.log("Depending on the season, ", name, " is a good guy")
};

let wtf = function(name){
    console.warn('Depending on the season, ',name, 'is a bad guy')
};

let app = (function(){
    const castiel = {name: "castiel", isGood: true}

    const crowley = {name: "crowley", isGood: false}


    //use callback function here
    myCallBack(ftw, wtf, castiel)
    myCallBack(ftw, wtf, crowley)
})()


