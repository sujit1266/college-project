import React from 'react'
import "./Navbar.css";
import { TbCircleArrowRight } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";



const Navbar = () => {
     return (
          <div className='navbar'>
               <div className='logo-div'>
                    <div className='logo'>
                    </div>
               </div>
               <div className='menue'>
                    <TbCircleArrowRight className='full-menue allicon'/>
                    <IoMdTimer className='timer allicon'/>
                    <RiSettings4Line className='setting allicon'/>
               </div>
               <div className='logout'>
                    <TbLogout className='logout-icon allicon'/>
               </div>
          </div>
     )
}

export default Navbar;
