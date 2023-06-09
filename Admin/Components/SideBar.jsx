import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div> <div className="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    {/* <img src="assets/logo.png" alt="logo" /> */}


                    <span className="tlogo">Give</span>

                    <span className="Andlogo">&</span>
                    <span className="tlogo">Get</span>

                </div>
                <i
                    onclick="closeSidebar()"
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link ">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Category management</a>
                </div>

                <div className="sidebar__link  ">
                    <i className="fa fa-building-o"></i>
                    <a href="#">Customer management</a>
                </div>
                <div className="sidebar__link  ">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Seller Management</a>
                </div>

                <div className="sidebar__link  active_menu_link">
                    <i className="fa fa-question"></i>
                    <Link to='#'>Requests</Link>
                </div>

                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SideBar