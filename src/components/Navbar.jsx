import React, { useState, useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

import { Link, useLocation } from 'react-router-dom';




const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [title,setTitle] = useState();
  const [title1,setTitle1] = useState();
  const [title2,setTitle2] = useState();
  const [title3,setTitle3] = useState();
  const [title4,setTitle4] = useState();
  const [title5,setTitle5] = useState();


  const dropdownRef = useRef(null);
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  
useEffect(()=> {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:3000/title", requestOptions)
  .then((response) => response.json())
  .then((result) => setTitle(result[0].Navbar))//Jupical
  .catch((error) => console.error(error));

},[])


useEffect(()=> {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:3000/title", requestOptions)
  .then((response) => response.json())
  .then((result) => setTitle1(result[1].Navbar))//Home
  .catch((error) => console.error(error));

},[])

useEffect(()=> {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:3000/title", requestOptions)
  .then((response) => response.json())
  .then((result) => setTitle2(result[2].Navbar))//Our Services
  .catch((error) => console.error(error));

},[])

useEffect(()=> {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:3000/title", requestOptions)
  .then((response) => response.json())
  .then((result) => setTitle3(result[3].Navbar))//About
  .catch((error) => console.error(error));

},[])

useEffect(()=> {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:3000/title", requestOptions)
  .then((response) => response.json())
  .then((result) => setTitle4(result[4].Navbar))//Careers
  .catch((error) => console.error(error));

},[])

useEffect(()=> {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};
fetch("http://localhost:3000/title", requestOptions)
  .then((response) => response.json())
  .then((result) => setTitle5(result[5].Navbar))//Contact us
  .catch((error) => console.error(error));

},[])


  return (
    <nav className=" py-3 navbar  top-0 bg-white flex justify-between  overflow-hidden  ">
      {/* Left side: Logo + Title */}
      <div className=" flex items-center justify-center  ">
      <Link to="/home" ><img src="/logo.png" alt="Logo" className="logo md:h-18 md:w-18 h-12 w-12  hover:scale-110" /></Link>
        <p className=" md:text-6xl text-3xl text-[#1D6697] font-bold">{title}</p>
      </div>
   
      {/* Right side: Links + Dropdown */}
 <div className="  gap-4 items-center px-4 flex ">
 <ul className="   gap-7 items-center text-2xl font-bold hidden md:flex ">

    <Link to="/home1">
        <p className={`${
          currentPath === '/home1' ? 'bg-[#1D6697] text-white' : 'text-[#1D6697] hover:text-white hover:bg-[#1D6697]'
        } rounded-xl px-4 py-2 transition-colors duration-300`}>
          Home1
        </p>
      </Link>

       <Link to="/home">
        <p className={`${
          currentPath === '/home' ? 'bg-[#1D6697] text-white' : 'text-[#1D6697] hover:text-white hover:bg-[#1D6697]'
        } rounded-xl px-4 py-2 transition-colors duration-300`}>
          {title1}
        </p>
      </Link>

      <Link to="/services">
        <p className={`${
          currentPath === '/services' ? 'bg-[#1D6697] text-white' : 'text-[#1D6697] hover:text-white hover:bg-[#1D6697]'
        } rounded-xl px-4 py-2 transition-colors duration-300`}>
          {title2}
        </p>
      </Link>

      <Link to="/about">
        <p className={`${
          currentPath === '/about' ? 'bg-[#1D6697] text-white' : 'text-[#1D6697] hover:text-white hover:bg-[#1D6697]'
        } rounded-xl px-4 py-2 transition-colors duration-300`}>
          {title3}
        </p>
      </Link>

      <Link to="/careers">
        <p className={`${
          currentPath === '/careers' ? 'bg-[#1D6697] text-white' : 'text-[#1D6697] hover:text-white hover:bg-[#1D6697]'
        } rounded-xl px-4 py-2 transition-colors duration-300`}>
          {title4}
        </p>
      </Link>

      <Link to="/contact" className='pr-10'>
        <p className={`${
          currentPath === '/contact' ? 'bg-[#1D6697] text-white' : 'text-[#1D6697] hover:text-white hover:bg-[#1D6697]'
        } rounded-xl px-4 py-2 transition-colors duration-300 `}>
          {title5}
        </p>
      </Link>
</ul>



  <div className="dropdown-container relative text-white bg-white  md:hidden " ref={dropdownRef}>
  <button
    onClick={() => setDropdownVisible(!dropdownVisible)}
    className="mx-7 "
    style={{ fontSize: '1.5rem', lineHeight: '1.5rem',backgroundColor: '#1D6697'}}
  >
    ☰
  </button>
  {dropdownVisible && (
    // <ul className="dropdown-menu absolute bg-[#31a7f7]/50 border rounded-2xl border-black/30 shadow-2xl backdrop-blur-xs mt-2 right-0 w-48 space-y-2 z-50">
    //   <Link to="/action" onClick={() => setDropdownVisible(false)}><p className="block px-4 text-white py-2 hover:bg-[#81b7db] rounded-2xl hover:text-[#1D6697]">Action</p></Link>
    //   <Link to="/action2" onClick={() => setDropdownVisible(false)}><p className="block px-4 text-white py-2 hover:bg-[#81b7db] rounded-2xl hover:text-[#1D6697]">Another action</p></Link>
    //   <Link to="/action3" onClick={() => setDropdownVisible(false)}><p className="block px-4 text-white py-2 hover:bg-[#81b7db] rounded-2xl hover:text-[#1D6697]">Something else here</p></Link>
   <div className='z-99 fixed right-4 '>

   
   <ul class="z-auto font-bold md:hidden flex flex-col justify-center items-center absolute bg-[#31a7f7]/50 border-2 rounded-2xl border-black/30 shadow-2xl backdrop-blur-xs mt-2 right-0 w-48">
     <li class="w-full text-center border-b border-white/30 ">
    <a href="/home1" data-discover="true" class="block px-4 py-2  hover:text-[#1D6697]">
      <p className='text-white'>Home1</p>
    </a>
  </li>
  <li class="w-full text-center border-b border-white/30 ">
    <a href="/home" data-discover="true" class="block px-4 py-2  hover:text-[#1D6697]">
      <p className='text-white'>Home</p>
    </a>
  </li>
  <li class="w-full text-center border-b border-white/30">
    <a href="/services" data-discover="true" class="block px-4 py-2 text-white hover:text-[#1D6697]">
      <p className='text-white'>Our Services</p>
    </a>
  </li>
  <li class="w-full text-center border-b border-white/30">
    <a href="/about" data-discover="true" class="block px-4 py-2 text-white hover:text-[#1D6697]">
      <p className='text-white'>About</p>
    </a>
  </li>
  <li class="w-full text-center border-b border-white/30">
    <a href="/careers" data-discover="true" class="block px-4 py-2 text-white hover:text-[#1D6697]">
      <p className='text-white'>Careers</p>
    </a>
  </li>
  <li class="w-full text-center">
    <a href="/contact" data-discover="true" class="block px-4 py-2 text-white hover:text-[#1D6697]">
      <p className='text-white'>Contact</p>
    </a>
  </li>
</ul>
</div>
  
    // </ul>
  )}
</div>

      </div>
     
    </nav>
  );
};

export default Navbar;
