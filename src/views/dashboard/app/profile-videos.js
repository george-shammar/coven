import React,{useState} from 'react'
import { Container, Row, OverlayTrigger, Tooltip, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ReactFsLightbox from 'fslightbox-react';
import img9 from '../../../assets/images/page-img/profile-bg9.jpg'

//profile-header
import ProfileHeader from '../../../components/profile-header'
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
import video from '../../../assets/images/plugins/video-2.mp4'
import video1 from '../../../assets/images/plugins/video-3.mp4'
import video2 from '../../../assets/images/plugins/video-1.mp4'

// Fslightbox plugin
const FsLightbox = ReactFsLightbox.default ? ReactFsLightbox.default : ReactFsLightbox;

const ProfileVideos =() =>{
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
                sources={[video,video1,video2,video2,video1,video,video1,video2,video,video2,video,video1,video,video1,video2]}
                slide={imageController.slide}
            />
            <ProfileHeader title="Your Videos" img={img9}/>
               <div id="content-page" className="content-page">
                  <Container>
                  <Row>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(2)} to="#">
                           <img src={img54} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(3)} to="#">
                              <img src={img51} className="img-fluid rounded" alt="Responsive "/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(4)} to="#">
                              <img src={img52} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(5)} to="#">
                              <img src={img55} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(6)} to="#">
                              <img src={img56} className="img-fluid rounded" alt="Responsive "/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(7)} to="#">
                              <img src={img57} className="img-fluid rounded" alt="Responsive "/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(8)} to="#">
                              <img src={img58} className="img-fluid rounded" alt="Responsive "/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(9)} to="#">
                              <img src={img60} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(10)} to="#">
                              <img src={img59} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(11)} to="#">
                              <img src={img51} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(12)} to="#">
                              <img src={img52} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(13)} to="#">
                              <img src={img53} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(14)} to="#">
                              <img src={img54} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(15)} to="#">
                              <img src={img55} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                     <Col lg="4" md="6">
                        <div className="user-images position-relative overflow-hidden mb-3">
                           <Link onClick={() => imageOnSlide(1)} to="#">
                              <img src={img56} className="img-fluid rounded" alt="Responsive"/>
                           </Link>
                           <div className="image-hover-data">
                              <div className="product-elements-icon">
                                 <ul className="d-flex align-items-center m-0 p-0 list-inline">
                                    <li className="">
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 60 
                                          <i className="material-symbols-outlined md-14 ms-1">
                                             thumb_up
                                          </i> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 30 
                                          <span className="material-symbols-outlined  md-14 ms-1">
                                             chat_bubble_outline
                                          </span> 
                                       </Link>
                                    </li>
                                    <li>
                                       <Link to="#" className="pe-3 text-white d-flex align-items-center"> 10 
                                          <span className="material-symbols-outlined md-14 ms-1">
                                             forward
                                          </span>
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <OverlayTrigger placement="top" overlay={<Tooltip>Edit or Remove</Tooltip>}>
                              <Link to="#" className="image-edit-btn material-symbols-outlined md-16">
                                 drive_file_rename_outline
                              </Link>
                           </OverlayTrigger>
                        </div>
                     </Col>
                  </Row>
               </Container>
               </div>
        </>
  )

}

export default ProfileVideos;