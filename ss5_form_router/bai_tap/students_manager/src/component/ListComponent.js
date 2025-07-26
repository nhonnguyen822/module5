import {useEffect, useState} from "react";
import {getAll} from "../service/student";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import DeleteComponent from "./DeleteComponent";


const ListComponent = () => {
    const [listStudent, setListStudent] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect
    (() => {
        setListStudent([...getAll()])
    }, [isLoading,isShowModal]);

    const handleOpenModal = (s) => {
        setIsShowModal(pre => !pre);
        setDeleteStudent(s)
    }
    const handleCloseModal = () => {
        setIsShowModal(pre => !pre);
    }


    return <>
        <table className={"table table-hover table-striped"}>
            <thead>
            <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Subject</th>
                <th>Class</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {listStudent && listStudent.map((s, i) =>
                (
                    <tr key={s.id}>
                        <td>{i + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.gender}</td>
                        <td>{s.subject.join(" , ")}</td>
                        <td>{s.classCG?.name}</td>
                        <td>
                            <button onClick={() => handleOpenModal(s)}>Delete</button>
                            <Link to={`/update/${s.id}`}>Update</Link>
                            <Link to={`/detail/${s.id}`}>Detail</Link>
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </table>
        <DeleteComponent deleteStudent={deleteStudent}
                         isShowModal={isShowModal}
                         handleCloseModal={handleCloseModal}
        />
    </>
}
export default ListComponent;