import React from 'react'
import './Content.scss'
import { Outlet } from 'react-router-dom'

function Content() {
  return (
    <div className="coontent">
        <Outlet />
    </div>
  )
}

export default Content