import './App.css';
import {cities} from "./data/city.js"
import React from "react";
// <div className="App">
//
// </div>
function App() {
    return React.createElement("div", {className: 'App'},
        React.createElement("table", {border: 1}, [
                React.createElement("thead", null,
                    React.createElement("tr"), null, [
                        React.createElement('th', null, 'Name'),
                        React.createElement('th', null, 'Region'),
                        React.createElement('th', null, 'Population'),
                    ]
                ),
                React.createElement("tbody", null,
                    cities.map((city, index) => {
                        return (React.createElement("tr", {key: index}, [
                            React.createElement("td", null, city.name),
                            React.createElement("td", null, city.region),
                            React.createElement("td", null, city.population)
                        ]))
                    }))
            ]
        )
    )
}

// name: "Hà Nội",
//     region: "Miền Bắc",
//     population: 8960000,
//     isCapital: true

export default App;
