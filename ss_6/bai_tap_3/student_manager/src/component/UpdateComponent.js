import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllClass} from "../service/classes";
import {addStudent, findById, updateStudent} from "../service/student";
import {toast} from "react-toastify";


const UpdateComponent = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [classList, setClasList] = useState([]);
    const [studentUpdate, setStudentUpdate] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllClass();
            setClasList(data);
            let student = await findById(id)
            student = {
                ...student,
                classes: JSON.stringify(student.classes)
            }
            setStudentUpdate(student)
        };
        fetchData();
    }, []);


    const handleValidate = yup.object({
        name: yup
            .string()
            .required("Vui lòng nhập tên")
            .matches(/^(\p{Lu}\p{L}*)(\s(\p{Lu}\p{L}*))+$/u, "Tên phải viết hoa chữ cái đầu mỗi từ"),
        age: yup
            .number()
            .required("Không được để trống")
            .min(18, "Tuổi phải từ 18 trở lên"),
        subject: yup
            .array()
            .min(1, "Phải chọn ít nhất một môn học"),
        classes: yup
            .string()
            .required("Vui lòng chọn lớp")
            .notOneOf([""], "Vui lòng chọn lớp")
    });

    const handleUpdate = (value) => {
        const fetchData = async () => {
            value = {
                ...value,
                classes: JSON.parse(value.classes)
            }
            const students = await updateStudent(id, value)
            console.log(students)
            toast.success("thay đổi thông tin thành công")
            navigate("/student")
        }
        fetchData();
    }

    return <>
        {studentUpdate &&
            <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
                <div className="card p-4 shadow w-100" style={{maxWidth: "600px"}}>
                    <h2 className="text-center mb-4">Cập Nhập Thông Tin Sinh Viên</h2>

                    <Formik initialValues={studentUpdate} onSubmit={handleUpdate} validationSchema={handleValidate}>
                        <Form>
                            {/* Họ và tên */}
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Họ và tên</label>
                                <div className="col-sm-8">
                                    <Field name="name" type="text" className="form-control"/>
                                    <ErrorMessage name="name" component="div" className="text-danger"/>
                                </div>
                            </div>

                            {/* Tuổi */}
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Tuổi</label>
                                <div className="col-sm-8">
                                    <Field name="age" type="number" className="form-control"/>
                                    <ErrorMessage name="age" component="div" className="text-danger"/>
                                </div>
                            </div>

                            {/* Môn học */}
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Môn học</label>
                                <div className="col-sm-8">
                                    <div className="form-check">
                                        <Field type="checkbox" name="subject" value="JS" className="form-check-input"
                                               id="js"/>
                                        <label className="form-check-label ms-2" htmlFor="js">JS</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="checkbox" name="subject" value="HTML" className="form-check-input"
                                               id="html"/>
                                        <label className="form-check-label ms-2" htmlFor="html">HTML</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="checkbox" name="subject" value="CSS" className="form-check-input"
                                               id="css"/>
                                        <label className="form-check-label ms-2" htmlFor="css">CSS</label>
                                    </div>
                                    <ErrorMessage name="subject" component="div" className="text-danger"/>
                                </div>
                            </div>

                            {/* Lớp học */}
                            <div className="row mb-3">
                                <label className="col-sm-4 col-form-label">Lớp học</label>
                                <div className="col-sm-8">
                                    <Field as="select" name="classes" className="form-select">
                                        <option value="">-- Chọn lớp --</option>
                                        {classList && classList.map(cls => (
                                            <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="classes" component="div" className="text-danger"/>
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