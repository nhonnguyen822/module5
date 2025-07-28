import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as yup from "yup"
import {getAllManufacture} from "../service/manufacture";
import {addProduct} from "../service/products";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const SaveComponent = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const [manufactureList, setManufactureList] = useState([])

    useEffect(() => {
        const fetManufacture = async () => {
            setManufactureList(await getAllManufacture())
        }
        fetManufacture();
    }, []);


    const handleValidate = yup.object({
        name: yup.string().required("khong duoc de trong"),
        price: yup.number().required("khong duoc de trong"),
        manufactureId: yup.string().required("vui long chon nha san xuat")
    })

    const handleSubmit = (value) => {
        const fetProduct = async () => {
            await addProduct(value)
            toast.success("create success")
            navigate("/products")
        }
        fetProduct()
    }

    return <>
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow w-100" style={{maxWidth: "600px"}}>
                <h2 className="text-center mb-4">Thêm Mới San Pham</h2>

                <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
                    <Form>
                        {/* Họ và tên */}
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Product Name</label>
                            <div className="col-sm-8">
                                <Field name="name" type="text" className="form-control"/>
                                <ErrorMessage name="name" component="div" className="text-danger"/>
                            </div>
                        </div>

                        {/* Tuổi */}
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <Field name="price" type="number" className="form-control"/>
                                <ErrorMessage name="price" component="div" className="text-danger"/>
                            </div>
                        </div>

                        {/* Lớp học */}
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Manufacture</label>
                            <div className="col-sm-8">
                                <Field as="select" name="manufactureId" className="form-select">
                                    <option value="">-- Chọn SX --</option>
                                    {manufactureList?.map(manu => (
                                        <option key={manu.id} value={manu.id}>{manu.name}</option>
                                    ))}
                                </Field>
                                <ErrorMessage name="manufactureId" component="div" className="text-danger"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Lưu</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    </>
}
export default SaveComponent;