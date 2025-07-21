import {person} from "./my_data.js"
import {info} from "./my_service.js";

const {
    firstName,
    gender,
    language,
    education,
    ...other
} = person;

const person1= {
    firstName: firstName,
    gender: gender,
    language: language[0],
    degree: education.degree
}

const person2= {
    name: firstName,
    gender: gender,
    language: language[0],
    degree: education.degree
}

info(person1);
info(person2);