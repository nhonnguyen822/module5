import {Component} from "react";
import * as studentList from "react-bootstrap/ElementChildren";
import {getAll} from "../service/students";
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import SearchComponent from "./SearchComponent";

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: null
        }
    }

    componentDidMount() {
        this.setState({
            studentList: getAll()
        })
    }

    handleAddStudent = (newStudent) => {
        this.setState((prevState) => (
            {studentList: [...prevState.studentList, newStudent]}
        ))
    }

    handleDeleteStudent = (student) => {
        this.setState((prevState) => (
            {
                studentList: prevState.studentList.filter((s) => {
                    return s.id !== student.id
                })
            }
        ))
    }

    handleSearch = (searchName) => {
        const searchList = getAll().filter((s) => {
            if (s.name.toLowerCase().includes(searchName.toLowerCase())) {
                return s;
            }
        })
        this.setState((prevState) => ({
            ...prevState,
            studentList: searchList
        }))
    }


    render() {
        return <>
            <div className="container">
                <h2> Danh sach Sinh Vien</h2>
                <SearchComponent handleSearch={this.handleSearch}/>
                <div>
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.studentList && this.state.studentList.map((s, i) => (
                            <tr key={s.id}>
                                <td>{i + 1}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.gender}</td>
                                <td>
                                    <DeleteComponent student={s}
                                                     onDelete={() => {
                                                         this.handleDeleteStudent(s)
                                                     }}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <AddComponent onCreate={this.handleAddStudent}/>
            </div>
        </>
    }
}

export default ListComponent;