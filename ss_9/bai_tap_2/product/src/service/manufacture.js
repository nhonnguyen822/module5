import axios from "axios";

export const getAllManufacture = async () => {
    try {
        const res = await axios.get(`http://localhost:3001/manufactures`)
        return res.data;
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}