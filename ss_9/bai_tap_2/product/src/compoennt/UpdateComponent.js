import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllManufacture} from "../service/manufacture";
import {addProduct, findProductById, updateProductById} from "../service/product";
import {toast} from "react-toastify";
import * as yup from "yup";

const UpdateComponent = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [manufactureList, setManufactureList] = useState([])
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetData = async () => {
            const res = await getAllManufacture();
            setManufactureList(res);
        }
        fetData();
    }, []);

    useEffect(() => {
        const fetData = async () => {
            const res = await findProductById(id);
            setProduct({...res,manufacture:JSON.stringify(res.manufacture)});
        }
        fetData();
    }, []);


    const handleSubmit = (value) => {
        value = {
            ...value,
            manufacture: JSON.parse(value.manufacture)
        }
        const fetData = async () => {
            await updateProductById(value);
            console.log("producyt update    /....."+value)
            navigate("/products")
            toast.success("update success")
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
            <h2>Thay doi thong tin san pham</h2>
        </div>
        {product &&
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
                            <ErrorMessage name="classId" component="div" className="text-danger"/>
                        </div>
                    </div>
                    <button type={"submit"}>Submit</button>
                </Form>
            </Formik>
        }
    </>
}
export default UpdateComponent;