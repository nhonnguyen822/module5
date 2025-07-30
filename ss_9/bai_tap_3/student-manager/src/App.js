import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./component/HeaderComponent]";
import {Route, Routes} from "react-router-dom";
import ListComponent from "./component/ListComponent";
import AddComponent from "./component/AddComponent";
import DetailComponent from "./component/DetailComponent";
import UpdateComponent from "./component/UpdateComponent";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <Routes>
        <Route path={"customers"} element={<ListComponent/>}/>
        <Route path={"customers/add"} element={<AddComponent/>}/>
        <Route path={"customers/detail/:id"} element={<DetailComponent/>}/>
        <Route path={"customers/update/:id"} element={<UpdateComponent/>}/>
      </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
