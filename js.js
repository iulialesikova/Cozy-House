squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x)) ;
function getGrade (s1, s2, s3) {
    return {10:'A' ,9:'A' ,8:'B' ,7:'C' ,6:'D'} [Math.floor((s1 + s2 + s3) / 30)] || 'F'
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
    if (queue[queue.length -1] === 'wolf') {
       return 'Pls go away and stop eating my sheep';
       } else {
        let index = queue.findIndex( (x) => x == 'wolf' );
        return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
       }
   }