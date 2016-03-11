var encoder = document.getElementById("encoder"),
    decoder = document.getElementById("decoder"),
    textToEncode,
    textToDecode, // = document.getElementById("textToDecode").value,
    positiveShift,
    negativeShift, //= document.getElementById("negativeShifter").value,
    encodingResult = document.getElementById("encodingResult"),
    decodingResult = document.getElementById("decodingResult");
 
encoder.addEventListener("click", function(){
  //get the user's input
  textToEncode = document.getElementById("textToEncode").value;
  positiveShift = parseInt(document.getElementById("positiveShifter").value);//js takes input field values as strings, so you use parseInt to transform them into int
  var smallcaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var bigcaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var finalText = "";
  
  
  for (var i=0; i<textToEncode.length; i++){
    // get the first character of the string that the user inputs
    var userInput = textToEncode.charAt(i);
    
    //link the user's textarea input with the array
    var bigLetterIndex = bigcaseLetters.indexOf(userInput);
    var smallLetterIndex = smallcaseLetters.indexOf(userInput);

    //if the character doesn't exist in the array
    if (smallLetterIndex === -1 && bigLetterIndex === -1){
      
      //leave the character as it is and append it to the final text
      finalText += userInput;
      
      //using break and continue statements https://msdn.microsoft.com/library/kw1tezhk%28v=vs.94%29.aspx
      continue;
    }
      
    if (smallLetterIndex === -1){
      var encodedLetter = bigLetterIndex + positiveShift;
      //exactly the same as a while loop which checks if encLet >= 26 and if yes, then substracts 26 from the number
      //encodedLetter = encodedLetter % 26; 
      
      //bigcaseLetters.length is used so that we don't have to hardcode the maximum number of index that the array has; the same goes for the one in the else statement
      encodedLetter = encodedLetter % bigcaseLetters.length;
      var letterToAdd = bigcaseLetters[encodedLetter];
      finalText += letterToAdd;
    } else { 
      var encodedLetter = smallLetterIndex + positiveShift;
      //encodedLetter = encodedLetter % 26;
      encodedLetter = encodedLetter % smallcaseLetters.length;
      var letterToAdd = smallcaseLetters[encodedLetter];
      finalText += letterToAdd;
    }  
    
  }
  //output the result to the user in the browser window
  encodingResult.innerHTML = finalText;
});

decoder.addEventListener("click", function(){
  //get the user's input
  textToDecode = document.getElementById("textToDecode").value;
  negativeShift = parseInt(document.getElementById("negativeShifter").value);//js takes input field values as strings, so you use parseInt to transform them into int
  var smallcaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var bigcaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
  var finalText = "";
  
  
  for (var i=0; i<textToDecode.length; i++){
    // get the first character of the string that the user inputs
    var userInput = textToDecode.charAt(i);
    
    //link the user's textarea input with the array
    var bigLetterIndex = bigcaseLetters.indexOf(userInput);
    var smallLetterIndex = smallcaseLetters.indexOf(userInput);

    //if the character doesn't exist in the array
    if (smallLetterIndex === -1 && bigLetterIndex === -1){
      
      //leave the character as it is and append it to the final text
      finalText += userInput;
      
      //using break and continue statements https://msdn.microsoft.com/library/kw1tezhk%28v=vs.94%29.aspx
      continue;
    }
      
    if (smallLetterIndex === -1){
      var decodedLetter = bigLetterIndex + negativeShift;
      decodedLetter = decodedLetter % bigcaseLetters.length;
      var letterToAdd = bigcaseLetters[decodedLetter];
      finalText += letterToAdd;
    } else { 
      var decodedLetter = smallLetterIndex + negativeShift;
      //decodedLetter = decodedLetter % 26;
      decodedLetter = decodedLetter % smallcaseLetters.length;
      var letterToAdd = smallcaseLetters[decodedLetter];
      finalText += letterToAdd;
    }  
    
  }
  //output the result to the user in the browser window
  decodingResult.innerHTML = finalText;
});
