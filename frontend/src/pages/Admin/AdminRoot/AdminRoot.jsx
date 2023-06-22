import React from 'react'
import Header from '../../../layout/Admin/Header/Header'
import { Outlet  } from "react-router-dom";


function AdminRoot() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default AdminRoot