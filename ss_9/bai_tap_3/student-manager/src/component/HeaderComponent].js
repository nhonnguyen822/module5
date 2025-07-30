import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={"btn btn-sm btn-secondary me-3"} to={"/customers"}>Home</Link>
                        <Link to={"/customers/add"} className={"btn btn-sm btn-secondary"}>Add</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}
export default HeaderComponent;