import React from 'react'
import "../styling/Navbar.css";
import { TbCircleArrowRight } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { NavLink } from 'react-router-dom';



const Navbar = () => {

     return (
          <div className='navbar'>
               <div className='logo-div'>
                    <div className='logo'>
                    </div>
               </div>
               <div className='menue'>
                    <NavLink to={"/"}><TbCircleArrowRight className='full-menue allicon' /></NavLink>
                    <NavLink to={"/timer"}><IoMdTimer className='iconfortimer allicon' /></NavLink>
                    <RiSettings4Line className='setting allicon' />
               </div>
               <div className='logout'>
                    <TbLogout className='logout-icon allicon' />
               </div>
          </div>
     )
}

export default Navbar;
