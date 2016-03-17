var gcdResult = document.getElementById("gcdResult");

var calcGCD = function(a, b){
    
    //remainder
    var r;
    
    while (b > 0){
        //calculate the remainder
        r = a % b;
        //makes sure that a > b and switches their place if a < b
        a = b;
        //turn the remainder into b and use it for the next iteration
        b = r;
    }
    //eventually b will be equal to 0 and a will be bigger; return a when b = 0 and the loop ends
    return a;
}

document.getElementById("calcButton").addEventListener("click", function(){
   //grab user input
   var num1 = parseInt(document.getElementById("num1").value); 
   var num2 = parseInt(document.getElementById("num2").value);
    
   //calculate the GCD for the 2 numbers
   var calcResult = calcGCD(num1, num2);
   gcdResult.innerHTML = calcResult;
}); 