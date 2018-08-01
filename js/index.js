const a = parseFloat(prompt('Enter value of a'));
const b = parseFloat(prompt('Enter value of b'));
const c = parseFloat(prompt('Enter value of c'));

function calcD(a, b, c) {
 const result = b * b - 4 * a * c;
 return result;
}

const d = calcD(a, b, c);
alert("D=" + d);

function solveQuadr1(a, b, c) {
 const D = b * b - 4 * a * c;
 if (D == 0) {
  const result = -b / (2 * a);
  return result;
 }
}

const X = solveQuadr1(a, b, c);
alert("x=" + X);

function solveQuadr2(a, b, c) {
 const D = b * b - 4 * a * c;
 if (D > 0) {
  const result = (-b + (Math.sqrt(d)) / (2 * a));
  return result;
 }
}

const x = solveQuadr2(a, b, c);
alert("x1=" + x);

function solveQuadr3(a, b, c) {
 const D = b * b - 4 * a * c;
 if (D > 0) {
  const result = (-b - (Math.sqrt(d)) / (2 * a));
  return result;
 }
}

const x2 = solveQuadr3(a, b, c);
alert("x2=" + x2);

function solveQuadr4(a, b, c) {
 const D = b * b - 4 * a * c;
 if (D < 0) {
  alert("No results");
 }
}
