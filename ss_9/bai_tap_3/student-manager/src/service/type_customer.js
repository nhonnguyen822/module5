import axios from "axios";

export const getAllTypeCustomer = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/typeCustomer`)
        return res.data;
    } catch (e) {
        console.log("loi ket noi api")
        return []
    }
}