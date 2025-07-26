import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return <>
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Link to="/student" className={"text-decoration-none  m-3"} style={{fontSize: '20px'}}>List</Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Link to="/add" className={"text-decoration-none m-3 "} style={{fontSize: '20px'}}>ADD</Link>
            </Nav.Item>
            {/*<Nav.Item as="li">*/}
            {/*    <Link to="/detail/:id" className={"text-decoration-none m-3"} style={{fontSize:'20px'}}>DETAIL</Link>*/}
            {/*</Nav.Item>*/}
        </Nav>
    </>
}
export default HeaderComponent;