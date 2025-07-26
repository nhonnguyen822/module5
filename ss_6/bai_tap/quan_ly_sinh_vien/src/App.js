import logo from './logo.svg';
import './App.css';
import ListComponent from "./component/ListComponent";
import {Route, Routes} from "react-router-dom";
import HeadComponent from "./component/HeadComponent";

function App() {
    return (
        <div className="App">
            <HeadComponent/>
            {/*<Routes>*/}
            {/*    <Route path={"/student"} element={<ListComponent/>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default App;
