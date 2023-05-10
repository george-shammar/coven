import React from 'react'
import {Row,Col,Image,Container} from 'react-bootstrap'
import Card from '../../../components/Card'
import {Link} from 'react-router-dom'

// img
import blog6 from '../../../assets/images/blog/01.jpg'
import blog2 from '../../../assets/images/blog/02.jpg'
import blog3 from '../../../assets/images/blog/03.jpg'
import blog4 from '../../../assets/images/blog/04.jpg'
import blog5 from '../../../assets/images/blog/05.jpg'
import blog7 from '../../../assets/images/blog/06.jpg'
import blog8 from '../../../assets/images/blog/07.jpg'
import blog9 from '../../../assets/images/blog/08.jpg'

import icon1 from '../../../assets/images/icon/01.png'
import icon2 from '../../../assets/images/icon/02.png'
import icon3 from '../../../assets/images/icon/03.png'
import icon4 from '../../../assets/images/icon/07.png'

const BlogList = () => {
   return(
      <>
         <div id='content-page' className='content-page'>
         <Container>
            <Row>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog6} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="blog-meta d-flex align-items-center justify-content-between mb-2">
                                    <div className="date"><Link to="#" tabIndex="-1">4 Month ago</Link>
                                    </div>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                          <Link to="#" className="iq-media">
                                       <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center"><i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments</div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list list-even">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="date mb-2">
                                    <Link to="#" tabIndex="-1">4 Month ago</Link>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More<i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center"><i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments</div>
                                 </div>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog2} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog3} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="blog-meta d-flex align-items-center justify-content-between mb-2">
                                    <div className="date"><Link to="#" tabIndex="-1">4 Month ago</Link>
                                    </div>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments
                                    </div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list list-even">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="date mb-2">
                                    <Link to="#" tabIndex="-1">4 Month ago</Link>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center"><i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments</div>
                                 </div>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog4} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>

               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog5} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="blog-meta d-flex align-items-center justify-content-between mb-2">
                                    <div className="date">
                                       <Link to="#" tabIndex="-1">4 Month ago</Link>
                                    </div>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center"><i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments</div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list list-even">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="date mb-2">
                                    <Link to="#" tabIndex="-1">4 Month ago</Link>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center"><i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments</div>
                                 </div>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog7} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog8} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="blog-meta d-flex align-items-center justify-content-between mb-2">
                                    <div className="date">
                                       <Link to="#" tabIndex="-1">4 Month ago</Link>
                                    </div>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments
                                    </div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
               <Col lg="12">
                  <Card className="card-block card-stretch card-height blog-list list-even">
                     <Card.Body>
                        <Row className="align-items-center">
                           <Col md="6">
                              <div className="blog-description rounded p-2">
                                 <div className="date mb-2">
                                    <Link to="#" tabIndex="-1">4 Month ago</Link>
                                 </div>
                                 <h5 className="mb-2">Containing coronavirus spread comes</h5>
                                 <p>In the blogpost, the IMF experts observed, "Success in containing the virus comes at the price of slowing economic activity."</p> <Link to="#" tabIndex="-1" className="d-flex align-items-center">Read More <i className="material-symbols-outlined md-14 filled">arrow_forward_ios</i></Link>
                                 <div className="group-smile mt-4 d-flex flex-wrap align-items-center justify-content-between position-right-side">
                                    <div className="iq-media-group">
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon1} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon2} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon3} alt=""/>
                                       </Link>
                                       <Link to="#" className="iq-media">
                                          <Image className="img-fluid rounded-circle" src={icon4} alt=""/>
                                       </Link>
                                    </div>                                 
                                    <div className="comment d-flex align-items-center">
                                    <i className="material-symbols-outlined me-2 md-18">chat_bubble_outline</i>7 comments
                                    </div>
                                 </div>
                              </div>
                           </Col>
                           <Col md="6">
                              <div className="image-block">
                                 <Image src={blog9} className="img-fluid rounded w-100" alt="blog-img"/>
                              </div>
                           </Col>
                        </Row>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
      </>
   )
}

export default BlogList