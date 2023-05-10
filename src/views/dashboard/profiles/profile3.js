import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { Container,Row,Col,Nav,Tab, Dropdown, Modal, Button} from 'react-bootstrap'
import Card from '../../../components/Card'
import CustomToggle from '../../../components/dropdowns'
import ReactFsLightbox from 'fslightbox-react';

import imgpp1 from '../../../assets/images/page-img/profile-bg1.jpg'
import imgpp2 from '../../../assets/images/user/11.png'
import imgpp3 from '../../../assets/images/page-img/07.jpg'
import imgpp4 from '../../../assets/images/page-img/06.jpg'
import imgpp5 from '../../../assets/images/page-img/g1.jpg'
import imgpp6 from '../../../assets/images/page-img/g2.jpg'
import imgpp7 from '../../../assets/images/page-img/g3.jpg'
import imgpp8 from '../../../assets/images/page-img/g4.jpg'
import imgpp9 from '../../../assets/images/page-img/g5.jpg'
import imgpp10 from '../../../assets/images/page-img/g6.jpg'
import imgpp11 from '../../../assets/images/page-img/g7.jpg'
import imgpp12 from '../../../assets/images/page-img/g8.jpg'
import imgpp13 from '../../../assets/images/page-img/g9.jpg'
import imgpp14 from '../../../assets/images/user/13.jpg'
import imgpp15 from '../../../assets/images/user/14.jpg'
import imgpp16 from '../../../assets/images/user/15.jpg'
import imgpp17 from '../../../assets/images/user/16.jpg'
import imgpp18 from '../../../assets/images/user/17.jpg'
import imgpp19 from '../../../assets/images/user/18.jpg'
import imgpp24 from '../../../assets/images/user/05.jpg'
import imgpp25 from '../../../assets/images/user/06.jpg'
import imgpp26 from '../../../assets/images/user/07.jpg'
import imgpp27 from '../../../assets/images/user/08.jpg'
import imgpp28 from '../../../assets/images/user/09.jpg'
import imgpp29 from '../../../assets/images/user/10.jpg'
import imgpp30 from '../../../assets/images/user/11.jpg'
import imgpp31 from '../../../assets/images/user/12.jpg'
import imgpp32 from '../../../assets/images/user/13.jpg'
import imgpp33 from '../../../assets/images/user/14.jpg'
import imgpp34 from '../../../assets/images/badges/01.png'
import imgpp35 from '../../../assets/images/badges/02.png'
import imgpp36 from '../../../assets/images/user/03.jpg'
import imgpp37 from '../../../assets/images/page-img/p3.jpg'
import imgpp38 from '../../../assets/images/icon/08.png'
import imgpp39 from '../../../assets/images/icon/09.png'
import imgpp40 from '../../../assets/images/icon/10.png'
import imgpp41 from '../../../assets/images/icon/11.png'
import imgpp42 from '../../../assets/images/icon/12.png'
import imgpp43 from '../../../assets/images/icon/13.png'
import user9 from '../../../assets/images/user/1.jpg'
import small1 from '../../../assets/images/small/07.png'
import small2 from '../../../assets/images/small/08.png'
import small3 from '../../../assets/images/small/09.png'
import small4 from '../../../assets/images/small/10.png'
import small5 from '../../../assets/images/small/11.png'
import small6 from '../../../assets/images/small/12.png'
import small7 from '../../../assets/images/small/13.png'
import small8 from '../../../assets/images/small/14.png'
import user1 from '../../../assets/images/user/1.jpg'
import small07 from '../../../assets/images/small/07.png'
import small08 from '../../../assets/images/small/08.png'
import small09 from '../../../assets/images/small/09.png'

// sweet-alert
import Swal from 'sweetalert2'

// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;

const Profile3=()=>{
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

    const questionAlert = () => {
        const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            cancelButton: 'btn btn-outline-primary btn-lg ms-2',
            confirmButton: 'btn btn-primary btn-lg',
            
            
          },
          buttonsStyling: false
        })
        
        swalWithBootstrapButtons.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'cancel',
          confirmButtonText: 'Yes, delete it!',
         
          reverseButtons: false,
          showClass: {
           popup: 'animate__animated animate__zoomIn'
       },
       hideClass: {
           popup: 'animate__animated animate__zoomOut'
       }
         
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: 'Deleted!',
              text: 'Your Request has been deleted.',
              icon: 'success',
              showClass: {
                popup: 'animate__animated animate__zoomIn'
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              }
            })
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
           swalWithBootstrapButtons.fire({
              title: 'Your Request is safe!',
              showClass: {
                popup: 'animate__animated animate__zoomIn'
              },
              hideClass: {
                popup: 'animate__animated animate__zoomOut'
              }
            })
          }
        })
      }

    // fsLightbox
    const [imageController, setImageController] = useState({
        toggler: false,
        slide: 1
    });
    
    function imageOnSlide(number) {
        setImageController({
        toggler: !imageController.toggler,
        slide: number
        }); 
    }

    return(
        <>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[imgpp5,imgpp6,imgpp7,imgpp8,imgpp9,imgpp10,imgpp11,imgpp12,imgpp13]}
                slide={imageController.slide}
            />
        <Container>
        <Row>
            <Col sm="12">
                <Card>
            <Card.Body className="profile-page p-0">
               <div className="profile-header">
                  <div className="position-relative">
                     <img loading="lazy" src={imgpp1} alt="profile-bg" className="rounded img-fluid"/>
                     <ul className="header-nav list-inline d-flex flex-wrap justify-end p-0 m-0">
                        <li><Link to="#"><i className="ri-pencil-line"></i></Link></li>
                     </ul>
                  </div>
                  <div className="user-detail text-center mb-3">
                     <div className="profile-img">
                        <img loading="lazy" src={imgpp2} alt="profile-img" className="avatar-130 img-fluid"/>
                     </div>
                     <div className="profile-detail">
                        <h3 className="">Bni Cyst</h3>
                     </div>
                  </div>
                  <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                     <div className="social-links">
                        <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                           <li className="text-center pe-3">
                              <Link to="#"><img loading="lazy" src={imgpp38} className="img-fluid rounded" alt="facebook"/></Link>
                           </li>
                           <li className="text-center pe-3">
                              <Link to="#"><img loading="lazy" src={imgpp39} className="img-fluid rounded" alt="Twitter"/></Link>
                           </li>
                           <li className="text-center pe-3">
                              <Link to="#"><img loading="lazy" src={imgpp40} className="img-fluid rounded" alt="Instagram"/></Link>
                           </li>
                           <li className="text-center pe-3">
                              <Link to="#"><img loading="lazy" src={imgpp41} className="img-fluid rounded" alt="Google plus"/></Link>
                           </li>
                           <li className="text-center pe-3">
                              <Link to="#"><img loading="lazy" src={imgpp42} className="img-fluid rounded" alt="You tube"/></Link>
                           </li>
                           <li className="text-center md-pe-3 pe-0">
                              <Link to="#"><img loading="lazy" src={imgpp43} className="img-fluid rounded" alt="linkedin"/></Link>
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
        </Row>
        <Row className="mt-1">
            <Col lg="4" md="4">
                <Card>
                    <Card.Body className="p-0">
                        <div className="user-tabing">
                            <Tab.Container defaultActiveKey="f1"> 
                                <Nav  variant="pills" className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                                    <Col sm="3" as="li" className="nav-item col-12 p-0">
                                        <Nav.Link eventKey="f1" href="#Posts">Posts</Nav.Link>
                                    </Col>
                                    <Col sm="3" as="li" className="nav-item col-12 p-0">
                                        <Nav.Link eventKey="f2" href="#Abouts">About</Nav.Link>
                                    </Col>
                                    <Col sm="3" as="li" className="nav-item col-12 p-0">
                                        <Nav.Link eventKey="f3" href="#Friends">Friends</Nav.Link>
                                    </Col>
                                    <Col sm="3" as="li" className="nav-item col-12 p-0">
                                        <Nav.Link eventKey="f4" href="#Photos">Photos</Nav.Link>
                                    </Col>
                                </Nav>
                                <Tab.Content>              
                                    <Tab.Pane eventKey="f1" className="fade show" id="Posts" role="tabpanel">
                                        <Card>
                                            <Card.Body>
                                                <h5>Intro</h5>
                                                <span><svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" trokelinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg><span className="ms-2">Joined August 2012</span></span>
                                                <div className="mt-2">
                                                <div className="d-grid gap-2">
                                                        <button className="btn btn-primary" type="button">Edit Details</button>
                                                        <button className="btn btn-primary" type="button">Add Hobbies</button>
                                                        <button className="btn btn-primary" type="button">Add Featured</button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card>
                                        <div className="card-header d-flex justify-content-between">
                                            <div className="header-title">
                                                <h4 className="card-title">Life Event</h4>
                                            </div>
                                            <div className="card-header-toolbar d-flex align-items-center">
                                                <p className="m-0"><Link to="javacsript:void();"> Create </Link></p>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <Row>
                                                <Col sm="12">
                                                    <div className="event-post position-relative">
                                                    <Link to="#"><img loading="lazy" src={imgpp3} alt="gallary-img" className="img-fluid rounded"/></Link>
                                                    <div className="job-icon-position">
                                                        <div className="job-icon bg-primary p-2 d-inline-block rounded-circle material-symbols-outlined text-white">
                                                            local_mall
                                                        </div>
                                                    </div>
                                                    <div className="card-body text-center p-2">
                                                        <h5>Started New Job at Apple</h5>
                                                        <p>January 24, 2019</p>
                                                    </div>
                                                    </div>
                                                </Col>
                                                <Col sm="12">
                                                    <div className="event-post position-relative">
                                                    <Link to="#"><img loading="lazy" src={imgpp4} alt="gallary-img" className="img-fluid rounded"/></Link>
                                                    <div className="job-icon-position">
                                                        <div className="job-icon bg-primary p-2 d-inline-block rounded-circle material-symbols-outlined text-white">
                                                            local_mall
                                                        </div>
                                                    </div>
                                                    <div className="card-body text-center p-2">
                                                        <h5>Freelance Photographer</h5>
                                                        <p className="mb-0">January 24, 2019</p>
                                                    </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="f2" className="fade show" id="Photos" role="tabpanel">
                                        <Card>
                                            <Card.Body>
                                                <h4>Contact Information</h4>
                                                <hr/>
                                                <Row>
                                                    <Col className="col-3">
                                                    <h6>Email</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">Bnijohn@gmail.com</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>Mobile</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">(001) 4544 565 456</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>Address</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">United States of America</p>
                                                    </Col>
                                                </Row>
                                                <h4 className="mt-3">Websites and Social Links</h4>
                                                <hr/>
                                                <Row>
                                                    <Col className="col-3">
                                                    <h6>Website</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">www.bootstrap.com</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>Social Link</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">www.bootstrap.com</p>
                                                    </Col>
                                                </Row>
                                                <hr/>
                                                <h4 className="mt-3">Basic Information</h4>
                                                <hr/>
                                                <Row>
                                                    <Col className="col-3">
                                                    <h6>Birth Date</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">24 January</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>Birth Year</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">1994</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>Gender</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">Female</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>interested in</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">Designing</p>
                                                    </Col>
                                                    <Col className="col-3">
                                                    <h6>language</h6>
                                                    </Col>
                                                    <Col className="col-9">
                                                    <p className="mb-0">English, French</p>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="f3" className="fade show" id="Abouts" role="tabpanel">
                                        <Card>
                                            <Card.Body>
                                                <ul className="request-list list-inline m-0 p-0">
                                                    <li className="d-flex align-items-center  flex-wrap">
                                                        <div className="user-img img-fluid flex-shrink-0">
                                                        <img loading="lazy" src={imgpp14} alt="story-img" className="rounded-circle avatar-40"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6>Paul Misunday</h6>
                                                            <p className="mb-0">6  friends</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                                            <Link to="#" className="me-3 btn btn-primary rounded">Follow</Link>
                                                                                                
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-center  flex-wrap">
                                                        <div className="user-img img-fluid flex-shrink-0">
                                                        <img loading="lazy" src={imgpp15} alt="story-img" className="rounded-circle avatar-40"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6>Reanne Carnation</h6>
                                                            <p className="mb-0">12  friends</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                                            <Link to="#" className="me-3 btn btn-primary rounded">Follow</Link>
                                                                                                
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-center  flex-wrap">
                                                        <div className="user-img img-fluid flex-shrink-0">
                                                        <img loading="lazy" src={imgpp16} alt="story-img" className="rounded-circle avatar-40"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6>Reanne Carnation</h6>
                                                            <p className="mb-0">12  friends</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                                            <Link to="#" className="me-3 btn btn-primary rounded">Follow</Link>
                                                                                                
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-center  flex-wrap">
                                                        <div className="user-img img-fluid flex-shrink-0">
                                                        <img loading="lazy" src={imgpp17} alt="story-img" className="rounded-circle avatar-40"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6>Reanne Carnation</h6>
                                                            <p className="mb-0">12  friends</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                                            <Link to="#" className="me-3 btn btn-primary rounded">Follow</Link>
                                                                                                
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-center  flex-wrap">
                                                        <div className="user-img img-fluid flex-shrink-0">
                                                        <img loading="lazy" src={imgpp18} alt="story-img" className="rounded-circle avatar-40"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6>Reanne Carnation</h6>
                                                            <p className="mb-0">15  friends</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                                            <Link to="#" className="me-3 btn btn-primary rounded">Follow</Link>
                                                                                                
                                                        </div>
                                                    </li>
                                                    <li className="d-flex align-items-center  flex-wrap">
                                                        <div className="user-img img-fluid flex-shrink-0">
                                                        <img loading="lazy" src={imgpp19} alt="story-img" className="rounded-circle avatar-40"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6>Reanne Carnation</h6>
                                                            <p className="mb-0">21  friends</p>
                                                        </div>
                                                        <div className="d-flex align-items-center mt-2 mt-md-0">
                                                            <Link to="#" className="me-3 btn btn-primary rounded">Follow</Link>
                                                                                                
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="f4" className="fade show" id="Friends" role="tabpanel">
                                        <Card>
                                        <div className="card-header d-flex justify-content-between">
                                            <div className="header-title">
                                                <h4 className="card-title">Photos</h4>
                                            </div>
                                            <div className="card-header-toolbar d-flex align-items-center">
                                                <p className="m-0"><Link to="javacsript:void();">Add Photo </Link></p>
                                            </div>
                                        </div>
                                        <Card.Body>
                                            <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(1)} loading="lazy" src={imgpp5} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(2)} loading="lazy" src={imgpp6} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(3)} loading="lazy" src={imgpp7} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(4)} loading="lazy" src={imgpp8} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(5)} loading="lazy" src={imgpp9} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(6)} loading="lazy" src={imgpp10} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(7)} loading="lazy" src={imgpp11} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(8)} loading="lazy" src={imgpp12} alt="gallary-img" className="img-fluid"/></Link></li>
                                                <li className=""><Link to="#"><img onClick={() => imageOnSlide(9)} loading="lazy" src={imgpp13} alt="gallary-img" className="img-fluid"/></Link></li>
                                            </ul>
                                        </Card.Body>
                                        </Card>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>                   
                        </div> 
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="8" md="8">
                <Card>
                    <Card.Header className="d-flex justify-content-between">
                        <div className="header-title">
                            <h4 className="card-title">Create Post</h4>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Tab.Container defaultActiveKey="first">
                        <Card id="post-modal-data" >
                            <Card.Body>
                                <div className="d-flex align-items-center">
                                    <div className="user-img">
                                    <img loading="lazy" src={user1} alt="userimg" className="avatar-60 rounded-circle"/>
                                    </div>
                                    <form className="post-text ms-3 w-100 " onClick={handleShow}>
                                    <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border:"none"}}/>
                                    </form>
                                </div>
                                <hr/>
                                <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                    <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img loading="lazy" src={small07} alt="icon" className="img-fluid me-2"/> Photo/Video</li>
                                    <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2"><img loading="lazy" src={small08} alt="icon" className="img-fluid me-2"/> Tag Friend</li>
                                    <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3"><img loading="lazy" src={small09} alt="icon" className="img-fluid me-2"/> Feeling/Activity</li>
                                    <li className="bg-soft-primary rounded p-2 pointer text-center">
                                        <div className="card-header-toolbar d-flex align-items-center">
                                            <Dropdown>
                                                <Dropdown.Toggle as={CustomToggle}  id="post-option"  >
                                                <span className="material-symbols-outlined">
                                                more_horiz  
                                                </span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="post-option" >
                                                    <Dropdown.Item onClick={handleShow}  href="#" >Check in</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShow}  href="#" >Live Video</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShow}  href="#" >Gif</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShow}  href="#" >Watch Party</Dropdown.Item>
                                                    <Dropdown.Item onClick={handleShow}  href="#" >Play with Friend</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </li>
                                </ul>
                            </Card.Body>
                            <Modal show={show} onHide={handleClose} size="lg">
                            <Modal.Header className="d-flex justify-content-between">
                                <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                <Link className="lh-1" to="#" onClick={handleClose}><span className="material-symbols-outlined">close</span></Link>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="d-flex align-items-center">
                                    <div className="user-img">
                                        <img loading="lazy" src={user9} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                    </div>
                                    <form className="post-text ms-3 w-100" action="">
                                        <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: "none"}}/>
                                    </form>
                                </div>
                                <hr/>
                                <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small1} alt="icon" className="img-fluid"/> Photo/Video</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small2} alt="icon" className="img-fluid"/> Tag Friend</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small3} alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small4} alt="icon" className="img-fluid"/> Check in</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small5} alt="icon" className="img-fluid"/> Live Video</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small6} alt="icon" className="img-fluid"/> Gif</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small7} alt="icon" className="img-fluid"/> Watch Party</div>
                                    </li>
                                    <li className="col-md-6 mb-3">
                                        <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img loading="lazy" src={small8} alt="icon" className="img-fluid"/> Play with Friends</div>
                                    </li>
                                </ul>
                                <hr/>
                                <div className="other-option">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div className="user-img me-3">
                                                <img loading="lazy" src={user9} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                            </div>
                                            <h6>Your Story</h6>
                                        </div>
                                        <div className="card-post-toolbar">
                                            <Dropdown>
                                                <Dropdown.Toggle className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                                    <span className="btn btn-primary">Friend</span>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu clemassName="dropdown-menu m-0 p-0">
                                                    <Dropdown.Item className="dropdown-item p-3" href="#">
                                                        <div className="d-flex align-items-top">
                                                            <i className="ri-save-line h4"></i>
                                                            <div className="data ms-2">
                                                                <h6>Public</h6>
                                                                <p className="mb-0">Anyone on or off Facebook</p>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item p-3" href="#">
                                                        <div className="d-flex align-items-top">
                                                            <i className="ri-close-circle-line h4"></i>
                                                            <div className="data ms-2">
                                                                <h6>Friends</h6>
                                                                <p className="mb-0">Your Friend on facebook</p>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item p-3" href="#">
                                                        <div className="d-flex align-items-top">
                                                            <i className="ri-user-unfollow-line h4"></i>
                                                            <div className="data ms-2">
                                                                <h6>Friends except</h6>
                                                                <p className="mb-0">Don't show to some friends</p>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item p-3" href="#">
                                                        <div className="d-flex align-items-top">
                                                            <i className="ri-notification-line h4"></i>
                                                            <div className="data ms-2">
                                                                <h6>Only Me</h6>
                                                                <p className="mb-0">Only me</p>
                                                            </div>
                                                        </div>
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="primary" className="d-block w-100 mt-3">Post</Button>
                            </Modal.Body>
                            </Modal>
                        </Card>
                    <Card>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <h5>Posts</h5>
                                <div>
                                    <button type="button" className="btn btn-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" trokelinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                        <span className="ms-2 mb-2">Filters</span>
                                    </button>{' '}
                                    <button type="button" className="btn btn-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" trokelinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" trokelinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="ms-2 mb-2">Manages Posts</span>
                                    </button>
                                </div>
                            </div>
                            <hr/>
                            <Nav as="ul" className="tab-nav-pane nav-tabs  justify-content-evenly mb-0">
                                <Nav.Item as="li" className="pb-0 mb-0">
                                    <Nav.Link eventKey="first" data-bs-toggle="tab" className="font-weight-bold text-uppercase ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" trokelinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>List View</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" className="pb-0 mb-0">
                                    <Nav.Link eventKey="second" data-bs-toggle="tab" className="font-weight-bold text-uppercase ms-3"><svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" trokelinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>Grid View</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                            <Tab.Pane eventKey="first" className="fade show " id="Listview" role="tabpanel">
                                <div className="">
                                    <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Friend Request</h4>
                                    </div>
                                    </div>
                                    <Card.Body>
                                    <ul className="request-list list-inline m-0 p-0">
                                        <li className="d-flex align-items-center  justify-content-between flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp24} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                            <h6>Jaques Amole</h6>
                                                <p className="mb-0">40  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <div className="confirm-click-btn">
                                                <Link to="#" className="me-3 btn btn-primary rounded confirm-btn">Confirm</Link>
                                                <Link to="../app/profile.html" className="me-3 btn btn-primary rounded request-btn" style={{display: "none"}}>View All</Link>
                                                </div>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  justify-content-between flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp25} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Lucy Tania</h6>
                                                <p className="mb-0">12  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">                                    
                                                <div className="confirm-click-btn">
                                                <Link to="#" className="me-3 btn btn-primary rounded confirm-btn">Confirm</Link>
                                                <Link to="../app/profile.html" className="me-3 btn btn-primary rounded request-btn" style={{display: "none"}}>View All</Link>
                                                </div>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp26} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Val Adictorian</h6>
                                                <p className="mb-0">0  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <div className="confirm-click-btn">
                                                <Link to="#" className="me-3 btn btn-primary rounded confirm-btn">Confirm</Link>
                                                <Link to="../app/profile.html" className="me-3 btn btn-primary rounded request-btn" style={{display: "none"}}>View All</Link>
                                                </div>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp27} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Manny Petty</h6>
                                                <p className="mb-0">3  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp28} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Marsha Mello</h6>
                                                <p className="mb-0">15  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp29} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Caire Innet</h6>
                                                <p className="mb-0">8  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp30} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Gio Metric</h6>
                                                <p className="mb-0">10  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp31} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Chris P. Cream</h6>
                                                <p className="mb-0">18  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp32} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Paul Misunday</h6>
                                                <p className="mb-0">6  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" onClick={questionAlert} className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center  flex-wrap">
                                            <div className="user-img img-fluid flex-shrink-0">
                                            <img loading="lazy" src={imgpp33} alt="story-img" className="rounded-circle avatar-40"/>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h6>Reanne Carnation</h6>
                                                <p className="mb-0">12  friends</p>
                                            </div>
                                            <div className="d-flex align-items-center mt-2 mt-md-0">
                                                <Link to="#" className="me-3 btn btn-primary rounded">Confirm</Link>
                                                <Link to="#" className="btn btn-secondary rounded" data-extra-toggle="delete" data-closest-elem=".item">Delete Request</Link>                                    
                                            </div>
                                        </li>
                                        <li className="d-block text-center mb-0 pb-0">
                                            <Link to="#" className="me-3 btn">View More Request</Link>
                                        </li>
                                    </ul>
                                    </Card.Body>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className="fade show" id="Gridview" role="tabpanel">
                                <Row>
                                    <div className="col-lg-6 col-md-6 mt-5">
                                        <Card>
                                        <Card.Body>
                                            <div className="iq-badges text-left">
                                                <div className="badges-icon">
                                                    <img loading="lazy" className="avatar-80 rounded" src={imgpp34} alt=""/>
                                                </div>
                                                <h5 className="mb-2">Gold User</h5>
                                                <p>Richard McClintock, a Latin professor consectetur.</p>
                                                <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-5">
                                        <Card>
                                        <Card.Body>
                                            <div className="iq-badges text-left">
                                                <div className="badges-icon">
                                                    <img loading="lazy" className="avatar-80 rounded" src={imgpp35} alt=""/>
                                                </div>
                                                <h5 className="mb-2">Gold User</h5>
                                                <p>Richard McClintock, a Latin professor consectetur.</p>
                                                <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                                 <Row>
                                    <div className="col-lg-6 col-md-6 mt-5">
                                        <Card>
                                        <Card.Body>
                                            <div className="iq-badges text-left">
                                                <div className="badges-icon">
                                                    <img loading="lazy" className="avatar-80 rounded" src={imgpp34} alt=""/>
                                                </div>
                                                <h5 className="mb-2">Gold User</h5>
                                                <p>Richard McClintock, a Latin professor consectetur.</p>
                                                <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-lg-6 col-md-6 mt-5">
                                        <Card>
                                        <Card.Body>
                                            <div className="iq-badges text-left">
                                                <div className="badges-icon">
                                                    <img loading="lazy" className="avatar-80 rounded" src={imgpp35} alt=""/>
                                                </div>
                                                <h5 className="mb-2">Gold User</h5>
                                                <p>Richard McClintock, a Latin professor consectetur.</p>
                                                <span className="text-uppercase">Unlock Jan 15th, 2020</span>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </div>
                                </Row>
                            </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <div className="d-flex  justify-content-between">
                                <div className="me-3">
                                    <div className="iq-profile-avatar status-online">
                                        <img loading="lazy" className="rounded-circle avatar-50" src={imgpp36} alt=""/>
                                    </div>
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between">
                                        <div className="">
                                        <h5 className="mb-0 d-inline-block me-1"><Link to="#" className="">Bni Cyst</Link></h5>
                                        <p className="mb-0 d-inline-block">Share Anna Mull's Post</p>
                                        <p className="mb-0">5 hour ago</p>
                                        </div>
                                        <div className="card-post-toolbar">
                                        <Dropdown>
                                            <Dropdown.Toggle as="span"   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                            <i className="ri-more-fill"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="m-0 p-0">
                                                <Dropdown.Item  className="p-3" to="#">
                                                    <div className="d-flex align-items-top">
                                                    <i className="ri-save-line h4"></i>
                                                    <div className="data ms-2">
                                                        <h6>Save Post</h6>
                                                        <p className="mb-0">Add this to your saved items</p>
                                                    </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                    <div className="d-flex align-items-top">
                                                    <i className="ri-pencil-line h4"></i>
                                                    <div className="data ms-2">
                                                        <h6>Edit Post</h6>
                                                        <p className="mb-0">Update your post and saved items</p>
                                                    </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                    <div className="d-flex align-items-top">
                                                    <i className="ri-close-circle-line h4"></i>
                                                    <div className="data ms-2">
                                                        <h6>Hide From Timeline</h6>
                                                        <p className="mb-0">See fewer posts like this.</p>
                                                    </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                    <div className="d-flex align-items-top">
                                                    <i className="ri-delete-bin-7-line h4"></i>
                                                    <div className="data ms-2">
                                                        <h6>Delete</h6>
                                                        <p className="mb-0">Remove thids Post on Timeline</p>
                                                    </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item p-3" href="#">
                                                    <div className="d-flex align-items-top">
                                                    <i className="ri-notification-line h4"></i>
                                                    <div className="data ms-2">
                                                        <h6>Notifications</h6>
                                                        <p className="mb-0">Turn on notifications for this post</p>
                                                    </div>
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="user-post mt-2">
                                <Link to="#"><img loading="lazy" src={imgpp37} alt="post-img" className="img-fluid w-100"/></Link>
                            </div>
                        </Card.Body>
                    </Card>
                    </Tab.Container>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default Profile3