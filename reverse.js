// Reverse a number without using helper functions
// Turn 123 to 321 for example

let number = 1234567890;

function returnLength(num) {
  if (num == 0) {
    return 1;
  }

  let result = 0;

  while (num >= 1) {
    num = num / 10;
    result++;
  }
  return result;
}

function reverse(n) {
  let reversed = [];
  let result = ""
  const lengthOriginal = returnLength(n);
  let modifier = 10;

  // Checking if the length of the reversed number is the same as the number we passed
  while (reversed.length !== lengthOriginal) {
    let lastdigit = n % modifier;
    //console.log(modifier * 10);
    reversed.push(lastdigit.toString()[0]);
    //console.log(reversed);
    modifier *= 10;
  }

  let arrayLength = reversed.length

  for (let i = 0; i < arrayLength; i++) {
    result += reversed[i]
  }
  return result
}

console.log(reverse(number));

//console.log(returnLength("0"));

// Could i create an array with the numbers and then start adding the digits from the beginning
//console.log(returnLength("223"));
// So even if i pass a string number it will return the length of it as it will
// be turned into a number

// How can we reverse the number?
// Perhaps a for loop, starting from the beginning and creating a new number row by one
// Perhaps once again with modulo removing the numbers and the reversing them
// Or maybe a while loop until there are no more numbers to reverse
// Maybe remove the numbers one by one, turn them into strings