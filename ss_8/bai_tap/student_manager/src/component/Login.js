import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {loginAction} from "../action/loginAction";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = async (value) => {
        console.log(value)
        const status = await dispatch(loginAction(value));
        if (status) {
            navigate("/students")
            toast("Đăng nhập thành công");
        } else {
            toast("đăng nhập thất bại");
        }
    }
    return <>
        <h3>Login</h3>
        <Formik initialValues={{
            username: "",
            password: ""
        }} onSubmit={handleLogin}>
            <Form>
                <Field type={'text'} name={'username'} placeholder={'username'}/>
                <Field type={'password'} name={'password'} placeholder={'password'}/>
                <button type={'submit'}>Login</button>
            </Form>
        </Formik>
    </>
}
export default Login;