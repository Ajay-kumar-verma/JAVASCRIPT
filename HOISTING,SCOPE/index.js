var a;
console.log("0",a)

a="kumar verma"
console.log("0",a)

// in memory allocation phase all varible initialization with undeifne 
// in 2 phase code / execution phase we get tje output 



// alert("ajay kumar verma");

var a="aaa"

console.log("1",a);
console.log("2",b)

console.log("3",fn);

console.log("4",fn());

var b="ajay kumar "

function fn(){
    console.log("Me ajay kumar verma ");
  return " Namaste india "; 
}


console.log("5",fn1);  // it will throw an error cant be access before initialization
var fn1=()=>{
    console.log("me Fn1");
    return "fn1";
}

// with const and let it will show an error 
// with var it consider as variable  
// Var means globaly accessible it show undefined 

// BECAUSE OF FIRST ORDER FUNCTION WE CAN DO SHOW
// function can be trated as varibale 


// and its all about EXECUTION CONTEXT 


console.log("6",fn2());  // it is not a function //Error
var fn2=()=>{
    console.log("I Am function 2 ");
}

// similar to 
var fn3 =function  (){
    console.log("I Am function 2 ");
}




// we cant make any variable to function before it is  

// in first PHASE or MEMORY ALLOCATION all variable defined with undefined 
// Later on variable value get updated with deifined value 
// it happens with var only 





// insidwe source and scope 
// everything will show 
// In javascript everything consider as variable 

