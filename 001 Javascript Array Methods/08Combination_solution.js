const students = [
    { name: "Tom", lastName: "Smith", grades: 80, class: 6 },
    { name: "Max", lastName: "Miller", grades: 50, class: 7 },
    { name: "Ray", lastName: "Brown", grades: 78, class: 6 },
    { name: "Alesia", lastName: "Taylor", grades: 66, class: 9 },
    { name: "Joshua", lastName: "Anderson", grades: 78, class: 7 },
    { name: "Jonathan", lastName: "Davis", grades: 83, class: 6 },
    { name: "Ben", lastName: "Wilson", grades: 87, class: 8 },
    { name: "Caleb", lastName: "Clark", grades: 45, class: 3 },
    { name: "Denis", lastName: "Carter", grades: 60, class: 9 },
];

// Question 1 : Find the average marks of the people in grade 9

// const sumOfMarksOf9thGrade = students
//     .filter((student) => student.class === 9)
//     .reduce((prev, curr, index, arr) => (prev += curr.grades), 0);

// const noOf9thGradeStudents = students.filter(
//     (student) => student.class === 9
// ).length;

// const average = sumOfMarksOf9thGrade / noOf9thGradeStudents;

// console.log({ sumOfMarksOf9thGrade, noOf9thGradeStudents, average });

// Question 2: Find the person in Class 6 , and return array in the following wait ["First_name Last_name", "first_name "]

const classs9Sutdents = students
    .filter((student) => student.class === 9)
    .map((student) => student.name + " " + student.lastName);

console.log(classs9Sutdents);
