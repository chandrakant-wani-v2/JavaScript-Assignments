// Assignment Number - 1

// var a = 2;

// const b = window.prompt("enter number");
// let msg;
// if (isNaN(b) || b < 1) {
//   msg = "Please enter numeric values..";
//   window.alert(msg);
// }
// console.log(("Prime numbers between " + a + " and " + b) << " are: ");
// for (let i = a; i <= b; i++) {
//   if (i == 1 || i == 0) continue;

//   num = 1;
//   for (let j = 2; j <= i / 2; ++j) {
//     if (i % j == 0) {
//       num = 0;
//       break;
//     }
//   }

//   if (num == 1) document.write([i], ",", " ");
// }

// Assignment Number - 2
// const num = parseInt(prompt("enter a value"));
// let text;
// if (isNaN(num) || num < 1) {
//   text = "Input not valid";
// } else {
//   text = "Input OK";
// }
// console.log(text);
// let c = 0;
// for (let i = 2; i <= num / 2; i++) {
//   if (num % i == 0) {
//     console.log("number is not prime");
//     c = 1;
//   }
// }
// if (c == 0) {
//   console.log("number is prime");
//   // return 0;
// } else if (num % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }

// Assignment Number - 4
// function getControlFromButton() {
//   let num1 = prompt("Enter the first number");
//   num1 = Number.parseInt(num1);
//   let num2 = prompt("Enter the second number");
//   num2 = Number.parseInt(num2);
//   let sum = num1 + num2;
//   console.log(`The Addition of ${num1} and ${num2} is ${sum}`);
//   let sub = num1 - num2;
//   console.log(`The Substraction of ${num1} and ${num2} is ${sub}`);
//   let mul = num1 * num2;
//   console.log(`The Multiplication of ${num1} and ${num2} is ${mul}`);
//   let div = num1 / num2;
//   console.log(`The Division of ${num1} and ${num2} is ${div}`);
// }

// Assignment Number - 5

// function alphabet_char_Shift(str) {
//   var all_chars = str.split("");
//   for (var i = 0; i < all_chars.length; i++) {
//     var n = all_chars[i].charCodeAt() - "a".charCodeAt();
//     n = (n + 1) % 26;
//     all_chars[i] = String.fromCharCode(n + "a".charCodeAt());
//   }
//   return all_chars.join("");
// }

// document.write(alphabet_char_Shift("chandrakant"));
