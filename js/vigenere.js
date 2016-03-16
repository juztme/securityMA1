var vigOutput = document.getElementById("vigenereOutput");

var vigenereCipher = function(text, key, isEncode){
  
  //when you encode stuff, you shift by the number n; when you decode stuff, you shift by the number -n; the multiplier checks whether it's n or -n
  var multiplier;
  if (isEncode) {
    multiplier = 1;
  } else {
    multiplier = -1;
  }
  
  var bigcaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var finalText = "";
  
  for (var i = 0; i < text.length; i++){
    
    //the key index will iterate through the key's letters; will be used for making sure that the key index won't surpass the key length
    var keyIndex = i;
    
    //if the key index is bigger or equal than the length of the key
    while (keyIndex >= key.length){
      //reset the key index if it surpasses the length of the key
      keyIndex -= key.length;
    }
    
    //same as for caesar
    var textInput = text.charAt(i);
    var textLetterIndex = bigcaseLetters.indexOf(textInput);
    
    var keyInput = key.charAt(keyIndex);
    var keyInputIndex = bigcaseLetters.indexOf(keyInput); 
    keyInputIndex = keyInputIndex * multiplier;
    
	//shift the location of the inputted text with the location of the key and store it in a variable; when you have a key made of only one letter, it acts as if you're applying the Caesar Cipher on it and since caesarCipher can be used from caesar.js, use it here
    var shiftedLetter = caesarCipher(textInput, keyInputIndex);
    
    //add the newly shifted letter to the output string
    finalText += shiftedLetter;
  }
  return finalText;
}

//what happens when the user presses on the buttons
document.getElementById("vigenereEncoder").addEventListener("click", function(){
  //take user input
  var textToEncode = document.getElementById("textToEdit").value;
  var vigKey = document.getElementById("vigKey").value;
  
  //transform the key into uppercase, in case it's been inputted as lowercase
  var uppercaseKey = vigKey.toUpperCase();
  
  //apply the Vigenere Cipher to the input and store it into a variable
  var vigResult = vigenereCipher(textToEncode, uppercaseKey, true);
  
  //show the final result of the encoding to the user
  vigOutput.innerHTML = vigResult;
});

document.getElementById("vigenereDecoder").addEventListener("click", function(){
  //take user input
  var textToDecode = document.getElementById("textToEdit").value;
  var vigKey = document.getElementById("vigKey").value;
  
  //transform the key into uppercase, in case it's been inputted as lowercase
  var uppercaseKey = vigKey.toUpperCase();
  
  //apply the Vigenere Cipher to the input and store it into a variable
  var vigResult = vigenereCipher(textToDecode, uppercaseKey, false);
  
  //show the final result of the decoding to the user
  vigOutput.innerHTML = vigResult;
});