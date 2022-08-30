// add event listener to the button to add a course
// addButton.addEventListener('click', addCourse);

// add event listener to the button to add a semester
// addSemesterButton.addEventListener('click', addSemester);

// course object contains course, grade, and credit
// const courseInputs = { 
//     course: '',
//     grade: '',
//     credit: ''
// }

const courses = [];

const addRow = () => {
    gpaContainer.innerHTML = inputs;
}

addRow();

const addCourse = () => {
    const course = {
        course: document.getElementsByClassName('courses')[0].value,
        grade: document.getElementsByClassName('grade')[0].value,
        credit: document.getElementsByClassName('credit')[0].value
    }
    courses.push(course);
    console.log(courses);
}
addCourse();

// // semester object contains courses and gpa
// const semesterInputs = {
//     courses: courses,
//     gpa: ''
// }   // end semester object 

// const semesters = [];


// const addSemester = () => {
//     semesters.push(semesterInputs);
//     console.log(semesters);
// }
// addSemester();

// calculate gpa
// const calculateGPA = () => {
//     let gpa = 0;
//     let totalCredits = 0;
//     for (let i = 0; i < semesters.length; i++) {
//         for (let j = 0; j < semesters[i].courses.length; j++) {
//             gpa += semesters[i].courses[j].grade * semesters[i].courses[j].credit;
//             totalCredits += semesters[i].courses[j].credit;
//         }
//     }
//     gpa = gpa / totalCredits;
//     return gpa;
// }


// const gpa = calculateGPA();
// console.log(gpa);


// const displayGPA = () => {
//     gpaContainer.innerHTML = `<h1>Your GPA is ${gpa}</h1>`;
// }
// displayGPA();







































// // get gpa container by id
// const gpaContainer = document.getElementById('gpa-container');

// // get gpa inputs 
// const inputs = `
// <div class="gpa-inputs">
//                 <input type="text" class="courses" placeholder="Course">
//                 <input type="text" class="grade" placeholder="Grade">
//                 <input type="text" class="credit" placeholder="Credits">
//             </div>`;
// // add row 
// //
// //- Using a function pointer:
// document.getElementById("clickMe").onclick = doFunction;
// const renderBtn = () => {
//     const btn = `<button class="add-row">Add Row</button>`;
//     gpaContainer.innerHTML += btn;
// }
// gpaContainer.innerHTML = inputs;

// renderBtn();

