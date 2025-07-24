import "bootstrap/dist/css/bootstrap.min.css"
import {Button, Modal} from "react-bootstrap";
import {deleteById, getAll} from "../service/student";

const DeleteComponent = ({handleCloseModal, isShowModal, deleteStudent}) => {

    const handleDelete = () => {
        const studentIdDelete = deleteStudent.id;
        deleteById(studentIdDelete);
        console.log(getAll())
        handleCloseModal();
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