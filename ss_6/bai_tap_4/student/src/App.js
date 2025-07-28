import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent";
import ListComponent from "./component/ListComponent";
import SaveComponent from "./component/SaveComponent";
import {ToastContainer} from "react-toastify";
import DetailComponent from "./component/DetailComponent";
import UpdateComponent from "./component/UpdateComponent";

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <Routes>
                <Route path={"/products"} element={<ListComponent/>}/>
                <Route path={"/products/add"} element={<SaveComponent/>}/>
                <Route path={"/products/detail/:id"} element={<DetailComponent/>}/>
                <Route path={"/products/update/:id"} element={<UpdateComponent/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
