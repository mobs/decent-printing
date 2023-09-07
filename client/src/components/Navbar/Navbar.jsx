import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import decode from "jwt-decode";
import { products, services, about, contacts, navdetails } from '../../constants/NavabrData'
import './navbar.css'
import * as actionType from '../../constants/actionTypes'

const Navbar = () => { 
  const location = useLocation();
  const dispatch = useDispatch();
  const [ isOpen, setIsOpen ] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // const isActive = (path) =>
  //   location.pathname === path ? "text-blue-500" : "";

  
  return (
    <nav className='z-20 border-gray-200 '>
        <div className="mt-4 max-w-screen-xl flex flex-wrap items-top justify-between mx-auto p-4 ">
        <Link to='/'>
        <img
            src="https://decentpp.fastnet-soft.cloud/wp-content/uploads/2022/04/LOGO-1.png"
            className="h-32"
            alt="Logo"
        />
        </Link>
        { navdetails.map((d,idx) => (
          <a className="lg:block hidden" href={d?.link} target='_blank' key={idx}>
            <span className='flex'>
                <i className={`text-3xl ${d.icons} text-orange-300`} > </i>
                <div className='text-base font-bold ml-2 w-32'>
                    {d.title}
                    <div className='text-sm hover:text-red-500 text-gray-500'>
                      {d.details}
                  </div>
                </div>
            </span>
          </a>
        ))}
      </div>
    <hr className="ml-10 mr-10 h-px bg-gray-200 border-0 dark:bg-gray-400" />
    <div className='z-10'>
      <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="peer ml-8 mt-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        
        <div className="z-10 hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
            <Link to='/' className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" > Home </Link>
            <Link to='/Products' className="w-screen px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"> 
              <button className='peer'> Products <i className="ml-4 fa-solid fa-angle-down"></i>  </button> 
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
                { products.map((prod,idx) => (
                  <Link to={`/Products/${encodeURIComponent(prod.title)}`} className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white"  key={idx} >
                    <a > {prod.title} </a>
                  </Link>
                ))}
                
              </div>
            </Link>

            <Link to='/Services' className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
              <button className='peer'> Services <i className="ml-4 fa-solid fa-angle-down"></i>  </button> 
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              { services.map((service,idx) => (
                <Link to={`${service.title}`} key={idx} className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                <a > {service.title} </a>
                </Link>
              ))}
            </div>
            </Link>
            <Link to='/About' className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" > 
              <button className='peer'> About Us <i className="ml-4 fa-solid fa-angle-down"></i>  </button>
              <div className="hidden absolute peer-hover:flex hover:flex  flex-col bg-white drop-shadow-lg">
              { about.map((ab,idx) => (
                <Link to={`${ab.title}`}key={idx} className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                <a> {ab.title} </a>
                </Link>
              ))}
            </div> 
            </Link>
            <Link to='/Gallery' className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" > Gallery </Link>
            <Link to='/Contact' className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" >
              <button className='peer'> Contact Us <i className="ml-4 fa-solid fa-angle-down"></i>  </button>
              <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              { contacts.map((contact,idx) => (
                <a className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" href="#" key={idx}> {contact.title} </a>
              ))}
            </div>
            </Link>

            {/* sign in button small screens */}

            {/* {user?.result ? (
              <>
                  {user?.result.isAuthorized ? (
                    <Link
                      to="/Dashboard"
                      className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" 
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <></>
                  )}
                <span className="px-5 py-3 font-semibold text-[#e45454]" >
                  {user?.result.name.toUpperCase()}
                </span>
                <Link to='/SignIn'>
                  <button
                    className="peer px-5 py-2 text-white hover:text-black bg-red-500 rounded mb-2 ml-4"
                    onClick={logout}
                  >
                    Logout
                  </button>
                  </Link>
              </>
            ) : (
              <Link to="/SignIn" >
                  <button className="peer px-5 py-2 text-white hover:text-black bg-red-500 rounded mb-2 ml-4">
                    SIGN UP
                  </button>
                </Link>
            )} */}
        </div>
        </div>
    
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" id="navbar-default">
      <ul className="lg:flex hidden font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          <Link to='/'>  
          <li className="hover:text-red-500 block py-2 pl-3 pr-4 text-gray-900 rounded">
            Home
          </li>
          </Link>
          <li className="block z-10 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <Link to='/Products'>
            <button className="peer px-5 py-2 text-black hover:text-red-500">Products <i className="ml-4 fa-solid fa-angle-down"></i></button>
            <div className="hidden absolute peer-hover:flex hover:flex  flex-col bg-white drop-shadow-lg">
              { products.map((prod,idx) => (
                <Link to={`/Products/${encodeURIComponent(prod.title)}`} className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" key={idx}> 
                  <a> {prod.title} </a>
                </Link>
              ))}
              
        </div>
        </Link>
          </li>
          <li className="block z-10 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-red-500 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <Link to='/Services'> 
          <button className="peer px-5 py-2 text-black hover:text-red-500"> Services 
            <i className="ml-4 fa-solid fa-angle-down"></i>
          </button> 
            <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              { services.map((service,idx) => (
                <Link to={`${service.title}`} className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                <a  href="#" key={idx}> {service.title} </a>
                </Link>
              ))}
            </div>
            </Link>
          </li>
          <li className="block z-10 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <Link to='/About'>
          <button className="peer px-5 py-2 text-black hover:text-red-500"> About Us <i className="ml-4 fa-solid fa-angle-down"></i> </button>
            <div className="hidden absolute peer-hover:flex hover:flex  flex-col bg-white drop-shadow-lg">
              { about.map((ab,idx) => (
                <Link to={`${ab.title}`} className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white">
                <a  href="#" key={idx}> {ab.title} </a>
                </Link>
              ))}
            </div>
            </Link>
          </li>
          <Link to='/Gallery'>
          <li className="block py-3 mt-2 pl-3 pr-4 text-gray-900 rounded hover:text-red-500 md:border-0 md:p-0 ">
            Gallery
          </li>
          </Link>
          <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <Link to='/Contact'>
          <button className="peer px-5 py-2 text-black hover:text-red-500"> Contact Us <i className="ml-4 fa-solid fa-angle-down"></i> </button>
            <div className="hidden absolute peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
              { contacts.map((contact,idx) => (
                <a className="px-5 py-3 text-gray-900 hover:bg-red-500 hover:text-white" href="#" key={idx}> {contact.title} </a>
              ))}
            </div>
            </Link>
          </li>
          {/* {user?.result ? (
              <>
                <li className="block py-3 mt-2 pl-3 pr-4 text-gray-900 rounded hover:text-red-500 md:border-0 md:p-0 ">
                  {user?.result.isAuthorized ? (
                    <Link
                      to="/Dashboard"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <></>
                  )}
                </li>
                <span className="py-2 flex font-semibold text-[#e45454]">
                  {user?.result.name.toUpperCase()}
                </span>
                <li className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <button
                    className="px-5 py-2 text-white hover:text-black bg-red-500 rounded"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <Link to="/SignIn">
                <li className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  <button className="px-5 py-2 text-white hover:text-black bg-red-500 rounded">
                    SIGN UP
                  </button>
                </li>
                </Link>
            )} */}
          
      </ul>
    </div>

    </nav>
  )
}

export default Navbar