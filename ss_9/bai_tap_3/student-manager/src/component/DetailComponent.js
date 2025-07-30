import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findCustomerById} from "../service/customers";

const DetailComponent = () => {
    const {id} = useParams();
    const [customerDetail, setCustomerDetail] = useState({});
    useEffect(() => {
        const fetDetail = async () => {
            const res = await findCustomerById(id);
            console.log(res)
            setCustomerDetail(res);
        }
        fetDetail()
    }, []);
    return <>
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow w-100" style={{maxWidth: "600px"}}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 text-primary">Chi tiet san pham</h3>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">ID:</div>
                        <div className="col-8">{customerDetail.id}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Product Name:</div>
                        <div className="col-8">{customerDetail.name}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Age</div>
                        <div className="col-8">{customerDetail.age}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Email</div>
                        <div className="col-8">{customerDetail.email}</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-4 fw-bold">BirthDay</div>
                        <div className="col-8">{customerDetail.birthDay}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Type Customer:</div>
                        <div className="col-8">{customerDetail.typeCustomer?.name || "Không có"}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default DetailComponent;