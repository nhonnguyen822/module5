import axios from "axios";

export const getAllClass = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/classes`)
        return res.data;
    } catch (e) {
        console.log(" loi ket noi db")
        return []
    }
}