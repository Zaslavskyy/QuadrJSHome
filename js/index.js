const a = parseFloat(prompt('Enter value of a'));
const b = parseFloat(prompt('Enter value of b'));
const c = parseFloat(prompt('Enter value of c'));

function calcD(a, b, c) {
const result = b * b - 4* a * c; 
return result;
}

const d = calcD(a, b, c);
alert(d);


function solveQuadr(a, b, c) {
const D = b * b - 4* a * c;
if (D > 0) {
const result = (-b + (Math.sqrt(d)) / 2 * a);
return result;
 }
}

const x = solveQuadr(a, b, c);
alert(x);