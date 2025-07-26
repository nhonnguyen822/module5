import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ListComponent from "./component/ListComponent";

function App() {
  return (
    <div className="App">
   <Routes>
     <Route path={"/student"} element={<ListComponent/>}/>
   </Routes>
    </div>
  );
}

export default App;
