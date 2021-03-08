/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumOfTwoIntegers = function (x, y) {
  if (x === y) {
    return 3 * (x + y);
  } else {
    return x + y;
  }
};

console.log(sumOfTwoIntegers(2, 2));

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const secondFunction = function (x, y) {
  if (x === 50 || y === 50 || x + y === 50) {
    return true;
  } else return false;
};
console.log(secondFunction(1, 51));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const thirdFunction = function (str, index) {
  let newString = str.substr(0, index) + str.substr(index + 1, str.length - 1);
  return newString;
};
console.log(thirdFunction("John", 1));

/*

4)
 Create a function to find the largest of three given integers.
*/

const fourthFunction = function (x, y, z) {
  let max;
  if (x > y) {
    max = x;
  } else max = y;
  if (z > max) {
    max = z;
  }
  return max;
};
console.log(fourthFunction(4123422, 230212, 3333));

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const fifthFunction = function (x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(fifthFunction(75, 75));

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const sixthFunction = function (str, n) {
  if (n < 0) {
    return false;
  } else {
    return str.repeat(n);
  }
};
console.log(sixthFunction("John", 3));

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
// const seventhFunction = function (str) {
//   if (str.startsWith("Los") || str.startsWith("New")) {
//     return str;
//   } else return false;
// };
// console.log(seventhFunction("Ne Angeles"));

const seventhFunction = function (str) {
  if (
    str.length >= 3 &&
    (str.substring(0, 3) == "Los" || str.substring(0, 3) == "New")
  ) {
    return str;
  } else return false;
};
console.log(seventhFunction("Los Angeles"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const eighthFunction = function (arr) {
  return arr.reduce((acc, el) => acc + el);
};
console.log(eighthFunction([1, 2, 45]));

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const ninthFunction = function (arr) {
  if (arr.indexOf(1) !== -1 || arr.indexOf(3) !== -1) {
    return true;
  } else return false;
};
console.log(ninthFunction([2, 1]));

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/

const tenthFunction = function (arr) {
  if (arr.indexOf(1) >= 0 || arr.indexOf(3) >= 0) {
    return false;
  } else {
    return true;
  }
};

console.log(tenthFunction([2, 1]));

/*
11)

Create a function to find the longest string from a given array of strings.
*/

const eleventhFunction = function (arr) {
  let max = 0;
  let longestStringId;
  arr.map((el, idx) => {
    if (el.length > max) {
      max = el.length;
      longestStringId = idx;
    }
  });
  return arr[longestStringId];
};
console.log(eleventhFunction(["one", "threeedwg", "eleven", "ewr"]));

/*
12)

Create a function to find the types of a given angle.

Types of angles:
Acute angle: An angle between 0 and 90 degrees.
Right angle: An 90 degree angle.
btuse angle: An angle between 90 and 180 degrees.
Straight angle: A 180 degree angle.

*/

const twelfthFunction = function (angle) {
  if (angle < 90) {
    return "Acute angle";
  }
  if (angle === 90) {
    return "Right angle";
  }
  if (angle < 180) {
    return "Obtuse angle";
  }
  return "Straight angle";
};

console.log(twelfthFunction(90));

/*

13)

Create a function to find the index of the greatest element of a given array of integers
*/

const thirteenthFunction = function (arr) {
  let index;
  let max = 0;
  arr.map((el, idx) => {
    if (el > max) {
      max = el;
      index = idx;
    }
  });
  return index;
};

console.log(thirteenthFunction([1, 2, 3, 42, 5, 6]));

/*

14)

Create a function to get the largest even number from an array of integers.
*/

const fourteenthFunction = function (arr) {
  let max = 0;
  arr.map((el) => {
    if (el % 2 === 0) {
      if (el > max) {
        max = el;
      }
    }
  });
  return max;
};

console.log(fourteenthFunction([2, 4, 6, 9, 12]));

/*

16)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/

const sixteenthFunction = function (x, y) {
  if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
    return true;
  } else return false;
};
console.log(sixteenthFunction(-1, 2));

/*

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const seventeenthFunction = function (str) {
  let newString;
  if (str.length < 3) {
    newString = str.toUpperCase();
  } else {
    newString =
      str.substring(0, 3).toLowerCase() + str.substring(3).toUpperCase();
  }
  return newString;
};
console.log(seventeenthFunction("new york"));

/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const eighteenthFunction = function (x, y) {
  if (x + y >= 50 && x + y <= 80) {
    return x + y;
  } else {
    return 65;
  }
};
console.log(eighteenthFunction(30, 60));

/*
19)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

*/

const nineteenthFunction = function (n) {
  if (n % 3 === 0) {
    if (n % 5 === 0) {
      if (n % 7 === 0) {
        return "DiegoRiccardoStefano";
      } else return "DiegoRiccardo";
    } else if (n % 7 === 0) {
      return "DiegoStefano";
    }
    return "Diego";
  } else if (n % 5 === 0) {
    if (n % 7 === 0) {
      return "RiccardoStefano";
    }
    return "Riccardo";
  } else if (n % 7 === 0) {
    return "Stefano";
  } else return n;
};
console.log(nineteenthFunction(63));

/*


20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

const twentiethFunction = function (str) {
  let array = str.split(" ");
  let acronym = "";
  for (let i = 0; i < array.length; i++) {
    acronym += array[i][0].toUpperCase();
  }
  return acronym;
};
console.log(twentiethFunction("British groadcasting forporation"));
