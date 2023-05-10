import React from 'react'
import {Row, Col, Container, Dropdown} from 'react-bootstrap'
import Card from '../../../components/Card'
import { Link } from 'react-router-dom'

// img
import user1 from '../../../assets/images/user/01.jpg'
import user2 from '../../../assets/images/user/02.jpg'
import user3 from '../../../assets/images/user/03.jpg'
import user4 from '../../../assets/images/user/04.jpg'
import user5 from '../../../assets/images/user/05.jpg'
import user6 from '../../../assets/images/user/06.jpg'
import user7 from '../../../assets/images/user/07.jpg'
import user8 from '../../../assets/images/user/08.jpg'
import user9 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'
import user11 from '../../../assets/images/user/11.jpg'
import user12 from '../../../assets/images/user/12.jpg'
import user13 from '../../../assets/images/user/13.jpg'
import user14 from '../../../assets/images/user/14.jpg'

const Notification = () => {
   return(
      <>
         <div id='content-page' className='content-page'>           
         <Container>
            <Row>
               <Col sm="12">
                  <h4 className="card-title mb-3">Notification</h4>
               </Col>
               <Col sm="12">
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user1} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className=" ms-3">
                                       <h6>Paige Turner Posted in UI/UX Community</h6>
                                       <p className="mb-0">30  ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-primary rounded">
                                       <i className="material-symbols-outlined md-18">
                                          military_tech
                                       </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                             <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#">
                                                   <i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user2} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className=" ms-3">
                                       <h6>Anne Fibbiyon Like Your Post</h6>
                                       <p className="mb-0">15  ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-danger rounded">
                                       <i className="material-symbols-outlined md-18">
                                          favorite_border
                                       </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user3} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Barry Cuda add Story</h6>
                                       <p className="mb-0">40  ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-primary rounded">
                                          <i className="material-symbols-outlined md-18">
                                             military_tech
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user4} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Cliff Hanger posted a comment on your status update</h6>
                                       <p className="mb-0">42  ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-success rounded">
                                          <i className="material-symbols-outlined md-16">
                                             chat_bubble_outline
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user4} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Rick O'Shea posted a comment on your photo</h6>
                                       <p className="mb-0">50  ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-success rounded">
                                          <i className="material-symbols-outlined md-16">
                                             chat_bubble_outline
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user5} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Brock Lee Sent a Friend Request</h6>
                                       <p className="mb-0">1 hour ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-warning rounded">
                                       <i className="material-symbols-outlined md-18">
                                          reply
                                       </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user6} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className=" ms-3">
                                       <h6>Ira Membrit shared your status update</h6>
                                       <p className="mb-0">1 hour ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-info rounded">
                                       <i className="material-symbols-outlined md-18">
                                          share
                                       </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user11} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Paul Molive and 3 ther have Birthday Today</h6>
                                       <p className="mb-0">3 houe ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-danger rounded">
                                          <i className="material-symbols-outlined md-18">
                                              cake
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user7} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Petey Cruiser Sent a Friend request</h6>
                                       <p className="mb-0">1 day ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-warning rounded">
                                          <i className="material-symbols-outlined md-18">
                                             reply
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user8} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Bob Frapples and 45 other Like Your Pst on timeline</h6>
                                       <p className="mb-0">1 week ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-danger rounded">
                                          <i className="material-symbols-outlined md-18">
                                             favorite_border
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user12} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Maya Didas share Your Post</h6>
                                       <p className="mb-0">1 month ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-info rounded">
                                       <i className="material-symbols-outlined md-18">
                                          share
                                       </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user9} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className=" ms-3">
                                       <h6>Sal Monella Add Photo with You</h6>
                                       <p className="mb-0">1 month ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-primary rounded">
                                          <i className="material-symbols-outlined md-18">
                                             military_tech
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user10} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="ms-3">
                                       <h6>Barb Dwyer commented on your new profile status</h6>
                                       <p className="mb-0">2 month ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-success rounded">
                                          <i className="material-symbols-outlined md-16">
                                             chat_bubble_outline
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user13} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className="info ms-3">
                                       <h6>Terry Aki commented on your new profile status</h6>
                                       <p className="mb-0">2 month ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-success rounded">
                                          <i className="material-symbols-outlined md-16">
                                             chat_bubble_outline
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </Card.Body>
                  </Card>
                  <Card>
                     <Card.Body>
                        <ul className="notification-list m-0 p-0">
                           <li className="d-flex align-items-center justify-content-between">
                              <div className="user-img img-fluid">
                                 <img src={user14} alt="story-img" className="rounded-circle avatar-40"/>
                              </div>
                              <div className="w-100">
                                 <div className="d-flex justify-content-between">
                                    <div className=" ms-3">
                                       <h6>Paige Turner Posted in Development Community</h6>
                                       <p className="mb-0">3 month ago</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                       <Link to="#" className="me-3 iq-notify bg-soft-primary rounded">
                                          <i className="material-symbols-outlined md-18 ">
                                             military_tech
                                          </i>
                                       </Link>
                                       <div className="card-header-toolbar d-flex align-items-center">
                                          <Dropdown>
                                          <Link to="#">
                                             <Dropdown.Toggle as="span" className="material-symbols-outlined">
                                                more_horiz
                                             </Dropdown.Toggle>
                                             </Link>
                                             <Dropdown.Menu className="dropdown-menu-right">
                                                <Dropdown.Item to="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item to="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                             </Dropdown.Menu>
                                          </Dropdown>
                                       </div>
                                    </div>
                                 </div>
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

export default Notification