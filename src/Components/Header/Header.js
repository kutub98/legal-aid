import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo192.png";
import logo2 from "../../assets/logo/bigLogo.png";
import { FaBars, FaWindowClose } from "react-icons/fa";
import "./Header.css";
import { AuthContext } from "../UserContext/UserContext";
import { BiUserCircle ,BiLogOut, BiXCircle } from "react-icons/bi";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { auth, user, logOut } = useContext(AuthContext);
  console.log(user, logOut);
  const [openProfile, setOpenProfile] = useState()


  // logOut Handler ===========
  const logOutHandler =()=>{
    logOut(auth) 
 }

 const Profile = ()=>{
    const profileDashBoard = document.getElementById('profile')
    profileDashBoard.style.display ="block"
 }

 const remove = ()=>{
    const profileDashBoard = document.getElementById('profile')
    profileDashBoard.style.display ="hidden"
 }

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/home">
            <img src={logo2} alt="" className="logo2 w-56 h-14" />
          </Link>
          <Link to="/home">
            <img src={logo} alt="" className="logo1 w-12 h-14" />
          </Link>
        </div>
        <div className="menubar">
          {openMenu ? (
            <ul className="bigDisplay hidden">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              {user?.uid ? (
                <>
                  <li>
                    <Link to="addServices">Add Service</Link>
                  </li>
                  <li>
                    <Link to="AllReviews">All Review</Link>
                  </li>
                  
                  
                  <li onClick={Profile} className="relative">
                    <Link>Profile</Link>
                    <div className="hidden absolute  w-56 top-14 right-2 z-50" id="profile">
                        <div onClick={remove}>
                        <button className=" justify-end " id="hide"><BiXCircle className="w-6 h-6"/></button>
                        </div>
                        <div className=" py-2 px-3 h-full p-3 space-y-2 w-60 bg-gray-100 text-gray-800 ">
                            <div className="profileAndDetails flex items-center">
                               { user?.uid ?
                                <img src={user?.photoUrl} alt="" className="w-12 h-12 rounded-full bg-gray-500"  />:
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />

                               }
                               { user?.uid ?
                                <h1>{user?.displayName}</h1>: "User"

                               }
                            </div>
                            <div>
                            <Link to='/' className="flex items-center"> <BiUserCircle className=" ml-2 "/> <span>View Profile</span></Link>
                            
                            <Link to='/' onClick={logOutHandler} className="flex items-center"><BiLogOut className=" ml-2 "/> <span>Logout</span></Link>
                            </div>

                        </div>
                    </div>
                  </li>
                  
                </>
              ) : (
                <>
                  <li>
                    {" "}
                    <Link to="/login">login</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          ) : (
            <ul className="smallDisplay">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                {" "}
                <Link to="/Blog">Blog</Link>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li>
                {" "}
                <Link to="/login">login</Link>
              </li>
              <li>
                {" "}
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          )}
          <div className="" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? (
              <button>
                <FaBars className="w-7 h-7 lg:invisible" />
              </button>
            ) : (
              <button>
                <FaWindowClose className="w-7 visible lg:invisible h-7" />
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
