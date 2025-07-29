import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./component/HeaderComponent";
import {Route, Routes} from "react-router-dom";
import ListComponent from "./component/ListComponent";
import AddComponent from "./component/AddComponent";
import {ToastContainer} from "react-toastify";
import DetailComponent from "./component/DetailComponent";
import UpdateComponent from "./component/UpdateComponent";
import Login from "./component/Login";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <Routes>
                <Route path={"/students"} element={<ListComponent/>}/>
                <Route path={"/students/add"} element={<AddComponent/>}/>
                <Route path={"/students/detail/:id"} element={<DetailComponent/>}/>
                <Route path={"/students/update/:id"} element={<UpdateComponent/>}/>
                <Route path={"/students/login"} element={<Login/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
