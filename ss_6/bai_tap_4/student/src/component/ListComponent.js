import {useEffect, useRef, useState} from "react";
import {getAllSearch} from "../service/products";
import {getAllManufacture} from "../service/manufacture";
import DeleteComponent from "./DeleteComponent";
import {Link} from "react-router-dom";

const ListComponent = () => {
    const searchRef = useRef();
    const manufactureRef = useRef();
    const [listProduct, setListProduct] = useState([]);
    const [listManufacture, setListManufacture] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchManufacture, setSearchManufacture] = useState("");
    const [isShowModal, setIdShowModal] = useState(false)
    const [deleteProduct, setDeleteProduct] = useState({});
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        const fetProduct = async () => {
            const manufactureList = await getAllManufacture()
            setListManufacture(manufactureList)
            const data = await getAllSearch(searchName, searchManufacture, page)
            setListProduct(data.productList)
            setTotalPage((Math.ceil(data.totalCount / 2)));
        }
        fetProduct()
    }, [searchName, searchManufacture, isShowModal,page]);

    const handleSearch = () => {
        setSearchName(searchRef.current.value)
        setSearchManufacture(manufactureRef.current.value)
    }

    const handleOpenModal = (s) => {
        setIdShowModal(pre => !pre);
        setDeleteProduct(s);
    }
    const handleCloseModal = (s) => {
        setIdShowModal(pre => !pre);
    }

    return <>
        <div className="row g-2 mb-3 w-50 m-2">
            <div className="col-md-4">
                <input
                    ref={searchRef}
                    placeholder="Enter product name"
                    className="form-control"
                />
            </div>

            <div className="col-md-4">
                <select ref={manufactureRef} className="form-select">
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
        <div>
            <table className={"table table-striped table-hover"}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Manufacture</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {listProduct?.map((p, i) => (
                    <tr key={p.id}>
                        <td>{i + 1}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>
                            {JSON.stringify(p.manufacture?.name)}
                        </td>
                        <td>
                            <button  className={"btn btn-sm btn-danger"}  onClick={() => {
                                handleOpenModal(p)
                            }}>DELETE
                            </button>
                            <Link  className={"btn btn-sm btn-primary"} to={`/products/detail/${p.id}`}>Detail</Link>
                            <Link className={"btn btn-sm btn-success"} to={`/products/update/${p.id}`}>Update</Link>
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