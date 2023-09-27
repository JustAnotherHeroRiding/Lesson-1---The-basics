// Reverse a number without using helper functions
// Turn 123 to 321 for example

let number = 1234;

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
  let result = "";
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

  let arrayLength = reversed.length;

  for (let i = 0; i < arrayLength; i++) {
    result += reversed[i];
  }
  return result;
}

function reverseV2(n) {
  let result = "";
  const lengthOriginal = returnLength(n);
  const stringNum = n.toString();

  for (let i = 1; i <= lengthOriginal; i++) {
    result += stringNum[lengthOriginal - i];
  }

  return result;
}

// I can also get the last digits by using modulo 10 then divided by 1 will give me the last number
// If i multiple the modulo and the divider by 10 i will get the second to last number
// If i multiply as many times as there are digits, i will get all the numbers starting from the bottom
// How can i combine them into a number without using strings?
//console.log(Math.floor((1234 % 10) / 1));

function reverseV3(n) {
  let reversed = 0
  while (n > 0) {
    lastDigit = Math.floor(n % 10);
    reversed = reversed * 10 + lastDigit
    n = Math.floor(n / 10);
  }
  return reversed
}

console.log(reverseV3(number))
//console.log(reverseV2(number))

//console.log(reverse(number));

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
