/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const ex1 = (a, b) => (a === b ? 3 * (a + b) : a + b);
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.

*/

const ex2 = (a, b) => [a, b, a + b].includes(50);

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.

*/

const ex3 = (str, i) => str.replace(str.charAt(i), "");

/*

4)
 Create a function to find the largest of three given integers.
*/

const ex4 = (a, b, c) => Math.max(a, b, c);

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const ex5 = (a, b) =>
  [a, b].every((n) => (n > 40 && n <= 60) || (n > 70 && n <= 100));

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const ex6 = (string, n) => string.repeat(n);

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const ex7 = (city) =>
  city.startsWith("Los") || city.startsWith("New") ? city : "";

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const ex8 = (arr) => arr.reduce((curr, acc) => curr + acc, 0);

/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const ex9 = (arr) => arr.some((el) => el === 1 || el === 3);

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

*/

const ex10 = (arr) => arr.every((el) => el === 1 || el === 3);

/*
11)

Create a function to find the longest string from a given array of strings.

*/

const ex11 = (arr) =>
  arr[
    arr.findIndex((el) => el.length === Math.max(...arr.map((s) => s.length)))
  ];

/*

12

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.


    */

const ex12 = (angle) =>
  angle < 90
    ? "Acute"
    : angle === 90
    ? "Right"
    : angle < 180
    ? "Obtuse"
    : angle === "180"
    ? "Straight"
    : "Reflex";

/*

13)

Create a function to find the index of the greatest element of a given array of integers

*/

const ex13 = (arr) => arr.findIndex((el) => el.length === Math.max(...arr));

/*

14) 

Create a function to get the largest even number from an array of integers.

*/
const ex14 = (arr) =>
  arr[
    arr.findIndex(
      (el) => el.length === Math.max(...arr.filter((el) => el % 2 === 0))
    )
  ];
/*

16)

Create a function to check from two given integers, whether one is positive and another one is negative.

*/

const ex16 = (a, b) => a * b < 0;

/*

17)

Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 


*/

//  hello [h,e,l,l,o]

const ex17 = (str) =>
  str.length < 3
    ? str.toUpperCase()
    : str
        .split("")
        .map((char, i) => (i <= 2 ? char.toLowerCase() : char.toUpperCase()))
        .join("");

/*
18)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/

const ex18 = (a, b) => (a + b > 50 && a + b <= 80 ? 65 : 80);

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

/**
 *  let string =""
 *  DiegoRiccardoStefano
 *
 */

const numbers = [
  { number: 3, name: "Diego" },
  { number: 5, name: "Riccardo" },
  { number: 7, name: "Stefano" },
];

const ex19 = (a) =>
  numbers.some((n) => a % n.number === 0)
    ? numbers.reduce(
        (prev, curr) => (a % curr.number === 0 ? prev + curr.name : prev),
        ""
      )
    : a;

/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/

const ex20 = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");

module.exports = {
  ex1,
  ex2,
  ex3,
  ex4,
  ex5,
  ex6,
  ex7,
  ex8,
  ex9,
  ex10,
  ex11,
  ex12,
  ex13,
  ex14,
  ex16,
  ex17,
  ex18,
  ex19,
  ex20,
};
