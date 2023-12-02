import React from 'react'
import "../styling/Navbar.css";
import { TbCircleArrowRight } from "react-icons/tb";
import { RiSettings4Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import Timer from "../Pages/Timer";



const Navbar = () => {

     const [status, setstatus] = React.useState(false)
     return (
          <div className='navbar'>
               <div className='logo-div'>
                    <div className='logo'>
                    </div>
               </div>
               {
                    status? <Timer/>: null
               }
               <div className='menue'>
                    <button onClick={()=>setstatus(false)}className='menue-buttons' ><TbCircleArrowRight className='full-menue allicon' /></button>
                    <button onClick={()=>setstatus(true)} className='menue-buttons'><IoMdTimer className='timer allicon' /></button>
                    <button className='menue-buttons' ><RiSettings4Line className='setting allicon' /></button>
               </div>
               <div className='logout'>
                    <button className='menue-buttons' ><TbLogout className='logout-icon allicon' /></button>
               </div>
          </div>
     )
}

export default Navbar;
