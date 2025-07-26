import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListComponent from "./component/ListComponent";
import HeadComponent from "./component/HeadComponent";
import AddComponent from "./component/AddComponent";
import {ToastContainer} from "react-toastify";
import DetailComponent from "./component/DetailComponent";
import UpdateComponent from "./component/UpdateComponent";

function App() {
    return (
        <div className="App">
            <HeadComponent/>
            <Routes>
                <Route path={"/student"} element={<ListComponent/>}/>
                <Route path={"/student/add"} element={<AddComponent/>}/>
                <Route path={"/student/detail/:id"} element={<DetailComponent/>}/>
                <Route path={"/student/update/:id"} element={<UpdateComponent/>}/>
            </Routes>
            <ToastContainer/>
        </div>
    );
}

export default App;
