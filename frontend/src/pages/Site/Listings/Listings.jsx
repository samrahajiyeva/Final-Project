import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Listings.scss'
import { FaSort } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdLocalActivity } from "react-icons/md";
import Accordion from "../../../components/Site/Accordion/Accordion"
import Loading from '../../../components/Site/Loading/Loading'
import axios from 'axios'


function Listings() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  useEffect(() => {
    axios.get("http://localhost:8080/listing").then(res => {
      setData(res.data)
    })
  }, [data])

  return (
    <>
      {
        loading ?
          <Loading /> :
          <div>
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

                  {
                    data && data.map((item, index) => {
                      return (
                        <div className="list__datas__elements__card">
                          <div className="list__datas__elements__card__img">
                            <img src={`http://localhost:8080/public/${item.image}`} alt="img" />
                          </div>
                          <div className="list__datas__elements__card__title">
                            <Link>{item.title}</Link>
                            <div className="list__title__spans">
                              <span className="bestSeller__trip"> {item.tripType.split(' ')[0]} </span>
                              <span className="bestSeller__trip"> {item.tripType.split(' ')[1]} </span>
                              <span className="bestSeller__trip"> {item.tripType.split(' ')[2]} </span>
                              <span className="bestSeller__trip"> {item.tripType.split(' ')[3]} </span>
                            </div>
                            <div className="list__activity">
                              <span className="list__icon"><GiWorld /> {item.place} Places</span>
                              <span className="list__icon"><MdLocalActivity /> {item.activity} Activities</span>
                            </div>
                          </div>
                          <div className="list__datas__elements__card__text">
                            <p>{item.content}</p>
                            <Link className='list__explore'>Explore</Link>
                          </div>
                          <div className="list__datas__elements__card__count">
                            <span>${item.price}</span>
                            <div className="list__datas__elements__card__count__icons">
                              <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="list__countIcon" /></Link>
                              <Link to="https://twitter.com/?lang=en" target="_blank"><FaTwitter className="list__countIcon" /></Link>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>

          </div>
      }
    </>
  )
}

export default Listings