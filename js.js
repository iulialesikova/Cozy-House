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