import React from 'react';
import { NavLink, } from 'react-router-dom';
 import { Dropdown,DropdownButton,NavDropdown,Nav } from 'react-bootstrap';

import './NavLinks.css';

const NavLinks = (props,isLogged,history) => {
  const handleClick = ()=>{
    history.push("/")
    isLogged(false)
  }

  
  let user=JSON.parse(localStorage.getItem('user-iinfo'))
  return <ul className="nav-links">
    <li>
      <NavLink to="/About" exact>About Us</NavLink>
    </li>
    <li>
      <NavLink to="/LoginCMS">Case Mangament System</NavLink>
    </li>
    <li>
      <NavDropdown  title="Dashboard" id="basic-nav-dropdown">
    <NavDropdown.Item style={{'color':'black'}} href="/JudgeSignUp">Judge Dashboard</NavDropdown.Item>
    <NavDropdown.Item style={{'color':'black'}} href="/LawyerSignUp">Lawyer Dashboard</NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>

     <NavLink to="/EFilling">E-Filling</NavLink>
    </li>
    <li>
      {/* <NavLink to="/OnlineCaseSearch">Search case</NavLink> */}
      <NavDropdown  title="Search case" id="basic-nav-dropdown">
        <NavDropdown.Item style={{'color':'black'}} href="/OnlineCaseSearch">Online Case Search</NavDropdown.Item>
        <NavDropdown.Item style={{'color':'black'}} href="/LatestJudgments">Latest Judgments</NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>
    {/* <NavLink to="/Notification">Send Notification</NavLink> */}
    <NavDropdown  title="Send Notification" id="basic-nav-dropdown">
    <NavDropdown.Item style={{'color':'black'}} href="/Notification">Send Notification</NavDropdown.Item>
    <NavDropdown.Item style={{'color':'black'}} href="/ViewNotification">View Calendar</NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>
      <NavLink to="/StaticReport">Statistics & Reports</NavLink>
    </li>
   {/* <li>
     <button onClick={handleClick}>Logout</button>
   </li> */}
  </ul>
};

export default NavLinks;