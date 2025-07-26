import axios from "axios";

export const getAllStudent = async () => {
    try {
        const res = await axios.get("http://localhost:3001/students")
        return res.data
    } catch (e) {
        console.log("lỗi kết nối db")
        return []
    }
}
export const addStudent = async (student) => {
    try {
        const res = await axios.post("http://localhost:3001/students", student)
    } catch (e) {
        console.log("lỗi kết nối db")

    }
}

export const findById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/students/${id}`)
        return res.data
    } catch (e) {
        console.log("lỗi kết nối db")
        return []
    }
}
export const deleteById = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/students/${id}`)
        return res.data
    } catch (e) {
        console.log("lỗi kết nối db")
        return []
    }
}

export const searchByName = async (searchName) => {
    try {
        const res = await axios.get(`http://localhost:3001/students?name_like=${searchName}`)
        return res.data
    } catch (e) {
        console.log("lỗi kết nối db")
        return []
    }
}
export const updateStudent = async (id,student) => {
    try {
        const res = await axios.patch(`http://localhost:3001/students/${id}`,student);
        return res.data;
    } catch (e) {
        console.log("lỗi kết nối db");
        return null;
    }
}
