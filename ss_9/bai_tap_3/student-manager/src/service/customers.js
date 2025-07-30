import axios from "axios";

export const getAllSearchCustomers = async (searchName,searchTypeId) => {
    try {
        if (searchTypeId!=="") {
            console.log(searchTypeId)
            const res = await axios.get(`http://localhost:3001/customers?name_like=${searchName}&typeCustomer.id=${searchTypeId}`)
            console.log(res.data)
            return res.data
        } else {
            const res = await axios.get(`http://localhost:3001/customers?name_like=${searchName}`)
            return res.data
        }
    } catch (e) {
        console.log("loi ket noi api")
        return []
    }
}

export const findCustomerById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/customers/${id}`)
        return res.data;
    } catch (e) {
        console.log("loi ket noi api")
        return []
    }
}

export const deleteCustomerById = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/customers/${id}`)
    } catch (e) {
        console.log("loi ket noi api")
        return []
    }
}

export const addCustomer= async (product) => {
    try {
        const res = await axios.post(`http://localhost:3001/customers/`, product)
    } catch (e) {
        console.log("loi ket noi api")
        return []
    }
}

export const updateCustomerById = async (product) => {
    try {
        const res = await axios.patch(`http://localhost:3001/customers/${product.id}`, product)
    } catch (e) {
        console.log("loi ket noi api")
        return []
    }
}
