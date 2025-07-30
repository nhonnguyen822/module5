import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const HeadComponent = () => {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={"btn btn-sm btn-secondary me-3"} to={"/products"}>Home</Link>
                        <Link to={"/products/add"} className={"btn btn-sm btn-secondary"}>Add</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}
export default HeadComponent;