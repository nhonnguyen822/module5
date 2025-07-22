import logo from './logo.svg';
import './App.css';
// import {products} from "./data/products.js";
import React from "react";

const products = [
    {name: 'but', price: 2000},
    {name: 'tap', price: 5000},
    {name: 'thuoc', price: 1000}
];

function App() {
    // return (
    //     <div className="App">
    //         {/*<header className="App-header">*/}
    //         {/*<img src={logo} className="App-logo" alt="logo"/>*/}
    //         <table border={1}>
    //             <thead>
    //             <tr>
    //                 <th>Name</th>
    //                 <th>Price</th>
    //             </tr>
    //             </thead>
    //             <tbody>
    //             {products.map((product, index) => {
    //                 return (
    //                     <tr key={index}>
    //                         <td>{product.name}</td>
    //                         <td>{product.price}</td>
    //                     </tr>
    //                 )
    //             })}
    //             </tbody>
    //         </table>
    //         {/*</header>*/}
    //     </div>
    // );
    return React.createElement("div", {className: "App"},
        React.createElement("table", {border: 1}, [
            React.createElement("thead", null,
                React.createElement("tr", null, [
                        React.createElement('td', {key:'name-header'}, 'Name'),
                        React.createElement('td', {key:'price-header'}, 'Price')
                    ]
                )),
            React.createElement("tbody", null,
                products.map((product, index) => {
                    return (
                        React.createElement("tr", {key:index}, [
                            React.createElement("td", {key:'name'}, product.name),
                            React.createElement("td", {key:'price'}, product.price)
                        ])
                    )
                })
            )
        ]))
}

export default App;
