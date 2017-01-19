Largest numeral: mmmd  
test numeral: 1978  - MCMLXXVIII


User logic
enter number
validate that number is under <= 3999
run the translator and output the result string

Biz logic (assume validated input)


Behavior: receive a number lower than 4 to write, write that amount of I characters.
  Sample input: 3
  Sample output: III
Behavior: receive the number 4 to write, write IV.
  Sample input: 4
  Sample output: IV
Behavior: receive a number between 5 and 8 to write, write as V followed by (number-5) I's
  Sample input: 8
  Sample output: VIII
Behavior: receive the number 9 to write, write as IX
  Sample input: 9
  Sample output: IX
Behavior: Create similar behavior for the 10's and 100's digit.
  Sample input: 4
  Sample output: IV
Behavior: receive a numeral and parse it into an array of the separate digits.
  Sample input: 1978
  Sample output: [1,9,7,8]
Behavior: receive array of values to write in each place, loop through previous writing methods to write these values to a string.
  Sample input: 4
  Sample output: IV



overall behavior: take a numeric input (<=3999), determine the value that needs to be expressed in each of the 1's, 10's, 100's and 1000's place, assign those into an array, loop over the array to write the string according to the roman numeral syntax.


IX
VIII
VII
VI
V
IV
III
II
I
