import React, { useState } from "react";
import { useSelector } from "react-redux";
import { bag, user } from "../assets";
// import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
// import { useSelector } from "react-redux"
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
// import {logo} from '../images/index'
const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  const num = useSelector((state) => state.Cart.cartItems.noOfP)
  return (
    <>

      <div className="navbar  top-0 flex items-center left-0 w-full  fixed justify-around my-8">
        <div className="left  w-full flex items-center justify-evenly flex-row">
          <div className="logo font-extrabold text-3xl ">
            Plant Com
          </div>
          <div>
            <ul className="sm:flex space-x-5 font-bold hidden md:block md:flex md:items-center md:flex-row">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer" >Plants</li>
              <li className="cursor-pointer">Seeds</li>
              <li className="cursor-pointer">Plot & Planters</li>
              <li className="cursor-pointer">Contact</li>
              <li className="cursor-pointer">₹{199 * num}</li>
              <li className="relative"><img className="w-9" src={bag} alt="" />  <span className="absolute text-sm font-thin top-[0.65rem] left-[0.85rem]">{num}</span> </li>
              <li className="cursor-pointer" ><img className="w-9"  src={user} alt="" /></li>
            </ul>
          </div>
        </div>


        <div className="right-mobile  sm:block md:hidden xl:hidden 2xl:hidden ">
          <div className="nav-items my-4">
            {
              toggle ? (
                ""
              ) :
                <div className=" absolute bg-slate-500 w-full top-14 left-0 ">
                  <div className="nav-items my-4">
                    <ul className="flex flex-col space-y-5 items-center font-bold">
                      <li>Everything's</li>
                      <li >Plants</li>
                      <li>Flowers</li>
                      <li >Contact</li>
                      <li>₹{199 * num}</li>
                      <li className="relative"><img className="w-9" src={bag} alt="" />  <span className="absolute text-sm font-thin top-[0.65rem] left-[0.85rem]">{num}</span> </li>
                      <li ><img className="w-9" src={user} alt="" /></li>

                    </ul>
                  </div>
                </div>
            }
          </div>
        </div>


        <div className="md:hidden">
          {
            toggle ? <GiHamburgerMenu onClick={() => setToggle(false)} /> : <AiOutlineClose onClick={() => setToggle(true)} />
          }
        </div>

      </div >
    </>
  );
};

export default Navbar;
