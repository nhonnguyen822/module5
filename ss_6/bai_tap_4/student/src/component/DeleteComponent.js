import {Button, Modal} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {deleteProducts} from "../service/products";
import {toast} from "react-toastify";

const DeleteComponent = ({handleCloseModal, deleteProduct, isShowModal}) => {
    const navigate = useNavigate()
    const handleDelete = () => {
        const fetDelete = async () => {
            await deleteProducts(deleteProduct.id)
            handleCloseModal(pre => !pre)
            toast.success("delete success")
            navigate("/products")
        }
        fetDelete();
    }
    return <>
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Bạn có muốn xoá sinh viên {deleteProduct.name} không ?</Modal.Body>
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