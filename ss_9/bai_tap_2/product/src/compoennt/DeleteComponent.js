import {Button, Modal} from "react-bootstrap";
import {deleteProductById} from "../service/product";
import {toast} from "react-toastify";

const DeleteComponent = ({deleteProduct, isShowModal, handleCloseModal}) => {

    const handleDelete = () => {
        const fetDelete = async () => {
            await deleteProductById(deleteProduct.id)
            handleCloseModal(pre => !pre);
            toast.success("delete success")
        }
        fetDelete()
    }
    return <>
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có muốn xoá sinh viên {deleteProduct?.name} không ?</Modal.Body>
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