import axios from "axios";

export const getAllStudent = async () => {
    try {
        const res = await axios.get("http://localhost:3001/students")
        return res.data;
    } catch (e) {
        console.log("loi kêt nối db")
        return [];
    }
}