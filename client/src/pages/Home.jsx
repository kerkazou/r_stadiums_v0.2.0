import React from "react";
import NavBar from '../components/NavBar';
import Header from "../components/Header";
import Reservation from "../components/Reservation";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div id="reservation" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0px 50px' }}>
            <div style={{height: 40}}></div>
                <Reservation />
            </div>
            <div id="about" className="mx-auto" style={{ width: '75%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: 100 }}></div>
                <div class="h1 text-center text-uppercase my-5">About Us</div>
                <About />
            </div>
            <div id="gallery">
                <div style={{ height: 100 }}></div>
                <Gallery />
            </div>
            <div id="contact" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ height: 100 }}></div>
                <div class="h1 text-center text-uppercase my-5">Contact Us</div>
                <Contact />
            </div>
            <div>
                <div style={{ height: 100 }}></div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;