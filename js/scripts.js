// back end logic

var test = "1978";
var rom

var buildTestArray = function(string){
  var testArray = string.split("");
  testArray.map(function(numeral) {
    parseInt(numeral);
  });
  return testArray;
};
var testArray = buildTestArray(test);
alert(testArray);



var writeNumeral = function(number){
  var numeral = "";
  if (number<=3) {
    for (i=0;i<number;i+=1) {
      numeral = numeral + "I"
    }
  } else if (number === 4){
    numeral = "IV"
  } else if (number>4 && number<9) {
    numeral = "V";
    for (i=0;i<(number-5);i+=1) {
      numeral = numeral + "I"
    }
  } else if (number === 9) {
    numeral = "IX";
  }
  return numeral;
};




// alert(writeNumeral(5));
