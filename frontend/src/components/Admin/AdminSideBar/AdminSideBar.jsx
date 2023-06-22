import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import './AdminSideBar.scss'
const Header = () => {
    const [listing, setListing] = useState(false);
    const [activity, setActivity] = useState(false);

    return (
        <div className="admin-navbar">
            <div className="nav">
                <div className="logo">
                    <Link to={"/admin"}>
                        <img src="https://github.com/EbulfezSadigov/Admin-Panel/blob/master/frontend/src/assets/logo-dark.png?raw=true" alt="logo" />
                    </Link>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="nav-menu">
                        <Link onClick={() => setListing(!listing)}>
                            <div className="icon">
                                <AiFillDashboard />
                            </div>
                            Listings
                        </Link>
                        {listing && (
                            <ul>
                                <li className="menu-item">
                                    <NavLink to={"/cinema"}>
                                        <i className="fa-solid fa-caret-right"></i> Add Listing
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={"/film"}>
                                        <i className="fa-solid fa-caret-right"></i> View Listing
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="nav-menu">
                        <Link onClick={() => setActivity(!activity)}>
                            <div className="icon">
                                <AiFillDashboard />
                            </div>
                            Activity
                        </Link>
                        {activity && (
                            <ul>
                                <li className="menu-item">
                                    <NavLink to={"/cinema"}>
                                        <i className="fa-solid fa-caret-right"></i> Add Activity
                                    </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={"/film"}>
                                        <i className="fa-solid fa-caret-right"></i> View Activity
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;