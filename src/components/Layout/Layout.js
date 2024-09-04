import NavBar from './navBar';
import Footer from './Footer';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Layout = (WrappedComponent) => (props) => {
  const router = useRouter();

  return (
    <>
      {/* <NavBar /> */}
      <div className='clearfix'></div>
      <WrappedComponent {...props} />
      <Footer />
    </>
  );
};

export default Layout;
