import React from 'react'
import { Helmet } from 'react-helmet'
import './Listings.scss'
import { FaSort } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdLocalActivity } from "react-icons/md";
import Accordion from "../../../components/Site/Accordion/Accordion"


function Listings() {
  return (
    <>
      <Helmet>
        <title>Listing</title>
      </Helmet>

      {/* section 1 */}
      <div className="listhero">
        <div className="listhero__wrapper">
          <div className="listhero__wrapper__text">
            <h2>Listing</h2>
            <p>Find Your Adventure</p>
          </div>
        </div>
      </div>

      {/* section 2   API - den datalar gelecek */}
      <div className="list">
        <div className="list__sidebar">
          <div className="list__sidebar__title">
            <FaSort /><h3>FILTER</h3>
          </div>
          <div className="list__sidebar__filter">
            <Accordion />
          </div>
        </div>
        
        <div className="list__datas">
          <div className="list__datas__title">
            <strong>3 Trips match your search criteria</strong>
            <select class="form-select" aria-label="Default select example">
              <option selected>Sort Order</option>
              <option value="1">Alphabet</option>
              <option value="2">Price</option>
              <option value="3">Popular</option>
            </select>
          </div>
          <div className="list__datas__elements">
            {/* api'den gelecek datalar */}
            <div className="list__datas__elements__card">
              <div className="list__datas__elements__card__img">
                <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/tour-05-min-550x358.jpg" alt="img" />
              </div>
              <div className="list__datas__elements__card__title">
                <Link>Jungle Safari in Africa</Link>
                <div className="list__title__spans">
                  <span className="list__trip">Hunting Trip , </span>
                  <span className="list__trip">Jungle ,</span>
                  <span className="list__trip"> Wildlife Safari</span>
                </div>
                <div className="list__activity">
                  <span className="list__icon"><GiWorld /> 10 Places</span>
                  <span className="list__icon"><MdLocalActivity /> 3 Activities</span>
                </div>
              </div>
              <div className="list__datas__elements__card__text">
                <p>Son agreed others exeter period myself few yet nature.
                  Mention mr manners opinion if garrets enabled.
                  To an occasional dissimilar impossible sentiments.</p>
                <Link className='list__explore'>Explore</Link>
              </div>
              <div className="list__datas__elements__card__count">
                <span>$1449</span>
                <div className="list__datas__elements__card__count__icons">
                  <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="list__countIcon" /></Link>
                  <Link to="https://twitter.com/?lang=en" target="_blank"><FaTwitter className="list__countIcon" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Listings