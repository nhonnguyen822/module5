import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {getAllTypeCustomer} from "../service/type_customer";
import * as yup from "yup"
import {addCustomer} from "../service/customers";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const AddComponent = () => {
    const navigate = useNavigate();
    const [typeCustomerList, setTypeCustomerList] = useState([]);
    const [customer, setCustomer] = useState({
        name: "",
        age: "",
        email: "",
        birthDay: "",
        typeCustomer: "",
    })

    useEffect(() => {
        const fetData = async () => {
            const res = await getAllTypeCustomer();
            setTypeCustomerList(res);
        }
        fetData();
    }, []);


    const handleValidate = yup.object({
        name: yup.string().required("không được để trống"),
        age: yup.string().required("không được để trống").matches(/^[1-9][0-9]+$/u),
        email: "",
        birthDay: "",
        typeCustomer: "",
    })

    const handleSubmit = (value) => {
        const fetData = async () => {
            value={
                ...value,
                typeCustomer:JSON.parse(value.typeCustomer)
            }
            await addCustomer(value);
            toast.success("create success")
            navigate("/customers")
        }
        fetData();
    }
    return <>
        <Formik initialValues={customer} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Customer Name</label>
                    <div className="col-sm-8">
                        <Field name="name" type="text" className="form-control"/>
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Age</label>
                    <div className="col-sm-8">
                        <Field name="age" type="text" className="form-control"/>
                        <ErrorMessage name="age" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <Field name="email" type="text" className="form-control"/>
                        <ErrorMessage name="email" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">BirthDay</label>
                    <div className="col-sm-8">
                        <Field name="birthDay" type="date" className="form-control"/>
                        <ErrorMessage name="birthDay" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">TypeCustomer</label>
                    <div className="col-sm-8">
                        <Field name="typeCustomer" as="select" className="form-control">
                            <option value={""}>........Chon .....</option>
                            {typeCustomerList?.map(type => (
                                <option value={JSON.stringify(type)} key={type.id}>{type.name}</option>
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