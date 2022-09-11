squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x));

function getGrade(s1, s2, s3) {
    return {
        10: 'A',
        9: 'A',
        8: 'B',
        7: 'C',
        6: 'D'
    } [Math.floor((s1 + s2 + s3) / 30)] || 'F'
};

function makeUpperCase(str) {
    return str.toUpperCase()
}

sumMix = x => x.reduce((prev, curr) => +curr + prev, 0);

function unusualFive() {
    let five = 'Five!';
    return five.length;
}

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === 'wolf') {
        return 'Pls go away and stop eating my sheep';
    } else {
        let index = queue.findIndex((x) => x == 'wolf');
        return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
}

function points(games) {
    let sum = 0;
    for (let i = 0; i < games.length; ++i) {
        if (games[i][0] > games[i][2])
            sum += 3;
        if (games[i][0] == games[i][2])
            sum += 1;
    }
    return sum;
}

closeCompare = (a, b, margin) => Math.abs(a - b) <= margin ? 0 : Math.sign(a - b)

String.prototype.digit = function () {
    return /^\d$/.test(this);
};

function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

function positiveSum(arr) {
    return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

const string = 'hi there';
const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);

function stringToArray(string) {
    return string.split(' ');
}

function maps(x) {
    return x.map(n => n * 2);
}


const phrases = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
]

const howMuchILoveYou = n => phrases[n % 6]

function removeChar(str) {
    return str.slice(1, -1);
}

const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i);
};

const nthEven = n => n * 2 - 2;


function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}

function derive(coefficient, exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}


function boolToWord(bool) {
    return bool ? 'Yes' : 'No';
}

function booleanToString(b) {
    return b.toString();
}

function hexToDec(hexString) {
    return parseInt(hexString, 16);
}

const s = [5, 7, 2];

function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

}
editInPlace();
console.log(s);

function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);

    // change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

const magic = () => new Date();

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

function increment(number, value = 1) {
    return number + value;
}
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns NaN

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

const {
    today: highToday,
    tomorrow: highTomorrow
} = HIGH_TEMPERATURES;

const LOCAL_FORECAST = {
    yesterday: {
        low: 61,
        high: 75
    },
    today: {
        low: 64,
        high: 77
    },
    tomorrow: {
        low: 68,
        high: 80
    }
};

// Only change code below this line


const {
    today: {
        low: lowToday,
        high: highToday
    }
} = LOCAL_FORECAST;
// Only change code above this line


let a = 8,
    b = 6;
// Only change code below this line
[a, b] = [b, a];

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // Only change code below this line
    const [a, b, ...arr] = list; // Change this line
    // Only change code above this line
    return arr;
}
const arr = removeFirstTwo(source);

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Only change code below this line
const half = ({
    max,
    min
}) => ((max + min) / 2.0);
// Only change code above this line


export const uppercaseString = (string) => {
    return string.toUpperCase();
}

export const lowercaseString = (string) => {
    return string.toLowerCase()
}

import {
    uppercaseString,
    lowercaseString
} from './string_functions.js';
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

"use strict";
export default function subtract(x, y) {
    return x - y;
}

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7, 4);

const makeServerRequest = new Promise((resolve, reject) => {

})

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes === 1) return "Hole-in-one!";

    else if ((strokes - par) <= -2) return 'Eagle';

    else if ((strokes - par) === -1) return 'Birdie';

    else if (strokes === par) return 'Par';

    else if ((strokes - par) === 1) return 'Bogey';

    else if ((strokes - par) === 2) return 'Double Bogey';

    else return 'Go Home!';
    // Only change code above this line
}

golfScore(5, 4);


let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }

    return "Change Me";
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');


// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";


const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
myDog.bark = "woof"; // Dot notation
myDog["bark"] = "woof";

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};
delete myDog.tails;
// Only change code below this line


// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    var lookup = {
        alpha: 'Adams',
        bravo: 'Boston',
        charlie: 'Chicago',
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    };
    return lookup[val]
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");


function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    } // Only change code above this line
}

const myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CS",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "ABBA",
        "title": "Ring Ring",
        "release_year": 1973,
        "formats": [
            "CS",
            "8T",
            "LP",
            "CD",
        ]
    }
];


// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

const myPlants = [{
        type: "flowers",
        list: ["rose", "tulip", "dandelion"]
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];

// Only change code below this line

const secondTree = myPlants[1].list[1];


function simpleMultiplication(number) {
    return number % 2 == 0 ? number * 8 : number * 9
}

function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

function contamination(text, char) {
    return char.repeat(text.length)
}

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}



function digitize(n) {
    return (n + '').split('').map(Number).reverse();
}

function binToDec(bin) {
    return parseInt(bin, 2);
}

function repeatStr(n, s) {
    return s.repeat(n);
}

function correctTail(bod, tail) {
    return bod[bod.length - 1] === tail
}

function validateUsr(username) {
    return /^([a-z0-9_]){4,16}$/.test(username)
}

function solution(str) {

    return str.split('').reverse().join('');
}

function countPositivesSumNegatives(input) {
    if (!input || !input.length) return []

    let pos = input.filter(x => x > 0),
        neg = input.filter(x => x <= 0)

    return [pos.length, Math.floor(neg.reduce((s, v) => s + v, 0))]
}

function numberToString(num) {
    return num.toString();
}

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    return (blueStart - bluePulled) / ((redStart - redPulled) + (blueStart - bluePulled))
}

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
       return (n*n) + sum;
     }, 0)
   }

   function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort((arr1,arr2)=>arr1-arr2)
}

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}