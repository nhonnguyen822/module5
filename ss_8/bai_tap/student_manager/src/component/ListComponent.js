import {useEffect, useRef, useState} from "react";
import {getSearchAll} from "../service/students";
import DeleteComponent from "./DeleteComponent";
import {Link} from "react-router-dom";
import {getAllClass} from "../service/classes";

const ListComponent = () => {
    const searchRef = useRef();
    const classRef = useRef();
    const [searchName, setSearchName] = useState("")
    const [searchClass, setSearchClass] = useState("")
    const [studentList, setStudentList] = useState([])
    const [isShowModal, setIsShowModal] = useState(false);
    const [deleteStudent, setDeleteStudent] = useState({})
    const [classList, setClasList] = useState([]);
    useEffect(() => {
        const fetStudents = async () => {
            const res = await getSearchAll(searchName,searchClass);
            setStudentList(res)
        }
        fetStudents();
    }, [studentList, isShowModal]);

    useEffect(() => {
        const fetClass = async () => {
            const classList = await getAllClass();
            setClasList(classList);
        }
        fetClass()
    }, []);


    const handleSearch = () => {
        setSearchName(searchRef.current.value);
        setSearchClass(classRef.current.value);
    }

    const handleOpenModal = (student) => {
        setDeleteStudent(student);
        setIsShowModal(pre => !pre);
    }

    const handleCloseModal = () => {
        setIsShowModal(pre => !pre);
    }
    return <>
        <div>
            <h2>Quan ly sinh vien</h2>
            <div className="row g-2 mb-3 w-50 m-2">
                <div className="col-md-4">
                    <input
                        ref={searchRef}
                        placeholder="Enter student name"
                        className="form-control"
                    />
                </div>

                <div className="col-md-4">
                    <select ref={classRef} className="form-select">
                        <option value="">...Select Class...</option>
                        {classList && classList.map(manu => (
                            <option key={manu.id} value={manu.id}>
                                {manu.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <button className="btn btn-primary w-100" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div>
            <table className={"table table-hover table-striped"}>
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
                {studentList && studentList.map((s, i) => (
                    <tr key={s.id}>
                        <td>{i + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.age}</td>
                        <td>{s.subject.join(", ")}</td>
                        <td>{JSON.stringify(s.class.name)}</td>
                        <td>
                            <button onClick={() => {
                                handleOpenModal(s)
                            }} className={'btn btn-danger btn-sm'}>Delete
                            </button>
                            <Link to={`/students/detail/${s.id}`} className={"btn btn-sm btn-primary"}>Detail</Link>
                            <Link to={`/students/update/${s.id}`} className={"btn btn-sm btn-secondary"}>Update</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent deleteStudent={deleteStudent}
                             isShowModal={isShowModal}
                             handleCloseModal={handleCloseModal}/>
        </div>
    </>
}
export default ListComponent;