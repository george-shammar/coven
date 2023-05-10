import React from 'react'
import {Row, Col, Container, Nav, Button, Table, Tab} from 'react-bootstrap'
import Card from '../../../components/Card'
import {Link} from 'react-router-dom'

// images
import user1 from '../../../assets/images/user/1.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user01 from '../../../assets/images/user/01.jpg'
import user02 from '../../../assets/images/user/02.jpg'
import user03 from '../../../assets/images/user/03.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user07 from '../../../assets/images/user/07.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user09 from '../../../assets/images/user/09.jpg'
import user04 from '../../../assets/images/user/04.jpg'
import icon8 from '../../../assets/images/icon/08.png'
import icon9 from '../../../assets/images/icon/09.png'
import icon10 from '../../../assets/images/icon/10.png'
import icon11 from '../../../assets/images/icon/11.png'
import icon12 from '../../../assets/images/icon/12.png'
import icon13 from '../../../assets/images/icon/13.png'
import img1 from '../../../assets/images/page-img/profile-bg1.jpg'

const ProfileForums =() =>{
    return(
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <Card>
                            <Card.Body className=" profile-page p-0">
                                <div className="profile-header">
                                    <div className="position-relative">
                                        <img loading="lazy" src={img1} alt="profile-bg" className="rounded img-fluid"/>
                                        <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                                        <li>
                                            <Link to="#" className="material-symbols-outlined">
                                            edit
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="material-symbols-outlined">
                                            settings
                                            </Link>
                                        </li>
                                        </ul>
                                    </div>
                                    <div className="user-detail text-center mb-3">
                                        <div className="profile-img">
                                            <img loading="lazy" src={user1} alt="profile" className="avatar-130 img-fluid" />
                                        </div>
                                        <div className="profile-detail">
                                            <h3>Paul Molive</h3>
                                        </div>
                                    </div>
                                    <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                                        <div className="social-links">
                                            <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                                <li className="text-center pe-3">
                                                    <Link to="#"><img loading="lazy" src={icon8} className="img-fluid rounded" alt="facebook"/></Link>
                                                </li>
                                                <li className="text-center pe-3">
                                                    <Link to="#"><img loading="lazy" src={icon9} className="img-fluid rounded" alt="Twitter"/></Link>
                                                </li>
                                                <li className="text-center pe-3">
                                                    <Link to="#"><img loading="lazy" src={icon10} className="img-fluid rounded" alt="Instagram"/></Link>
                                                </li>
                                                <li className="text-center pe-3">
                                                    <Link to="#"><img loading="lazy" src={icon11} className="img-fluid rounded" alt="Google plus"/></Link>
                                                </li>
                                                <li className="text-center pe-3">
                                                    <Link to="#"><img loading="lazy" src={icon12} className="img-fluid rounded" alt="You tube"/></Link>
                                                </li>
                                                <li className="text-center pe-0 md-pe-3">
                                                    <Link to="#"><img loading="lazy" src={icon13} className="img-fluid rounded" alt="linkedin"/></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="social-info">
                                            <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                                <li className="text-center ps-3">
                                                    <h6>Posts</h6>
                                                    <p className="mb-0">690</p>
                                                </li>
                                                <li className="text-center ps-3">
                                                    <h6>Followers</h6>
                                                    <p className="mb-0">206</p>
                                                </li>
                                                <li className="text-center ps-3">
                                                    <h6>Following</h6>
                                                    <p className="mb-0">100</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Col lg={12}>
                            <Card>
                                <Card.Body className="p-0">
                                    <div className="user-tabing p-3">
                                        <div className="d-flex flex-wrap align-items-center justify-content-between">
                                            <Nav variant="pills" className=" d-flex align-items-center text-center profile-forum-items p-0 m-0 w-75">
                                                <Col sm={3} className=" p-0">
                                                    <Nav.Link  eventKey="first" role="button">Topic Started</Nav.Link>
                                                </Col>
                                                <Col sm={3} className=" p-0">
                                                    <Nav.Link eventKey="second" role="button">My Replies</Nav.Link>
                                                </Col>
                                                <Col sm={3} className=" p-0">
                                                    <Nav.Link eventKey="third" role="button">Liked Topics</Nav.Link>
                                                </Col>
                                            </Nav>
                                            <Button type="submit" className="btn btn-primary">Apply Filter</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12}>                        
                            <Tab.Content className="forum-content">
                                <Tab.Pane eventKey="first" > 
                                    <Card> 
                                        <Card.Body className="p-0">
                                            <Table responsive className="forum-table mb-0 rounded">
                                                <thead className="bg-primary text-white">
                                                    <tr>
                                                        <th>Activity</th>
                                                        <th>Voices</th>
                                                        <th>Replies</th>
                                                        <th>Discussion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user01} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bearded Wonder</Link></h6>
                                                                    <p className="mb-0">3 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">12</td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user02} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Anna Mull</Link></h6>
                                                                    <p className="mb-0">3 hours, 20 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">10</td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Anna Mull</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user03} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Terry Aki</Link></h6>
                                                                    <p className="mb-0">3 hours, 18 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Terry Aki</span>18 minutes ago <span className="text-primary">- Community</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user04} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Alex john</Link></h6>
                                                                    <p className="mb-0">2 hours, 16 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">7</td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user05} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Rock lai</Link></h6>
                                                                    <p className="mb-0">2 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Rock lai</span>22 minutes ago <span className="text-primary"> - Banking</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user06} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Ira Membrit</Link></h6>
                                                                    <p className="mb-0">2 hours, 21 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">5</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Ira Membrit</span>21 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user07} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bob Frapples</Link></h6>
                                                                    <p className="mb-0">2 hours, 20 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-2">2</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Bob Frapples</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user08} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Paul Moliver</Link></h6>
                                                                    <p className="mb-0">2 hours, 18 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">5</td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Paul Molive</span>18 minutes ago <span className="text-primary"> - Banking</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user09} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                    <p className="mb-0">2 hours, 15 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user05} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bearded Wonder</Link></h6>
                                                                    <p className="mb-0">3 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-2">2</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body> 
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"> 
                                    <Card> 
                                        <Card.Body className="p-0">
                                            <Table responsive className="forum-table mb-0 rounded">
                                                <thead className="bg-primary text-white">
                                                    <tr>
                                                        <th>Activity</th>
                                                        <th>Voices</th>
                                                        <th>Replies</th>
                                                        <th>Discussion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user07} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bob Frapples</Link></h6>
                                                                    <p className="mb-0">2 hours, 20 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-2">2</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Bob Frapples</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user08} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Paul Moliver</Link></h6>
                                                                    <p className="mb-0">2 hours, 18 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">5</td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Paul Molive</span>18 minutes ago <span className="text-primary"> - Banking</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user01} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bearded Wonder</Link></h6>
                                                                    <p className="mb-0">3 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">12</td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user02} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Anna Mull</Link></h6>
                                                                    <p className="mb-0">3 hours, 20 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">10</td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Anna Mull</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user03} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Terry Aki</Link></h6>
                                                                    <p className="mb-0">3 hours, 18 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Terry Aki</span>18 minutes ago <span className="text-primary">- Community</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user04} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Alex john</Link></h6>
                                                                    <p className="mb-0">2 hours, 16 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">7</td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user05} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Rock lai</Link></h6>
                                                                    <p className="mb-0">2 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Rock lai</span>22 minutes ago <span className="text-primary"> - Banking</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user06} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Ira Membrit</Link></h6>
                                                                    <p className="mb-0">2 hours, 21 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">5</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Ira Membrit</span>21 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user09} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                    <p className="mb-0">2 hours, 15 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user05} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bearded Wonder</Link></h6>
                                                                    <p className="mb-0">3 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-2">2</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" > 
                                    <Card> 
                                        <Card.Body>
                                            <Table responsive="lg" className="forum-table mb-0 rounded" >
                                                <thead className="bg-primary text-white">
                                                    <tr>
                                                        <th>Activity</th>
                                                        <th>Voices</th>
                                                        <th>Replies</th>
                                                        <th>Discussion</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user09} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                    <p className="mb-0">2 hours, 15 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user04} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Alex john</Link></h6>
                                                                    <p className="mb-0">2 hours, 16 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">7</td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user01} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bearded Wonder</Link></h6>
                                                                    <p className="mb-0">3 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">12</td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user02} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Anna Mull</Link></h6>
                                                                    <p className="mb-0">3 hours, 20 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">10</td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Anna Mull</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user03} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Terry Aki</Link></h6>
                                                                    <p className="mb-0">3 hours, 18 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-2">8</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Terry Aki</span>18 minutes ago <span className="text-primary">- Community</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user04} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Alex john</Link></h6>
                                                                    <p className="mb-0">2 hours, 16 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">7</td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Alex john</span>16 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user05} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Rock lai</Link></h6>
                                                                    <p className="mb-0">2 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Rock lai</span>22 minutes ago <span className="text-primary"> - Banking</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user06} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Ira Membrit</Link></h6>
                                                                    <p className="mb-0">2 hours, 21 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">5</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Ira Membrit</span>21 minutes ago <span className="text-primary"> - expenses</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user07} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bob Frapples</Link></h6>
                                                                    <p className="mb-0">2 hours, 20 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-2">2</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Bob Frapples</span>20 minutes ago <span className="text-primary"> - Community Hangout</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user08} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Paul Moliver</Link></h6>
                                                                    <p className="mb-0">2 hours, 18 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">5</td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Paul Molive</span>18 minutes ago <span className="text-primary"> - Banking</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user09} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                    <p className="mb-0">2 hours, 15 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">6</td>
                                                        <td className="col-lg-2">4</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Greta Life</span>15 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="col-lg-4">
                                                            <div className="d-flex align-items-center">
                                                                <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={user05} alt=""/>
                                                                <div className="media-body ms-3">
                                                                    <h6 className="mb-0"><Link to="#">Bearded Wonder</Link></h6>
                                                                    <p className="mb-0">3 hours, 22 minutes ago</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="col-lg-2">3</td>
                                                        <td className="col-lg-2">2</td>
                                                        <td className="col-lg-4">
                                                            <h6>There are many variations of passages.</h6>
                                                            <p className="mb-0"><span className="text-dark me-2">Pete Sariya</span>22 minutes ago <span className="text-primary"> - Comics</span></p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
            </Container>
        </>
    )
}

export default ProfileForums;