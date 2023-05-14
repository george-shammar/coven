import React,{useState} from 'react'
import {Container, Card, Row, Col, Image, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

// img
import image1 from '../../../assets/images/page-img/img-success.png'

const FormWizard = ({walletAddress}) => {
    const [show, AccountShow] = useState('A');
    return (
        <>
        <div id='content-page' className='content-page'>
            <Container>
                <Row>
                    {/* <Col sm="12">
                        <Card className="position-relative inner-page-bg bg-primary" style={{height: "150px"}}>
                            <div className="inner-page-title">
                                <h3 className="text-white">Simple Wizard Page</h3>
                                <p className="text-white">lorem ipsum</p>
                            </div>
                        </Card>
                    </Col> */}
                    <Col sm="12" lg="12">
                        <Card>
                            <Card.Header className="d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">A new way to register..</h4>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Form id="form-wizard1" className="text-center mt-3">
                                   
                                    <fieldset className={`${show === 'A' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                           
                                            <Row>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Wallet Address: *</Form.Label>
                                                        <Form.Control type="email" name="email" placeholder={walletAddress} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Profile Handle: *</Form.Label>
                                                        <Form.Control type="text" name="uname" placeholder="UserName" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Image: *</Form.Label>
                                                        <Form.Control type="file" name="pic" accept="image/*"/>
                                                    </Form.Group>
                                                </Col>
                                                {/* <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Confirm Password: *</Form.Label>
                                                        <Form.Control type="password" name="cpwd" placeholder="Confirm Password" />
                                                    </Form.Group>
                                                </Col> */}
                                            </Row>
                                        </div>
                                       
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}

export default FormWizard
