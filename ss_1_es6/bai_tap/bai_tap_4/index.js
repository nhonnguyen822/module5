import {courses,addedCourses} from "./data.js"

const result1 = courses.filter((value) => {
    if (value.rating >= 4) {
        return value
    }
})

console.log("kết quả yêu cầu 1")
result1.forEach((value)=>{
    console.log(value)
})


const result2 = courses.filter((value) => {
    if (value.rating < 4) {
        return value
    }
})

console.log("kết quả yêu cầu 2")
result2.forEach((value)=>{
    console.log(value)
})

const  result3=[...courses,...addedCourses]

console.log("kết quả yêu cầu 3")
result3.forEach((value)=>{
    console.log(value)
})