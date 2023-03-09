  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too


// Challenge

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 73, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, english: 88, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const biggest = students.reduce((acc, { name, results }) =>
  results.english > acc.max ? { name, max: results.english } : acc,
  { name: '', max: 0 }
);
console.log(biggest);
// const biggest = students.reduce((acc, curr) => {
//   const {name, results} = curr;
//   const biggest = results.english;
//   if(biggest > acc.max) {
//     acc.max = biggest;
//     acc.name = name;
//   }
//   return acc;
// }, {name: '', max: 0});

// console.log(biggest);

// const englishResults = students.reduce((acc, curr) => {
//   const { name, results } = curr;
//   const englishResult = results.english;
//   if (englishResult > acc.max) {
//     acc.max = englishResult;
//     acc.name = name;
//   }
//   return acc;
// }, { name: '', max: 0 });

// console.log(`Student with the highest result in English is ${englishResults.name} with a score of ${englishResults.max}`);
