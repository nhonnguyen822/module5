// import logo from './logo.svg';
import './App.css';
import {students} from "./data/student"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
    // return (
    //   <div className="App">
    //   <table border={1} className="table table-striped table-hover">
    //     <thead>
    //     <tr>
    //       <th>ID</th>
    //       <th>Name</th>
    //       <th>Age</th>
    //       <th>Gender</th>
    //       <th>Email</th>
    //       <th>Address</th>
    //     </tr>
    //     </thead>
    //     <tbody>
    //     {students.map((student,index)=>{
    //       return(
    //           <tr key={index}>
    //             <td>{student.id}</td>
    //             <td>{student.name}</td>
    //             <td>{student.age}</td>
    //             <td>{student.gender}</td>
    //             <td>{student.email}</td>
    //             <td>{student.address}</td>
    //           </tr>
    //       )
    //     })}
    //     </tbody>
    //   </table>
    //   </div>
    // );

    return React.createElement("div", {className: 'App'},
        React.createElement("table", {className: "table table-striped table-hover"}, [
            React.createElement("thead", null,
                React.createElement('tr', null, [
                    React.createElement("th", null, 'ID'),
                    React.createElement("th", null, 'Name'),
                    React.createElement("th", null, 'Age'),
                    React.createElement("th", null, 'Gender'),
                    React.createElement("th", null, 'Email'),
                    React.createElement("th", null, 'Address')
                    ]
                ),),
            React.createElement("tbody",null,
                students.map((student,index)=>{
                    return(
                        React.createElement("tr",{key:index},[
                            React.createElement("td",null,student.id),
                            React.createElement("td",null,student.name),
                            React.createElement("td",null,student.age),
                            React.createElement("td",null,student.gender),
                            React.createElement("td",null,student.email),
                            React.createElement("td",null,student.address)
                        ])
                    )
                }))
        ])
    )
}

// id: 1,
//     name: "Nguyen Van A",
//     age: 16,
//     gender: "Nam",
//     email: "a.nguyen@example.com",
//     address: "Hà Nội"

export default App;
