import {useEffect, useState} from "react";
import {getAllStudent} from "../service/student";

const ListComponent = () => {
    const [studentList, setStudentList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await getAllStudent();
            setStudentList(result)
        }
        fetchData();

    }, []
)
    return <>
        <div>
            <h2> Quản Lý Sinh Viên</h2>
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
                        <td>{s.subject}</td>
                        <td>{s.classes?.name}</td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    </>
}
export default ListComponent;