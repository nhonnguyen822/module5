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
const {firstName, gender, language, education,...other} = person;

const student = {
    firstName: firstName,
    gender:gender,
    degree: education.degree,
    english:language[0]
}
console.log(student)