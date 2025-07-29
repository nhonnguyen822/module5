import axios from "axios";

export const getSearchAll = async (searchName, searchClass) => {
    try {
        if (searchClass === "") {
            const res =
                await axios.get(`http://localhost:3001/students?_expand=class&name_like=${searchName}`)
            return res.data;
        } else {
            const res =
                await axios.get(`http://localhost:3001/students?_expand=class&name_like=${searchName}&classId=${searchClass}`)
            return res.data;
        }
    } catch (e) {
        console.log(" loi ket noi db")
        return []
    }
}

export const addStudent = async (student) => {
    try {
        const res = await axios.post("http://localhost:3001/students", student)
        return res.data;
    } catch (e) {
        console.log(" loi ket noi db")
        return []
    }
}

export const deleteStudents = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/students/${id}`)
        return res.data;
    } catch (e) {
        console.log(" loi ket noi db")
        return []
    }
}

export const findStudentByUd = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/students/${id}?_expand=class`)
        return res.data;
    } catch (e) {
        console.log(" loi ket noi db")
        return []
    }
}

export const updateStudent = async (student) => {
    try {
        const res = await axios.patch(`http://localhost:3001/students/${student.id}`, student)
        return res.data;
    } catch (e) {
        console.log(" loi ket noi db")
        return []
    }
}