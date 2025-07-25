import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HeaderComponent from "./component/HeaderComponent";
import ListComponent from "./component/ListComponent";
import DetailComponent from "./component/DetailComponent";
import AddComponent from "./component/AddComponent"
import {ToastContainer} from "react-toastify";


function App() {
    return <>
        <HeaderComponent/>
        <Routes>
            <Route path={"/list"} element={<ListComponent/>}/>
            <Route path={"/add"} element={<AddComponent/>}/>
            <Route path={"/detail/:id"} element={<DetailComponent/>}/>
        </Routes>
        <ToastContainer/>
    </>
}

export default App;
