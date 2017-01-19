// back end logic

var test = "1978";
var romanNumerals = ["I","V","X","L","C","D","M"];

var buildTestArray = function(string){
  var testArray = string.split("");
  testArray.map(function(numeral) {
    parseInt(numeral);
  });
  return testArray;
};
var testArray = buildTestArray(test);



var writeNumeral = function(number,place){
  var numeral = "";
  if (number<=3) {
    for (var i=0;i<number;i+=1) {
      numeral = numeral + romanNumerals[place]
    }
  } else if (number === 4){
    numeral = romanNumerals[place]+romanNumerals[place+1]
  } else if (number>4 && number<9) {
    numeral = romanNumerals[place+1];
    for (var i=0;i<(number-5);i+=1) {
      numeral = numeral + romanNumerals[place]
    }
  } else if (number > 9) {
    numeral = romanNumerals[place]+romanNumerals[place+2];
  }
  return numeral;
};
// alert(writeNumeral(5,0));
// alert(writeNumeral(5,2));
// alert(writeNumeral(9,0));
// alert(writeNumeral(9,2));

var romanNum = function (string) {
  var numArray = buildTestArray(string);
  var numArray = numArray.reverse();
  console.log(numArray.toString());
  var place = 0;
  var output="";
  for (var r=0;r<4;r+=1) {
    output = writeNumeral(numArray[r], place) + output;
    console.log(place);
    place += 2;
    console.log(r);
    console.log(numArray[r])
    console.log(output);
  }
  return output;
};


alert(romanNum(test));
