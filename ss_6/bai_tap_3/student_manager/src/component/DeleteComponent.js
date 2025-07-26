import {Button, Modal} from "react-bootstrap";
import {toast} from "react-toastify";
import {deleteById} from "../service/student";

const DeleteComponent = ({deleteStudent, isShowModal, handleCloseModal}) => {

    const handleDelete = () => {
        const fetchData = async () => {
            console.log(deleteStudent.id)
            await deleteById(deleteStudent.id);
            handleCloseModal(pre => !pre);
            toast.success("xoá thành công");
        }
        fetchData();
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