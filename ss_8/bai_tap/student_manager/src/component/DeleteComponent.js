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
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có muốn xoá sinh viên {deleteStudent.name} không ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    OK
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
export default DeleteComponent;