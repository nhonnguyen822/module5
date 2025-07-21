"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var my_data_js_1 = require("./my_data.js");
var my_service_js_1 = require("./my_service.js");
var firstName = my_data_js_1.person.firstName, gender = my_data_js_1.person.gender, language = my_data_js_1.person.language, education = my_data_js_1.person.education, other = __rest(my_data_js_1.person, ["firstName", "gender", "language", "education"]);
var person1 = {
    firstName: firstName,
    gender: gender,
    language: language[0],
    degree: education.degree
};
var person2 = {
    name: firstName,
    gender: gender,
    language: language[0],
    degree: education.degree
};
(0, my_service_js_1.info)(person1);
(0, my_service_js_1.info)(person2);
