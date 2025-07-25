import {Component} from "react";
import AddComponent from "./AddComponent";

class ListComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    handleCreateTodo = (currentTodo) => {
        if (currentTodo !== null) {
            this.setState((prevState) => ({
                todos: [...prevState.todos, currentTodo]
            }))
        }
    }

    handleDelete = (index) => {
        this.setState((prevState) => ({
            todos: this.state.todos.filter((todo, i) => {
                if (i !== index) {
                    return todo
                }
            })
        }))
    }

    render() {
        return <>
            <div style={{textAlign: "center", marginTop: "40px"}}>
                <h2>📝 ToDo App</h2>

                <AddComponent onCreate={this.handleCreateTodo}/>
                <ul style={{listStyleType: "none", padding: 0, marginTop: "30px"}}>
                    {this.state.todos.map((todo, index) => (
                        <li key={index} style={{marginBottom: "10px"}}>
                            {todo}
                            <button
                                onClick={() => this.handleDelete(index)}
                                style={{
                                    marginLeft: "15px",
                                    padding: "4px 8px",
                                    color: "white",
                                    backgroundColor: "red",
                                    border: "none",
                                    borderRadius: "4px",
                                    cursor: "pointer"
                                }}
                            >
                                Xóa
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    }
}

export default ListComponent;