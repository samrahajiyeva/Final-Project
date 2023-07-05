import React, { useState } from 'react';
import './Sidebar.scss';
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'
import { TbActivityHeartbeat } from 'react-icons/tb'
import { FaMicroblog, FaShopify, FaGithub } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import img from '../../../images/pngwing.com.png'
import { RiAdminFill } from 'react-icons/ri'
import Content from '../Content/Content';
import { useCookies } from 'react-cookie';
import { LuLogOut } from 'react-icons/lu'

function Sidebar() {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log(cookies);
    removeCookie("jwt")
    navigate('/login')

  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`main ${isSidebarOpen ? '' : 'close'}`} id="main">
      <div className="sidebar fixed-sidebar">
        <div className="sidebar__top">
          <div>
            {isSidebarOpen ? (
              <GrClose
                className="toggle-btn"
                id="menu"
                onClick={toggleSidebar}
              />
            ) : (
              <div className="adminimg">
                <img src={img} alt="img" className='admin-logo-img' />
              </div>
            )}
          </div>
          <div className="logo-div">
            <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/04/logo-1-1-2-2.png" alt="logo" className='admin-logo' />
          </div>
        </div>

        <div className="container">
          <div className={`admin-items ${isSidebarOpen ? '' : 'icon-only'}`}>
            <ul>
              <li>
                <AiFillDashboard />
                {isSidebarOpen && <Link to="">Dashboard</Link>}
              </li>
              <li>
                <BsCardChecklist />
                {isSidebarOpen && <Link to="listingdata">Listing</Link>}
              </li>
              <li>
                <TbActivityHeartbeat />
                {isSidebarOpen && <Link to="activitydata">Activity</Link>}
              </li>
              <li>
                <FaMicroblog />
                {isSidebarOpen && <Link to="blogdata">Blog</Link>}
              </li>
              <li>
                <FaShopify />
                {isSidebarOpen && <Link to="shopdata">Shop</Link>}
              </li>
              <li className='userpage'>
                <FaUser />
                {isSidebarOpen && <Link to="userdata">Users</Link>}
              </li>
              <li className='adminpage'>
                <RiAdminFill />
                {isSidebarOpen && <Link to="admindata">Admin</Link>}
              </li>
              <li className='adminpage' onClick={handleLogout}>
                <LuLogOut />
                {isSidebarOpen && <Link to="admindata">Logout</Link>}
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="content">
        <header>
          <div className="admin-header-links">
            {!isSidebarOpen && (
              <RxHamburgerMenu id="hamburger"
                className="toggle-btn"
                onClick={toggleSidebar}
              />
            )}

            <Link to="https://github.com/" target='_blank' className='admin-github'>
              <FaGithub />
            </Link>
          </div>


          <div className="admin-img">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="admin__img" />
          </div>
        </header>
        <Content />
      </div>
    </div>
  );
}


export default Sidebar;
