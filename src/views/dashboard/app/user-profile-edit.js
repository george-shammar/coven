import React from 'react'
import {Container, Row, Col, Card, Tab, Form, Button, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

//image
import img1 from '../../../assets/images/user/11.png'

const UserProfileEdit =() =>{
  return(
      <>
        <Container>
            <Tab.Container defaultActiveKey="first">
          <Row>
              <Col lg="12">
                  <Card>
                      <Card.Body className="p-0">
                          <div>
                              <Nav as="ul" variant="pills" className="iq-edit-profile row">
                                  <Nav.Item as="li" className="col-md-3 p-0">
                                      <Nav.Link  eventKey="first" role="button">
                                          Personal Information
                                      </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item as="li" className="col-md-3 p-0">
                                      <Nav.Link eventKey="second" role="button">
                                          Change Password
                                      </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item as="li" className="col-md-3 p-0">
                                      <Nav.Link  eventKey="third" role="button">
                                          Email and SMS
                                      </Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item as="li" className="col-md-3 p-0">
                                      <Nav.Link eventKey="fourth" role="button">
                                          Manage Contact
                                      </Nav.Link>
                                  </Nav.Item>
                              </Nav>
                          </div>
                      </Card.Body>
                  </Card>
              </Col>
              <Col lg={12}>
                  {/* <div className="iq-edit-list-data"> */}
                      <Tab.Content>
                          <Tab.Pane eventKey="first" className="fade show">
                              <Card>
                                  <Card.Header className="d-flex justify-content-between">
                                      <div className="header-title">
                                          <h4 className="card-title">Personal Information</h4>
                                      </div>
                                  </Card.Header>
                                  <Card.Body>
                                      <Form>
                                          <Form.Group className="form-group align-items-center">
                                              <Col md="12">
                                                  <div className="profile-img-edit">
                                                    <img className="profile-pic" src={img1} alt="profile-pic"/>
                                                    <div className="p-image">
                                                        <i className="ri-pencil-line upload-button text-white"></i>
                                                        <input className="file-upload" type="file" accept="image/*"/>
                                                    </div>
                                                  </div>
                                              </Col>
                                          </Form.Group>
                                          <Row className="align-items-center">
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label htmlFor="fname"  className="form-label">First Name:</Form.Label>
                                                  <Form.Control type="text" className="form-control" id="fname" placeholder="Bni"/>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label htmlFor="lname" className="form-label">Last Name:</Form.Label>
                                                  <Form.Control type="text" className="form-control" id="lname" placeholder="Jhon"/>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label htmlFor="uname" className="form-label">User Name:</Form.Label>
                                                  <Form.Control type="text" className="form-control" id="uname" placeholder="Bni@01"/>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label htmlFor="cname" className="form-label">City:</Form.Label>
                                                  <Form.Control type="text" className="form-control" id="cname" placeholder="Atlanta"/>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label className="form-label d-block">Gender:</Form.Label>
                                                  <Form.Check className="form-check form-check-inline">
                                                      <Form.Check.Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio10" defaultValue="option1"/>
                                                      <Form.Check.Label className="form-check-label" htmlFor="inlineRadio10"> Male</Form.Check.Label>
                                                  </Form.Check>
                                                  <Form.Check className="form-check form-check-inline">
                                                      <Form.Check.Input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio11" defaultValue="option1"/>
                                                      <Form.Check.Label className="form-check-label" htmlFor="inlineRadio11">Female</Form.Check.Label>
                                                  </Form.Check>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label htmlFor="dob" className="form-label">Date Of Birth:</Form.Label>
                                                  <Form.Control className="form-control" id="dob" placeholder="1984-01-24"/>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label className="form-label">Marital Status:</Form.Label>
                                                  <Form.Select defaultValue="Single" className="form-select" aria-label="Default select example">
                                                      <option>Single</option>
                                                      <option>Married</option>
                                                      <option>Widowed</option>
                                                      <option>Divorced</option>
                                                      <option>Separated </option>
                                                  </Form.Select>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label className="form-label">Age:</Form.Label>
                                                  <Form.Select className="form-select" aria-label="Default select example 2">
                                                  <option>46-62</option>
                                                  <option>63 </option>
                                                  </Form.Select>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label  className="form-label">Country:</Form.Label>
                                                  <Form.Select defaultValue="USA"  className="form-select" aria-label="Default select example 3">
                                                  <option>Caneda</option>
                                                  <option>Noida</option>
                                                  <option>USA</option>
                                                  <option>India</option>
                                                  <option>Africa</option>
                                                  </Form.Select>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-6">
                                                  <Form.Label className="form-label">State:</Form.Label>
                                                  <Form.Select defaultValue="Georgia" className="form-select" aria-label="Default select example 4">
                                                      <option>California</option>
                                                      <option>Florida</option>
                                                      <option>Georgia</option>
                                                      <option>Connecticut</option>
                                                      <option>Louisiana</option>
                                                  </Form.Select>
                                              </Form.Group>
                                              <Form.Group className="form-group col-sm-12">
                                                  <Form.Label className="form-label">Address:</Form.Label>
                                                  <Form.Control as="textarea" className="form-control" rows={5} style={{lineHeight: "22px"}} placeholder=" 37 Cardinal Lane
                                                  Petersburg, VA 23803
                                                  United States of America
                                                  Zip Code: 85001">
                                                  </Form.Control>
                                              </Form.Group>
                                          </Row>
                                          <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                          <Button type="reset" className="btn bg-soft-danger">Cancel</Button>
                                      </Form>
                                  </Card.Body>
                              </Card>
                          </Tab.Pane>
                          <Tab.Pane eventKey="second" className="fade show">
                              <Card>
                                  <Card.Header className="d-flex justify-content-between">
                                  <div className="iq-header-title">
                                      <h4 className="card-title">Change Password</h4>
                                  </div>
                                  </Card.Header>
                                  <Card.Body>
                                    <Form>
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="cpass" className="form-label">Current Password:</Form.Label>
                                            <Link to="#" className="float-end">Forgot Password</Link>
                                            <Form.Control type="Password" className="form-control" id="cpass" defaultValue=""/>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="npass" className="form-label">New Password:</Form.Label>
                                            <Form.Control type="Password" className="form-control" id="npass" defaultValue=""/>
                                        </Form.Group>
                                        <Form.Group className="form-group">
                                            <Form.Label htmlFor="vpass" className="form-label">Verify Password:</Form.Label>
                                            <Form.Control type="Password" className="form-control" id="vpass" defaultValue=""/>
                                        </Form.Group>
                                        <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                        <Button type="reset" className="btn bg-soft-danger">Cancel</Button>
                                    </Form>
                                  </Card.Body>
                              </Card>
                          </Tab.Pane>
                          <Tab.Pane eventKey="third" className="fade show">
                              <Card>
                                  <Card.Header className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Email and SMS</h4>
                                    </div>
                                  </Card.Header>
                                  <Card.Body>
                                  <Form>
                                      <Form.Group className="form-group row align-items-center">
                                          <Form.Label className="col-md-3" htmlFor="emailnotification">Email Notification:</Form.Label>
                                          <Form.Check className="col-md-9 form-check form-switch">
                                              <Form.Check.Input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked11"defaultChecked/>
                                              <Form.Check.Label className="form-check-label" htmlFor="flexSwitchCheckChecked11">Checked switch checkbox input</Form.Check.Label>
                                          </Form.Check>
                                      </Form.Group>
                                      <Form.Group className="form-group row align-items-center">
                                          <Form.Label className="col-md-3" htmlFor="smsnotification">SMS Notification:</Form.Label>
                                          <Form.Check className="col-md-9 form-check form-switch">
                                              <Form.Check.Input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked12"defaultChecked/>
                                              <Form.Check.Label className="form-check-label" htmlFor="flexSwitchCheckChecked12">Checked switch checkbox input</Form.Check.Label>
                                          </Form.Check>
                                      </Form.Group>
                                      <Form.Group className="form-group row align-items-center">
                                          <Form.Label className="col-md-3" htmlFor="npass">When To Email</Form.Label>
                                          <Col md="9">
                                              <Form.Check className="form-check">
                                                  <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault12"/>
                                                  <Form.Check.Label className="form-check-label" htmlFor="flexCheckDefault12">
                                                      You have new notifications.
                                                  </Form.Check.Label>
                                              </Form.Check>
                                              <Form.Check className="form-check d-block">
                                                  <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="email02"/>
                                                  <Form.Check.Label className="form-check-label" htmlFor="email02">You're sent a direct message</Form.Check.Label>
                                              </Form.Check>
                                              <Form.Check className="form-check d-block">
                                                  <Form.Check.Input type="checkbox" className="form-check-input" id="email03"defaultChecked/>
                                                  <Form.Check.Label className="form-check-label" htmlFor="email03">Someone adds you as a connection</Form.Check.Label>
                                              </Form.Check>
                                          </Col>
                                      </Form.Group>
                                      <Form.Group className="form-group row align-items-center">
                                          <Form.Label className="col-md-3" htmlFor="npass">When To Escalate Emails</Form.Label>
                                          <Col md="9">
                                              <Form.Check className="form-check">
                                                  <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="email04"/>
                                                  <Form.Check.Label className="form-check-label"htmlFor="email04">
                                                      Upon new order.
                                                  </Form.Check.Label>
                                              </Form.Check>
                                              <Form.Check className="form-check d-block">
                                                  <Form.Check.Input className="form-check-input" type="checkbox" defaultValue="" id="email05"/>
                                                  <Form.Check.Label className="form-check-label"htmlFor="email05">New membership approval</Form.Check.Label>
                                              </Form.Check>
                                              <Form.Check className="form-check d-block">
                                                  <Form.Check.Input type="checkbox" className="form-check-input" id="email06"defaultChecked/>
                                                  <Form.Check.Label className="form-check-label"htmlFor="email06">Member registration</Form.Check.Label>
                                              </Form.Check>
                                          </Col>
                                      </Form.Group>
                                      <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                      <Button type="reset" className="btn bg-soft-danger">Cancel</Button>
                                  </Form>
                                  </Card.Body>
                              </Card>
                          </Tab.Pane>
                          <Tab.Pane eventKey="fourth" className="fade show">
                              <Card>
                                  <Card.Header className="d-flex justify-content-between">
                                  <div className="header-title">
                                      <h4 className="card-title">Manage Contact</h4>
                                  </div>
                                  </Card.Header>
                                  <Card.Body>
                                      <Form>
                                          <Form.Group className="form-group">
                                              <Form.Label htmlFor="cno"  className="form-label">Contact Number:</Form.Label>
                                              <Form.Control type="text" className="form-control" id="cno" defaultValue="001 2536 123 458"/>
                                          </Form.Group>
                                          <Form.Group className="form-group">
                                              <Form.Label htmlFor="email"  className="form-label">Email:</Form.Label>
                                              <Form.Control type="text" className="form-control" id="email" defaultValue="Bnijone@demo.com"/>
                                          </Form.Group>
                                          <Form.Group className="form-group">
                                              <Form.Label htmlFor="url"  className="form-label">Url:</Form.Label>
                                              <Form.Control type="text" className="form-control" id="url" defaultValue="https://getbootstrap.com"/>
                                          </Form.Group>
                                          <Button type="submit" className="btn btn-primary me-2">Submit</Button>
                                          <Button type="reset" className="btn bg-soft-danger">Cancel</Button>
                                      </Form>
                                  </Card.Body>
                              </Card>
                          </Tab.Pane>
                      </Tab.Content>
                  {/* </div> */}
              </Col>
          </Row>
          </Tab.Container>
        </Container>
      </>
  )

}

export default UserProfileEdit;