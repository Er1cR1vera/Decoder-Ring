// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const realAlph = "abcdefghijklmnopqrstuvwxyz".split("");
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length != 26) return false;//returns false for given cases
    const alphArr = alphabet.toLowerCase().split("");
    
    for( letter of alphArr){
      let counted = alphArr.filter((character)=> character === letter).length;
      if(counted > 1) return false; // returns false if does not contain unique characters 
    }
    const codedAlph = [...alphabet, " "];
    input = input.toLowerCase().split("");
    const message = [];
    
    if(encode === true){
      let coded  = ""; 
      input.forEach(letter => {
        if(letter === " ")  message.push(letter);
        else{ 
        let fIndex = realAlph.indexOf(letter);
        message.push(alphArr[fIndex]);
        }
      });
       
      } else {
        for (let i = 0; i < input.length; i++){
          if(input[i] === " ") message.push(input[i]) 
          else 
          message.push(realAlph[codedAlph.indexOf(input[i])]);
        }
      }
      return message.join("");
    }
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
