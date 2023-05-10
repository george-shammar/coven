import React, {useState} from 'react'
import { Container, Row, Col, Card, Dropdown, Button, Modal, OverlayTrigger, Tooltip,Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ProfileHeader from '../../../components/profile-header'
import CustomToggle from '../../../components/dropdowns'
import ShareOffcanvas from '../../../components/share-offcanvas'

//image
import img1 from '../../../assets/images/page-img/gi-1.jpg'
import user1 from '../../../assets/images/user/05.jpg'
import user2 from '../../../assets/images/user/06.jpg'
import user3 from '../../../assets/images/user/07.jpg'
import user4 from '../../../assets/images/user/08.jpg'
import user5 from '../../../assets/images/user/09.jpg'
import user6 from '../../../assets/images/user/10.jpg'
import user7 from '../../../assets/images/user/11.jpg'
import user8 from '../../../assets/images/user/12.jpg'
import user9 from '../../../assets/images/user/1.jpg'
import img5 from '../../../assets/images/user/1.jpg'
import small1 from '../../../assets/images/small/07.png'
import small2 from '../../../assets/images/small/08.png'
import small3 from '../../../assets/images/small/09.png'
import small4 from '../../../assets/images/small/10.png'
import small5 from '../../../assets/images/small/11.png'
import small6 from '../../../assets/images/small/12.png'
import small7 from '../../../assets/images/small/13.png'
import small8 from '../../../assets/images/small/14.png'
import img6 from '../../../assets/images/user/04.jpg'
import img7 from '../../../assets/images/page-img/52.jpg'
import img8 from '../../../assets/images/user/04.jpg'
import img9 from '../../../assets/images/page-img/60.jpg'
import img10 from '../../../assets/images/user/02.jpg'
import img11 from '../../../assets/images/user/03.jpg'
import header from '../../../assets/images/page-img/profile-bg7.jpg'
import icon1 from '../../../assets/images/icon/01.png'
import icon2 from '../../../assets/images/icon/02.png'
import icon3 from '../../../assets/images/icon/03.png'
import icon4 from '../../../assets/images/icon/04.png'
import icon5 from '../../../assets/images/icon/05.png'
import icon6 from '../../../assets/images/icon/06.png'
import icon7 from '../../../assets/images/icon/07.png'


const GroupDetail = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
             <ProfileHeader  img={header} title="Groups" />
                <div id="content-page" className="content-page">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                    <div className="group-info d-flex align-items-center">
                                        <div className="me-3">
                                            <img className="rounded-circle img-fluid avatar-100" src={img1} alt=""/>
                                        </div>
                                        <div className="info">
                                            <h4>Developer's...</h4>
                                            <p className="mb-0"><i className="ri-lock-fill pe-2"></i>Private Group . 323 members</p>
                                        </div>
                                    </div>
                                    <div mt-md="0" mt="2" className="group-member d-flex align-items-center">
                                        <div className="iq-media-group me-3">
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user1} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user2} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user3} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user4} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user5} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user6} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user7} alt=""/>
                                            </Link>
                                            <Link to="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user8} alt=""/>
                                            </Link>
                                        </div>
                                        <Button variant="primary" className="mb-2"><i className="ri-add-line me-1"></i>Invite</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="8">
                                <Card id="post-modal-data">
                                    <Card.Header className="d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Create Post</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="d-flex align-items-center">
                                            <div className="user-img">
                                                <img src={user9} alt="userimg" className="avatar-60 rounded-circle"/>
                                            </div>
                                            <form className="post-text ms-3 w-100 " onClick={handleShow}>
                                                <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: "none"}}/>
                                            </form>
                                        </div>
                                        <hr/>
                                        <ul className=" post-opt-block d-flex list-inline m-0 p-0 flex-wrap">
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2">
                                                    <img src={small1} alt="icon" className="img-fluid me-2"/> Photo/Video
                                                </li>
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3 mb-md-0 mb-2">
                                                    <img src={small2} alt="icon" className="img-fluid me-2"/> Tag Friend
                                                </li>
                                                <li className="bg-soft-primary rounded p-2 pointer d-flex align-items-center me-3">
                                                    <img src={small3} alt="icon" className="img-fluid me-2"/> Feeling/Activity
                                                </li>
                                                <li>
                                                    <Button variant="soft-primary">
                                                        <div className="card-header-toolbar d-flex align-items-center">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as='div' className="lh-1">
                                                                    <span className="material-symbols-outlined">
                                                                        more_horiz
                                                                    </span>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item  onClick={handleShow}  href="#">Check in</Dropdown.Item>
                                                                    <Dropdown.Item  onClick={handleShow}  href="#">Live Video</Dropdown.Item>
                                                                    <Dropdown.Item  onClick={handleShow}  href="#">Gif</Dropdown.Item> 
                                                                    <Dropdown.Item  onClick={handleShow}  href="#">Watch Party</Dropdown.Item> 
                                                                    <Dropdown.Item  onClick={handleShow}  href="#">Play with Friend</Dropdown.Item> 
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </Button>
                                                </li>
                                            </ul>
                                    </Card.Body>
                                    <Modal show={show} onHide={handleClose} size="lg">
                                        <Modal.Header className="d-flex justify-content-between" closeButton>
                                            <h5 className="modal-title" id="post-modalLabel">Create Post</h5>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img">
                                                    <img src={img5} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                </div>
                                                <Form className="post-text ms-3 w-100" action="">
                                                    <Form.Control type="text" className="rounded" placeholder="Write something here..." style={{border: "none"}}/>
                                                </Form>
                                            </div>
                                            <hr/>
                                            <ul className="d-flex flex-wrap align-items-center list-inline m-0 p-0">
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small1} alt="icon" className="img-fluid"/> Photo/Video</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small2} alt="icon" className="img-fluid"/> Tag Friend</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small3} alt="icon" className="img-fluid"/> Feeling/Activity</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small4} alt="icon" className="img-fluid"/> Check in</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small5} alt="icon" className="img-fluid"/> Live Video</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small6} alt="icon" className="img-fluid"/> Gif</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small7} alt="icon" className="img-fluid"/> Watch Party</div>
                                                </Col>
                                                <Col md="6" as="li" className="mb-3">
                                                    <div className="bg-soft-primary rounded p-2 pointer me-3"><Link to="#"></Link><img src={small8} alt="icon" className="img-fluid"/> Play with Friends</div>
                                                </Col>
                                            </ul>
                                            <hr/>
                                            <div className="other-option">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img me-3">
                                                            <img src={user9} alt="userimg" className="avatar-60 rounded-circle img-fluid"/>
                                                        </div>
                                                        <h6>Your Story</h6>
                                                    </div>
                                                    <div className="card-post-toolbar">
                                                        <Dropdown>
                                                            <Dropdown.Toggle>
                                                                <span>Friend</span>
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="m-0 p-0">
                                                                <Dropdown.Item className="p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-save-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Public</h6>
                                                                            <p className="mb-0">Anyone on or off Facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-close-circle-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Friends</h6>
                                                                            <p className="mb-0">Your Friend on facebook</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="p-3" href="#">
                                                                    <div className="d-flex align-items-top">
                                                                        <i className="ri-user-unfollow-line h4"></i>
                                                                        <div className="data ms-2">
                                                                            <h6>Friends except</h6>
                                                                            <p className="mb-0">Don't show to some friends</p>
                                                                        </div>
                                                                    </div>
                                                                </Dropdown.Item>
                                                                <Dropdown.Item className="p-3" href="#">
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
                                            <div className="user-post-data py-3">
                                                <div className="d-flex justify-content-between">
                                                    <div className=" me-3">
                                                        <img className="rounded-circle img-fluid" src={img6} alt=""/>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <h5 className="mb-0 d-inline-block"><Link to="#" >Paige Turner</Link></h5>
                                                                <p className="mb-0">8 hour ago</p>
                                                            </div>
                                                            <div className="card-post-toolbar">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="bg-transparent">
                                                                    <span className="material-symbols-outlined">
                                                                        more_horiz
                                                                    </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                            <i className="material-symbols-outlined">save</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Save Post</h6>
                                                                                    <p className="mb-0">Add this to your saved items</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                                <i className="material-symbols-outlined">edit</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Edit Post</h6>
                                                                                    <p className="mb-0">Update your post and saved items</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                                <i className="material-symbols-outlined">cancel</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Hide From Timeline</h6>
                                                                                    <p className="mb-0">See fewer posts like this.</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                                <i className="material-symbols-outlined">delete</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Delete</h6>
                                                                                    <p className="mb-0">Remove thids Post on Timeline</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                            <i className="material-symbols-outlined">notifications</i>
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
                                                <Link to="">
                                                    <img className="img-fluid w-100" src={img7} alt="postimage"/>
                                                </Link>
                                            </div>
                                            <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="like-block position-relative d-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <div className="like-data">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle as={CustomToggle}>
                                                                        <img src={icon1} className="img-fluid" alt=""/>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="py-2 show">
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="total-like-block ms-2 me-3">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle as={CustomToggle}>
                                                                        140 Likes
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu">
                                                                        <Dropdown.Item className="dropdown-item" href="#">Max Emum</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Bill Yerds</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Hap E. Birthday</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Tara Misu</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Midge Itz</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Sal Vidge</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Other</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div className="total-comment-block">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle}>
                                                                    20 Comment
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu">
                                                                    <Dropdown.Item className="dropdown-item" href="#">Max Emum</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Bill Yerds</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Hap E. Birthday</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Tara Misu</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Midge Itz</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Sal Vidge</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Other</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                    <li className="mb-2">
                                                        <div className="d-flex">
                                                            <div className="user-img">
                                                                <img src={img10} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                            </div>
                                                            <div className="comment-data-block ms-3">
                                                                <h6>Monty Carlo</h6>
                                                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                    <Link to="">like</Link>
                                                                    <Link to="">reply</Link>
                                                                    <Link to="">translate</Link>
                                                                    <span> 5 min </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex">
                                                            <div className="user-img">
                                                                <img src={img11} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                            </div>
                                                            <div className="comment-data-block ms-3">
                                                                <h6>Paul Molive</h6>
                                                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                    <Link to="">like</Link>
                                                                    <Link to="">reply</Link>
                                                                    <Link to="">translate</Link>
                                                                    <span> 5 min </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" action="">
                                                    <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                    <div className="comment-attagement d-flex">
                                                        <Link to=""><i className="ri-link me-3"></i></Link>
                                                        <Link to=""><i className="ri-user-smile-line me-3"></i></Link>
                                                        <Link to=""><i className="ri-camera-line me-3"></i></Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="post-item">
                                            <div className="user-post-data py-3">
                                                <div className="d-flex justify-content-between">
                                                    <div className="media-support-user-img me-3">
                                                        <img className="rounded-circle img-fluid" src={img8} alt=""/>
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between">
                                                            <div >
                                                                <h5 className="mb-0 d-inline-block me-1"><Link to="#" >Pete Sariya</Link></h5>
                                                                <p className=" mb-0 d-inline-block">Update his Status</p>
                                                                <p className="mb-0">7 hour ago</p>
                                                            </div>
                                                            <div className="card-post-toolbar">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle variant="bg-transparent">
                                                                    <span className="material-symbols-outlined">
                                                                        more_horiz
                                                                    </span>
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                            <i className="material-symbols-outlined">save</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Save Post</h6>
                                                                                    <p className="mb-0">Add this to your saved items</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                                <i className="material-symbols-outlined">edit</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Edit Post</h6>
                                                                                    <p className="mb-0">Update your post and saved items</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                                <i className="material-symbols-outlined">cancel</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Hide From Timeline</h6>
                                                                                    <p className="mb-0">See fewer posts like this.</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                                <i className="material-symbols-outlined">delete</i>
                                                                                <div className="data ms-2">
                                                                                    <h6>Delete</h6>
                                                                                    <p className="mb-0">Remove thids Post on Timeline</p>
                                                                                </div>
                                                                            </div>
                                                                        </Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item p-3" to="#">
                                                                            <div className="d-flex align-items-top">
                                                                            <i className="material-symbols-outlined">notifications</i>
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
                                                <Link to="">
                                                    <img src={img9} alt="postimage" className="img-fluid w-100" />
                                                </Link>
                                            </div>
                                            <div className="comment-area mt-3">
                                                <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                    <div className="like-block position-relative d-flex align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <div className="like-data">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle as={CustomToggle}>
                                                                        <img src={icon1} className="img-fluid" alt="" />
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="py-2 show">
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2"><img src={icon1} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid me-2" alt=""/></OverlayTrigger>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                            <div className="total-like-block ms-2 me-3">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle as={CustomToggle}>
                                                                        140 Likes
                                                                    </Dropdown.Toggle>
                                                                    <Dropdown.Menu className="dropdown-menu">
                                                                        <Dropdown.Item className="dropdown-item" href="#">Max Emum</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Bill Yerds</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Hap E. Birthday</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Tara Misu</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Midge Itz</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Sal Vidge</Dropdown.Item>
                                                                        <Dropdown.Item className="dropdown-item" href="#">Other</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </div>
                                                        </div>
                                                        <div className="total-comment-block">
                                                            <Dropdown>
                                                                <Dropdown.Toggle as={CustomToggle}>
                                                                    20 Comment
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu">
                                                                    <Dropdown.Item className="dropdown-item" href="#">Max Emum</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Bill Yerds</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Hap E. Birthday</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Tara Misu</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Midge Itz</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Sal Vidge</Dropdown.Item>
                                                                    <Dropdown.Item className="dropdown-item" href="#">Other</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                    </div>
                                                    <ShareOffcanvas />
                                                </div>
                                                <hr/>
                                                <ul className="post-comments p-0 m-0">
                                                    <li className="mb-2">
                                                        <div className="d-flex ">
                                                            <div className="user-img">
                                                                <img src={img10} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                            </div>
                                                            <div className="comment-data-block ms-3">
                                                                <h6>Monty Carlo</h6>
                                                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                    <Link to="">like</Link>
                                                                    <Link to="">reply</Link>
                                                                    <Link to="">translate</Link>
                                                                    <span> 5 min </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex ">
                                                            <div className="user-img">
                                                                <img src={img11} alt="userimg" className="avatar-35 rounded-circle img-fluid"/>
                                                            </div>
                                                            <div className="comment-data-block ms-3">
                                                                <h6>Paul Molive</h6>
                                                                <p className="mb-0">Lorem ipsum dolor sit amet</p>
                                                                <div className="d-flex flex-wrap align-items-center comment-activity">
                                                                    <Link to="">like</Link>
                                                                    <Link to="">reply</Link>
                                                                    <Link to="">translate</Link>
                                                                    <span> 5 min </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <form className="comment-text d-flex align-items-center mt-3" action="">
                                                    <input type="text" className="form-control rounded" placeholder="Enter Your Comment"/>
                                                    <div className="comment-attagement d-flex">
                                                        <Link to=""><i className="ri-link me-3"></i></Link>
                                                        <Link to=""><i className="ri-user-smile-line me-3"></i></Link>
                                                        <Link to=""><i className="ri-camera-line me-3"></i></Link>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg="4">
                                <Card>
                                    <Card.Header className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Groups</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-inline p-0 m-0">
                                            <li className="mb-3 pb-3 border-bottom">
                                                <div className="iq-search-bar members-search p-0">
                                                    <form action="#" className="searchbox w-auto">
                                                        <input type="text" className="text search-input bg-grey" placeholder="Type here to search..."/>
                                                        <Link className="search-link" to="#"><i className="ri-search-line"></i></Link>
                                                    </form>
                                                </div>
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                                                    <i className="material-symbols-outlined">credit_card</i>
                                                </div>
                                                <h6 className="mb-0">Your Feed</h6>
                                            </li>
                                            <li className="mb-3 d-flex align-items-center">
                                                <div className="avatar-40 rounded-circle bg-gray d-flex align-items-center justify-content-center me-3">
                                                    <i className="material-symbols-outlined">explore</i>
                                                </div>
                                                <h6 className="mb-0">Discover</h6>
                                            </li>
                                            <li>
                                                <button type="submit" className="btn btn-primary d-block w-100">
                                                    <i className="ri-add-line pe-2"></i>Create New Group
                                                </button>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Header className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">About</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-inline p-0 m-0">
                                            <li className="mb-3">
                                                <p className="mb-0">Developer's Group...</p>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="material-symbols-outlined">lock</i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6>Private</h6>
                                                        <p className="mb-0">Success in slowing economic activity.</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="material-symbols-outlined">visibility</i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6>Visible</h6>
                                                        <p className="mb-0">Various versions have evolved over the years</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li >
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <i className="material-symbols-outlined">group</i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        <h6>General group</h6>
                                                        <p className="mb-0">There are many variations of passages</p>
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

export default GroupDetail;