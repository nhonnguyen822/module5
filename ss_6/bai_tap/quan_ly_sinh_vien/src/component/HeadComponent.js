import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeadComponent = () => {
    return <>
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Link to="/list" className={"text-decoration-none "}>List</Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/add" className={"text-decoration-none "}>ADD</Link>
            </Nav.Item>
        </Nav>
    </>
}
export default HeadComponent;