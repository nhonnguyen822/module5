
type Person = {
    firstName: string;
    gender: string;
    language: string[];
    education: Education;
    [key: string]: any;
};
type Education = {
    degree: string;
    major: string;
    university: string;
};
export const person:Person= {
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