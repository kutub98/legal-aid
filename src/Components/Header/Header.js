import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo192.png';
import logo2 from '../../assets/logo/bigLogo.png';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import './Header.css';
import { AuthContext } from '../UserContext/UserContext';
import { BiLogOut } from 'react-icons/bi';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const { auth, user, logOut } = useContext(AuthContext);

  // logOut Handler ===========
  const logOutHandler = () => {
    logOut(auth);
  };

  const handleOnClick = () => {
    setOpenMenu(true);
  };

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
            <ul className="bigDisplay hidden items-center ">
              <li onClick={handleOnClick}>
                <Link to="/home">Home</Link>
              </li>
              <li onClick={handleOnClick}>
                {' '}
                <Link to="/Blog">Blog</Link>
              </li>
              <li onClick={handleOnClick}>
                <Link to="/Services">Services</Link>
              </li>
              {user?.uid ? (
                <>
                  <li onClick={handleOnClick}>
                    <Link to="addServices">Add Service</Link>
                  </li>
                  <li onClick={handleOnClick}>
                    <Link to="AllReviews">All Review</Link>
                  </li>
                  <li className="bg-black items-center text-white p-2 items-center ">
                    <Link
                      to="/"
                      onClick={logOutHandler}
                      className="flex items-center"
                    >
                      <BiLogOut className=" mr-3 " /> <span>Logout</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="bg-red-700 text-white p-2">
                    {' '}
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="bg-black text-white p-2">
                    {' '}
                    <Link to="/Register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          ) : (
            <ul className="smallDisplay">
              <li onClick={handleOnClick}>
                <Link to="/home">Home</Link>
              </li>
              <li onClick={handleOnClick}>
                {' '}
                <Link to="/Blog">Blog</Link>
              </li>
              <li onClick={handleOnClick}>
                <Link to="/Services">Services</Link>
              </li>
              {user?.uid ? (
                <>
                  <li onClick={handleOnClick}>
                    <Link to="addServices">Add Service</Link>
                  </li>
                  <li onClick={handleOnClick}>
                    <Link to="AllReviews">All Review</Link>
                  </li>
                  <li className="bg-black items-center text-white p-2 max-w-[100px] mx-auto">
                    <Link
                      to="/"
                      onClick={logOutHandler}
                      className="flex items-center "
                    >
                      <BiLogOut className=" mr-3 " /> <span>Logout</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="bg-red-700 text-white p-2">
                    {' '}
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="bg-black text-white p-2">
                    {' '}
                    <Link to="/Register">Register</Link>
                  </li>
                </>
              )}
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
