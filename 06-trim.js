//trim() function...
let mystr = "   abc";
console.log("=> before trim() method (spaces included) \n")
console.log("my string : "+ mystr); 
console.log("Length of string : "+mystr.length); // spaces are counted in length
console.log("=> after trim() method (spaces trimed) \n");
let newStr = mystr.trim() // you can use mystr.trim().length
console.log("Length of new string : "+newStr.length); // spaces are counted in length

