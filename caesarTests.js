// 1. shouldn't log anything
var text, encrypted, decrypted;
text = "I went to school today";
encrypted = caesarCipher(text, 5)
decrypted = caesarCipher(encrypted, 21);
if (decrypted !== text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 2. shouldn't log anything
encrypted = caesarCipher(text, 10)
decrypted = caesarCipher(encrypted, 16);
if (decrypted !== text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 3. should log in the console
encrypted = caesarCipher(text, 10)
decrypted = caesarCipher(encrypted, 20);
if (decrypted === text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 4. should log in the console
encrypted = caesarCipher(text, 23)
decrypted = caesarCipher(encrypted, 8);
if (decrypted === text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 5. shouldn't log anything
encrypted = caesarCipher(text, 8)
decrypted = caesarCipher(encrypted, 18);
if (decrypted !== text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 6. shouldn't log anything
text = "This week is going to be tiring af";
encrypted = caesarCipher(text, 2)
decrypted = caesarCipher(encrypted, 24);
if (decrypted !== text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 7. shouldn't log anything
encrypted = caesarCipher(text, 26)
decrypted = caesarCipher(encrypted, 0);
if (decrypted !== text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 8. should log in the console
encrypted = caesarCipher(text, 12)
decrypted = caesarCipher(encrypted, 15);
if (decrypted === text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 9. should log in the console
encrypted = caesarCipher(text, 11)
decrypted = caesarCipher(encrypted, 20);
if (decrypted === text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}

// 10. shouldn't log
encrypted = caesarCipher(text, 22)
decrypted = caesarCipher(encrypted, 4);
if (decrypted !== text) {
    console.log("Text and decrypt are not equal, the text was: [" + text + "] decrypt was [" + decrypted + "]");
}