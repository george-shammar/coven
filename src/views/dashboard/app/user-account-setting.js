import React from 'react'
import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap'

const UserAccountSetting =() =>{
  return(
     <>
        <Container>
        <Row>
            <Col lg="6">
                <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Account Setting</h4>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="acc-edit">
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="uname" className="form-label">User Name:</Form.Label>
                                <Form.Control type="text" className="form-control" id="uname" defaultValue="Bni@01"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="email" className="form-label">Email Id:</Form.Label>
                                <Form.Control type="email" className="form-control" id="email" defaultValue="Bnijohn@gmail.com"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="altemail" className="form-label">Alternate Email:</Form.Label>
                                <Form.Control type="email" className="form-control" id="altemail" defaultValue="designtheme@gmail.com"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <Form.Label className="d-block form-label">Language Known:</Form.Label>
                                <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input type="checkbox" className="form-check-input" id="english" defaultChecked/>
                                    <Form.Check.Label className="form-check-label" htmlFor="english">English</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input type="checkbox" className="form-check-input" id="french" defaultChecked/>
                                    <Form.Check.Label className="form-check-label" htmlFor="french">French</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input type="checkbox" className="form-check-input" id="hindi"/>
                                    <Form.Check.Label className="form-check-label" htmlFor="hindi">Hindi</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input type="checkbox" className="form-check-input" id="spanish" defaultChecked/>
                                    <Form.Check.Label className="form-check-label" htmlFor="spanish">Spanish</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input type="checkbox" className="form-check-input" id="arabic"/>
                                    <Form.Check.Label className="form-check-label" htmlFor="arabic">Arabic</Form.Check.Label>
                                </Form.Check>
                                <Form.Check className="form-check form-check-inline">
                                    <Form.Check.Input type="checkbox" className="form-check-input" id="italian"/>
                                    <Form.Check.Label className="form-check-label" htmlFor="italian">Italian</Form.Check.Label>
                                </Form.Check>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                            <Button type="reset" className="btn bg-soft-danger">Cancel</Button>
                        </Form>
                    </div>
                </Card.Body>
                </Card>
            </Col>
            <Col lg="6">
                <Card>
                <Card.Header className="card-header d-flex justify-content-between">
                    <div className="header-title">
                        <h4 className="card-title">Social Media</h4>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div className="acc-edit">
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Label htmlFor="facebook" className="form-label">Facebook:</Form.Label>
                                <Form.Control type="text" className="form-control" id="facebook" defaultValue="www.facebook.com"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                            <Form.Label htmlFor="twitter" className="form-label">Twitter:</Form.Label>
                            <Form.Control type="text" className="form-control" id="twitter" defaultValue="www.twitter.com"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                            <Form.Label htmlFor="google" className="form-label">Google +:</Form.Label>
                            <Form.Control type="text" className="form-control" id="google" defaultValue="www.google.com"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                            <Form.Label htmlFor="instagram" className="form-label">Instagram:</Form.Label>
                            <Form.Control type="text" className="form-control" id="instagram" defaultValue="www.instagram.com"/>
                            </Form.Group>
                            <Form.Group className="form-group">
                            <Form.Label htmlFor="youtube" className="form-label">You Tube:</Form.Label>
                            <Form.Control type="text" className="form-control" id="youtube" defaultValue="www.youtube.com"/>
                            </Form.Group>
                            <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                            <Button type="reset" className="btn bg-soft-danger">Cancel</Button>
                        </Form>
                    </div>
                </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
     </>
  )

}

export default UserAccountSetting;