import {useEffect, useRef, useState} from "react";
import {findById, getAllStudent, searchByName} from "../service/student";
import {Link} from "react-router-dom";
import DeleteComponent from "./DeleteComponent";

const ListComponent = () => {
    const searchRef = useRef();
    const [studentList, setStudentList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [studentDelete, setStudentDelete] = useState({})
    useEffect(() => {
            const fetchData = async () => {
                const result = await getAllStudent();
                setStudentList(result);
            }
            fetchData();
        }, [ isShowModal]
    )

    const handleSearch = () => {
        let searchName = searchRef.current.value;
        const fetchData = async () => {
            const data = await searchByName(searchName);
            console.log(data)
            setStudentList(data);
        }
        fetchData();
    }

    const handleOpenModal = (s) => {
        setIsShowModal(pre => !pre)
        const fetchData = async () => {
            const data = await findById(s);
            setStudentDelete(data);
        }
        fetchData();
    }
    const handleCloseModal = () => {
        setIsShowModal(pre => !pre)
    }
    return <>
        <div>
            <h2> Quản Lý Sinh Viên</h2>
            <input ref={searchRef}/>
            <button onClick={handleSearch}>Search</button>
        </div>
        <div>
            <table className={'table table-hover table-striped'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map((s, index) => (
                    <tr key={s.id}>
                        <td>{index + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.subject.join(" ,")}</td>
                        <td>{s.classes?.name}</td>
                        <td>
                            <button className={"btn btn-danger btn-sm"} onClick={() => {
                                handleOpenModal(s.id)
                            }}>Delete
                            </button>
                            <Link className={"btn btn-success btn-sm"} to={`/student/detail/${s.id}`}>Detail</Link>
                            <Link className={"btn btn-success btn-sm"} to={`/student/update/${s.id}`}>Update</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent handleCloseModal={handleCloseModal}
                             isShowModal={isShowModal}
                             deleteStudent={studentDelete}/>
        </div>
    </>
}
export default ListComponent ;