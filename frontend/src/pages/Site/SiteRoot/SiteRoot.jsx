import React from 'react'
import Header from '../../../layout/Site/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../../layout/Site/Footer/Footer'

function SiteRoot() {
  const location=useLocation()
  return (
    <>
{
  location.pathname !=="/login" &&  location.pathname !=="/register" &&<Header />
}
      
      <Outlet />
      {
  location.pathname !=="/login" &&   location.pathname !=="/register" && <Footer />
}
     
    </>
  )
}

export default SiteRoot