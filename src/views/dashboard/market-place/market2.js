import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {Container, Row,Col, Nav,Tab, Button} from 'react-bootstrap'
import Card from '../../../components/Card'
import ReactFsLightbox from 'fslightbox-react';

import imgn56 from '../../../assets/images/page-img/56.jpg'
import imgp11 from '../../../assets/images/user/11.png'
import imgp08 from '../../../assets/images/icon/08.png'
import imgp09 from '../../../assets/images/icon/09.png'
import imgp10 from '../../../assets/images/icon/10.png'
import imgp13 from '../../../assets/images/icon/13.png'
import imgn51 from '../../../assets/images/page-img/51.jpg'
import imgn59 from '../../../assets/images/page-img/59.jpg'
import imgn55 from '../../../assets/images/page-img/55.jpg'
import imgn54 from '../../../assets/images/page-img/54.jpg'
import imgn53 from '../../../assets/images/page-img/53.jpg'
import imgn57 from '../../../assets/images/page-img/57.jpg'
import imgn58 from '../../../assets/images/page-img/58.jpg'
import imgn60 from '../../../assets/images/page-img/60.jpg'
import imgn61 from '../../../assets/images/page-img/61.jpg'
import imgn62 from '../../../assets/images/page-img/62.jpg'
import imgn64 from '../../../assets/images/page-img/64.jpg'
import imgn02 from '../../../assets/images/user/02.jpg'
import imgn03 from '../../../assets/images/user/03.jpg'

// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;

const Market2=()=>{
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

const socialcard = [
    {
        number: 1,
        image: imgn51,
        discount: 40,
        name: 'Fragments',
        count: 0.080,
        pagecount:  '1 of 56',
        bid: 0.080,
        hours: '6 hours ago',
        like: 674
    },
    {
        number: 2,
        image: imgn59,
        discount: 80,
        name: 'Shine brights_00',
        count: 0.003,
        pagecount:  '1 of 2',
        bid: 0.004,
        hours: '8 hours ago',
        like: 36
    },
    {
        number: 3,
        image: imgn55,
        discount: 30,
        name: 'Anonimoic face',
        count: 0.034,
        pagecount:  '1 of 56',
        bid: 0.045,
        hours: '8 days ago',
        like: '1k'
    },
    {
        number: 4,
        image: imgn54,
        discount: 70,
        name: 'Fire magic',
        count: 0.009,
        pagecount:  '1 of 1',
        bid: 0.009,
        hours: '12 hours ago',
        like: 786
    },
    {
        number: 6,
        image: imgn53,
        discount: 50,
        name: 'Smileface',
        count: 0.045,
        pagecount:  '1 of 1',
        bid: 0.048,
        hours: '1 days ago',
        like: '3k'
    }
]

const collectioncard = [
    {
        number: 6,
        image: imgn56,
        name: 'Fragments',
        count: 0.080,
        pagecount:  '1 of 56',
        bid: 0.080,
        hours: '6 hours ago',
        like: 674
    },
    {
        number: 7,
        image: imgn57,
        name: 'Shine brights_00',
        count: 0.003,
        pagecount:  '1 of 2',
        bid: 0.004,
        hours: '8 hours ago',
        like: 36
    },
    {
        number: 8,
        image: imgn58,
        discount: 30,
        name: 'Anonimoic face',
        count: 0.034,
        pagecount:  '1 of 56',
        bid: 0.045,
        hours: '8 days ago',
        like: '1k'
    },
    {
        number: 9,
        image: imgn59,
        name: 'Fire magic',
        count: 0.009,
        pagecount:  '1 of 1',
        bid: 0.009,
        hours: '12 hours ago',
        like: 786
    },
    {
        number: 10,
        image: imgn60,
        name: 'Edition _02',
        count: 0.002,
        pagecount:  ' 1 of 6',
        bid: 0.080,
        hours: '12 hours ago',
        like: 45
    },
    {
        number: 11,
        image: imgn61,
        name: 'Smileface',
        count: 0.045,
        pagecount:  '1 of 1',
        bid: 0.048,
        hours: '1 days ago',
        like: '3k'
    }
]

const likephoto = [
    {
        number: 12,
        image: imgn62,
        hours: '6 hours ago',
        like: 674
    },
    {
        number: 13,
        image: imgn59,
        hours: '6 hours ago',
        like: 674
    },
    {
        number: 14,
        image: imgn55,
        hours: '6 hours ago',
        like: 674
    }
]

const like =[        
    {
        number: 15,
        image: imgn59,
        name: 'Fire magic',
        count: 0.009,
        pagecount:  '1 of 1',
        bid: 0.009,
        hours: '12 hours ago',
        like: 786
    },
    {
        number: 16,
        image: imgn60,
        name: 'Edition _02',
        count: 0.002,
        pagecount:  ' 1 of 6',
        bid: 0.080,
        hours: '12 hours ago',
        like: 45
    },
    {
        number: 17,
        image: imgn61,
        name: 'Smileface',
        count: 0.045,
        pagecount:  '1 of 1',
        bid: 0.048,
        hours: '1 days ago',
        like: '3k'
    }
]

const activity = [
    {
        number: 18,
        image: imgn51,
        name: 'Fragments',
        count: 0.080,
        pagecount:  '1 of 56',
        bid: 0.080,
        hours: '6 hours ago',
        like: 674
    },
    {
        number: 19,
        image: imgn59,
        discount: 80,
        name: 'Shine brights_00',
        count: 0.003,
        pagecount:  '1 of 2',
        bid: 0.004,
        hours: '8 hours ago',
        like: 36
    },
    {
        number: 20,
        image: imgn64,
        discount: 80,
        name: 'Shine brights_00',
        count: 0.003,
        pagecount:  '1 of 2',
        bid: 0.004,
        hours: '8 hours ago',
        like: 36
    },
    {
        number: 21,
        image: imgn59,
        name: 'Fire magic',
        count: 0.009,
        pagecount:  '1 of 1',
        bid: 0.009,
        hours: '12 hours ago',
        like: 786
    },
    {
        number: 22,
        image: imgn60,
        name: 'Edition _02',
        count: 0.002,
        pagecount:  ' 1 of 6',
        bid: 0.080,
        hours: '12 hours ago',
        like: 45
    },
    {
        number: 23,
        image: imgn61,
        name: 'Smileface',
        count: 0.045,
        pagecount:  '1 of 1',
        bid: 0.048,
        hours: '1 days ago',
        like: '3k'
    }
]

    return(
        <>
            <FsLightbox
                toggler={imageController.toggler}
                sources={[imgn51,imgn59,imgn55,imgn54,imgn53,imgn56,imgn57,imgn58,imgn59,imgn60,imgn61,imgn62,imgn59,imgn55,imgn59,imgn60,imgn61,imgn51,imgn59,imgn64,imgn59,imgn60,imgn61]}
                slide={imageController.slide}
            />
            <div id='content-page' className='content-page'>
            <Container>
                <Row>
                    <Col lg="4">
                        <Card>
                            <div className="top-bg-image">
                                <img loading="lazy" src={imgn59} className="img-fluid" alt="Responsive" />
                            </div>
                            <Card.Body className="text-center">
                            <div className="group-icon">
                            <img loading="lazy" src={imgp11} alt="profile-img" className="avatar-130 img-fluid"/>
                            </div>
                            <h2 className="text-center">Roy</h2>
                            <h5>098hgdvb53562...9056
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </h5>
                            <div className="mt-2">
                                <b>A good boy with a bed reputation</b>
                            </div>
                            <div className="mt-0">
                                <p>createing arts,game,photos for NFT platforms. folllow me and stay in trend</p>
                            </div>
                            <div>
                                <ul className=" d-flex ms-4 list-inline justify-content-center">
                                <li className="pe-3">
                                    <Link to="#"><img loading="lazy" src={imgp08} className="img-fluid rounded" alt="facebook"/></Link>
                                </li>
                                <li className="pe-3">
                                    <Link to="#"><img loading="lazy" src={imgp09} className="img-fluid rounded" alt="Twitter"/></Link>
                                </li>
                                <li className=" pe-3">
                                    <Link to="#"><img loading="lazy" src={imgp10} className="img-fluid rounded" alt="Instagram"/></Link>
                                </li>
                                <li className="pe-3">
                                    <Link to="#"><img loading="lazy" src={imgp13} className="img-fluid rounded" alt="linkedin"/></Link>
                                </li>
                                </ul>
                            </div>
                            <div className="d-flex d-flex justify-content-between">
                                Following:
                                <small>346</small>
                            </div>
                            <div className="d-flex d-flex justify-content-between">
                                Followers:
                                <small>2k</small>
                            </div>
                            <Button variant="primary rounded-pill w-100 mt-3">folllow</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="8">
                        <Tab.Container defaultActiveKey="f1">  
                            <Card className="cardnavbar">  
                                <div className="user-tabing">
                                    <Nav  variant="pills"  className="d-flex align-items-center justify-content-center profile-feed-items p-0 m-0 round">
                                        <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                  <Nav.Link  eventKey="f1" href="#">On sale</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                  <Nav.Link className="" eventKey="f2" href="#">Collectibles</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                  <Nav.Link className="" eventKey="f3" href="#">Created</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="col-12 col-sm-2 p-0">
                  <Nav.Link className="" eventKey="f4" href="#">Liked</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="col-12 col-sm-3 p-0">
                  <Nav.Link className="" eventKey="f5" href="#">Activity</Nav.Link>
                  </Nav.Item>
                                    </Nav>
                                </div>
                            </Card>
                            <Tab.Content className="forum-content">               
                            <Tab.Pane eventKey="f1">
                            <Row>
                                {
                                    socialcard.map((item,index) => {
                                        return(
                                            <Col sm="4" key={index}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="event-images position-relative">
                                                            <Link onClick={() => imageOnSlide(item.number)} to="#">
                                                            <img loading="lazy" src={item.image} className="img-fluid" alt="Responsive" />
                                                            </Link>
                                                        </div>
                                                        <span className="badge bg-danger image-offer-btn">{item.discount}% off</span>
                                                        <div className="mt-3">
                                                            <h5>{item.name}</h5>
                                                        </div>
                                                        <div className="mt-1">
                                                            <small><small className="text-primary">{item.count} ETH</small> {item.pagecount}</small>
                                                        </div>
                                                        <div className="mt-0">
                                                            <small>Highest bid:<small className="text-primary ms-1">{item.bid} ETH</small></small>
                                                        </div>
                                                        <hr className="hr-horizontal"/>
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg><small className="ms-1">{item.hours}</small>
                                                                </small>
                                                            </div>
                                                                <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                </svg><small className="ms-1">{item.like}</small></small>
                                                        </div>
                                                    </Card.Body>        
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="f2">
                            <Row>
                                {
                                    collectioncard.map((item,index)=> {
                                        return(
                                            <Col sm="4" key={index}>
                                                <Card>
                                                    <Card.Body>
                                                        <div className="event-images position-relative">
                                                            <Link onClick={() => imageOnSlide(item.number)} to="#">
                                                            <img loading="lazy" src={item.image} className="img-fluid" alt="Responsive" />
                                                            </Link>
                                                        </div>
                                                        <div className="mt-3">
                                                            <h5>{item.name}</h5>
                                                        </div>
                                                        <div className="mt-1">
                                                            <small><small className="text-primary">{item.count} ETH</small> {item.pagecount}</small>
                                                        </div>
                                                        <div className="mt-0">
                                                            <small>Highest bid:<small className="text-primary ms-1">{item.bid} ETH</small></small>
                                                        </div>
                                                        <hr className="hr-horizontal"/>
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                    </svg><small className="ms-1">{item.hours}</small>
                                                                </small>
                                                            </div>
                                                                <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                </svg><small className="ms-1">{item.like}</small></small>
                                                        </div>
                                                    </Card.Body>        
                                                </Card>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="f3">
                                <Card>
                                    <Card.Header className="d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">your comments</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn02} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>35 mins</small></span>
                                            </div>
                                        </div>
                                        <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn03} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>15 mins</small></span>
                                            </div>
                                        </div>
                                        <p>great pictures!!</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn02} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>35 mins</small></span>
                                            </div>
                                        </div>
                                        <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn03} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>15 mins</small></span>
                                            </div>
                                        </div>
                                        <p>great pictures!!</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn02} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>35 mins</small></span>
                                            </div>
                                        </div>
                                        <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn03} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>15 mins</small></span>
                                            </div>
                                        </div>
                                        <p>great pictures!!</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn02} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>35 mins</small></span>
                                            </div>
                                        </div>
                                        <p>In any moment of decsion, the best thing of you can do thing,the next best thing is the wrong thing,and the worst thing of</p>
                                        <div className="align-items-center d-flex borderbox1 flex-wrap">
                                            <img loading="lazy" src={imgn03} alt="userimg" className="avatar-40 rounded-circle" />
                                            <h6 className="ms-2">Theodocre</h6>
                                            <Link className="ms-3" to="#">@john_ram</Link>
                                            <div className="ms-auto d-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                            </svg>
                                            <span className="mx-1"><small>15 mins</small></span>
                                            </div>
                                        </div>
                                        <p>great pictures!!</p>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="f4">
                                <Row>
                                {
                                        likephoto.map((item,index)=> {
                                            return(
                                                <Col sm="4" key={index}>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className="event-images position-relative">
                                                                <Link onClick={() => imageOnSlide(item.number)} to="#">
                                                                <img loading="lazy" src={item.image} className="img-fluid" alt="Responsive" />
                                                                </Link>
                                                            </div>
                                                            <hr className="hr-horizontal"/>
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg><small className="ms-1">{item.hours}</small>
                                                                    </small>
                                                                </div>
                                                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                    </svg><small className="ms-1">{item.like}</small></small>
                                                            </div>
                                                        </Card.Body>        
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                    {
                                        like.map((item,index)=> {
                                            return(
                                                <Col sm="4" key={index}>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className="event-images position-relative">
                                                                <Link onClick={() => imageOnSlide(item.number)} to="#">
                                                                <img loading="lazy" src={item.image} className="img-fluid" alt="Responsive" />
                                                                </Link>
                                                            </div>
                                                            <div className="mt-3">
                                                                <h5>{item.name}</h5>
                                                            </div>
                                                            <div className="mt-1">
                                                                <small><small className="text-primary">{item.count} ETH</small> {item.pagecount}</small>
                                                            </div>
                                                            <div className="mt-0">
                                                                <small>Highest bid:<small className="text-primary ms-1">{item.bid} ETH</small></small>
                                                            </div>
                                                            <hr className="hr-horizontal"/>
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" className="mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg><small className="ms-1">{item.hours}</small>
                                                                    </small>
                                                                </div>
                                                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                    </svg><small className="ms-1">{item.like}</small></small>
                                                            </div>
                                                        </Card.Body>        
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="f5">
                                <Row>
                                {
                                        activity.map((item,index)=> {
                                            return(
                                                <Col sm="4" key={index}>
                                                    <Card>
                                                        <Card.Body>
                                                            <div className="event-images position-relative">
                                                                <Link onClick={() => imageOnSlide(item.number)} to="#">
                                                                <img loading="lazy" src={item.image} className="img-fluid" alt="Responsive" />
                                                                </Link>
                                                            </div>
                                                            <div className="mt-1">
                                                                <h5>{item.name}</h5>
                                                            </div>
                                                            <div className="mt-1">
                                                                <small><small className="text-primary">{item.count} ETH</small> {item.pagecount}</small>
                                                            </div>
                                                            <div className="mt-0">
                                                                <small>Highest bid:<small className="text-primary ms-1">{item.bid} ETH</small></small>
                                                            </div>
                                                            <hr className="hr-horizontal"/>
                                                            <div className="d-flex justify-content-between">
                                                                <div>
                                                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="12px" className="mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                        </svg><small className="ms-1">{item.hours}</small>
                                                                    </small>
                                                                </div>
                                                                    <small><svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                                    </svg><small className="ms-1">{item.like}</small></small>
                                                            </div>
                                                        </Card.Body>        
                                                    </Card>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
</div>
        </>
    )
}
export default Market2