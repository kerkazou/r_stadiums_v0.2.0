import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Admin = () => {
    const navigate = useNavigate()
    const IsLogin = useSelector(state => state.auth.IsLogin)
    const role = useSelector(state => state.auth.role)

    useEffect(() => {
        if (!IsLogin) navigate('/auth/login')
        if (role !== 'Manager') navigate('/home')
    }, [])

    return (
        <div>Admin</div>
    )
}

export default Admin;