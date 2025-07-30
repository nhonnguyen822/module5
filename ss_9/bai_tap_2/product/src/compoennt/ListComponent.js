import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {getAllSearchProduct} from "../service/product";
import DeleteComponent from "./DeleteComponent";
import {getAllManufacture} from "../service/manufacture";

const ListComponent = () => {
    const searchRef = useRef();
    const manufactureIdSearchRef = useRef();
    const [listProduct, setListProduct] = useState([]);
    const [listManufacture, setListManufacture] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [manufactureIdSearch, setManufactureIdSearch] = useState("");
    const [deleteProduct, setDeleteProduct] = useState({});
    const [isShowModal, setIsShowModal] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);


    useEffect(() => {
        const fetData = async () => {
            const res = await getAllSearchProduct(searchName, manufactureIdSearch,page)
            setListProduct(res.data)
            setTotalPage(Math.ceil(res.totalCount/2))
        }
        fetData();
    }, [searchName, isShowModal, manufactureIdSearch,page]);

    useEffect(() => {
        const fetData = async () => {
            const res = await getAllManufacture()
            setListManufacture(res)
        }
        fetData();
    }, [searchName, isShowModal]);


    const handleSearch = () => {
        setSearchName(searchRef.current.value)
        setManufactureIdSearch(manufactureIdSearchRef.current.value)
    }

    const handleOpenModal = (product) => {
        setDeleteProduct(product);
        setIsShowModal(pre => !pre);
    }

    const handleCloseModal = (product) => {
        setIsShowModal(pre => !pre);
    }

    return <>
        <div>
            <h2>Quan ly san pham</h2>
            <div className="row g-2 mb-3 w-50 m-2">
                <div className="col-md-4">
                    <input
                        ref={searchRef}
                        placeholder="Enter student name"
                        className="form-control"
                    />
                </div>
                <div className="col-md-4">
                    <select ref={manufactureIdSearchRef} className="form-select">
                        <option value="">...Select Class...</option>
                        {listManufacture && listManufacture.map(manu => (
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
                    <th>Price</th>
                    <th>DateOfManufacture</th>
                    <th>Manufacture</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listProduct && listProduct.map((p, i) => (
                    <tr key={p.id}>
                        <td>{i + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td> {new Date(p.dateOfManufacture).toLocaleDateString("vi-VN")}</td>
                        <td>{JSON.stringify(p.manufacture.name)}</td>
                        <td>
                            <button onClick={() => {
                                handleOpenModal(p)
                            }} className={'btn btn-danger btn-sm'}>Delete
                            </button>
                            <Link to={`/products/detail/${p.id}`} className={"btn btn-sm btn-primary"}>Detail</Link>
                            <Link to={`/products/update/${p.id}`} className={"btn btn-sm btn-secondary"}>Update</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div>
                <button className={"btn btn-sm btn-secondary"} disabled={page === 1} onClick={() => setPage(page - 1)}>Trang trước</button>
                <span>Trang {page} / {totalPage}</span>
                <button className={"btn btn-sm btn-secondary"} disabled={page === totalPage} onClick={() => setPage(page + 1)}>Trang sau</button>
            </div>

            <DeleteComponent deleteProduct={deleteProduct}
                             isShowModal={isShowModal}
                             handleCloseModal={handleCloseModal}/>
        </div>
    </>
}
export default ListComponent;
