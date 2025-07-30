import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListComponent from "./compoennt/ListComponent";
import HeadComponent from "./compoennt/HeadComponent";
import AddComponent from "./compoennt/AddComponent";
import {ToastContainer} from "react-toastify";
import DetailComponent from "./compoennt/DatailComponent";
import UpdateComponent from "./compoennt/UpdateComponent";

function App() {
    return (
        <div className="App">
            <HeadComponent/>
            <Routes>
                <Route path={"/products"} element={<ListComponent/>}/>
                <Route path={"/products/add"} element={<AddComponent/>}/>
                <Route path={"/products/detail/:id"} element={<DetailComponent/>}/>
                <Route path={"/products/update/:id"} element={<UpdateComponent/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
