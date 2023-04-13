import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import Image1 from '../../assets/images/image1.png'
import NavBarAuth from "../../components/NavBarAuth";
import { ForgetPasswordApi } from "../../services/auth.services";

const ForgotPassword = () => {
    const [data, setData] = useState({ email: '' })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const onSubmit = async () => {
        try {
            const res = await ForgetPasswordApi(data)
            alert(res.data.message)
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
                    height: '420px',
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
                        <h4 className="h1 text-muted text-center">Forgot password</h4>
                        <p className="text-danger text-center">{error}</p>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Email" name="email" onChange={handleChange} />
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
                                Send
                            </Button>
                        </div>
                        <Form.Group className="mt-3 d-flex justify-content-between">
                            <Form.Text>
                                <Link to="/auth/login">Sign in</Link>
                            </Form.Text>
                            <Form.Text>
                                <Link to="/auth/register">Sign up</Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </div >
        </>
    );
}

export default ForgotPassword;