import {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        }
    }


    handleSearch = (event) => {
        const searchName = event.target.value;
        {console.log(searchName)}
        this.props.handleSearch(searchName)
    }

    render() {
        return <>
            <input name={"search"} onChange={this.handleSearch}/>
        </>
    }
}

export default SearchComponent;