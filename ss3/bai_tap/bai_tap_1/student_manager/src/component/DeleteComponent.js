import {Component} from "react";
import {Button, Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"

class DeleteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModal: false,
            deleteStudent: {
                id: 0,
                name: "",
                age: "",
                gender: "Nam",
            }

        }
    }

    closeModal = () => {
        this.setState({
            isModal: false
        })
    }

    openModal = () => {
        this.setState({
            isModal: true
        })
    }

    handleClose = () => {
        this.props.onDelete(this.props.student)
        this.closeModal()
    }

    render() {
        return <>
            {/*{console.log(this.state.deleteStudent)}*/}
            <button onClick={this.openModal}>Xóa</button>
            <Modal show={this.state.isModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xoá Sinh Viên</Modal.Title>
                </Modal.Header>
                <Modal.Body> Bạn có muốn xoá sinh viên :{this.props.student.name} không ? </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Cance
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    }
}

export default DeleteComponent;