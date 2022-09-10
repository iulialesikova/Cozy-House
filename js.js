squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x)) ;
function getGrade (s1, s2, s3) {
    return {10:'A' ,9:'A' ,8:'B' ,7:'C' ,6:'D'} [Math.floor((s1 + s2 + s3) / 30)] || 'F'
    };
function makeUpperCase(str) {
        return str.toUpperCase()
       }