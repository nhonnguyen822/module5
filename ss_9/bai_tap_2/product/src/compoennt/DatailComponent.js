import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {findProductById} from "../service/product";

const DetailComponent = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState({});
    useEffect(() => {
        const fetData = async () => {
            const res = await findProductById(id);
            setProductDetail(res)
        }
        fetData();
    }, []);
    return <>
        <div className="bg-light min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card shadow w-100" style={{maxWidth: "600px"}}>
                <div className="card-body">
                    <h3 className="card-title text-center mb-4 text-primary">Chi tiet san pham</h3>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">ID:</div>
                        <div className="col-8">{productDetail.id}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Product Name:</div>
                        <div className="col-8">{productDetail.name}</div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Price:</div>
                        <div className="col-8">{productDetail.price}</div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-4 fw-bold">Manufacture:</div>
                        <div className="col-8">{productDetail.manufacture?.name || "Không có"}</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default DetailComponent;