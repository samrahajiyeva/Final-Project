import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Header from '../../../layout/Site/Header/Header';
import Footer from '../../../layout/Site/Footer/Footer';

function SiteRoot() {
  const location = useLocation();
  const { id } = useParams();

  const excludedPaths = ['/login', '/register', '/user', '/buy' , `/${id}`];

  const shouldShowHeaderFooter = !excludedPaths.includes(location.pathname);

  return (
    <>
      {shouldShowHeaderFooter && <Header />}
      <Outlet />
      {shouldShowHeaderFooter && <Footer />}
    </>
  );
}

export default SiteRoot;





// import React from 'react'
// import Header from '../../../layout/Site/Header/Header'
// import { Outlet, useLocation } from 'react-router-dom'
// import Footer from '../../../layout/Site/Footer/Footer'

// function SiteRoot() {
//   const location=useLocation()
//   return (
//     <>
// {
//   location.pathname !=="/login" &&  location.pathname !=="/register" &&  location.pathname !=="/user" &&  location.pathname !=="/:id" &&<Header />
// }
      
//       <Outlet />
//       {
//   location.pathname !=="/login" &&   location.pathname !=="/register" &&  location.pathname !=="/user" &&  location.pathname !=="/:id" && <Footer />
// }
     
//     </>
//   )
// }

// export default SiteRoot