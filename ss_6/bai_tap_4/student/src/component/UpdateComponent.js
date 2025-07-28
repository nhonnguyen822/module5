import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllManufacture} from "../service/manufacture";
import * as yup from "yup";
import {findProductById, updateProducts} from "../service/products";
import {toast} from "react-toastify";

const UpdateComponent = () => {
    const {id} = useParams();

    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [manufactureList, setManufactureList] = useState([])

    useEffect(() => {
        const fetProduct = async () => {
            const res = await findProductById(id);
            setProduct(res);
        }
        fetProduct();
    }, []);

    useEffect(() => {
        const fetchManufactures = async () => {
            const res = await getAllManufacture();
            setManufactureList(res);
        }
        fetchManufactures();
    }, []);

    const handleValidate = yup.object({
        name: yup.string().required("khong duoc de trong"),
        price: yup.number().required("khong duoc de trong"),
        manufactureId: yup.string().required("vui long chon nha san xuat")
    })

    const handleSubmit = (value) => {
        console.log(value)
        const fetProduct = async () => {
            console.log(value)
            await updateProducts(value)
            toast.success("update success")
            navigate("/products")
        }
        fetProduct()
    }

    return <>
        {product &&
            <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
                <div className="card p-4 shadow w-100" style={{maxWidth: "600px"}}>
                    <h2 className="text-center mb-4">Thay Doi Thong Tin</h2>

                    <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
                        <Form>

                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Product Name</label>
                                <div className="col-sm-8">
                                    <Field name="name" type="text" className="form-control"/>
                                    <ErrorMessage name="name" component="div" className="text-danger"/>
                                </div>
                            </div>


                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Price</label>
                                <div className="col-sm-8">
                                    <Field name="price" type="number" className="form-control"/>
                                    <ErrorMessage name="price" component="div" className="text-danger"/>
                                </div>
                            </div>


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
        }
    </>

}
export default UpdateComponent;