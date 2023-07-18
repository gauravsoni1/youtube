// 01 Filter the number greater than 15
const List = [3, 6, 22, 2, 3, 17, 22, 15, 3, 90];
const filterdList = List.filter(val => val > 15)
console.log(filterdList);

// 02 Filter the list of people where age is > 18
const listOfPeople = [
    { name: "max", age: 20, nationality: "IND" },
    { name: "Riya", age: 21, nationality: "US" },
    { name: "sam", age: 12, nationality: "US" },
    { name: "alex", age: 8, nationality: "UK" },
    { name: "tom", age: 32, nationality: "AUS" },
];

const filtedListOfPeople = listOfPeople.filter(val => val.age > 18);
console.log(filtedListOfPeople);


// 03 Filtering on multiple condition , age > 18 and nationality = "US"
const filtedListOfPeople2 = listOfPeople.filter(val => { return val.age > 18 && val.nationality === "US" });
console.log(filtedListOfPeople2);