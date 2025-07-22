const FormDangNhap = () => {
    return <>
        <div className="bg-light d-flex justify-content-center align-items-center ">
            <div className="card shadow p-4" style={{width: "400px"}}>
                <h3 className="text-center mb-4">Đăng nhập</h3>
                <form>
                    <div className="mb-3 row">
                        <div className="col-3"><label htmlFor="email" className="form-label">Email:</label></div>
                        <div className="col-9"><input type="email" className="form-control" id="email"
                                                       placeholder="Nhập email" required/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="col-3"><label htmlFor="password" className="form-label">Password:</label>
                        </div>
                        <div className="col-9">
                            <input type="password" className="form-control" id="password"
                                                       placeholder="Nhập mật khẩu"
                                                       required/>
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="rememberMe"/>
                        <label className="form-check-label" htmlFor="rememberMe">Nhớ mật khẩu</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Đăng nhập</button>
                </form>
            </div>
        </div>
    </>
}
export default FormDangNhap;