console.log('Connected');

// JSON (JavaScript Object Notation)


// Normal Object
const students={
    name: 'Jackxon',
    call: 015000000 ,
    education: 'BBA' ,
    address: 'Gulshan, Dhaka' ,
    bestFriend: ['Micel', 'Alexa', 'Escon'],
}

console.log(students, typeof students);

// JSON.stringify --> JSON
const studentsJson = JSON.stringify(students);
console.log(studentsJson, typeof studentsJson);

// JSON.parse --> Object
const studentsParse = JSON.parse(studentsJson);
console.log(studentsParse, typeof studentsParse);