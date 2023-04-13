import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutApi } from '../services/auth.services';
import { LOGOUT } from '../redux/counterSlice';

const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const IsLogin = useSelector(state => state.auth.IsLogin)

    const Logout = async () => {
        await LogoutApi()
        dispatch(LOGOUT())
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('role')
        navigate('/auth/login')
    }

    return (
        <Navbar expand="lg" style={{ width: '100%', height: '10vh', background: '#343A40', position: 'fixed', zIndex: 999 }}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#reservation">Reservation</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#about">About</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#gallery">Gallery</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#contact">Contact</Nav.Link>
                        {IsLogin
                            ?
                            <Nav.Link style={{ color: '#FFFFFF' }} onClick={Logout}>Logout</Nav.Link>
                            :
                            <Nav.Link style={{ color: '#FFFFFF' }} href="/auth/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;