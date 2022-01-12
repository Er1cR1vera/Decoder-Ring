// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {// you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {// your solution code here
  
   if(!shift || shift === 0 || shift > 25 || shift < -25) return false; //must return false if shift criteria isnt met 
 
   const newInput = input.toLowerCase().split(""); //all have to turn lowercase

   const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""); 
   //========================================================//DECODE/ENCODE
   if(!encode){
     shift *= -1;
   }
   const arrayInput = [];
   for(let letter of newInput){
    if( alphabet.includes(letter)){
      const letterIndex = alphabet.indexOf(letter);
      let newI = letterIndex + shift;
      if(newI >= 0){
        newI = newI % 26;
      } else newI = newI + 26;
      const shiftLetter = alphabet[newI];
      arrayInput.push(shiftLetter);
    } else {
      arrayInput.push(letter);
    }
   }
   return arrayInput.join("");
  }
 return {
    caesar,
  };
  })();

module.exports = { caesar: caesarModule.caesar };
