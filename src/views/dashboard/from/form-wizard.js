import React,{useState} from 'react'
import {Container, Card, Row, Col, Image, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

// img
import image1 from '../../../assets/images/page-img/img-success.png'

const FormWizard = () => {
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
                                                        <Form.Control type="email" name="email" placeholder="wallet address..." />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Username: *</Form.Label>
                                                        <Form.Control type="text" name="uname" placeholder="UserName" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Password: *</Form.Label>
                                                        <Form.Control type="password" name="pwd" placeholder="Password" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Confirm Password: *</Form.Label>
                                                        <Form.Control type="password" name="cpwd" placeholder="Confirm Password" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Button variant="primary" name="next" className="next action-button float-end" value="Next" onClick={() => AccountShow('Account')} >Next</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Account' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <Row>
                                                <div className="col-7">
                                                    <h3 className="mb-4">Personal Information:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 2 - 4</h2>
                                                </div>
                                            </Row>
                                            <Row>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>First Name: *</Form.Label>
                                                        <Form.Control type="text" name="fname" placeholder="First Name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Last Name: *</Form.Label>
                                                        <Form.Control type="text" name="lname" placeholder="Last Name" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Contact No.: *</Form.Label>
                                                        <Form.Control type="text" name="phno" placeholder="Contact No." />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="form-group">
                                                        <Form.Label>Alternate Contact No.: *</Form.Label>
                                                        <Form.Control type="text" name="phno_2" placeholder="Alternate Contact No." />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                        <Button variant="primary" name="next" className="next action-button float-end" value="Next" onClick={() => AccountShow('Personal')} >Next</Button>
                                        <Button variant="dark" name="previous" className="previous action-button-previous float-end me-3" value="Previous" onClick={() => AccountShow('A')} >Previous</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Personal' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card text-start">
                                            <Row>
                                                <div className="col-7">
                                                    <h3 className="mb-4">Image Upload:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 3 - 4</h2>
                                                </div>
                                            </Row>
                                            <Form.Group className="form-group">
                                                <Form.Label>Upload Your Photo:</Form.Label>
                                                <Form.Control type="file" name="pic" accept="image/*"/>
                                            </Form.Group>
                                            <Form.Group className="form-group">
                                                <Form.Label>Upload Signature Photo:</Form.Label>
                                                <Form.Control type="file" name="pic-2" accept="image/*"/>
                                            </Form.Group>
                                        </div>
                                        <Button variant="primary" name="next" className="next action-button float-end" value="Submit" onClick={() => AccountShow('Image')}>Submit</Button>
                                        <Button variant="dark" name="previous" className="previous action-button-previous float-end me-3" value="Previous" onClick={() => AccountShow('Account')} >Previous</Button>
                                    </fieldset>
                                    <fieldset className={`${show === 'Image' ? 'd-block' : 'd-none'}`}>
                                        <div className="form-card">
                                            <Row>
                                                <div className="col-7">
                                                    <h3 className="mb-4 text-left">Finish:</h3>
                                                </div>
                                                <div className="col-5">
                                                    <h2 className="steps">Step 4 - 4</h2>
                                                </div>
                                            </Row>
                                            <br/><br/>
                                            <h2 className="text-success text-center"><strong>SUCCESS !</strong></h2>
                                            <br/>
                                            <Row className="justify-content-center">
                                                <div className="col-3"> 
                                                    <Image src={image1} className="img-fluid" alt="fit-image"/>
                                                </div>
                                            </Row>
                                            <br/><br/>
                                            <Row className="justify-content-center">
                                                <div className="col-7 text-center">
                                                    <h5 className="purple-text text-center">You Have Successfully Signed Up</h5>
                                                </div>
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
