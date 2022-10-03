// HoISTING means allocating the memory 


// when we declared variable with let and const it wont be able to access in window obj 
// because it is in different memory

// It is unlike other variable 

// let and const declare the value in different memory 
// there we cont access it without assigning some value

const x=45;
let a=20;

var b=50;

function ab(){
    var c=45;
    console.log(a);
}

ab();



// Temporal Dead Zone 
//  time b/n memory allocation of variable to assiging 

// if we try to access variable in temporal dead Zone it throw an error 
// ReferenceError cant access before initilization 

// where as if it not there in scope it show 
// not defined ReferenceError