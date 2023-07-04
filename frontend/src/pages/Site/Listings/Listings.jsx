import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Listings.scss'
import { FaSort } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { MdLocalActivity } from "react-icons/md";
import Loading from '../../../components/Site/Loading/Loading'
import axios from 'axios'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaGlobeAfrica, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa';
import { TbJumpRope } from 'react-icons/tb';
import { FaCity, FaBiking } from 'react-icons/fa';
import { GiHiking, GiHuntingHorn, GiDeer } from 'react-icons/gi';
import { MdSailing, MdScubaDiving } from 'react-icons/md';
import Range from '../../../components/Site/Range/Range';


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

  const [regions, setRegions] = useState([
    { icon: <FaGlobeAfrica className='f-acc-icon' />, text: 'Africa' },
    { icon: <FaGlobeAsia className='f-acc-icon' />, text: 'Asia' },
    { icon: <FaGlobeEurope className='f-acc-icon' />, text: 'Europe' },
    { icon: <GiWorld className='f-acc-icon' />, text: 'World' },
  ]);

  const [activityThemes, setActivityThemes] = useState([
    { icon: <TbJumpRope className='s-acc-icon' />, title: 'BUNGEE JUMP' },
    { icon: <FaCity className='s-acc-icon' />, title: 'CITY TOURS' },
    { icon: <GiHiking className='s-acc-icon' />, title: 'HIKING TRIPS' },
    { icon: <GiHuntingHorn className='s-acc-icon' />, title: 'HUNTING TRIP' },
    { icon: <FaBiking className='s-acc-icon' />, title: 'MOUNTAIN BIKING' },
    { icon: <MdSailing className='s-acc-icon' />, title: 'SAILING TRIPS' },
    { icon: <MdScubaDiving className='s-acc-icon' />, title: 'SCUBA DIVING' },
    { icon: <GiDeer className='s-acc-icon' />, title: 'WILDLIFE SAFARI' },
  ]);


  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedActivityThemes, setSelectedActivityThemes] = useState([]);

  const handleRegionClick = (text) => {
    console.log(text);
    // if (selectedRegions.includes(text)) {
    //   setSelectedRegions(selectedRegions.filter((region) => region !== text));
    // } else {
    //   setSelectedRegions([...selectedRegions, text]);
    // }
  };

  const handleActivityThemeClick = (title) => {
    if (selectedActivityThemes.includes(title)) {
      setSelectedActivityThemes(selectedActivityThemes.filter((theme) => theme !== title));
    } else {
      setSelectedActivityThemes([...selectedActivityThemes, title]);
    }
  };


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
                  <div>
                    {/* first */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='f-icon' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className='f-title'><strong>Select Region</strong></Typography>
                      </AccordionSummary>
                      <AccordionDetails className='f-details'>
                        <Typography className='f-detail'>
                          <ul>
                            {regions.map((region, index) => (
                              <li key={index}>
                                {region.icon}
                                <Link className='f-acc-region' onClick={() => handleRegionClick(region.text)}>
                                  {region.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    {/* second */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='s-icon' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className='s-title'><strong>Activity Theme</strong></Typography>
                      </AccordionSummary>
                      <AccordionDetails className='s-details'>
                        <Typography className='s-detail'>
                          <ul>
                            {activityThemes.map((theme, index) => (
                              <Link key={index}>
                                <li onClick={() => handleActivityThemeClick(theme.title)}>
                                  {theme.icon}
                                  <span className='icon-title'>{theme.title}</span>
                                </li>
                              </Link>
                            ))}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    {/* third */}
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon className='t-icon' />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className='t-title'><strong>Price Range</strong></Typography>
                      </AccordionSummary>
                      <AccordionDetails className='t-details'>
                        <Typography className='t-detail'>
                          <Range />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
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
                        <div className="list__datas__elements__card" key={index}>
                          <div className="list__datas__elements__card__img">
                            <img src={`http://localhost:8080/public/${item.image}`} alt="img" />
                          </div>
                          <div className="list__datas__elements__card__title">
                            <Link>{item.title}</Link>
                            <div className="list__title__spans">
                              <span className="bestSeller__trip"> {item.tripType} </span>
                            </div>
                            <div className="list__activity">
                              <span className="list__icon"><GiWorld /> {item.place} Places</span>
                              <span className="list__icon"><MdLocalActivity /> {item.activity} Activities</span>
                            </div>
                          </div>
                          <div className="list__datas__elements__card__text">
                            <p>{item.content}</p>
                            <Link className='list__explore' to={`/${item._id}`}>Explore</Link>
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