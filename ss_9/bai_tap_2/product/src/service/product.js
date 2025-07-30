import axios from "axios";

let url = "http://localhost:3001/products"
export const getAllSearchProduct = async (searchName, manufactureIdSearch, page) => {
    try {
        if (manufactureIdSearch === "") {
            const res = await axios.get(`${url}?name_like=${searchName}&_page=${page}&_limit=2`)
            const totalCount = res.headers["x-total-count"]
            const data = res.data
            return {totalCount, data}
        } else {
            const res = await axios.get(`${url}?name_like=${searchName}&manufacture.id=${manufactureIdSearch}&_page=${page}&_limit=2`)
            const totalCount = res.headers["x-total-count"]
            const data = res.data
            return {totalCount, data}
        }


    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}
export const addProduct = async (product) => {
    try {
        const res = await axios.post(`${url}`, product)
        return res.data;
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}

export const findProductById = async (id) => {
    try {
        const res = await axios.get(`${url}/${id}`)
        return res.data;
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}

export const deleteProductById = async (id) => {
    try {
        const res = await axios.delete(`${url}/${id}`)
        return res.data;
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}


export const updateProductById = async (product) => {
    try {
        const res = await axios.patch(`${url}/${product.id}`, product)
        return res.data;
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}



