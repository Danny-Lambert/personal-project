import React from "react";
import styles from "./NavBar.css";
import logo from "../../images/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => {

    return(
        // <div className = "NavBar">
        // <div className = "nameNavBar">
        //     <h1>DAISY</h1>
        //     <h2>VALENTINE</h2>
        // </div>
        
        <div class="sidenav">
        <img src = {logo} alt = "logo"></img>
        <a href="#about">About</a>
        <a href="#upcomingGigs">Upcoming Gigs</a>
        <a href="#Photos">Photos</a>
        {/* <a href="#">Contact</a> */}
        <FontAwesomeIcon icon={["fab", "facebook"]} />
        <i class="fab fa-facebook"></i>
      </div>
      
        // </div>    
    
    )
}

export default NavBar