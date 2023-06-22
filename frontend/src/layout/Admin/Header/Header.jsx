import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";


const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="admin-header">
      <div className="header">
        <div className="header-body">
          <div className="btn">
            <button onClick={() => navigate("/")}>
              <i className="fa-solid fa-right-to-bracket"></i>
              GO TO SITE
            </button>
          </div>
        </div>
        <div className="user-item">

        </div>
      </div>
    </div>
  );
};

export default Header;