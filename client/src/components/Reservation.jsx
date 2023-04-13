import React, { useEffect, useState } from "react";
import { Button, Form, Card } from 'react-bootstrap';
import Slider6 from '../assets/images/slider6.jpg'
import { GetSportsCategoryApi } from "../services";

const Reservation = () => {
    // const [SportsCategory, setSportsCategory] = useState([])
    // const GetSportsCategory = async () => {
    //     GetSportsCategoryApi()
    //         .then(res => {
    //             setSportsCategory(res.data)
    //         })
    // }
    // useEffect(() => {
    //     GetSportsCategory()
    // }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            {/* Menu Reservation */}
            <div className="d-md-flex justify-content-center align-items-center gap-3 shadow-sm py-3 px-3 mt-5 mb-5 bg-body rounded mx-auto" id="menu_stadium" style={{ width: '50%', }}>
                <Form.Select aria-label="Default select example" style={{ height: 50, width: 200 }}>
                    <option>All sports</option>
                    {/* {SportsCategory.map((e, i) => (
                        <option key={i} value={e.id}>{e.name}</option>
                    ))} */}
                </Form.Select>
                <Form.Select aria-label="Default select example" style={{ height: 50, width: 200 }}>
                    <option>All citys</option>
                    <option value="option1">City 1</option>
                    <option value="option2">City 2</option>
                    <option value="option3">City 3</option>
                </Form.Select>
                <div className="input-group">
                    <input type="text" id="name_stadium" className="form-control" placeholder="Name of stadium" style={{ height: 50 }} />
                    <span className="input-group-text"><i className="bi bi-search"></i></span>
                </div>
                <Button className="button-with-hover" style={{
                    backgroundColor: '#15D155',
                    height: 50,
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                }}>
                    Find
                </Button>
            </div>

            <div id="cards_stadium" class="flex-wrap gap-4 mx-auto" style={{ width: '80%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Slider6} />
                    <Card.Body>
                        <Card.Title>stadium name</Card.Title>
                        <Card.Text>
                            <div>stadium city</div>
                            <div>stadium sport</div>
                            <div>stadium site web</div>
                            <div>stadium location</div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button className="button-with-hover" style={{
                                    backgroundColor: '#15D155',
                                    height: 50,
                                    border: 'none',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    color: '#FFFFFF',
                                    fontWeight: 'bold',
                                }}>
                                    Reservation
                                </Button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Reservation;
