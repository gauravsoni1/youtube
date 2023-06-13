// 1. Return an array with double the values in the given array
// const arr = [1, 4, 7, 12];

// const arr = [1, 4, 7, 12];
// const doubleVal = arr.map((num) => num * 2);
// console.log(doubleVal);

// 2. In the following string make the first letter in capital, shows the usecase of index
// javascript is awesome

// const str = "javascript is awesome";
// const arrOfLetters = str.split("").map((letter, index) => {
//     if (index === 0 || str[index - 1] === " ")
//         return letter.toUpperCase();
//     return letter;
// });
// const upperCaseString = arrOfLetters.join("");
// console.log(upperCaseString);

// 3. Map on Array Of Objects with external function

// Customer want these type of sandwich = ["Veg", "Chicken", "Egg"]
// Output Syntax:
// [
//   { bread: 'White', patty: 'vegetarian', sauce: 'ketchup' },
//   { bread: 'White', patty: 'chicken', sauce: 'mustard' }
// ]

// const CustomerSandwitchRequest = ["Veg", "Egg"];

// const buildCustomerSandwitch = (type) => {
//     switch (type) {
//         case "Veg":
//             return {
//                 bread: "White",
//                 patty: "vegetarian",
//                 sauce: "ketchup",
//             };
//         case "Egg":
//             return {
//                 bread: "White",
//                 patty: "chicken",
//                 sauce: "mustard",
//             };
//         default:
//             break;
//     }
// };

// const customerSandwitches = CustomerSandwitchRequest.map((requestType) =>
//     buildCustomerSandwitch(requestType)
// );

// console.log(customerSandwitches);
