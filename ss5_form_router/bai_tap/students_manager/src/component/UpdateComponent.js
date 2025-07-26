import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import {findAll} from "../service/class";
import {findById, save, update} from "../service/student";
import {toast} from "react-toastify";
import * as yup from "yup";
import {useNavigate, useParams} from "react-router-dom";

const UpdateComponent = () => {
    const {id} = useParams();

    const [student, setStudent] = useState(null);
    const [classList, setClasList] = useState([]);
    useEffect(() => {
        setClasList([...findAll()])
        const studentUpdate = findById(+id);
        setStudent(s => ({
            ...studentUpdate,
            classCG: JSON.stringify(studentUpdate.class)
        }))
    }, []);


    const navigate = useNavigate();

    const handleSubmit = (value) => {

        value = {
            ...value,
            classCG: JSON.parse(value.classCG)
        }
        update(value)
        toast.success("update thành công")
        navigate("/list")
    }


    const handleValidate = yup.object(
        {
            id: yup.string().required("vui lòng nhập student id"),
            name: yup.string().required("vui lòng nhập tên sinh viên").matches(/^(\p{Lu}\p{L}*)(\s(\p{Lu}\p{L}*))+$/u, "Tên phải viết hoa chữ cái đầu"),
            age: yup.number().min(18, "tuoi khong the nho hon 18").required("không được để trống"),
        }
    )
    return <>
        {student &&
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    <div>
                        <label>ID</label>
                        <Field name='id' type='text'/>
                        <ErrorMessage name='id' component={"div"} style={{color: "red"}}/>
                    </div>
                    <div>
                        <label>Name</label>
                        <Field name="name" type={'text'}/>
                        <ErrorMessage name={'name'} component={"div"} style={{color: "red"}}/>
                    </div>
                    <div>
                        <label>Age</label>
                        <Field name={'age'} type={'number'}/>
                        <ErrorMessage name={'age'} component={"div"} style={{color: "red"}}/>
                    </div>
                    <div>
                        <label>Subject</label>
                        <Field name={'subject'} type={'checkbox'} value={"JS"}/>JS
                        <Field name={"subject"} type={'checkbox'} value={'HTML'}/>HTML
                        <Field name={"subject"} type={'checkbox'} value={'CSS'}/>CSS
                        <ErrorMessage name={'subject'} component={"div"} style={{color: 'red'}}/>
                    </div>
                    <div>
                        <label>Class</label>
                        <Field name={'classCG'} as={'select'}>
                            {classList.map(cls =>
                                <option key={cls.id} value={JSON.stringify(cls)}>{cls.name}</option>
                            )}
                        </Field>
                    </div>
                    <button type="submit">Update</button>
                </Form>
            </Formik>
        }
    </>
}
export default UpdateComponent;