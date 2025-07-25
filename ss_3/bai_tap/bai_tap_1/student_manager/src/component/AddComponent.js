import {Component} from "react";

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: {
                id: "",
                name: "",
                age: "",
                gender: "Nam",
            }
        }
    }

    handleOnChangeInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        this.setState(preState => (
            {
                student: {
                    ...preState.student,
                    [name]: value
                }
            }
        ))
    }

    handleAdd = () => {
        const newStudent = this.state.student;
        this.props.onCreate(newStudent)
        this.setState({
            student: {
                id: "",
                name: "",
                age: "",
                gender: "Nam"
            }
        })
    }

    render() {
        return <>
            <label htmlFor={"id"}> ID</label>
            <input name={"id"} id={"id"} onChange={this.handleOnChangeInput} value={this.state.student.id}/>
            <label htmlFor={"name"}> Name</label>
            <input name={"name"} id={"name"} onChange={this.handleOnChangeInput} value={this.state.student.name}/>
            <label htmlFor={"age"}> Age</label>
            <input name={"age"} id={"age"} onChange={this.handleOnChangeInput} value={this.state.student.age}/>
            <label htmlFor={"gender"}>Gender</label>
            <select name={"gender"} id={"gender"} onChange={this.handleOnChangeInput} value={this.state.student.gender}>
                <option value={"Nam"}>Nam</option>
                <option value={"Nu"}>Nu</option>
            </select>
            <button onClick={this.handleAdd}>Create</button>
        </>
    }
}

export default AddComponent;