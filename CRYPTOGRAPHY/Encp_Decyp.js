
 class Encp_Decyp{
// TYPE 1 (one) 
static t1En(plain,key){
   let chr=plain.split(""); 
   let code=[]; chr.forEach(e=>code.push(e.charCodeAt()));
   let Ecode=[]; code.forEach(e=>Ecode.push(e+parseInt(key)));
   let cipher=[]; Ecode.forEach(e=>cipher.push(String.fromCharCode(e)));
   return cipher.join("");
}
static t1De(cipher,key){
  let  Ecode=[];
  cipher.split("").forEach(e=>Ecode.push(e.charCodeAt()))
  let Dcode=[];Ecode.forEach(e=>Dcode.push(e-parseInt(key)));
  let plaintext=[]; Dcode.forEach(e=>plaintext.push(String.fromCharCode(e)));
  return plaintext.join("");
}  

static t2En(plain,key){
   let chr=plain.split(""); 
   let code=[]; chr.forEach(e=>code.push(e.charCodeAt()));
   let keyCode=[]; key.split("").forEach(e=>keyCode.push(e.charCodeAt()));
   let keyLen=key.length; 
  
   let Ecode=[]; let i=0;
     code.forEach(e=>{  
          let x=e+keyCode[parseInt(i++/keyLen)];
          Ecode.push(String.fromCharCode(x));
       });
   return Ecode.join("");
}

static t2De(cipher,key){
   let  Ecode=[];
   cipher.split("").forEach(e=>Ecode.push(e.charCodeAt()))
   let keyCode=[]; key.split("").forEach(e=>keyCode.push(e.charCodeAt()));
   let keyLen=key.length; 
   let Dcode=[]; let i=0;
   Ecode.forEach(e=>{  
          let x=e-keyCode[parseInt(i++/keyLen)];
          Dcode.push(String.fromCharCode(x))
       });
   
      return Dcode.join(""); 
}

static En(text,key,type){
   if(type=="t1")
    return Encp_Decyp.t1En(text,key);
   if(type=="t2")
   return Encp_Decyp.t2En(text,key);
   else 
    return "error"; 
 }  
 static De(text,key,type){
   if(type=="t1")  
      return this.t1De(text,key);
   if(type=="t2")  
     return this.t2De(text,key);
   else 
    return "Error";
 }
}

export default Encp_Decyp;

let plt="Ajay kumar verma 123";
let cipher =Encp_Decyp.En(plt,"!@#$%^11","t2")
let plaintext=Encp_Decyp.De(cipher,"!@#$%^11","t2")

console.log("Plaintext : ",plt,"cipher : ",cipher," decrpted : ",plaintext);
