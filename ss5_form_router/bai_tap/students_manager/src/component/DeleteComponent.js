import {Button, Modal} from "react-bootstrap";
import {deleteById} from "../service/student";
import {toast} from "react-toastify";

const DeleteComponent = ({deleteStudent, isShowModal, handleCloseModal}) => {

    const handleDelete = () => {
        let studentList=deleteById(deleteStudent.id);
        console.log(studentList)
        handleCloseModal(pre =>!pre);
        toast.success("xoá thành công")
    };
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