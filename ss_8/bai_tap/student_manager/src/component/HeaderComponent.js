import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "../store/store";
import {logoutAction} from "../action/loginAction";

const HeaderComponent = () => {
    const account = useSelector(state => state.login);
    const dispatch = useDispatch();
    const handelLogout = () => {
        dispatch(logoutAction())
    }
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className={"btn btn-sm btn-secondary me-3"} to={"students"}>Home</Link>
                        <Link to={"/students/add"} className={"btn btn-sm btn-secondary"}>Add</Link>
                        {!account && <Link to={"/login"}>Login</Link>}
                        <li className="nav-item">
                            <a className="nav-link text-danger ">{account?.username}</a>
                        </li>
                        <li className="nav-item">
                            {account && <button onClick={handelLogout} className="btn btn-link ">Logout</button>}
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Link to={"/students/login"} className={"btn btn-sm btn-secondary"}>Login</Link>

    </>
}
export default HeaderComponent;