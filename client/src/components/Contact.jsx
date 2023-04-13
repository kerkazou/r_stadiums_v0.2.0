import { Button } from 'react-bootstrap';


function Contact() {
    return (
        <div id="contact">
            <form method="POST" action="<?php echo URLROOT ;?>/contacts/sendMessage">
                <div class="row m-5 pt-5 d-flex justify-content-center align-items-center gap-3">
                    <div class="d-flex flex-column gap-4 col-md-5">
                        <div class="form-group">
                            <input class="form-control" name="username" type="text" placeholder="Your Name" style={{ height: 50 }} />
                        </div>
                        <div class="form-group">
                            <input class="form-control" name="email" type="email" placeholder="Your Email" style={{ height: 50 }} />
                        </div>
                        <div class="form-group mb-md-0">
                            <input class="form-control" name="phone" type="tel" placeholder="Your Phone" style={{ height: 50 }} />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea class="form-control" name="message" placeholder="Your Message..." style={{ minHeight: 200 }}></textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <Button className="button-with-hover" style={{
                        backgroundColor: '#15D155',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '10px 20px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        color: '#FFFFFF',
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}>
                        Send Message
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Contact;