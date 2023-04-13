import Accordion from 'react-bootstrap/Accordion';

function About() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header> NOTRE OFFRE </Accordion.Header>
                <Accordion.Body>
                    <div class="d-flex flex-wrap justify-content-center align-items-center gap-5">
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-3 shadow-sm">
                            <i class="fas fa-street-view icon"></i>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">The largest sports booking website in Morocco :</h5>
                                <p class="card-text">
                                    R-Staduim lists several sports centers in Morocco. Find the sports activity of your choice in your region :
                                </p>
                                <div>
                                    <p class="btn btn-link text-info">Marrackech</p>
                                    <p class="btn btn-link text-info">Youssoufia</p>
                                    <p class="btn btn-link text-info">Safi</p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-3 shadow-sm">
                            <i class="fas fa-volleyball-ball icon"></i>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">An unrivaled choice of sports activities :</h5>
                                <p class="card-text">R-Stadium offers as many sports as possible: from football to bascketball, from tennis.</p>
                                <div>
                                    <p class="btn btn-link text-info">Football</p>
                                    <p class="btn btn-link text-info">Basketball</p>
                                    <p class="btn btn-link text-info">Tennis</p>
                                    <p class="btn btn-link text-info">Fitness</p>
                                </div>
                            </div>
                        </div>
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-3 shadow-sm">
                            <i class="fa-solid fa-bolt icon"></i>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Simple & instant online booking :</h5>
                                <p class="card-text">
                                    Check the availability of your activity in real time and book instantly online, 24/7, without ever moving around or picking up the phone.
                                    Our planning tool allows you to align your calendar with that of your colleagues to organize sports after-works with ease and conviviality.
                                </p>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>NOS SERVICES</Accordion.Header>
                <Accordion.Body>
                    <div class="d-flex flex-wrap justify-content-center align-items-center gap-5">
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-5 shadow-sm">
                            <div class="icon"><i class="fas fa-map-marked-alt my-2"></i></div>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Sports Directory</h5>
                                <p class="card-text">
                                    Add your club to our directory for free so that our users can discover your infrastructure and services.
                                </p>
                            </div>
                        </div>
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-5 shadow-sm">
                            <div class="icon"><i class="fas fa-calendar-check my-2"></i></div>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Online booking</h5>
                                <p class="card-text">
                                    Receive reservations 24/7. Athletes can book your services at any time and pay online.
                                </p>
                            </div>
                        </div>
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-5 shadow-sm">
                            <div class="icon"><i class="fas fa-drafting-compass my-2"></i></div>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Management software</h5>
                                <p class="card-text">
                                    We have developed tools for sports centers to efficiently manage their reservations and resources.
                                </p>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>VOS AVANTAGES</Accordion.Header>
                <Accordion.Body>
                    <div class="d-flex flex-wrap justify-content-center align-items-center gap-5">
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-5 shadow-sm">
                            <div class="icon"><i class="fa-solid fa-bullhorn my-2"></i></div>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Increase your visibility</h5>
                                <p class="card-text">
                                    Your land and services will be distributed to a large number of users.
                                </p>
                            </div>
                        </div>
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-5 shadow-sm">
                            <div class="icon"><i class="fas fa-coins my-2"></i></div>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Make your infrastructure profitable</h5>
                                <p class="card-text">
                                    Optimize your occupancy rate with new customers, eliminating gaps in your schedule, reducing cancellations.
                                </p>
                            </div>
                        </div>
                        <div class="card col-xl-3 col-md-5 col-sm-8 col-11 text-center border-0 h-100 py-5 shadow-sm">
                            <div class="icon"><i class="fas fa-hand-holding-usd my-2"></i></div>
                            <div class="card-body my-0 my-sm-4 p-2 p-sm-3">
                                <h5 class="card-title">Customer acquisition</h5>
                                <p class="card-text">
                                    Our mission is to fulfill your infrastructure and reservations through our sales channels and online presence.
                                </p>
                            </div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default About;