var outputResult = document.getElementById("outputResult");
 
var caesarCipher = function(text, shift){

  var smallcaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var bigcaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var finalText = "";
  
  for (var i=0; i<text.length; i++){
    //get each character of the string that the user inputs
    var userInput = text.charAt(i);
    
    //link the user's textarea input with the arrays
    var bigLetterIndex = bigcaseLetters.indexOf(userInput);
    var smallLetterIndex = smallcaseLetters.indexOf(userInput);
    
    
    //if the character doesn't exist in the arrays
    //http://www.w3schools.com/jsref/jsref_indexof.asp  - why -1
    if (smallLetterIndex === -1 && bigLetterIndex === -1){
      
      //leave the character as it is and append it to the final text
      finalText += userInput;
      
      //using break and continue statements https://msdn.microsoft.com/library/kw1tezhk%28v=vs.94%29.aspx
      continue;
    }
      
    if (smallLetterIndex === -1){
      var shiftedLetter = bigLetterIndex + shift;
      
      //exactly the same as a while loop which checks if shiftedLetter >= 26 and if yes, then subtracts 26 from the number
      //it's like shiftedLetter = shiftedLetter % 26; 
      //bigcaseLetters.length is used so that we don't have to hardcode the maximum number of index that the array has; the same goes for the one in the else statement
      shiftedLetter = shiftedLetter % bigcaseLetters.length;
      
      if (shiftedLetter <= -1){
        shiftedLetter += 26;
      }
      
      var letterToAdd = bigcaseLetters[shiftedLetter];
      
      finalText += letterToAdd;
      
    } else { 
      var shiftedLetter = smallLetterIndex + shift;
      //encodedLetter = encodedLetter % 26;
      
      shiftedLetter = shiftedLetter % smallcaseLetters.length;
      
      if (shiftedLetter <= -1){
        shiftedLetter += 26;
      }
      
      var letterToAdd = smallcaseLetters[shiftedLetter];
      finalText += letterToAdd;
    }  
  }
  return finalText;
};

//what happens when the user presses on the buttons
document.getElementById("encoder").addEventListener("click",function(){
  //grab the text and the shift from the user's input  
  var textToEncode = document.getElementById("userInput").value;
  var shifter = parseInt(document.getElementById("shifter").value);
  
  //apply the Caesar Cipher to the input and store it in a variable
  var result = caesarCipher(textToEncode, shifter);
  
  //output the result
  outputResult.innerHTML = result;
});

document.getElementById("decoder").addEventListener("click",function(){
  //grab text and shift from user input
  var textToDecode = document.getElementById("userInput").value;
  //make the input negative
  var shifter = - parseInt(document.getElementById("shifter").value);
  
  //apply CC to the input and store it in a variable
  var result = caesarCipher(textToDecode, shifter);
  
  //output the result
  outputResult.innerHTML = result;                    
});
