import {Button, Modal} from "react-bootstrap";
import {deleteStudents} from "../service/students";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const DeleteComponent = ({deleteStudent,isShowModal,handleCloseModal}) => {
    const navigate = useNavigate();
    const handleDelete = () => {
        const fetDelete = async () => {
            await deleteStudents(deleteStudent.id)
            handleCloseModal(pre=>pre)
            toast.success("delete success")
            navigate("/students")
        }
        fetDelete();
    }
    return <>
    '/'
    </>
}
export default DeleteComponent;