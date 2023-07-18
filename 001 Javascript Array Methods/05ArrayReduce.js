// Finding the SUM of the numbers, OUTPUT: x
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((total, curr, index, arr) => total = curr + total);

console.log(sum);


// 2 Finding the SUM of the numbers and returning an object 
// , OUTPUT: {sum: x}
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumInObj = numbers2.reduce((total, curr) => {
    return { sum: total.sum += curr };
}, { sum: 0 })

console.log(sumInObj);

// 3. Dropdown Menu items returned from backend , compile list like ["United States", "United Kingdom", "Australia"]

let countryDropdown = [{ code: "US", name: "United States" }, { code: "UK", name: "United Kingdom" }, { code: "AUS", name: "Australia" }]

const dropdown = countryDropdown.reduce((total, curr) => {
    return [...total, curr.name]
}, [])

console.log(dropdown);