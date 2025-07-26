import axios from "axios";

export const getAllClass = async () => {
    try {
        const res = await axios.get("http://localhost:3001/class")
        return res.data
    } catch (e) {
        return []
    }
}