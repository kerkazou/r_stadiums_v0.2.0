import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar expand="lg" style={{ width: '100%', height: '10vh', background: '#343A40', position: 'fixed', zIndex: 999 }}>
            <Container>
                {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#reservation">Reservation</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#about">About</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#gallery">Gallery</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="#contact">Contact</Nav.Link>
                        <Nav.Link style={{ color: '#FFFFFF' }} href="/auth/login">Login</Nav.Link>
                        {/* <Nav.Link href="#logout">Logout</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;