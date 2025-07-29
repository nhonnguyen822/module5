export const loginAction = (accountLogin) => {

    const checkLogin = async (accountLogin) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(accountLogin.username)
                if (accountLogin.username === "admin" && accountLogin.password === "123456") {
                    resolve({id: 1, username: "admin", role: "admin"});
                } else {
                    resolve(null);
                }
            }, 1000); // Giả lập delay 1s như đang gọi API
        });
    };

    return async (dispatch) => {
        const account = await checkLogin(accountLogin)
        if (account) {
            dispatch({
                type: "LOGIN",
                payload: account
            })
            return true;
        } else {
            dispatch({
                type: "FAIL",
                payload: null
            })
            return false;
        }
    }
}

export const logoutAction =()=>{
    return async (dispatch)=>{
        dispatch({
            type: "LOGOUT",
            payload: null
        });

    }
}