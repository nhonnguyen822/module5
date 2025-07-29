import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findStudentByUd} from "../service/students";

const DetailComponent = () => {
    const {id} = useParams();
    const [studentDetail, setStudentDetail] = useState({});

    useEffect(() => {
        const fetData = async () => {
            // const student=await findStudentByUd(id);
            // console.log(student)
            setStudentDetail(await findStudentByUd(id))

        }
        fetData();
    }, []);
    return <>
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow w-100" style={{maxWidth: "600px"}}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 text-primary">Thông Tin Sinh Viên</h3>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">ID:</div>
                        <div className="col-8">{studentDetail.id}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Product Name:</div>
                        <div className="col-8">{studentDetail.name}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Age:</div>
                        <div className="col-8">{studentDetail.age}</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Class:</div>
                        <div className="col-8">{studentDetail.class?.name || "Không có"}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default DetailComponent;