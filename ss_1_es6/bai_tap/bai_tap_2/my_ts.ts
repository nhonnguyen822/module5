const person = {
    firstName: 'Join',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'developer',
    nationality: 'American',
    city: 'New York',
    hobbies: ['reading', 'traveling', 'photography'],
    language: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: 'Harvard University'
    }
}

const {firstName, gender, education, language, ...other} = person;

interface Student {
    firstName: string,
    gender: string,
    degree: string,
    english: string,
}

const student: Student = {
    firstName: firstName,
    gender: gender,
    degree: education.degree,
    english: language[0]
}
console.log(student)
