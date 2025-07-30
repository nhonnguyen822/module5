import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {getAllTypeCustomer} from "../service/type_customer";
import {getAllSearchCustomers} from "../service/customers";
import DeleteComponent from "./DeleteComponent";

const ListComponent = () => {
    const searchRef = useRef();
    const typeCustomerIdSearchRef = useRef();
    const [searchName, setSearchName] = useState("");
    const [searchTypeCustomerID, setSearchTypeCustomerID] = useState("");
    const [customerList, setCustomerList] = useState([]);
    const [typeCustomerList, setTypeCustomerList] = useState([]);
    const [deleteCustomer, setDeleteCustomer] = useState({})
    const [isShowModal, setIsShowModal] = useState(false);

    useEffect(() => {
        const fetData = async () => {
            const res = await getAllTypeCustomer();
            setTypeCustomerList(res);
        }
        fetData();
    }, []);

    useEffect(() => {
        const fetData = async () => {
            const res = await getAllSearchCustomers(searchName, searchTypeCustomerID);
            setCustomerList(res);
        }
        fetData();
    }, [searchName, searchTypeCustomerID]);


    const handleOpenModal = (cus) => {
        setDeleteCustomer(cus)
        setIsShowModal(pre => !pre);
    }

    const handleCloseModal = (cus) => {
        setDeleteCustomer(cus)
        setIsShowModal(pre => !pre);
    }
    const handleSearch = () => {
        setSearchName(searchRef.current.value)
        setSearchTypeCustomerID(typeCustomerIdSearchRef.current.value)
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
                    <select ref={typeCustomerIdSearchRef} className="form-select">
                        <option value="">...Select Class...</option>
                        {typeCustomerList && typeCustomerList.map(cusType => (
                            <option key={cusType.id} value={cusType.id}>
                                {cusType.name}
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
                    <th>Email</th>
                    <th>BirthDay</th>
                    <th>TypeCustomer</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {customerList && customerList.map((cus, i) => (
                    <tr key={cus.id}>
                        <td>{i + 1}</td>
                        <td>{cus.name}</td>
                        <td>{cus.age}</td>
                        <td>{cus.email}</td>
                        <td> {new Date(cus.birthDay).toLocaleDateString("vi-VN")}</td>
                        <td>{JSON.stringify(cus.typeCustomer.name)}</td>
                        <td>
                            <button onClick={() => {
                                handleOpenModal(cus)
                            }} className={'btn btn-danger btn-sm'}>Delete
                            </button>
                            <Link to={`/customers/detail/${cus.id}`} className={"btn btn-sm btn-primary"}>Detail</Link>
                            <Link to={`/customers/update/${cus.id}`} className={"btn btn-sm btn-secondary"}>Update</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <DeleteComponent deleteCustomer={deleteCustomer}
                             isShowModal={isShowModal}
                             handleCloseModal={handleCloseModal}/>
        </div>
    </>
}

export default ListComponent;