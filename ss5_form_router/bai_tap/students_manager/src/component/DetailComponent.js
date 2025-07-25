import {useEffect, useState} from "react";
import {findById} from "../service/student";
import {useParams} from "react-router-dom";

const DetailComponent = () => {
    const {id} = useParams();
    const [student, setStudent] = useState({})
    useEffect(() => {
        const studentDetail = findById(id)
        setStudent(studentDetail)
    }, []);
    return <>
        <div className={"container mt-4"}>
            <h2 className={"mt-4"}>Thông tin sinh viên</h2>
        </div>
        <form className={"row g-3"}>
            <div className="col-md-6">
                <label className="form-label">ID</label>
                <input type="text" className="form-control" value={student.id || ""} disabled/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" value={student.name || ""} disabled/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Age</label>
                <input type="text" className="form-control" value={student.age || ""} disabled/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Gender</label>
                <input type="text" className="form-control" value={student.gender?'Nam':'Nữ'} disabled/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" value={student.subject||""} disabled/>
            </div>

            <div className="col-md-6">
                <label className="form-label">Class</label>
                <input type="text" className="form-control" value={student.classCG?.name ||""} disabled/>
            </div>
        </form>

    </>
}
export default DetailComponent;