import {Button, Modal} from "react-bootstrap";
import {deleteCustomerById} from "../service/customers";
import {toast} from "react-toastify";

const DeleteComponent = ({deleteCustomer, isShowModal, handleCloseModal}) => {

    const handleDelete = () => {
        const fetDelete = async () => {
            await deleteCustomerById(deleteCustomer.id);
            toast.success("delete success");
            handleCloseModal(pre => !pre);
        }
        fetDelete();
    }
    return <>
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có muốn xoá sinh viên {deleteCustomer?.name} không ?</Modal.Body>
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