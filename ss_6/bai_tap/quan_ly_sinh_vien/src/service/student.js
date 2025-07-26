import axios from "axios";

export const getAllStudent = async () => {
    try {
        const res = await axios.get("http://localhost:3002/students")
        return res.data
    } catch (e) {
        console.log("lỗi kết nối db")
        return []
    }
}