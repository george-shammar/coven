import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Nav, Tab, Dropdown, Image } from 'react-bootstrap'
import Card from '../../../components/Card'
import ReactFsLightbox from 'fslightbox-react';

import imgbg1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/user/02.jpg'
import img1 from '../../../assets/images/user/1.jpg'
import img3 from '../../../assets/images/user/1.jpg'
import img4 from '../../../assets/images/page-img/57.jpg'
import img5 from '../../../assets/images/page-img/58.jpg'
import img6 from '../../../assets/images/page-img/59.jpg'
import img7 from '../../../assets/images/user/1.jpg'
import img8 from '../../../assets/images/icon/09.png'
import img9 from '../../../assets/images/page-img/p3.jpg'
import img10 from '../../../assets/images/page-img/p1.jpg'
import img11 from '../../../assets/images/user/09.jpg'
import img12 from '../../../assets/images/user/05.jpg'
import img13 from '../../../assets/images/user/11.jpg'
import img14 from '../../../assets/images/user/02.jpg'
import img15 from '../../../assets/images/user/03.jpg'
import img16 from '../../../assets/images/user/05.jpg'
import img17 from '../../../assets/images/user/09.jpg'
import img18 from '../../../assets/images/user/06.jpg'
import img19 from '../../../assets/images/user/08.jpg'
import img20 from '../../../assets/images/user/07.jpg'
import img21 from '../../../assets/images/user/1.jpg'
import img22 from '../../../assets/images/page-img/57.jpg'
import img23 from '../../../assets/images/page-img/58.jpg'
import img24 from '../../../assets/images/page-img/59.jpg'
import img25 from '../../../assets/images/user/1.jpg'
import img26 from '../../../assets/images/page-img/60.jpg'
import img27 from '../../../assets/images/page-img/61.jpg'
import img28 from '../../../assets/images/page-img/62.jpg'
import img29 from '../../../assets/images/user/1.jpg'
import img30 from '../../../assets/images/page-img/63.jpg'
import img31 from '../../../assets/images/page-img/64.jpg'
import img32 from '../../../assets/images/page-img/65.jpg'
import img33 from '../../../assets/images/user/01.jpg'
import img34 from '../../../assets/images/user/02.jpg'
import img35 from '../../../assets/images/user/03.jpg'
import ProfileHeader from '../../../components/profile-header'
// import bg3 from '../../../assets/images/page-img/profile-bg3.jpg'
import g1 from '../../../assets/images/page-img/g1.jpg'
import g2 from '../../../assets/images/page-img/g2.jpg'
import g3 from '../../../assets/images/page-img/g3.jpg'
import g4 from '../../../assets/images/page-img/g4.jpg'
import g5 from '../../../assets/images/page-img/g5.jpg'
import g6 from '../../../assets/images/page-img/g6.jpg'
import g7 from '../../../assets/images/page-img/g7.jpg'
import g8 from '../../../assets/images/page-img/g8.jpg'

// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;

const Profile1 = () => {
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
    return (
        <>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[g1, g2, g3, g4, g5, g6, g7, g8]}
                slide={imageController.slide}
            />
            <ProfileHeader title="Profile 1" img={imgbg1} />
            <Container fluid>
                {/* <div className="container-fluid">
            <Row>
                <Col className="col-sm-12">
                
                </Col>
            </Row>
        </div> */}
                <div className="container">
                    <div id="content-page" className="content-page">
                    <Row>
                        <Col lg="3">
                            <Card>
                                <Card.Body>
                                    <div className="text-center">
                                        <img loading="lazy" className="img-fluid rounded-circle avatar-130" src={img20} alt="profile-img" />
                                        <h6>John Ramsey</h6>
                                        <Link to="#">@john_ram</Link>
                                        <p>Multidisciplinary photographer focused on travel and nature content</p>
                                    </div>
                                    <div className="d-flex justify-content-evenly">
                                        <small className="text-primary">Tweets</small>
                                        <small className="text-primary">Follower</small>
                                        <small className="text-primary">Follow</small>
                                    </div>
                                    <div className="d-flex justify-content-evenly">
                                        <h4 className="mb-0">847</h4>
                                        <h4 className="mb-0">4.2k</h4>
                                        <h4 className="mb-0">524</h4>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Profile Intro</h4>
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="ui-block-content">
                                        <ul className="list-unstyled ">
                                            <li className="mb-4">
                                                <h6 className="title">About Me:</h6>
                                                <span className="text">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56.</span>
                                            </li>
                                            <li className="mb-4">
                                                <h6 className="title">Favourite TV Shows:</h6>
                                                <span className="text">Breaking Good, RedDevil, People of Interest, The Running Dead, Found,  American Guy.</span>
                                            </li>
                                            <li className="mb-4">
                                                <h6 className="title">Favourite Music Bands / Artists:</h6>
                                                <span className="text">Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.</span>
                                            </li>
                                        </ul>
                                        <div className="widget w-socials">
                                            <h6 className="title mb-3">Other Social Networks:</h6>
                                            <Link to="#" className="social-item btn btn-primary d-flex align-items-center justify-content-center">
                                                <svg className="me-1" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="currentColor">
                                                    <title>facebook1</title>
                                                    <path d="M17 3v2h-2c-0.552 0-1.053 0.225-1.414 0.586s-0.586 0.862-0.586 1.414v3c0 0.552 0.448 1 1 1h2.719l-0.5 2h-2.219c-0.552 0-1 0.448-1 1v7h-2v-7c0-0.552-0.448-1-1-1h-2v-2h2c0.552 0 1-0.448 1-1v-3c0-1.105 0.447-2.103 1.172-2.828s1.723-1.172 2.828-1.172zM18 1h-3c-1.657 0-3.158 0.673-4.243 1.757s-1.757 2.586-1.757 4.243v2h-2c-0.552 0-1 0.448-1 1v4c0 0.552 0.448 1 1 1h2v7c0 0.552 0.448 1 1 1h4c0.552 0 1-0.448 1-1v-7h2c0.466 0 0.858-0.319 0.97-0.757l1-4c0.134-0.536-0.192-1.079-0.728-1.213-0.083-0.021-0.167-0.031-0.242-0.030h-3v-2h3c0.552 0 1-0.448 1-1v-4c0-0.552-0.448-1-1-1z"></path>
                                                </svg>
                                                Facebook
                                            </Link>
                                            <Link to="#" className="social-item btn btn-info d-flex align-items-center justify-content-center">
                                                <svg className="me-1" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                    <title>twitter</title>
                                                    <path d="M20.833 5.262c-0.186 0.242-0.391 0.475-0.616 0.696-0.233 0.232-0.347 0.567-0.278 0.908 0.037 0.182 0.060 0.404 0.061 0.634 0 5.256-2.429 8.971-5.81 10.898-2.647 1.509-5.938 1.955-9.222 1.12 1.245-0.361 2.46-0.921 3.593-1.69 0.147-0.099 0.273-0.243 0.352-0.421 0.224-0.505-0.003-1.096-0.508-1.32-2.774-1.233-4.13-2.931-4.769-4.593-0.417-1.084-0.546-2.198-0.52-3.227 0.021-0.811 0.138-1.56 0.278-2.182 0.394 0.343 0.803 0.706 1.235 1.038 2.051 1.577 4.624 2.479 7.395 2.407 0.543-0.015 0.976-0.457 0.976-1v-1.011c-0.002-0.179 0.009-0.357 0.034-0.533 0.113-0.806 0.504-1.569 1.162-2.141 0.725-0.631 1.636-0.908 2.526-0.846s1.753 0.463 2.384 1.188c0.252 0.286 0.649 0.416 1.033 0.304 0.231-0.067 0.463-0.143 0.695-0.228zM22.424 2.183c-0.74 0.522-1.523 0.926-2.287 1.205-0.931-0.836-2.091-1.302-3.276-1.385-1.398-0.097-2.836 0.339-3.977 1.332-1.036 0.901-1.652 2.108-1.83 3.372-0.037 0.265-0.055 0.532-0.054 0.8-1.922-0.142-3.693-0.85-5.15-1.97-0.775-0.596-1.462-1.309-2.034-2.116-0.32-0.45-0.944-0.557-1.394-0.237-0.154 0.109-0.267 0.253-0.335 0.409 0 0-0.132 0.299-0.285 0.76-0.112 0.337-0.241 0.775-0.357 1.29-0.163 0.722-0.302 1.602-0.326 2.571-0.031 1.227 0.12 2.612 0.652 3.996 0.683 1.775 1.966 3.478 4.147 4.823-1.569 0.726-3.245 1.039-4.873 0.967-0.552-0.024-1.019 0.403-1.043 0.955-0.017 0.389 0.19 0.736 0.513 0.918 4.905 2.725 10.426 2.678 14.666 0.261 4.040-2.301 6.819-6.7 6.819-12.634-0.001-0.167-0.008-0.33-0.023-0.489 1.006-1.115 1.676-2.429 1.996-3.781 0.127-0.537-0.206-1.076-0.743-1.203-0.29-0.069-0.58-0.003-0.807 0.156z"></path>
                                                </svg>
                                                Twitter
                                            </Link>
                                            <Link to="#" className="social-item btn btn-danger d-flex align-items-center justify-content-center">
                                                <svg className="me-1" version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 16 16" fill="currentColor">
                                                    <title>dribbble</title>
                                                    <path d="M8 16c-4.412 0-8-3.588-8-8s3.587-8 8-8c4.412 0 8 3.587 8 8s-3.588 8-8 8v0zM14.747 9.094c-0.234-0.075-2.116-0.634-4.256-0.291 0.894 2.456 1.256 4.456 1.328 4.872 1.531-1.037 2.625-2.678 2.928-4.581v0zM10.669 14.3c-0.103-0.6-0.497-2.688-1.456-5.181-0.016 0.006-0.031 0.009-0.044 0.016-3.856 1.344-5.241 4.016-5.362 4.266 1.159 0.903 2.616 1.444 4.194 1.444 0.947 0 1.85-0.194 2.669-0.544v0zM2.922 12.578c0.156-0.266 2.031-3.369 5.553-4.509 0.088-0.028 0.178-0.056 0.269-0.081-0.172-0.388-0.359-0.778-0.553-1.159-3.409 1.022-6.722 0.978-7.022 0.975-0.003 0.069-0.003 0.138-0.003 0.209 0 1.753 0.666 3.356 1.756 4.566v0zM1.313 6.609c0.306 0.003 3.122 0.016 6.319-0.831-1.131-2.013-2.353-3.706-2.534-3.953-1.913 0.903-3.344 2.666-3.784 4.784v0zM6.4 1.366c0.188 0.253 1.431 1.944 2.55 4 2.431-0.909 3.459-2.294 3.581-2.469-1.206-1.072-2.794-1.722-4.531-1.722-0.55 0.003-1.088 0.069-1.6 0.191v0zM13.291 3.691c-0.144 0.194-1.291 1.663-3.816 2.694 0.159 0.325 0.313 0.656 0.453 0.991 0.050 0.119 0.1 0.234 0.147 0.353 2.275-0.284 4.534 0.172 4.759 0.219-0.016-1.612-0.594-3.094-1.544-4.256v0z"></path>
                                                </svg>
                                                Dribbble
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Row>
                                <Col lg="6" sm="3">
                                    <Card>
                                        <Card.Body className="text-center">
                                            <span className="material-symbols-outlined md-36 text-primary">
                                                visibility
                                            </span>
                                            <h6 className="mt-2  d-flex justify-content-center align-items-center">Activity</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg="6" sm="3">
                                    <Card>
                                        <Card.Body className="text-center">
                                            <span className="material-symbols-outlined md-36 text-primary">
                                                visibility_off
                                            </span>
                                            <h6 className="mt-2  d-flex justify-content-center align-items-center">Moment</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm="3" lg="6" className="mt-1">
                                    <Card>
                                        <Card.Body className="text-center">
                                            <span className="material-symbols-outlined md-36 text-primary">
                                                groups
                                            </span>
                                            <h6 className="mt-2  d-flex justify-content-center align-items-center">Friends</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm="3" lg="6" className="mt-1">
                                    <Card>
                                        <Card.Body className="text-center">
                                            <span className="material-symbols-outlined md-36 text-primary">
                                                settings
                                            </span>
                                            <h6 className="mt-2 d-flex justify-content-center align-items-center">Edit</h6>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        {/* <Tab.Container defaultActiveKey="f1"> */}
                        <Col lg="6">
                            <Tab.Container defaultActiveKey="f1">
                                <Card>
                                    <nav className="tab-bottom-bordered">
                                        <Nav variant="tabs" className="mb-0 rounded-top border-0">
                                            <Nav.Link eventKey="f1" href="#" >Home</Nav.Link>
                                            <Nav.Link eventKey="f2" href="#">Profile</Nav.Link>
                                            <Nav.Link eventKey="f3" href="#">Contact</Nav.Link>
                                        </Nav>
                                        <Tab.Content className="card-body">
                                            <Tab.Pane eventKey="f1">
                                                <div className="borderbox1 d-flex">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img1} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="border rounded p-2">
                                                        <p className="mb-0 d-flex align-items-center">
                                                            <span className="material-symbols-outlined  me-2 md-18">
                                                                loop
                                                            </span>LEONAROD RETWEETED
                                                        </p>
                                                        <div className="d-flex align-items-center flex-wrap mb-1">
                                                            <h6>John Ramsey</h6>
                                                            <span className=" ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                                @john_ram
                                                            </span>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>35 mins</small></span>
                                                            </div>
                                                        </div>
                                                        <h6 className="mb-2">very good words..</h6>
                                                        <div className="border rounded  p-2">
                                                            <div className="align-items-center d-flex flex-wrap">
                                                                <img loading="lazy" src={img2} alt="userimg" className="avatar-40 rounded-circle" />
                                                                <h6 className="ms-2">theodocre</h6>
                                                                <p className="ms-2 mb-0">@john_ram</p>
                                                                <div className="ms-auto d-flex align-items-center">
                                                                    <i className="material-symbols-outlined md-16">
                                                                        schedule
                                                                    </i>
                                                                    <span className="mx-1"><small>35 mins</small></span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0">In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    chat_bubble_outline
                                                                </i>
                                                                <span className="ms-1">32</span>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    sync
                                                                </i>
                                                                <span className="ms-1">54</span>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    favorite_border
                                                                </i>
                                                                <span>426</span>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <i className="material-symbols-outlined md-16">
                                                                shortcut
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 rounded d-flex rounded">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img3} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className="text-primary ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link to="#" className="mb-0">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <h6>Best views from the vactions</h6>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img4} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img5} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img6} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                        <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    chat_bubble_outline
                                                                </i>
                                                                <h6 className="ms-2">32</h6>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    sync
                                                                </i>
                                                                <h6 className="ms-2">54</h6>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    favorite_border
                                                                </i>
                                                                <h6 className="ms-2">426</h6>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <i className="material-symbols-outlined md-16">
                                                                shortcut
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 d-flex">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img7} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className="ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link to="#">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <small>Design is intellgence made visible</small>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 rounded d-flex rounded ">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img1} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="border rounded p-2">
                                                        <p className="mb-0 d-flex align-items-center">
                                                            <span className="material-symbols-outlined  me-2 md-18">
                                                                loop
                                                            </span>LEONAROD RETWEETED
                                                        </p>
                                                        <div className="d-flex align-items-center flex-wrap mb-1">
                                                            <h6>John Ramsey</h6>
                                                            <span className=" ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                                @john_ram
                                                            </span>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>35 mins</small></span>
                                                            </div>
                                                        </div>
                                                        <h6 className="mb-2">very good words..</h6>
                                                        <div className="border rounded  p-2">
                                                            <div className="align-items-center d-flex flex-wrap">
                                                                <img loading="lazy" src={img2} alt="userimg" className="avatar-40 rounded-circle" />
                                                                <h6 className="ms-2">theodocre</h6>
                                                                <p className="ms-2 mb-0">@john_ram</p>
                                                                <div className="ms-auto d-flex align-items-center">
                                                                    <i className="material-symbols-outlined md-16">
                                                                        schedule
                                                                    </i>
                                                                    <span className="mx-1"><small>35 mins</small></span>
                                                                </div>
                                                            </div>
                                                            <p className="mb-0">In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    chat_bubble_outline
                                                                </i>
                                                                <span className="ms-1">32</span>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    sync
                                                                </i>
                                                                <span className="ms-1">54</span>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    favorite_border
                                                                </i>
                                                                <span>426</span>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <i className="material-symbols-outlined md-16">
                                                                shortcut
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 rounded d-flex rounded">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img3} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className="text-primary ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link to="#" className="mb-0">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <h6>Best views from the vactions</h6>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img4} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img5} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img6} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                        <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    chat_bubble_outline
                                                                </i>
                                                                <h6 className="ms-2">32</h6>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    sync
                                                                </i>
                                                                <h6 className="ms-2">54</h6>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <div className="d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    favorite_border
                                                                </i>
                                                                <h6 className="ms-2">426</h6>
                                                            </div>
                                                            <hr className="hr-vertical" />
                                                            <i className="material-symbols-outlined md-16">
                                                                shortcut
                                                            </i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 d-flex">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img7} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className="ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link to="#">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <small>Design is intellgence made visible</small>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 d-flex">
                                                    <div className="user-img me-2">
                                                        <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className=" ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link className="" to="#">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <small>Design is intellgence made visible</small>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 d-flex">
                                                    <div className="user-img me-2">
                                                        <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className=" ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link className="" to="#">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <small>Design is intellgence made visible</small>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 d-flex">
                                                    <div className="user-img me-2">
                                                        <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className=" ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link className="" to="#">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <small>Design is intellgence made visible</small>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 mt-3 d-flex">
                                                    <div className="user-img me-2">
                                                        <Image src={img1} alt="userimg" className="avatar-40 rounded-circle" loading="lazy" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <div className="d-flex align-items-center flex-wrap">
                                                            <h6>John Ramsey</h6>
                                                            <span className=" ms-1 d-flex align-items-center">
                                                                <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                    check_circle
                                                                </i>
                                                            </span>
                                                            <Link className="" to="#">@john_ram</Link>
                                                            <div className="ms-auto d-flex align-items-center">
                                                                <i className="material-symbols-outlined md-16">
                                                                    schedule
                                                                </i>
                                                                <span className="mx-1"><small>2 hours</small></span>
                                                            </div>
                                                        </div>
                                                        <small>Design is intellgence made visible</small>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="f2">
                                                <Card.Body className="p-0 mb-3">
                                                    <div className="borderbox border p-2 rounded">
                                                        <div className="d-flex  borderbox1 justify-content-between">
                                                            <div className="me-3">
                                                                <img loading="lazy" src={img8} className="img-fluid rounded" alt="Twitter" />
                                                            </div>
                                                            <div className="w-100">
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="">
                                                                        <h5 className="mb-0 d-inline-block me-1">
                                                                            <Link to="#" className="">Bni Cyst</Link></h5>
                                                                        <p className="mb-0 d-inline-block">Share Anna Mull's Post</p>
                                                                        <p className="mb-0">5 hour ago</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span className="mt-1">Forget the pixels for a second. Let’s focus on Tweets.Design Twitter is full of folks who Tweet well, and we want to figure out the secret to their sauce.</span>
                                                        <div className="user-post mt-2">
                                                            <Link to="#"><img loading="lazy" src={img9} alt="post-img" className="img-fluid w-100" /></Link>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                                <div className="borderbox border p-2 rounded mb-3">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <h6>John Ramsey</h6>
                                                        <span className="ms-1 d-flex align-items-center">
                                                            <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                check_circle
                                                            </i>
                                                        </span>
                                                        @john_ram
                                                        <div className="ms-auto d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                schedule
                                                            </i>
                                                            <span className="mx-1"><small>2 hours</small></span>
                                                        </div>
                                                    </div>
                                                    <h6>Best views from the vactions</h6>
                                                    <Row className="mt-2">
                                                        <Image loading="lazy" src={img10} alt="post-img" className="img-fluid w-100" />
                                                    </Row>
                                                    <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                chat_bubble_outline
                                                            </i>
                                                            <h6 className="ms-2">8</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                sync
                                                            </i>
                                                            <h6 className="ms-2">12</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16 text-danger">
                                                                favorite_border
                                                            </i>
                                                            <h6 className="ms-2">47</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <i className="material-symbols-outlined md-16">
                                                            shortcut
                                                        </i>
                                                    </div>
                                                </div>
                                                <div className="borderbox border p-2 rounded mb-3">
                                                    <div className="d-flex align-items-center flex-wrap ">
                                                        <h6>John Ramsey</h6>
                                                        <span className=" ms-1 d-flex align-items-center">
                                                            <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                check_circle
                                                            </i>@john_ram
                                                        </span>
                                                        <div className="ms-auto d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                schedule
                                                            </i>
                                                            <span className="mx-1"><small>2 hours</small></span>
                                                        </div>
                                                    </div>
                                                    <h6>Best views from the vactions</h6>
                                                    <div className="row mt-2">
                                                        <Image src={img10} alt="post-image" className="img-fluid w-100" loading="lazy" />
                                                    </div>
                                                    <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                chat_bubble_outline
                                                            </i>
                                                            <h6 className="ms-2">8</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                sync
                                                            </i>
                                                            <h6 className="ms-2">12</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16 text-danger">
                                                                favorite_border
                                                            </i>
                                                            <h6 className="ms-2">47</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <i className="material-symbols-outlined md-16">
                                                            shortcut
                                                        </i>
                                                    </div>
                                                </div>
                                                <div className="borderbox border p-2 rounded mb-3">
                                                    <div className="d-flex align-items-center flex-wrap ">
                                                        <h6>John Ramsey</h6>
                                                        <span className=" ms-1 d-flex align-items-center">
                                                            <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                check_circle
                                                            </i>@john_ram
                                                        </span>
                                                        <div className="ms-auto d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                schedule
                                                            </i>
                                                            <span className="mx-1"><small>2 hours</small></span>
                                                        </div>
                                                    </div>
                                                    <h6>Best views from the vactions</h6>
                                                    <div className="row mt-2">
                                                        <Image src={img10} alt="post-image" className="img-fluid w-100" loading="lazy" />
                                                    </div>
                                                    <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                chat_bubble_outline
                                                            </i>
                                                            <h6 className="ms-2">8</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                sync
                                                            </i>
                                                            <h6 className="ms-2">12</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16 text-danger">
                                                                favorite_border
                                                            </i>
                                                            <h6 className="ms-2">47</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <i className="material-symbols-outlined md-16">
                                                            shortcut
                                                        </i>
                                                    </div>
                                                </div>
                                                <div className="borderbox border p-2 rounded ">
                                                    <div className="d-flex align-items-center flex-wrap ">
                                                        <h6>John Ramsey</h6>
                                                        <span className=" ms-1 d-flex align-items-center">
                                                            <i className="material-symbols-outlined me-2 text-primary md-16">
                                                                check_circle
                                                            </i>@john_ram
                                                        </span>
                                                        <div className="ms-auto d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                schedule
                                                            </i>
                                                            <span className="mx-1"><small>2 hours</small></span>
                                                        </div>
                                                    </div>
                                                    <h6>Best views from the vactions</h6>
                                                    <div className="row mt-2">
                                                        <Image src={img10} alt="post-image" className="img-fluid w-100" />
                                                    </div>
                                                    <div className="d-flex flex-wrap justify-content-evenly mb-0 mt-2">
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                chat_bubble_outline
                                                            </i>
                                                            <h6 className="ms-2">8</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16">
                                                                sync
                                                            </i>
                                                            <h6 className="ms-2">12</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <div className="d-flex align-items-center">
                                                            <i className="material-symbols-outlined md-16 text-danger">
                                                                favorite_border
                                                            </i>
                                                            <h6 className="ms-2">47</h6>
                                                        </div>
                                                        <hr className="hr-vertical" />
                                                        <i className="material-symbols-outlined md-16">
                                                            shortcut
                                                        </i>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="f3" className="fade show">
                                                <div className="borderbox1 d-flex mb-3">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img21} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <h6>very good words..</h6>
                                                        <div className="border mt-2  p-2 rounded">
                                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <h6>Best views from the vactions</h6>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <Image loading="lazy" src={img22} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <Image loading="lazy" src={img23} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <Image loading="lazy" src={img24} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 d-flex mb-3">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img25} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <h6>very good words..</h6>
                                                        <div className="border p-2 rounded">
                                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <Image loading="lazy" src={img26} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <Image loading="lazy" src={img27} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <Image loading="lazy" src={img28} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 d-flex mb-3">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <h6>very good words..</h6>
                                                        <div className="border mt-2 p-2 rounded">
                                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 d-flex mb-3">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <h6>very good words..</h6>
                                                        <div className="border mt-2 p-2 rounded">
                                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 d-flex mb-3">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <h6>very good words..</h6>
                                                        <div className="border mt-2 p-2 rounded">
                                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                                <div className="borderbox1 d-flex">
                                                    <div className="user-img me-2">
                                                        <img loading="lazy" src={img29} alt="userimg" className="avatar-40 rounded-circle" />
                                                    </div>
                                                    <div className="borderbox border rounded p-2">
                                                        <h6>very good words..</h6>
                                                        <div className="border mt-2 p-2 rounded">
                                                            <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                                        </div>
                                                        <Row className="mt-2">
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img30} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img31} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                            <Col lg="4" md="6" className="mt-1">
                                                                <img loading="lazy" src={img32} className="img-fluid rounded" alt="Responsive img" />
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="f4" className="fade show">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <ul className="d-flex justify-content-between
                                    list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img11} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">2 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img12} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">2 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>524</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img13} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img14} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>456</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img15} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img16} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img17} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img18} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img19} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>344</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                        <ul className="d-flex align-items-center justify-content-between list-inline mt-1">
                                                            <li className="col-lg-6">
                                                                <div className="d-flex align-items-center">
                                                                    <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img20} alt="" />
                                                                    <div className="media-body ms-1">
                                                                        <h6 className="mb-0"><Link to="#">Greta Life</Link></h6>
                                                                        <p className="mb-0">3 hours</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li className="col-lg-6 text-center d-flex">
                                                                <span>
                                                                    <h4>556</h4>
                                                                </span>
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25px" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                                    </svg>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </Tab.Pane>
                                        </Tab.Content>
                                    </nav>
                                </Card>
                            </Tab.Container>
                        </Col>
                        {/* </Tab.Container> */}
                        <Col lg="3">
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">New Photos</h4>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="profile-img-gallary p-0 m-0 list-unstyled">
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(1)} src={g1} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(2)} src={g2} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(3)} src={g3} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(4)} src={g4} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(5)} src={g5} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(6)} src={g6} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(7)} src={g7} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">
                                                <Image onClick={() => imageOnSlide(8)} src={g8} className="img-fluid" alt="photo-profile" loading="lazy" />
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card>
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Blog Posts</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled m-0 p-0">
                                        <li className="border-bottom pb-3">
                                            <Link to="#" className="h5">My Perfect Vacations in South America and Europe</Link>
                                            <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>
                                            <div className="post__date">
                                                <span className="published">
                                                    7 hours ago
                                                </span>
                                            </div>
                                        </li>
                                        <li className="pt-3">
                                            <Link to="#" className="h5">The Big Experience of Travelling Alone</Link>
                                            <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>
                                            <div className="post__date">
                                                <span className="published">
                                                    March 18th, at 6:52pm
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Trends For You</h4>
                                    </div>
                                    <i className="material-symbols-outlined md-18">
                                        settings
                                    </i>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex pb-2  border-bottom align-items-center">
                                        <div className="flex-grow-1">
                                            <h6>#ecommerce</h6>
                                            <p className="mb-0">71.4k Tweets</p>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                                <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                <Dropdown.Item href="#">block</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex  pb-2  pt-2 border-bottom align-items-center">
                                        <div className="flex-grow-1">
                                            <h6>#apple</h6>
                                            <small>68.2k Tweets</small>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                                <Dropdown.Item to="#">Unfollow</Dropdown.Item>
                                                <Dropdown.Item to="#">Unfriend</Dropdown.Item>
                                                <Dropdown.Item to="#">block</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="d-flex  pb-2  pt-2 border-bottom align-items-center">
                                        <div className="flex-grow-1">
                                            <h6>#ueta</h6>
                                            <small>63.8k Tweets</small>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                                <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                <Dropdown.Item href="#">block</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <li className="d-flex  pb-2  pt-2 border-bottom align-items-center">
                                        <div className="flex-grow-1">
                                            <h6>#music</h6>
                                            <small>61k Tweets</small>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle as="span" id="dropdownMenuButton9 " data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton9">
                                                <Dropdown.Item href="#">Unfollow</Dropdown.Item>
                                                <Dropdown.Item href="#">Unfriend</Dropdown.Item>
                                                <Dropdown.Item href="#">block</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    <div className="text-center">
                                        <p className="mb-0 font-weight-bold pt-3">SEE MORE</p>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Header className="d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">You should follow</h4>
                                    </div>
                                    <i className="material-symbols-outlined md-16">
                                        shortcut
                                    </i>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-inline m-0 p-0">
                                        <li className="d-flex mb-3 align-items-center">
                                            <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img33} alt="" />
                                            <div className="ms-2 flex-grow-1">
                                                <h6 className="d-flex align-items-center">Kate <i className="material-symbols-outlined ms-1 text-primary md-14">
                                                    check_circle
                                                </i></h6>
                                                <small>@kate14</small>
                                            </div>
                                            <button type="submit" className="btn bg-soft-primary smallbutton">follow</button>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img34} alt="" />
                                            <div className="ms-1 flex-grow-1">
                                                <h6 className="d-flex align-items-center">Snman <i className="material-symbols-outlined ms-1 text-primary md-14">
                                                    check_circle
                                                </i></h6>
                                                <small>@snow_man</small>
                                            </div>
                                            <button type="submit" className="btn bg-soft-primary smallbutton">follow</button>
                                        </li>
                                        <li className="d-flex mb-4 align-items-center">
                                            <img loading="lazy" className="img-fluid rounded-circle avatar-40" src={img35} alt="" />
                                            <div className="ms-1 flex-grow-1">
                                                <h6 className="d-flex align-items-center">Shara<i className="material-symbols-outlined ms-1 text-primary md-14">
                                                    check_circle
                                                </i></h6>
                                                <small>@Sharapova</small>
                                            </div>
                                            <button type="submit" className="btn bg-soft-primary smallbutton">follow</button>
                                        </li>
                                    </ul>
                                    <div className="text-center mt-2">
                                        <small>SEE ALL</small>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                </div>

            </Container>
        </>
    )
}
export default Profile1
