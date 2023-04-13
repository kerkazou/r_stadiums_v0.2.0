import React from "react";
import { Button } from 'react-bootstrap';
import Image1 from '../assets/images/image1.png'

const Header = () => {
    return (
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
            <h1>Welcome To R-Stadium</h1>
            <h3>Easily find a stadium or a sports club in Morocco</h3>
            <Button className="button-with-hover" style={{
                backgroundColor: '#15D155',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 20px',
                marginTop: '20px',
                cursor: 'pointer',
                color: '#FFFFFF',
                fontSize: '20px',
                fontWeight: 'bold',
            }} href="#reservation">
                Look For A Stadium
            </Button>
        </div>
    );
}

export default Header;