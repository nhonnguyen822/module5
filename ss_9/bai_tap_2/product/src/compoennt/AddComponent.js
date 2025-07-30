import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import * as yup from "yup"
import {getAllManufacture} from "../service/manufacture";
import {addProduct} from "../service/product";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const AddComponent = () => {
    const navigate = useNavigate();
    const [manufactureList, setManufactureList] = useState([])
    const [product, setProduct] = useState({
        name: "",
        price: "",
        dateOfManufacture: "",
        manufacture: ""
    })

    useEffect(() => {
        const fetData = async () => {
            const res = await getAllManufacture();
            setManufactureList(res);
        }
        fetData();
    }, []);


    const handleSubmit = (value) => {
        value = {
            ...value,
            manufacture: JSON.parse(value.manufacture)
        }
        const fetData = async () => {
            await addProduct(value);
            navigate("/products")
            toast.success("create success")
        }
        fetData();
    }

    const handleValidate = yup.object({
        name: yup.string().required("khong duoc de trong"),
        price: yup.string().required("khong duoc de trong").matches(/^[1-9][0-9]+$/u, "vui long nhap so tien khong hop le"),
        dateOfManufacture: yup.date().required("khong duoc de trong").typeError("ngay khong hop le"),
        manufacture: yup.string().required("vui long chon hang sx")
    })
    return <>
        <div>
            <h2>Them moi san pham</h2>
        </div>
        <Formik initialValues={product} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">ProductName</label>
                    <div className="col-sm-8">
                        <Field name="name" type="text" className="form-control"/>
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Price</label>
                    <div className="col-sm-8">
                        <Field name="price" type="text" className="form-control"/>
                        <ErrorMessage name="price" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">DateOfManufacture</label>
                    <div className="col-sm-8">
                        <Field name="dateOfManufacture" type="date" className="form-control"/>
                        <ErrorMessage name="dateOfManufacture" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Manufacture</label>
                    <div className="col-sm-8">
                        <Field name="manufacture" as="select" className="form-control">
                            <option value={""}>........Chon .....</option>
                            {manufactureList?.map(manu => (
                                <option value={JSON.stringify(manu)} key={manu.id}>{manu.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="manufacture" component="div" className="text-danger"/>
                    </div>
                </div>
                <button type={"submit"}>Submit</button>
            </Form>
        </Formik>
    </>
}

export default AddComponent;
