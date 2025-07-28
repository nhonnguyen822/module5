import {useEffect, useRef, useState} from "react";
import {findById, searchByName} from "../service/student";
import {Link} from "react-router-dom";
import DeleteComponent from "./DeleteComponent";
import {getAllClass} from "../service/classes";

const ListComponent = () => {
    const searchRef = useRef();
    const classRef = useRef();
    const [studentList, setStudentList] = useState([]);
    const [classList, setClassList] = useState([]);
    const [isShowModal, setIsShowModal] = useState(false);
    const [studentDelete, setStudentDelete] = useState({})
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [searchName, setSearchName] = useState("");
    useEffect(() => {
            const fetchData = async () => {
                const res = await searchByName(searchName, page);
                setStudentList(res.data);
                setTotalPage(Math.ceil(res.totalCount / 1))
            }
            fetchData();
        }, [isShowModal, page, searchName]
    )
    useEffect(() => {
        const fetClass = async () => {
            const res = await getAllClass()
            setClassList(res)
        }
        fetClass();
    }, []);

    const handleSearch = () => {
        let searchName = searchRef.current.value;
        setSearchName(searchName)
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
            <input ref={searchRef} placeholder={" enter student name"}/>
            <select rel={classRef}>
                <option value={""}> ...Select Class ...</option>
                {classList && classList.map(cls => (
                    <option value={cls.id}> {cls.name}</option>
                ))}
            </select>
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
            <div>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Trang trước</button>
                <span>Trang {page} / {totalPage}</span>
                <button disabled={page === totalPage} onClick={() => setPage(page + 1)}>Trang sau</button>
            </div>
            <DeleteComponent handleCloseModal={handleCloseModal}
                             isShowModal={isShowModal}
                             deleteStudent={studentDelete}/>
        </div>
    </>
}
export default ListComponent;