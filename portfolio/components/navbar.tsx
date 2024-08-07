import React from "react";
import "./components-global.css";

const Navbar = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const navbarRef = React.createRef();
  // const openButtonRef = React.createRef();
  // const closeButtonRef = React.createRef();

  // const handleOpen = () => {
  //   setIsOpen(true);
  // };

  // const handleClose = (event: { target: any }) => {
  //   const currentRef = navbarRef.current;
  //   console.log(currentRef)
  //   if (currentRef && currentRef.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener('click', handleClose);
  //   return () => {
  //     document.removeEventListener('click', handleClose);
  //   };
  // }, []);

  return (
    <div className="nav-bar">
      <div className="logo">
        <a className="navbar-brand" href="#">
          <img
            src="Images/logo-light-transformed-wo-txt.jpeg"
            alt="Logo"
            className="ms-0 ms-md-3 img-fluid"
          />
        </a>
      </div>

      {/* <ul className={`nav ${isOpen ? '' : 'hidden'} lg:flex flex-row`} id="navigation-items" ref={navbarRef}> */}
      <ul className={`nav hidden lg:flex flex-row`} id="navigation-items">
        <li>
          <a href="#introduction">
            <i className="fa-solid fa-house"></i> Home
          </a>
        </li>
        <li>
          <a href="#about-section">
            <i className="fa-solid fa-user"></i> About
          </a>
        </li>
        <li>
          <a href="#projects-section">
            <i className="fa-solid fa-book-open"></i> Projects
          </a>
        </li>
        <li>
          <a href="#contact-section">
            <i className="fa-solid fa-address-book"></i> Contact
          </a>
        </li>
        {/* <li>
          <a href="#college-section">
            <i className="fa-solid fa-book-open-reader"></i> College
          </a>
        </li> */}
      </ul>

      {/* <div className="nav-button lg:hidden flex pe-5">
        <span className="clear-right" id="open" ref={openButtonRef} onClick={handleOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" height="2rem" viewBox="0 -960 960 960" width="2rem" fill="black">
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z"/>
          </svg>
        </span>
        <span className={`hidden ${isOpen ? '' : 'hidden'}`} id="close" ref={closeButtonRef} onClick={() => setIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" viewBox="0 0 24 24">
            <path fill="black" d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"></path>
          </svg>
        </span>
      </div> */}
    </div>
  );
};

export default Navbar;