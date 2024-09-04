import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Grid } from '@mui/material';

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      // const stickyHeader = document.getElementById("sticky-header");
      // const stickyHeaderMobile = document.getElementById("sticky-mobile");
      const scrollToTarget = document.querySelectorAll('.scroll-to-target');

      if (scroll < 245) {
        setIsSticky(false);
        // stickyHeader.classList.remove("sticky");
        // stickyHeaderMobile.classList.remove("sticky-menu");
        // scrollToTarget.forEach((element) => element.classList.remove("open"));
      } else {
        setIsSticky(true);
        // stickyHeader.classList.add("sticky");
        // stickyHeaderMobile.classList.add("sticky-menu");
        // scrollToTarget.forEach((element) => element.classList.add("open"));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Function to determine if a link should be active
  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  return (
    <>
      {/* <!--header-start--> */}
      <header className='header-one '>
        <div className='andera-dsouza-website-inner main-header menu-area'>
          <div className='container custom-container padding-small-screen'>
            {/* {isSticky && (
              <div
                className='d-flex d-lg-none p-3 sticky-menu'
                id='sticky-mobile'>
                <div
                  className='andrea-dsouza-wrapper w-100'
                  style={{ paddingLeft: '20px' }}>
                  <h3 className='andrea-dsouza'>Andrea D’souza</h3>
                </div>
                <div
                  className='mobile-nav-toggler mt-0'
                  onClick={handleMenuOpen}>
                  <img src='/assets/images/align-left.svg' />
                </div>
              </div>
            )} */}
            <Grid
              item
              xs={12}
              id='sticky-mobile'
              className='d-flex d-lg-none pl-3 pr-3 pb-3 pt-0 '>
              <Grid
                container
                spacing={2}
                className='align-items-center justify-content-end'>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  xl={4}
                  className='d-flex justify-content-center'>
                  <div className='andrea-dsouza-wrapper mb-4'>
                    <img
                      src='/assets/images/nav-logo.svg'
                      className='andrea-dsouza'
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  lg={2}
                  xl={3}
                  className='d-flex justify-content-end pt-0'>
                  <div
                    className='mobile-nav-toggler mt-0'
                    onClick={handleMenuOpen}>
                    <img src='/assets/images/align-left.svg' />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <div className='menu-wrap andera-dsouza-website-inner'>
              {/* {isSticky && (
                <div
                  id='sticky-header'
                  className={`navbar-wrap main-menu d-none d-lg-flex frame-group sticky ${
                    isMenuOpen ? '' : ''
                  }`}>
                  <div
                    className={`about-menu-blog-cont-wrapper ${
                      isActiveLink('/') ? 'nav-active' : ''
                    }`}>
                    <div className='rectangle-wrapper'>
                      <div
                        className={`rectangle-div ${
                          isActiveLink('/') ? 'div-active' : ''
                        }`}
                      />
                    </div>
                    <Link
                      href='/'
                      className={`about-menu-blog1 ${
                        isActiveLink('/') ? 'font-active' : ''
                      }`}>
                      Home
                    </Link>
                  </div>
                  <div
                    className={`about-menu-blog-cont-wrapper ${
                      isActiveLink('/about-me') ? 'nav-active' : ''
                    }`}>
                    <div className='rectangle-wrapper'>
                      <div
                        className={`rectangle-div ${
                          isActiveLink('/about-me') ? 'div-active' : ''
                        }`}
                      />
                    </div>
                    <Link
                      href='/about-me'
                      className={`about-menu-blog1 ${
                        isActiveLink('/about-me') ? 'font-active' : ''
                      }`}>
                      About
                    </Link>
                  </div>
                  <div className='andrea-dsouza-wrapper'>
                    <h3 className='andrea-dsouza'>Andrea D’souza</h3>
                  </div>
                  <div
                    className={`about-menu-blog-cont-container ${
                      isActiveLink('/gallery') ? 'nav-active' : ''
                    }`}>
                    <div className='rectangle-wrapper'>
                      <div
                        className={`rectangle-div ${
                          isActiveLink('/gallery') ? 'div-active' : ''
                        }`}
                      />
                    </div>
                    <Link
                      href='/gallery'
                      className={`about-menu-blog1 ${
                        isActiveLink('/gallery') ? 'font-active' : ''
                      }`}>
                      Gallery
                    </Link>
                  </div>
                  <div
                    className={`about-menu-blog-cont-frame ${
                      isActiveLink('/calendar') ? 'nav-active' : ''
                    }`}>
                    <div className='rectangle-wrapper'>
                      <div
                        className={`rectangle-div ${
                          isActiveLink('/calendar') ? 'div-active' : ''
                        }`}
                      />
                    </div>
                    <Link
                      href='/calendar'
                      className={`about-menu-blog1 ${
                        isActiveLink('/calendar') ? 'font-active' : ''
                      }`}>
                      Calendar
                    </Link>
                  </div>
                </div>
              )} */}
              <div
                className={`navbar-wrap main-menu d-none d-lg-flex frame-group align-items-center pt-0 ${
                  isMenuOpen ? '' : ''
                }`}>
                <div
                  className={`about-menu-blog-cont-wrapper ${
                    isActiveLink('/') ? 'nav-active' : ''
                  }`}>
                  <div className='rectangle-wrapper'>
                    <div
                      className={`rectangle-div ${
                        isActiveLink('/') ? 'div-active' : ''
                      }`}
                    />
                  </div>
                  <Link
                    href='/'
                    className={`about-menu-blog1 ${
                      isActiveLink('/') ? 'font-active' : ''
                    }`}>
                    Home
                  </Link>
                </div>
                <div
                  className={`about-menu-blog-cont-wrapper ${
                    isActiveLink('/about-me') ? 'nav-active' : ''
                  }`}>
                  <div className='rectangle-wrapper'>
                    <div
                      className={`rectangle-div ${
                        isActiveLink('/about-me') ? 'div-active' : ''
                      }`}
                    />
                  </div>
                  <Link
                    href='/about-me'
                    className={`about-menu-blog1 ${
                      isActiveLink('/about-me') ? 'font-active' : ''
                    }`}>
                    About
                  </Link>
                </div>
                <div className='andrea-dsouza-wrapper mb-4 pb-1'>
                  <img
                    src='/assets/images/nav-logo.svg'
                    className='andrea-dsouza'
                  />
                </div>
                <div
                  className={`about-menu-blog-cont-container ${
                    isActiveLink('/gallery') ? 'nav-active' : ''
                  }`}>
                  <div className='rectangle-wrapper'>
                    <div
                      className={`rectangle-div ${
                        isActiveLink('/gallery') ? 'div-active' : ''
                      }`}
                    />
                  </div>
                  <Link
                    href='/gallery'
                    className={`about-menu-blog1 ${
                      isActiveLink('/gallery') ? 'font-active' : ''
                    }`}>
                    Gallery
                  </Link>
                </div>
                <div
                  className={`about-menu-blog-cont-frame ${
                    isActiveLink('/calendar') ? 'nav-active' : ''
                  }`}>
                  <div className='rectangle-wrapper'>
                    <div
                      className={`rectangle-div ${
                        isActiveLink('/calendar') ? 'div-active' : ''
                      }`}
                    />
                  </div>
                  <Link
                    href='/calendar'
                    className={`about-menu-blog1 ${
                      isActiveLink('/calendar') ? 'font-active' : ''
                    }`}>
                    Calendar
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Mobile Menu  --> */}
            <div
              className={`mobile-menu ${isMenuOpen ? 'nav-menu-visible' : ''}`}>
              <nav className='menu-box'>
                <div className='nav-logo d-flex justify-end'>
                  <div className='' onClick={handleMenuClose}>
                    <CloseIcon />
                  </div>
                </div>
                <div className='menu-outer'>
                  <ul className='navigation'>
                    <li className={isActiveLink('/') ? 'active' : ''}>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className={isActiveLink('/about-me') ? 'active' : ''}>
                      <Link href='/about-me'>About</Link>
                    </li>
                    <li className={isActiveLink('/gallery') ? 'active' : ''}>
                      <Link href='/gallery'>Gallery</Link>
                    </li>
                    <li className={isActiveLink('/calendar') ? 'active' : ''}>
                      <Link href='/calendar'>Calendar</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div
              className={`menu-backdrop ${
                isMenuOpen ? 'nav-menu-backdrop' : ''
              }`}
              onClick={handleMenuClose}></div>
            {/* <!-- End Mobile Menu --> */}
          </div>
        </div>
      </header>
      {/* <!-- Header-end --> */}
    </>
  );
};

export default NavBar;
