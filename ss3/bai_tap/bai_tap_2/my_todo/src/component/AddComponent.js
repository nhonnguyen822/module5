import {Component} from "react";

class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTodo: ""
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    handAddItem = () => {
        this.props.onCreate(this.state.currentTodo)
        this.setState({
            currentTodo: ""
        })
    }

    render() {
        return <>
            <input
                type="text"
                name="currentTodo"
                value={this.state.currentTodo}
                onChange={this.handleChange}
                placeholder="Nhập việc cần làm..."
                style={{padding: "8px", width: "200px"}}
            />
            <button
                onClick={this.handAddItem}
                style={{marginLeft: "10px", padding: "8px"}}
            >
                Thêm
            </button>
        </>
    }
}

export default AddComponent;