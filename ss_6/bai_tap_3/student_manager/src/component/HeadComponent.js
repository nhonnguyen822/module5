import {Nav} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const HeadComponent = () => {
    const location = useLocation();
    return (
        <Nav
            variant="tabs"
            defaultActiveKey="/student"
            activeKey={location.pathname}
            className="justify-content-center mb-4"
        >
            <Nav.Item>
                <Nav.Link as={Link} to="/student" eventKey="/student" className="text-dark">
                    Danh sách sinh viên
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/student/add" eventKey="/student/add" className="text-dark">
                    Thêm sinh viên
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
export default HeadComponent;