import React from 'react'
import { Helmet } from 'react-helmet'
import './Activities.scss'

function Activities() {
  return (
    <>
      <Helmet>
        <title>Activities</title>
      </Helmet>

      {/* section 1 */}
      <div className="section1">
        <div className="section1__wrapper">
          <div className="section1__wrapper__text">
            <h1>World Activity Tours</h1>
            <p>Hunting and Fishing Wordpress Theme</p>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="section2">
        <div className="section2__text">
        <h2>Top Hunting Trips of 2023</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
      </div>

      {/* card */}
      <div className="card">
        <div className="card__img">
            <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/06/hunting-landing.png" alt="img" />
        </div>
        <div className="card__text">
            <strong>Best Seasons:</strong>
            <span>May, June, July, August</span>
            <strong>Popular Location:</strong>
            <span>Namibia, Angola, Zimbabwe</span>
        </div>
      </div>
    </>
  )
}

export default Activities