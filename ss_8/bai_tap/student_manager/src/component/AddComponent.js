import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {getAllClass} from "../service/classes";
import * as yup from "yup";
import {addStudent} from "../service/students";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const AddComponent = () => {
    const navigate = useNavigate();
    const [classList, setClassList] = useState([]);
    const [student, setStudent] = useState({
        name: '',
        age: '',
        subject:[],
        classId:''
    });
    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllClass();
            console.log(res)
            setClassList(res)
        }
        fetchData()
    }, [])


    const handleValidate = yup.object({
        name: yup.string().required("không được để trống"),
        age: yup.number().required("không được để trống").min(18, "không được nhỏ hơn 18"),
        subject: yup.array().min(1,"phải chọn ít nhất một môn học"),
        classId: yup.string().required("không được để trống")
    })
    const handleSubmit = (value) => {
        const fetAdd = async () => {

            console.log(value)
            const student = await addStudent(value)
            // console.log(student)
            toast.success("create success")
            navigate("/students")
        }
        fetAdd()
    }
    return <>
        <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
            <Form>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Student</label>
                    <div className="col-sm-8">
                        <Field name="name" type="text" className="form-control"/>
                        <ErrorMessage name="name" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Age</label>
                    <div className="col-sm-8">
                        <Field name="age" type="number" className="form-control"/>
                        <ErrorMessage name="age" component="div" className="text-danger"/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Subject</label>
                    <div className="col-sm-8">
                        <div className="form-check">
                            <Field type="checkbox" name="subject" value="HTML" className="form-check-input"
                                   id="html"/>
                            <label className="form-check-label ms-2" htmlFor="html">HTML</label>
                        </div>
                        <div className="form-check">
                            <Field type="checkbox" name="subject" value="JS" className="form-check-input"
                                   id="js"/>
                            <label className="form-check-label ms-2" htmlFor="js">JS</label>
                        </div>
                        <div className="form-check">
                            <Field type="checkbox" name="subject" value="CSS" className="form-check-input"
                                   id="css"/>
                            <label className="form-check-label ms-2" htmlFor="css">CSS</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-4 col-form-label">Class</label>
                    <div className="col-sm-8">
                        <Field name="classId" as="select" className="form-control">
                            <option value={""}> Chon class</option>
                            {classList.map(cls => (
                                <option value={cls.id} key={cls.id}>{cls.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="classId" component="div" className="text-danger"/>
                    </div>
                </div>
                <button type={"submit"}>Submit</button>
            </Form>
        </Formik>

    </>
}
export default AddComponent;