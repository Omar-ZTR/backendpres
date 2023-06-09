import React from 'react'

const NavDash = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="nav_icon" onclick="toggleSidebar()">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="navbar__left">
          {/* <a href="#">Subscribers</a>
          <a href="#">Video Management</a>
          <a className="active_link" href="#">Admin</a> */}
          <span style={{color: 'black'}}>Omar Zouiter</span>
        </div>
        <div className="navbar__right">
          <a href="#">
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
          </a>
          <a href="#">
            <img width="30" src="assets/avatar.svg" alt="" />
           <i className="fa fa-user-circle-o" aria-hidden="true"></i> 
          </a>
          
        </div>
      </nav>
    </div>
  )
}

export default NavDash