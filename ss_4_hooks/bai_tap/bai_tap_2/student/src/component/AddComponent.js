import "bootstrap/dist/css/bootstrap.min.css"
import {useRef} from "react";
import {addStudent} from "../service/student";

const AddComponent = ({setIsLoading}) => {
    const formRef = useRef(null);
    const idRef = useRef(null);
    const nameRef = useRef(null);
    const ageRef = useRef(null);
    const genderRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        let student = {
            id: idRef.current.value,
            name: nameRef.current.value,
            age: ageRef.current.value,
            gender: genderRef.current.value
        }
        addStudent(student)
        setIsLoading(prev => !prev)
        formRef.current.reset();
    }
    return (
        <div className="container mt-4">
            <h3 className="mb-4">Thông tin người dùng</h3>
            <form className="row g-3" ref={formRef}>
                <div className="col-md-6">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input ref={idRef} type="text" className="form-control" id="id"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={nameRef} type="text" className="form-control" id="name"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input ref={ageRef} type="number" className="form-control" id="age"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select ref={genderRef} id="gender" className="form-select">
                        <option value="">--Chọn giới tính--</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddComponent;