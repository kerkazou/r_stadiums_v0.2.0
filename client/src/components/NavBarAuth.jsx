import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBarAuth = () => {
    return (
        <Navbar className='m-auto' expand="lg" style={{ width: '40%', height: '10vh', background: '#343A40', position: 'fixed', zIndex: 999, borderRadius: 8 }}>
            <Container>
                <Navbar.Brand style={{ color: '#FFFFFF' }} href="/home">R-Stadium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link style={{ color: '#FFFFFF' }} href="login">Sign in</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="register">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarAuth;