import {useEffect, useRef, useState} from "react";
import {getAll, searchByName} from "../service/student";
import AddComponent from "./AddComponent";
import "bootstrap/dist/css/bootstrap.min.css"
import DeleteComponent from "./DeleteComponent";
import SearchComponent from "./SearchComponent";

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState(false);
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        setStudentList([...getAll()])
    }, [isLoading, isShowModal])


    const handleShowModal = (student) => {
        setIsShowModal((prev) => !prev);
        setDeleteStudent(student)
    }

    const handleCloseModal = () => {
        setIsShowModal((prev) => !prev);
    }
    return <>
        <div>
            <h1>Quản Lý Sinh Viên</h1>
            <SearchComponent  setStudentList={setStudentList}/>
        </div>
        <div>
            <table className={"table table-striped table-hover"}>
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
                {studentList && studentList.map((s, index) => {
                    return (
                        <tr key={s.id}>
                            <td>{index + 1}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.gender}</td>
                            <td>
                                <button onClick={() => {
                                    handleShowModal(s)
                                }}>Delete
                                </button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        <AddComponent setIsLoading={setIsLoading} />

        <DeleteComponent deleteStudent={deleteStudent}
                         isShowModal={isShowModal}
                         handleCloseModal={handleCloseModal}/>
    </>
}
export default ListComponent;