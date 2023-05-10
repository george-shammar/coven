import React,{useState} from 'react'
import {Row, Col, Container, Dropdown, Nav, Tab, OverlayTrigger, Tooltip, Button, Modal } from 'react-bootstrap'
import Card from '../../../components/Card'
import CustomToggle from '../../../components/dropdowns'
import ShareOffcanvas from '../../../components/share-offcanvas'
import {Link} from 'react-router-dom'
import ReactFsLightbox from 'fslightbox-react';

// images
import img1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/user/11.png'
import img3 from '../../../assets/images/icon/08.png'
import img4 from '../../../assets/images/icon/09.png'
import img5 from '../../../assets/images/icon/10.png'
import img6 from '../../../assets/images/icon/11.png'
import img7 from '../../../assets/images/icon/12.png'
import img8 from '../../../assets/images/icon/13.png'
import img9 from '../../../assets/images/page-img/07.jpg'
import img10 from '../../../assets/images/page-img/06.jpg'
import user1 from '../../../assets/images/user/1.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user01 from '../../../assets/images/user/01.jpg'
import user02 from '../../../assets/images/user/02.jpg'
import user03 from '../../../assets/images/user/03.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user07 from '../../../assets/images/user/07.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user09 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'
import user13 from '../../../assets/images/user/13.jpg'
import user14 from '../../../assets/images/user/14.jpg'
import user15 from '../../../assets/images/user/15.jpg'
import user16 from '../../../assets/images/user/16.jpg'
import user17 from '../../../assets/images/user/17.jpg'
import user18 from '../../../assets/images/user/18.jpg'
import user19 from '../../../assets/images/user/19.jpg'
import p1 from '../../../assets/images/page-img/p1.jpg'
import p3 from '../../../assets/images/page-img/p3.jpg'
import icon1 from '../../../assets/images/icon/01.png'
import icon2 from '../../../assets/images/icon/02.png'
import icon3 from '../../../assets/images/icon/03.png'
import icon4 from '../../../assets/images/icon/04.png'
import icon5 from '../../../assets/images/icon/05.png'
import icon6 from '../../../assets/images/icon/06.png'
import icon7 from '../../../assets/images/icon/07.png'
import g1 from '../../../assets/images/page-img/g1.jpg'
import g2 from '../../../assets/images/page-img/g2.jpg'
import g3 from '../../../assets/images/page-img/g3.jpg'
import g4 from '../../../assets/images/page-img/g4.jpg'
import g5 from '../../../assets/images/page-img/g5.jpg'
import g6 from '../../../assets/images/page-img/g6.jpg'
import g7 from '../../../assets/images/page-img/g7.jpg'
import g8 from '../../../assets/images/page-img/g8.jpg'
import g9 from '../../../assets/images/page-img/g9.jpg'
import loader from '../../../assets/images/page-img/page-load-loader.gif'
import small07 from '../../../assets/images/small/07.png'
import small08 from '../../../assets/images/small/08.png'
import small09 from '../../../assets/images/small/09.png'
import small1 from '../../../assets/images/small/07.png'
import small2 from '../../../assets/images/small/08.png'
import small3 from '../../../assets/images/small/09.png'
import small4 from '../../../assets/images/small/10.png'
import small5 from '../../../assets/images/small/11.png'
import small6 from '../../../assets/images/small/12.png'
import small7 from '../../../assets/images/small/13.png'
import small8 from '../../../assets/images/small/14.png'
import user9 from '../../../assets/images/user/1.jpg'
import img51 from '../../../assets/images/page-img/51.jpg'
import img52 from '../../../assets/images/page-img/52.jpg'
import img53 from '../../../assets/images/page-img/53.jpg'
import img54 from '../../../assets/images/page-img/54.jpg'
import img55 from '../../../assets/images/page-img/55.jpg'
import img56 from '../../../assets/images/page-img/56.jpg'
import img57 from '../../../assets/images/page-img/57.jpg'
import img58 from '../../../assets/images/page-img/58.jpg'
import img59 from '../../../assets/images/page-img/59.jpg'
import img60 from '../../../assets/images/page-img/60.jpg'
import img61 from '../../../assets/images/page-img/61.jpg'
import img62 from '../../../assets/images/page-img/62.jpg'
import img64 from '../../../assets/images/page-img/64.jpg'
import img65 from '../../../assets/images/page-img/65.jpg'
import img63 from '../../../assets/images/page-img/63.jpg'

// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;

const UserProfile =() =>{
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

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
                sources={[g1,g2,g3,g4,g5,g6,g7,g8,g9,img51,img52,img53,img54
                           ,img55,img56,img57,img58,img59,img60,img61,img62,img63,img64,img65,img51,img52,img53,img54
                           ,img55,img56,img57,img58,img51,img52,img53,img54
                           ,img55,img56,img57,img58,img59,img60]}
                slide={imageController.slide}
            />
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
                                 <img loading="lazy" src={img2} alt="profile-img1" className="avatar-130 img-fluid" />
                              </div>
                              <div className="profile-detail">
                                 <h3>Bni Cyst</h3>
                              </div>
                           </div>
                           <div className="profile-info p-3 d-flex align-items-center justify-content-between position-relative">
                              <div className="social-links">
                                 <ul className="social-data-block d-flex align-items-center justify-content-between list-inline p-0 m-0">
                                    <li className="text-center pe-3">
                                       <Link to="#"><img loading="lazy" src={img3} className="img-fluid rounded" alt="facebook"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img loading="lazy" src={img4} className="img-fluid rounded" alt="Twitter"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img loading="lazy" src={img5} className="img-fluid rounded" alt="Instagram"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img loading="lazy" src={img6} className="img-fluid rounded" alt="Google plus"/></Link>
                                    </li>
                                    <li className="text-center pe-3">
                                       <Link to="#"><img loading="lazy" src={img7} className="img-fluid rounded" alt="You tube"/></Link>
                                    </li>
                                    <li className="text-center md-pe-3 pe-0">
                                       <Link to="#"><img loading="lazy" src={img8} className="img-fluid rounded" alt="linkedin"/></Link>
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
                  <Card className="p-0">
                     <Card.Body className="p-0">
                        <div className="user-tabing">
                           <Nav as="ul" variant="pills" className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0">
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0 ">
                                 <Nav.Link  href="#pills-timeline-tab"  eventKey="first" role="button" className=" text-center p-3">Timeline</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-about-tab" eventKey="second" role="button" className="text-center p-3">About</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className=" col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-friends-tab"  eventKey="third" role="button" className="text-center p-3">Friends</Nav.Link>
                              </Nav.Item>
                              <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                                 <Nav.Link  href="#pills-photos-tab"  eventKey="forth" role="button" className="text-center p-3">Photos</Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>
                     </Card.Body>
                  </Card>
                  <Col sm={12}>
                     <Tab.Content>
                        <Tab.Pane eventKey="first" >
                           <Card.Body className=" p-0">
                              <Row>
                                 <Col lg={4}>
                                    <Card>
                                       <Card.Body>
                                          <Link to="#"><span className="badge badge-pill bg-primary font-weight-normal ms-auto me-1  material-symbols-outlined md-14">grade</span> 27 Items for yoou</Link>
                                       </Card.Body>
                                    </Card>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Life Event</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="#"> Create </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body >
                                          <Row>
                                             <Col sm={12}>
                                                <div className="event-post position-relative">
                                                   <Link to="#"><img loading="lazy" src={img9} alt="gallary1" className="img-fluid rounded"/></Link>
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
                                             <Col sm={12}>
                                                <div className="event-post position-relative">
                                                   <Link to="#"><img loading="lazy" src={img10} alt="gallary1" className="img-fluid rounded"/></Link>
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
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Photos</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="#">Add Photo </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                             <li><Link onClick={() => imageOnSlide(1)} to="#"><img loading="lazy" src={g1} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(2)} to="#"><img loading="lazy" src={g2} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(3)} to="#"><img loading="lazy" src={g3} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(4)} to="#"><img loading="lazy" src={g4} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(5)} to="#"><img loading="lazy" src={g5} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(6)} to="#"><img loading="lazy" src={g6} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(7)} to="#"><img loading="lazy" src={g7} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(8)} to="#"><img loading="lazy" src={g8} alt="gallary" className="img-fluid" /></Link></li>
                                             <li><Link onClick={() => imageOnSlide(9)} to="#"><img loading="lazy" src={g9} alt="gallary" className="img-fluid" /></Link></li>
                                          </ul>
                                       </Card.Body>
                                    </Card>
                                    <Card>
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Friends</h4>
                                          </div>
                                          <div className="card-header-toolbar d-flex align-items-center">
                                             <p className="m-0"><Link to="javacsript:void();">Add New </Link></p>
                                          </div>
                                       </div>
                                       <Card.Body>
                                          <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                             <li>
                                                <Link to="#">
                                                <img loading="lazy" src={user05} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Anna Rexia</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user06} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Tara Zona</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user07} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Polly Tech</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user08} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Bill Emia</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user09} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Moe Fugga</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user10} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Hal Appeno </h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user07} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Zack Lee</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user06} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Terry Aki</h6>
                                             </li>
                                             <li>
                                                <Link to="#"><img loading="lazy" src={user05} alt="gallary" className="img-fluid" /></Link>
                                                <h6 className="mt-2 text-center">Greta Life</h6>
                                             </li>
                                          </ul>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                                 <Col lg={8}>
                                    <Card id="post-modal-data" >
                                       <div className="card-header d-flex justify-content-between">
                                          <div className="header-title">
                                             <h4 className="card-title">Create Post</h4>
                                          </div>
                                       </div>
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
                                            <button type="button" className="btn btn-secondary lh-1"  onClick={handleClose} ><span className="material-symbols-outlined">close</span></button>
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
                                          <div className="post-item">
                                             <div className="user-post-data pb-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className="me-3">
                                                      <img loading="lazy" className="rounded-circle  avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between flex-wrap">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block"><Link to="#">Bni Cyst</Link></h5>
                                                            <p className="ms-1 mb-0 d-inline-block">Add New Post</p>
                                                            <p className="mb-0">3 hour ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                               <span className="material-symbols-outlined">
                                                                  more_horiz
                                                               </span>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
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
                                             </div>
                                             <div className="user-post">
                                                <Link to="#"><img loading="lazy" src={p1} alt="post" className="img-fluid w-100" /></Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img loading="lazy" src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img loading="lazy" src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img loading="lazy" src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img loading="lazy" src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img loading="lazy" src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img loading="lazy" src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img loading="lazy" src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img loading="lazy" src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                  140 Likes
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                     <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                      <div className="total-comment-block">
                                                      <Dropdown>
                                                         <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                         20 Comment
                                                         </Dropdown.Toggle>
                                                         <Dropdown.Menu>
                                                            <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                            <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                            <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                            <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                            <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                            <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                            <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                         </Dropdown.Menu>
                                                      </Dropdown>
                                                      </div>
                                                   </div>
                                                <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">sentiment_satisfied</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">photo_camera</Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                          <div className="post-item">
                                             <div className="user-post-data py-3">
                                                <div className="d-flex  justify-content-between">
                                                   <div className="me-3">
                                                      <img loading="lazy" className="rounded-circle  avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block me-1"><Link to="#">Bni Cyst</Link></h5>
                                                            <p className="mb-0 d-inline-block">Share Anna Mull's Post</p>
                                                            <p className="mb-0">5 hour ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
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
                                             </div>
                                             <div className="user-post">
                                                <Link to="#"><img loading="lazy" src={p3} alt="post" className="img-fluid w-100" /></Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img loading="lazy" src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img loading="lazy" src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img loading="lazy" src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img loading="lazy" src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img loading="lazy" src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img loading="lazy" src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img loading="lazy" src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img loading="lazy" src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                  140 Likes
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                     <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                      </div>
                                                      <div className="total-comment-block">
                                                         <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                               20 Comment
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                               <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                         </Dropdown>
                                                      </div>
                                                   </div>
                                                   <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">sentiment_satisfied</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">photo_camera</Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                          <div className="post-item">
                                             <div className="user-post-data py-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className="me-3">
                                                      <img loading="lazy" className="rounded-circle avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block"><Link to="#">Bni Cyst</Link></h5>
                                                            <p className="ms-1 mb-0 d-inline-block">Update his Status</p>
                                                            <p className="mb-0">7 hour ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className="p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className="p-3" to="#">
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
                                             </div>
                                             <div className="user-post">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img loading="lazy" src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img loading="lazy" src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img loading="lazy" src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img loading="lazy" src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img loading="lazy" src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img loading="lazy" src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img loading="lazy" src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img loading="lazy" src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                               140 Likes
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                     <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                            </div>
                                                         </div>
                                                         <div className="total-comment-block">
                                                         <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                               20 Comment
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                               <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                               <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                      </Dropdown>
                                                      </div>
                                                   </div>
                                                   <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">sentiment_satisfied</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">photo_camera</Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                          <div className="post-item">
                                             <div className="user-post-data py-3">
                                                <div className="d-flex justify-content-between">
                                                   <div className=" me-3">
                                                      <img loading="lazy" className="rounded-circle avatar-60" src={user1} alt=""/>
                                                   </div>
                                                   <div className="w-100">
                                                      <div className="d-flex justify-content-between">
                                                         <div>
                                                            <h5 className="mb-0 d-inline-block me-1"><Link to="#">Bni Cyst</Link></h5>
                                                            <p className=" mb-0 d-inline-block">Change Profile Picture</p>
                                                            <p className="mb-0">3 day ago</p>
                                                         </div>
                                                         <div className="card-post-toolbar">
                                                            <Dropdown>
                                                               <Dropdown.Toggle className="bg-transparent border-white">
                                                                  <i className="ri-more-fill"></i>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" m-0 p-0">
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Save Post</h6>
                                                                           <p className="mb-0">Add this to your saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-pencil-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Edit Post</h6>
                                                                           <p className="mb-0">Update your post and saved items</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Hide From Timeline</h6>
                                                                           <p className="mb-0">See fewer posts like this.</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
                                                                     <div className="d-flex align-items-top">
                                                                     <i className="ri-delete-bin-7-line h4"></i>
                                                                        <div className="data ms-2">
                                                                           <h6>Delete</h6>
                                                                           <p className="mb-0">Remove thids Post on Timeline</p>
                                                                        </div>
                                                                     </div>
                                                                  </Dropdown.Item>
                                                                  <Dropdown.Item className=" p-3" to="#">
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
                                             </div>
                                             <div className="user-post text-center">
                                                <Link to="#"><img loading="lazy" src={p1} alt="post" className="img-fluid profile-img" /></Link>
                                             </div>
                                             <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                   <div className="like-block position-relative d-flex align-items-center">
                                                      <div className="d-flex align-items-center">
                                                         <div className="like-data">
                                                            <Dropdown>
                                                               <Dropdown.Toggle  as={CustomToggle} >
                                                                  <img loading="lazy" src={icon1} className="img-fluid" alt=""/>
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu className=" py-2">
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img loading="lazy" src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img loading="lazy" src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img loading="lazy" src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img loading="lazy" src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img loading="lazy" src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img loading="lazy" src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img loading="lazy" src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                               </Dropdown.Menu>
                                                            </Dropdown>
                                                         </div>
                                                         <div className="total-like-block ms-2 me-3">
                                                            <Dropdown>
                                                                  <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                     140 Likes
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu>
                                                                     <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                                     <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                               </div>
                                                         </div>
                                                         <div className="total-comment-block">
                                                            <Dropdown>
                                                               <Dropdown.Toggle as={CustomToggle}  id="post-option" >
                                                                  20 Comment
                                                               </Dropdown.Toggle>
                                                               <Dropdown.Menu>
                                                                  <Dropdown.Item  to="#">Max Emum</Dropdown.Item>
                                                                  <Dropdown.Item  to="#">Bill Yerds</Dropdown.Item>
                                                                  <Dropdown.Item  to="#">Hap E. Birthday</Dropdown.Item>
                                                                  <Dropdown.Item  to="#">Tara Misu</Dropdown.Item>
                                                                  <Dropdown.Item  to="#">Midge Itz</Dropdown.Item>
                                                                  <Dropdown.Item  to="#">Sal Vidge</Dropdown.Item>
                                                                  <Dropdown.Item  to="#">Other</Dropdown.Item>
                                                               </Dropdown.Menu>
                                                         </Dropdown>
                                                         </div>
                                                   </div>
                                                <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                   <li className="mb-2">
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user02} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Monty Carlo</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li>
                                                      <div className="d-flex flex-wrap">
                                                         <div className="user-img">
                                                            <img loading="lazy" src={user03} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                         </div>
                                                         <div className="comment-data-block ms-3">
                                                            <h6>Paul Molive</h6>
                                                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                            <div className="d-flex flex-wrap align-items-center comment-activity">
                                                               <Link to="#">like</Link>
                                                               <Link to="#">reply</Link>
                                                               <Link to="#">translate</Link>
                                                               <span> 5 min </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" >
                                                   <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                   <div className="comment-attagement d-flex">
                                                      <Link to="#" className="material-symbols-outlined me-3 link">insert_link</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">sentiment_satisfied</Link>
                                                      <Link to="#" className="material-symbols-outlined  me-3">photo_camera</Link>
                                                   </div>
                                                </form>
                                             </div>
                                          </div>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                              </Row>
                           </Card.Body>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="second">
                           <Tab.Container id="left-tabs-example" defaultActiveKey="about1">
                              <Row>
                                 <Col md={4}>
                                    <Card>
                                       <Card.Body>
                                          <Nav variant="pills"  className=" basic-info-items list-inline d-block p-0 m-0">
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about1">Contact and Basic Info</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about2">Hobbies and Interests</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about3">Family and Relationship</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about4">Work and Education</Nav.Link>
                                             </Nav.Item>
                                             <Nav.Item >
                                                <Nav.Link href="#" eventKey="about5">Places You've Lived</Nav.Link>
                                             </Nav.Item>
                                          </Nav>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                                 <Col md={8} className=" ps-4">
                                    <Card>
                                       <Card.Body>
                                          <Tab.Content >
                                             <Tab.Pane eventKey="about1">
                                                <h4>Personal Info</h4>
                                                <hr/>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>About Me:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Hi, I’m James, I’m 36 and I work as a Digital Designer for the “Daydreams” Agency in Pier 56</p>
                                                   </div>  
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Email:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Bnijohn@gmail.com</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Mobile:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">(001) 4544 565 456</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Address:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">United States of America</p>
                                                   </div>
                                                </Row>
                                                <Row className="row mb-2">
                                                   <div className="col-3">
                                                      <h6>Social Link:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">www.bootstrap.com</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Birth Date:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">24 January</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Birth Year:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">1994</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Birthplace:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Austin, Texas, USA</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Lives in:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">San Francisco, California, USA</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Gender:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Female</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Interested in:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Designing</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>language:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">English, French</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Joined:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">April 31st, 2014</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Status:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Married</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Phone Number:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">(044) 555 - 4369 - 8957</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-3">
                                                   <div className="col-3">
                                                      <h6>Political Incline:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">Democrat</p>
                                                   </div>
                                                </Row>
                                                <h4 className="mt-2">Websites and Social Links</h4>
                                                <hr />
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Website:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">www.bootstrap.com</p>
                                                   </div>
                                                </Row>
                                                <Row className="mb-2">
                                                   <div className="col-3">
                                                      <h6>Social Link:</h6>
                                                   </div>
                                                   <div className="col-9">
                                                      <p className="mb-0">www.bootstrap.com</p>
                                                   </div>
                                                </Row>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about2">
                                                <h4 className="mt-2">Hobbies and Interests</h4>
                                                <hr />
                                                <h6 className="mb-1">Hobbies:</h6>
                                                <p>Hi, I’m Bni, I’m 26 and I work as a Web Designer for the iqonicdesign.I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it’s raining outside.</p>
                                                <h6 className="mt-2 mb-1">Favourite TV Shows:</h6>
                                                <p>Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.</p>
                                                <h6 className="mt-2 mb-1">Favourite Movies:</h6>
                                                <p>Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad, Ferrum Man.</p>
                                                <h6 className="mt-2 mb-1">Favourite Games:</h6>
                                                <p>The First of Us, Assassin’s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
                                                <h6 className="mt-2 mb-1">Favourite Music Bands / Artists:</h6>
                                                <p>Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</p>
                                                <h6 className="mt-2 mb-1">Favourite Books:</h6>
                                                <p>The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.</p>
                                                <h6 className="mt-2 mb-1">Favourite Writers:</h6>
                                                <p>Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandria Platt, Marcus Roth.</p>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about3">
                                                <h4 className="mb-3">Relationship</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18">
                                                         add
                                                      </span>
                                                      </div>
                                                      <div className="media-support-info ms-3">
                                                         <h6>Add Your Relationship Status</h6>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mt-3 mb-3">Family Members</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid">
                                                      <span className="material-symbols-outlined md-18">
                                                         add
                                                      </span>
                                                      </div>
                                                      <div className="media-support-info ms-3">
                                                         <h6>Add Family Members</h6>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user01} alt="story1" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Paul Molive</h6>
                                                               <p className="mb-0">Brothe</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex justify-content-between mb-4  align-items-center">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className=" ms-3">
                                                               <h6>Anna Mull</h6>
                                                               <p className="mb-0">Sister</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user03} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Paige Turner</h6>
                                                               <p className="mb-0">Cousin</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about4">
                                                <h4 className="mb-3">Work</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex justify-content-between mb-4  align-items-center">
                                                      <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                      <div className="ms-3">
                                                         <h6>Add Work Place</h6>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Themeforest</h6>
                                                               <p className="mb-0">Web Designer</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>iqonicdesign</h6>
                                                               <p className="mb-0">Web Developer</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user03} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>W3school</h6>
                                                               <p className="mb-0">Designer</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mb-3">Professional Skills</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                      <div className="ms-3">
                                                         <h6>Add Professional Skills</h6>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mt-3 mb-3">College</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                      <div className="ms-3">
                                                         <h6>Add College</h6>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Lorem ipsum</h6>
                                                               <p className="mb-0">USA</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </Tab.Pane>
                                             <Tab.Pane eventKey="about5">
                                                <h4 className="mb-3">Current City and Hometown</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user01} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Georgia</h6>
                                                               <p className="mb-0">Georgia State</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                   <li className="d-flex mb-4 align-items-center justify-content-between">
                                                      <div className="user-img img-fluid"><img loading="lazy" src={user02} alt="story-img" className="rounded-circle avatar-40"/></div>
                                                      <div className="w-100">
                                                         <div className="d-flex flex-wrap justify-content-between">
                                                            <div className="ms-3">
                                                               <h6>Atlanta</h6>
                                                               <p className="mb-0">Atlanta City</p>
                                                            </div>
                                                            <div className="edit-relation">
                                                               <Link to="#" className="d-flex align-items-center">
                                                                  <span className="material-symbols-outlined me-2 md-18">
                                                                     edit
                                                                  </span>
                                                                  Edit
                                                               </Link>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </li>
                                                </ul>
                                                <h4 className="mt-3 mb-3">Other Places Lived</h4>
                                                <ul className="suggestions-lists m-0 p-0">
                                                   <li className="d-flex mb-4 align-items-center">
                                                      <div className="user-img img-fluid"><span className="material-symbols-outlined md-18">add</span></div>
                                                      <div className="ms-3">
                                                         <h6>Add Place</h6>
                                                      </div>
                                                   </li>
                                                </ul>
                                             </Tab.Pane>
                                          </Tab.Content>
                                       </Card.Body>
                                    </Card>
                                 </Col>
                              </Row>
                           </Tab.Container>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="third" >
                           <Tab.Container id="left-tabs-example" defaultActiveKey="all-friends">
                              <Card>
                                 <Card.Body>
                                    <h2>Friends</h2>
                                    <div className="friend-list-tab mt-2">
                                       <Nav variant="pills" className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                                          <Nav.Item>
                                             <Nav.Link  href="#pill-all-friends" eventKey="all-friends">All Friends</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-recently-add" eventKey="recently-add">Recently Added</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-closefriends" eventKey="closefriends"> Close friends</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-home" eventKey="home-town"> Home/Town</Nav.Link>
                                          </Nav.Item>
                                          <Nav.Item>
                                             <Nav.Link href="#pill-following" eventKey="following">Following</Nav.Link>
                                          </Nav.Item>
                                       </Nav>
                                       <Tab.Content>
                                          <Tab.Pane eventKey="all-friends">
                                             <Card.Body className="p-0">
                                                <Row>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                               <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Petey Cruiser</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Anna Sthesia</h5>
                                                                  <p className="mb-0">50  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paul Molive</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Gail Forcewind</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paige Turner</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>b Frapples</h5>
                                                                  <p className="mb-0">6  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user13} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Walter Melon</h5>
                                                                  <p className="mb-0">30  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user14} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barb Ackue</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Buck Kinnear</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Ira Membrit</h5>
                                                                  <p className="mb-0">22  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Shonda Leer</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>ock Lee</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Maya Didas</h5>
                                                                  <p className="mb-0">40  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Rick O'Shea</h5>
                                                                  <p className="mb-0">50  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Pete Sariya</h5>
                                                                  <p className="mb-0">5  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Monty Carlo</h5>
                                                                  <p className="mb-0">2  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Sal Monella</h5>
                                                                  <p className="mb-0">0  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Sue Vaneer</h5>
                                                                  <p className="mb-0">25  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cliff Hanger</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barb Dwyer</h5>
                                                                  <p className="mb-0">23  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Terry Aki</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user13} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cory Ander</h5>
                                                                  <p className="mb-0">7  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user14} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Robin Banks</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Jimmy Changa</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barry Wine</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Poppa Cherry</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Zack Lee</h5>
                                                                  <p className="mb-0">33  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Don Stairs</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Peter Pants</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Hal Appeno </h5>
                                                                  <p className="mb-0">13  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </Row>
                                             </Card.Body>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="recently-add" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Otto Matic</h5>
                                                                  <p className="mb-0">4  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Moe Fugga</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Tom Foolery</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bud Wiser</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Polly Tech</h5>
                                                                  <p className="mb-0">10  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Holly Graham</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Tara Zona</h5>
                                                                  <p className="mb-0">5  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barry Cade</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="closefriends" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bud Wiser</h5>
                                                                  <p className="mb-0">32  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Otto Matic</h5>
                                                                  <p className="mb-0">9  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Peter Pants</h5>
                                                                  <p className="mb-0">2  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Zack Lee</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barry Wine</h5>
                                                                  <p className="mb-0">36  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Robin Banks</h5>
                                                                  <p className="mb-0">22  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cory Ander</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Moe Fugga</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Polly Tech</h5>
                                                                  <p className="mb-0">30  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Hal Appeno</h5>
                                                                  <p className="mb-0">25  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="home-town" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paul Molive</h5>
                                                                  <p className="mb-0">14  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Paige Turner</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Barb Ackue</h5>
                                                                  <p className="mb-0">23  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Ira Membrit</h5>
                                                                  <p className="mb-0">16  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Maya Didas</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="following" >
                                             <div className="card-body p-0">
                                                <div className="row">
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Maya Didas</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Monty Carlo</h5>
                                                                  <p className="mb-0">3  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Cliff Hanger</h5>
                                                                  <p className="mb-0">20  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>b Ackue</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user09} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bob Frapples</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user10} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Anna Mull</h5>
                                                                  <p className="mb-0">6  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user15} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>ry Wine</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user16} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Don Stairs</h5>
                                                                  <p className="mb-0">12  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user17} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Peter Pants</h5>
                                                                  <p className="mb-0">8  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user18} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Polly Tech</h5>
                                                                  <p className="mb-0">18  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user19} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Tara Zona</h5>
                                                                  <p className="mb-0">30  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user05} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Arty Ficial</h5>
                                                                  <p className="mb-0">15  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user06} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bill Emia</h5>
                                                                  <p className="mb-0">25  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user07} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Bill Yerds</h5>
                                                                  <p className="mb-0">9  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className="col-md-6 col-lg-6 mb-3">
                                                      <div className="iq-friendlist-block">
                                                         <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                               <Link to="#">
                                                                  <img loading="lazy" src={user08} alt="profile-img" className="img-fluid"/>
                                                               </Link>
                                                               <div className="friend-info ms-3">
                                                                  <h5>Matt Innae</h5>
                                                                  <p className="mb-0">19  friends</p>
                                                               </div>
                                                            </div>
                                                            <div className="card-header-toolbar d-flex align-items-center">
                                                               <Dropdown>
                                                                  <Dropdown.Toggle variant="secondary me-2 d-flex align-items-center">
                                                                     <i className="material-symbols-outlined me-2">
                                                                        done
                                                                     </i>
                                                                     Friend
                                                                  </Dropdown.Toggle>
                                                                  <Dropdown.Menu className="dropdown-menu-right" >
                                                                     <Dropdown.Item  href="#">Get Notification</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Close Friend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                                     <Dropdown.Item href="#">Block</Dropdown.Item>
                                                                  </Dropdown.Menu>
                                                               </Dropdown>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                       </Tab.Content>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane> 
                        <Tab.Pane eventKey="forth" >
                           <Tab.Container id="left-tabs-example" defaultActiveKey="p1">
                              <Card>
                                 <Card.Body>
                                    <h2>Photos</h2>
                                    <div className="friend-list-tab mt-2">
                                       <Nav variant="pills"  className=" d-flex align-items-center justify-content-left friend-list-items p-0 mb-2">
                                          <li>
                                             <Nav.Link eventKey="p1" href="#pill-photosofyou">Photos of You</Nav.Link>
                                          </li>
                                          <li>
                                             <Nav.Link eventKey="p2" href="#pill-your-photos" >Your Photos</Nav.Link>
                                          </li>
                                       </Nav>
                                       <Tab.Content>
                                          <Tab.Pane eventKey="p1">
                                             <Card.Body className="p-0">
                                                <div className="d-grid gap-2 d-grid-template-1fr-13">
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(10)} to="#">
                                                            <img loading="lazy" src={img51} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(11)} to="#">
                                                            <img loading="lazy" src={img52} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(12)} to="#">
                                                            <img loading="lazy" src={img53} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(13)} to="#">
                                                            <img loading="lazy" src={img54} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(14)} to="#">
                                                            <img loading="lazy" src={img55} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(15)} to="#">
                                                            <img loading="lazy" src={img56} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(16)} to="#">
                                                            <img loading="lazy" src={img57} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(17)} to="#">
                                                            <img loading="lazy" src={img58} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(18)} to="#">
                                                            <img loading="lazy" src={img59} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(19)} to="#">
                                                            <img loading="lazy" src={img60} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(20)} to="#">
                                                            <img loading="lazy" src={img61} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(21)} to="#">
                                                            <img loading="lazy" src={img62} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(22)} to="#">
                                                            <img loading="lazy" src={img63} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(23)} to="#">
                                                            <img loading="lazy" src={img64} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(24)} to="#">
                                                            <img loading="lazy" src={img65} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(25)} to="#">
                                                            <img loading="lazy" src={img51} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(26)} to="#">
                                                            <img loading="lazy" src={img52} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(27)} to="#">
                                                            <img loading="lazy" src={img53} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(28)} to="#">
                                                            <img loading="lazy" src={img54} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(29)} to="#">
                                                            <img loading="lazy" src={img55} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(30)} to="#">
                                                            <img loading="lazy" src={img56} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(31)} to="#">
                                                            <img loading="lazy" src={img57} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(32)} to="#">
                                                            <img loading="lazy" src={img58} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                </div>
                                             </Card.Body>
                                          </Tab.Pane>
                                          <Tab.Pane eventKey="p2">
                                             <div className="card-body p-0">
                                                <div className="d-grid gap-2 d-grid-template-1fr-13 ">
                                                <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(33)} to="#">
                                                            <img loading="lazy" src={img51} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(34)} to="#">
                                                            <img loading="lazy" src={img52} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(35)} to="#">
                                                            <img loading="lazy" src={img53} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(36)} to="#">
                                                            <img loading="lazy" src={img54} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(37)} to="#">
                                                            <img loading="lazy" src={img55} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(38)} to="#">
                                                            <img loading="lazy" src={img56} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(39)} to="#">
                                                            <img loading="lazy" src={img57} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(40)} to="#">
                                                            <img loading="lazy" src={img58} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(41)} to="#">
                                                            <img loading="lazy" src={img59} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                   <div>
                                                      <div className="user-images position-relative overflow-hidden">
                                                         <Link onClick={() => imageOnSlide(42)} to="#">
                                                            <img loading="lazy" src={img60} className="img-fluid rounded" alt="Responsive"/>
                                                         </Link>
                                                         <div className="image-hover-data">
                                                            <div className="product-elements-icon">
                                                               <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 <i className="material-symbols-outlined md-14 ms-1">thumb_up</i> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 <span className="material-symbols-outlined  md-14 ms-1">chat_bubble_outline</span> </Link></li>
                                                                  <li><Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 <span className="material-symbols-outlined md-14 ms-1">
                                                      forward
                                                      </span> </Link></li>
                                                               </ul>
                                                            </div>
                                                         </div>
                                                         <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                                                            <Link to="#" className="image-edit-btn material-symbols-outlined md-16">drive_file_rename_outline</Link>
                                                         </OverlayTrigger>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </Tab.Pane>
                                       </Tab.Content>
                                    </div>
                                 </Card.Body>
                              </Card>
                           </Tab.Container>
                        </Tab.Pane>
                        <div className="col-sm-12 text-center">
                           <img loading="lazy" src={loader} alt="loader" style={{height: "100px"}} />
                        </div>
                     </Tab.Content>
                  </Col>
               </Tab.Container>
            </Row>
         </Container>   
      </>
  )

}

export default UserProfile;