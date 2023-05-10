import React from 'react'

//header
import Header from '../../components/partials/dashboard/HeaderStyle/header'

//sidebar
import RightSidebar from '../../components/partials/dashboard/SidebarStyle/rightsidebar'

//sidebar
import Sidebar from '../../components/partials/dashboard/SidebarStyle/sidebar'

//footer
import Footer from '../../components/partials/dashboard/FooterStyle/footer'

//default 
// import DefaultRouter from '../../router/default-router'

// share-offcanvas
// import ShareOffcanvas from '../../components/share-offcanvas'

//settingoffCanvas
import SettingOffCanvas from '../../components/setting/SettingOffCanvas'
import { Outlet } from 'react-router-dom'

const Default = () => {
    return (
        <>
                <Sidebar />
                <Header />
                <div className="main-content">
                    {/* <div id="content-page" className="content-page"> */}
                    {/* <DefaultRouter/> */}
                    <Outlet/>
                    {/* </div> */}
                </div>
                <RightSidebar />
            <Footer />
            <SettingOffCanvas/>
        </>
    )
}

export default Default
