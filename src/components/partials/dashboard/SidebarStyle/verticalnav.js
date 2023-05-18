import React, { useState, useContext, useEffect} from 'react'
import { ethers } from "ethers";
import LensHubAddress from "../../../../contracts/contract-address.json";
import LensHubArtifact from "../../../../contracts/LensHub.json";

//router
import { Link, useLocation } from 'react-router-dom'

//react-bootstrap
import { Accordion, useAccordionButton, AccordionContext, Nav,Tooltip,OverlayTrigger} from 'react-bootstrap'



function CustomToggle({ children, eventKey, onClick }) {

    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey, (active) => onClick({ state: !active, eventKey: eventKey }));

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <Link to="#" aria-expanded={isCurrentEventKey ? 'true' : 'false'} className="nav-link" role="button" onClick={(e) => {
            decoratedOnClick(isCurrentEventKey)
        }}>
            {children}
        </Link>
    );
}

const VerticalNav = React.memo(() => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [active, setActive]= useState('')
    const [totalUsers, setTotalUsers]= useState('')
    //location
    let location = useLocation();

    
  useEffect(() => {
    (async() => {
      users();
    }) ()
  }, []);


    async function users() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(LensHubAddress.LensHub, LensHubArtifact.abi, signer);

        try {
            const transaction = await contract.totalSupply();
            const receipt = await transaction.wait();
            console.log(receipt)
            //   if (receipt.status === 0) {
            //       throw new Error("Transaction failed");
            //   } else {
            //     setStatus("Successful!")
            //     setTimeout(() => {
            //       handleClose()
            //     }, 3000);
            //   }
    
          } catch (error) {
            
          } finally {
      
          }
    }


    return (
        <React.Fragment>
            <Accordion as="ul" className="navbar-nav iq-main-menu" id="sidebar-menu">
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">Total Users:</span>
                        <span className="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
                    </Link>
                </li>
                <li  className={`${location.pathname === '/' ? 'active' : ''} nav-item `}>
                    <Link className={`${location.pathname === '/' ? 'active' : ''} nav-link `} aria-current="page" to="/">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Newsfeed</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                newspaper
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Newsfeed</span>
                    </Link>
                </li>
                <Accordion.Item as="li" eventKey="profile-menu" bsPrefix={`nav-item ${active === 'profile' ? 'active' : '' } `} onClick={() => setActive('profile')} >
                    <CustomToggle eventKey="profile-menu" onClick={(activeKey) =>  setActiveMenu(activeKey) }>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Profiles</Tooltip>}>
                            <i className="icon material-symbols-outlined">
                                person
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Profiles</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="profile-menu" >
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/profile' ? 'active' : ''} nav-link`} to="/dashboard/app/profile">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile</Tooltip>}>
                                     <i className="sidenav-mini-icon"> P </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile </span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/profiles/profile1' ? 'active' : ''} nav-link`} to="/dashboards/profiles/profile1">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile 1</Tooltip>}>
                                     <i className="sidenav-mini-icon"> P1 </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile 1</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/profiles/profile2' ? 'active' : ''} nav-link`} to="/dashboards/profiles/profile2">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile 2</Tooltip>}>
                                     <i className="sidenav-mini-icon"> P2 </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile 2</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/profiles/profile3' ? 'active' : ''} nav-link`} to="/dashboards/profiles/profile3">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile 3</Tooltip>}>
                                     <i className="sidenav-mini-icon"> P3 </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile 3</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/profile-images' ? 'active' : ''} nav-link`} to="/dashboards/app/profile-images">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile Image</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PI </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile Image</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/profile-videos' ? 'active' : ''} nav-link`} to="/dashboards/app/profile-videos">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile Video</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PV </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile Video</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/profile-events' ? 'active' : ''} nav-link`} to="/dashboards/app/profile-events">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile Events</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PE </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile Events</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/profile-badges' ? 'active' : ''} nav-link`} to="/dashboard/app/profile-badges">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile Badges</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PB </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile Badges</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/profile-forum' ? 'active' : ''} nav-link`} to="/dashboard/app/profile-forum">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Profile Forum</Tooltip>}>
                                     <i className="sidenav-mini-icon"> PF </i>
                                    </OverlayTrigger>
                                    <span className="item-name"> Profile Forum</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="friends-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="friends-menu" onClick={(activeKey) => setActiveMenu(activeKey)}>
                        
                        <OverlayTrigger placement="right" overlay={<Tooltip>Friend</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            people
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Friend</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="friends-menu" >
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/app/friend-list' ? 'active' : ''} nav-link`} to="/dashboards/app/friend-list">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Friend List</Tooltip>}>  
                                      <i className="sidenav-mini-icon"> FL </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Friend List</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/friend-profile' ? 'active' : ''} nav-link`} to="/dashboard/app/friend-profile">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Friend Profile</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> FP </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Friend Profile</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/app/friend-request' ? 'active' : ''} nav-link`} to="/dashboard/app/friend-request">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Friend Request</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> FR </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Friend Request</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/groups' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/groups">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Group</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            groups
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Group</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/notification' ? 'active' : ''} nav-link `} aria-current="page"  to="/dashboard/app/notification">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Notification</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            notifications
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Notification</span>
                    </Link>
                </Nav.Item>
                <li  className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">FEATURED</span>
                        <span className="mini-icon" data-bs-toggle="tooltip" title="Social" data-bs-placement="right">-</span>
                    </Link>
                </li>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/file' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/app/file">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Files</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           insert_drive_file
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Files</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/chat/index' ? 'active' : ''} nav-link `} aria-current="page" to="/chat/index" target='_blank noopener,noreferrer'>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Chat</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            message
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Chat</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/todo' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboard/app/todo">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Todo</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           task_alt
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Todo</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/calendar' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/calendar">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Calendar</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           calendar_month
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Calendar</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/birthday' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/birthday">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Birthday</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           cake
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Birthday</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/weather' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/weather">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Weather</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           thunderstorm
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Weather</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboards/app/music' ? 'active' : ''} nav-link `} aria-current="page" to="/dashboards/app/music">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Music</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                           play_circle
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Music</span>
                    </Link>
                </Nav.Item>
                <li className="nav-item static-item">
                    <Link className="nav-link static-item disabled" to="#" tabIndex="-1">
                        <span className="default-icon">OTHER PAGES</span>
                        <span className="mini-icon">-</span>
                    </Link>
                </li>
                <Accordion.Item as="li" eventKey="market-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="market-menu" onClick={(activeKey) => setActiveMenu(activeKey)}>
                        
                        <OverlayTrigger placement="right" overlay={<Tooltip>Market Place</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            poll
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Market Place</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="market-menu" >
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/market-place/market1' ? 'active' : ''} nav-link`} to="/dashboards/market-place/market1">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Market1</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> M1 </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Market1</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/market-place/market2' ? 'active' : ''} nav-link`} to="/dashboards/market-place/market2">
                                    <i className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Market2</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> M2 </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Market2</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="blog-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="blog-menu" onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Blog</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            article
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Blog</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="blog-menu">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/blog/blog-grid' ? 'active' : ''} nav-link`} to="/dashboard/blog/blog-grid">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Blog Grid</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> BG  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Blog Grid</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/blog/blog-list' ? 'active' : ''} nav-link`} to="/dashboard/blog/blog-list">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Blog List</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> BL  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Blog List</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/blog/blog-detail' ? 'active' : ''} nav-link`} to="/dashboard/blog/blog-detail">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Blog Detail</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> BD  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Blog Detail</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="store-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="store-menu" active={activeMenu === 'store-menu' ? true : false} onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Store</Tooltip>}>  
                            <i className="icon material-symbols-outlined">
                                storefront
                            </i>
                        </OverlayTrigger>
                        <span className="item-name">Store</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="store-menu">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/store/store-category-grid' ? 'active' : ''} nav-link`} to="/dashboards/store/store-category-grid">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Category Grid</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> CG  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Category Grid</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/store/store-category-list' ? 'active' : ''} nav-link`} to="/dashboards/store/store-category-list">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Category list</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> CL  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Category list</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/store/store-detail' ? 'active' : ''} nav-link`} to="/dashboards/store/store-detail">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Store Detail</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> SD  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Store Detail</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboards/store/store-checkout' ? 'active' : ''} nav-link`} to="/dashboards/store/store-checkout">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Checkout</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> CO  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Checkout</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="mail-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="mail-menu" onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Mail</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                           mail_outline
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Mail</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="mail-menu">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/Email/email' ? 'active' : ''} nav-link`} to="/dashboard/Email/email">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Inbox</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> I  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Inbox</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/Email/email-compose' ? 'active' : ''} nav-link`} to="/dashboard/Email/email-compose">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Email Compose</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> EC  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Email Compose</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="sidebar-special" bsPrefix="nav-item">
                    <CustomToggle eventKey="sidebar-special" onClick={(activeKey) => setActiveMenu(activeKey)}> 
                        <OverlayTrigger placement="right" overlay={<Tooltip>Special Pages</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            assignment
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Special Pages</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="sidebar-special" >
                        <ul className="sub-nav">
                           <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/extrapages/pages-timeline' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/pages-timeline">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Timeline</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> T </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Timeline</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/extrapages/pages-invoice' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/pages-invoice">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Invoice</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> I </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Invoice</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/extrapages/pages-pricing' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/pages-pricing">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Pricing</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> P </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Pricing</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/extrapages/pages-pricing-one' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/pages-pricing-one">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Pricing1</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> P1 </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Pricing1</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/extrapages/pages-faq' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/pages-faq">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Faq</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> F </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Faq</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="auth-menu" bsPrefix="nav-item">
                    <CustomToggle eventKey="auth-menu" onClick={(activeKey) => setActiveMenu(activeKey)}> 
                        <OverlayTrigger placement="right" overlay={<Tooltip>Auth</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            library_books
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Auth</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="auth-menu" >
                        <ul className="sub-nav">
                           <Nav.Item as="li">
                                <Link className={`${location.pathname === '/auth/sign-in' ? 'active' : ''} nav-link`} to="/auth/sign-in">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Login</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> L </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Login</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/auth/sign-up' ? 'active' : ''} nav-link`} to="/auth/sign-up">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Register</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> R </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Register</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/auth/recoverpw' ? 'active' : ''} nav-link`} to="/auth/recoverpw">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Recover Password</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> RP </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Recover Password</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/auth/confirm-mail' ? 'active' : ''} nav-link`} to="/auth/confirm-mail">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Confirm Mail</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> CM </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Confirm Mail</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/auth/lock-screen' ? 'active' : ''} nav-link`} to="/auth/lock-screen">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Lock Screen</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> LS </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Lock Screen</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Accordion.Item as="li" eventKey="utilities-error" bsPrefix="nav-item">
                    <CustomToggle eventKey="utilities-error" active={activeMenu === 'utilities-error' ? true : false} onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger placement="right" overlay={<Tooltip>Utilities</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            turned_in_not
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Utilities</span>
                        <i className="right-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="utilities-error">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/errors/error404' ? 'active' : ''} nav-link`} to="/errors/error404">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Error 404</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> E  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Error 404</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/errors/error500' ? 'active' : ''} nav-link`} to="/errors/error500">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Error 500</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> E  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Error 500</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/extra-pages/pages-maintenance' ? 'active' : ''} nav-link`} to="/extra-pages/pages-maintenance">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger placement="right" overlay={<Tooltip>Maintenance</Tooltip>}>  
                                        <i className="sidenav-mini-icon"> M  </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Maintenance</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/extrapages/blankpage' ? 'active' : ''} nav-link`} to="/dashboard/extrapages/blankpage">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Blank Page</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            check_box_outline_blank
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Blank Page</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/dashboard/app/admin' ? 'active' : ''} nav-link`} to="/dashboard/app/admin">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Admin & Permission</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            admin_panel_settings
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Admin</span>
                    </Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link className={`${location.pathname === '/extra-pages/pages-comingsoon' ? 'active' : ''} nav-link`} to="/extra-pages/pages-comingsoon">
                        <OverlayTrigger placement="right" overlay={<Tooltip>Comming Soon</Tooltip>}>  
                        <i className="icon material-symbols-outlined">
                            fiber_smart_record
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Pages Comingsoon</span>
                    </Link>
                </Nav.Item>
                <li><hr className="hr-horizontal" /></li>
                
                <Accordion.Item as="li" eventKey="sidebar-icons" bsPrefix="nav-item mb-5">
                    <CustomToggle eventKey="sidebar-icons" onClick={(activeKey) => setActiveMenu(activeKey)}>
                        <OverlayTrigger  placement="right" overlay={<Tooltip>Icons</Tooltip>}>
                        <i className="icon material-symbols-outlined">
                            error_outline
                        </i>
                        </OverlayTrigger>
                        <span className="item-name">Icons</span>
                        <i className="right-icon material-symbols-outlined">chevron_right</i>
                    </CustomToggle>
                    <Accordion.Collapse eventKey="sidebar-icons">
                        <ul className="sub-nav">
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/icon/fontawesome-5' ? 'active' : ''} nav-link`} to="/dashboard/icon/fontawesome-5">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger  placement="right" overlay={<Tooltip>Font Awesome 5</Tooltip>}>
                                        <i className="sidenav-mini-icon"> F </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Font Awesome 5</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/icon/lineawesome' ? 'active' : ''} nav-link`} to="/dashboard/icon/lineawesome">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger  placement="right" overlay={<Tooltip>Line Awesome</Tooltip>}>
                                        <i className="sidenav-mini-icon"> L </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Line Awesome</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/icon/remixicon' ? 'active' : ''} nav-link`} to="/dashboard/icon/remixicon">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger  placement="right" overlay={<Tooltip>Remixicon</Tooltip>}>
                                        <i className="sidenav-mini-icon"> R </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Remixicon</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Link className={`${location.pathname === '/dashboard/icon/material' ? 'active' : ''} nav-link`} to="/dashboard/icon/material">
                                    <i className="icon">
                                        <svg className="icon-10" xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 24 24" fill="currentColor">
                                            <g>
                                                <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                                            </g>
                                        </svg>
                                    </i>
                                    <OverlayTrigger  placement="right" overlay={<Tooltip>Material</Tooltip>}>
                                        <i className="sidenav-mini-icon"> M </i>
                                    </OverlayTrigger>
                                    <span className="item-name">Material</span>
                                </Link>
                            </Nav.Item>
                        </ul>
                    </Accordion.Collapse>
                </Accordion.Item>
            </Accordion>
        </React.Fragment>
    )
})

export default VerticalNav
