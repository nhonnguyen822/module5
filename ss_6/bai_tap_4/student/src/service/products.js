import axios from "axios";

export const getAllSearch = async (searchName, manufactureSearch,page) => {
    try {
        if (manufactureSearch !== "") {
            const res =
                await axios.get(`http://localhost:3001/products?_expand=manufacture&_page=${page}
                &_limit=2&name_like=${searchName}&manufactureId=${manufactureSearch}`)

            const productList=res.data
            const totalCount=res.headers[`x-total-count`]
            return {productList,totalCount}
        } else {
            const res = await axios.get(`http://localhost:3001/products?_expand=manufacture&_page=${page}&_limit=2&name_like=${searchName}`)
            const productList=res.data
            const totalCount=res.headers[`x-total-count`]
            return {productList,totalCount}
        }
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}

export const addProduct = async (product) => {
    try {
        const res = await axios.post("http://localhost:3001/products", product)

    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}


export const deleteProducts = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:3001/products/${id}`)
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}
export const findProductById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:3001/products/${id}?_expand=manufacture`)
        return res.data;
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}


export const updateProducts = async (product) => {
    try {
        const res = await axios.patch(`http://localhost:3001/products/${product.id}`, product)
    } catch (e) {
        console.log("loi ket noi db")
        return [];
    }
}

