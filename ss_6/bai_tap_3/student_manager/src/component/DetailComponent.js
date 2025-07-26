import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {findById} from "../service/student";

const DetailComponent = () => {
    const {id} = useParams();
    const [studentDetail, setStudentDetail] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const data = await findById(id)
            setStudentDetail(data);
        }
        fetchData()
    }, []);

    return (
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow w-100" style={{ maxWidth: "600px" }}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 text-primary">Thông Tin Học Sinh</h3>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">ID:</div>
                        <div className="col-8">{studentDetail.id}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Họ tên:</div>
                        <div className="col-8">{studentDetail.name}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Tuổi:</div>
                        <div className="col-8">{studentDetail.age}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Môn học:</div>
                        <div className="col-8">
                            {Array.isArray(studentDetail.subject)
                                ? studentDetail.subject.join(", ")
                                : studentDetail.subject}
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Lớp:</div>
                        <div className="col-8">{studentDetail.classes?.name || "Không có"}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailComponent;