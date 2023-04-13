import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Image1 from '../../assets/images/image1.png'
import NavBarAuth from "../../components/NavBarAuth";
import { RegisterApi } from "../../services/auth.services";
import { useSelector } from "react-redux";

const Register = () => {
    const [data, setData] = useState({ first_name: '', last_name: '', email: '', password: '', cofirm_password: '' })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const IsLogin = useSelector(state => state.auth.IsLogin)

    useEffect(() => {
        if (IsLogin) navigate('/home')
    }, [])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const onSubmit = async () => {
        try {
            const res = await RegisterApi(data)
            alert(res.data.message)
            navigate("/auth/login")
        } catch (e) {
            setError(e?.response?.data?.message || 'Something went wrong')
        }
    }

    return (
        <>
            <div className="" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <NavBarAuth />
            </div>
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${Image1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: '#FFFFFF',
                fontSize: '20px',
                fontWeight: 'bold',
            }}>
                <div style={{
                    background: '#FFFFFF',
                    borderRadius: 10,
                    width: '400px',
                    height: '720px',
                    top: '50%',
                    left: '50%',
                    boxShadow: '0 0 40px rgba(8, 7, 16, 0.6)',
                    padding: '50px 35px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 10,
                }}>
                    <Form>
                        <h2 className="text-muted text-center">Register</h2>
                        <p className="text-danger text-center">{error}</p>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="email" placeholder="First name" name="first_name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="email" placeholder="Last name" name="last_name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="email" name="email" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="password" name="password" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm password" name="cofirm_password" onChange={handleChange} />
                        </Form.Group>
                        <div>
                            <Button className="button-with-hover" style={{
                                backgroundColor: '#15D155',
                                height: 50,
                                width: '100%',
                                border: 'none',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                color: '#FFFFFF',
                                fontWeight: 'bold',
                                fontSize: '20px',
                                boxShadow: '0 0 30px rgba(8, 7, 16, 0.6)',
                                marginTop: 20
                            }} onClick={onSubmit}>
                                Register
                            </Button>
                        </div>
                        <Form.Group className="mt-3">
                            <Form.Text>You have account ? </Form.Text>
                            <Form.Text>
                                <Link to="/auth/login">Sign in</Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </div >
        </>
    );
}

export default Register;