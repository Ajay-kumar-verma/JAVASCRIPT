
function * genNum(){

  yield 1;
  yield 2;
  yield 3;
  yield 4;

}

const fun=genNum();

console.log(fun.next());
console.log(fun.next());
console.log(fun.next());

console.log(fun.next());
console.log(fun.next());