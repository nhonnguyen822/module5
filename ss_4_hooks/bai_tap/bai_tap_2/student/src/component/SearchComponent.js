import {useRef, useState} from "react";
import {searchByName} from "../service/student";
import button from "bootstrap/js/src/button";

const SearchComponent = ({setStudentList}) => {
    const searchName = useRef("");
    const handleSearch = () => {
        let searchList = searchByName(searchName.current.value)
        setStudentList(searchList)
    }
    return <>
        <input ref={searchName}/>
        <button onClick={handleSearch}>Search</button>
    </>
}
export default SearchComponent;