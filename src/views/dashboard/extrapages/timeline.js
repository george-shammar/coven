import React from 'react'
import {Row, Col, Card, Container, Image} from 'react-bootstrap'
// import {Link} from 'react-router-dom'

//image
import img1 from '../../../assets/images/user/01.jpg'
import img2 from '../../../assets/images/user/02.jpg'
import img3 from '../../../assets/images/user/03.jpg'
import img4 from '../../../assets/images/user/07.jpg'
import img5 from '../../../assets/images/user/05.jpg'
import img6 from '../../../assets/images/user/06.jpg'
import { Link } from 'react-router-dom'

const Timeline = () => {
    return (
        <>
            <div id='content-page' className='content-page'>
            <Container>
                <Row className="justify-content-center">
                    <Col sm="12">
                        <Card className="position-relative inner-page-bg bg-primary" style={{height: "150px"}}>
                            <div className="inner-page-title">
                                <h3 className="text-white">Timeline Page</h3>
                                <p className="text-white">lorem ipsum</p>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Product Orders</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="iq-timeline ms-1">
                                    <li>
                                        <div className="timeline-dots"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="mb-1">Client Meeting</h6>
                                            <small>24 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-1">Scheduled Maintenance</h6>
                                        <small>23 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-1">Dev Meetup</h6>
                                        <small>20 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                        <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                        <div className="media-group">
                           <Link to="#" className="iq-media"><Image src={img1} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img2} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img3} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img4} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img5} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img6} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           </div>
                     </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-1">Client call</h6>
                        <small>19 November 2019</small>                                     
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"></div>
                                        <div className="d-flex align-items-center justify-content-between">                                    
                                        <h6 className="mb-1">Mega Event</h6>
                        <small>15 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"></div>
                                        <div className="d-flex align-items-center justify-content-between">  
                                        <h6 className="mb-1">Client call</h6>
                        <small>19 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"></div>
                                        <div className="d-flex align-items-center justify-content-between">  
                                        <h6 className="mb-1">Mega Event</h6>
                        <small>15 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"></div>
                                        <div className="d-flex align-items-center justify-content-between">  
                                        <h6 className="mb-1">Client call</h6>
                        <small>19 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Product Orders</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <ul className="iq-timeline ms-1">
                                    <li>
                                        <div className="timeline-dots"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h6 className="mb-1">Client Meeting</h6>
                                            <small>24 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-1">Scheduled Maintenance</h6>
                                        <small>23 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-1">Dev Meetup</h6>
                                        <small>20 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                        <p>Bonbon macaroon jelly beans <Link to="#">gummi bears</Link>gummi bears jelly lollipop apple</p>
                        <div className="media-group">
                           <Link to="#" className="iq-media"><Image src={img1} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img2} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img3} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img4} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img5} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           <Link to="#" className="iq-media"><Image src={img6} className="img-fluid avatar-40 rounded-circle" alt="img" /></Link>
                           </div>
                     </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"></div>
                                        <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-1">Client call</h6>
                        <small>19 November 2019</small>                                     
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"></div>
                                        <div className="d-flex align-items-center justify-content-between">                                    
                                        <h6 className="mb-1">Mega Event</h6>
                        <small>15 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"></div>
                                        <div className="d-flex align-items-center justify-content-between">  
                                        <h6 className="mb-1">Client call</h6>
                        <small>19 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"></div>
                                        <div className="d-flex align-items-center justify-content-between">  
                                        <h6 className="mb-1">Mega Event</h6>
                        <small>15 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-info"></div>
                                        <div className="d-flex align-items-center justify-content-between">  
                                        <h6 className="mb-1">Client call</h6>
                        <small>19 November 2019</small>
                                        </div>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
</div>
            </>
    )
}

export default Timeline
