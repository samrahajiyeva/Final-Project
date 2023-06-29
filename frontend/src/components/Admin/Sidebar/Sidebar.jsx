import React, { useState } from 'react';
import './Sidebar.scss';
import { RxHamburgerMenu } from 'react-icons/rx'
import { GrClose } from 'react-icons/gr'

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`main ${isSidebarOpen ? '': 'close'}`} id="main">
      <div className="sidebar">
        <GrClose
          className="toggle-btn"
          id="menu"
          onClick={toggleSidebar}
        />
      </div>
      <div className="content">
        <header>
          {!isSidebarOpen && (
            <RxHamburgerMenu
              className="toggle-btn"
              id="menu"
              onClick={toggleSidebar}
            />
          )}
          <div className="header-logo">MyHeader</div>
        </header>
      </div>
    </div>
  );
}

export default Sidebar;
