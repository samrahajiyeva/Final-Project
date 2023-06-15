import React from "react";
import "./Home.scss";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { TbJumpRope } from "react-icons/tb";
import { FaCity, FaBiking, FaHiking , FaUmbrellaBeach , FaSnowboarding , FaMountain } from "react-icons/fa";
import { GiHiking, GiHuntingHorn, GiDeer , GiDesert , GiJungle , GiVillage } from "react-icons/gi";
import { MdSailing, MdScubaDiving , MdWaterDrop } from "react-icons/md";
import { BiWater } from 'react-icons/bi'

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero__wrapper__title">
            <FaHiking /> ... <FaCity />
            <p>
              <span>FIND</span> ADVENTURES
            </p>
          </div>
          <div className="hero__wrapper__middle">
            <form>
              <label>Destination</label>
              <select>
                <option>Azerbaijan</option>
                <option>Sheki</option>
                <option>Gabala</option>
                <option>Oguz</option>
                <option>Ganja</option>
                <option>Shamakhi</option>
                <option>Agsu</option>
                <option>Ucar</option>
                <option>Quba</option>
                <option>Astara</option>
                <option>Nakchivan</option>
              </select>
            </form>

            {/* all actitivities */}

            <form>
              <label>Activity</label>
              <select>
                <option>All Activities</option>
                <option>Bungee Jump</option>
                <option>City Tours</option>
                <option>Hiking Trips</option>
                <option>Hunting Trip</option>
                <option>Mountain Biking</option>
                <option>Sailing Trips</option>
                <option>Scuba Diving</option>
                <option>WildLife Safari</option>
              </select>
            </form>

            {/* aby date */}

            <form>
              <label>Month</label>
              <select>
                <option>Any Date</option>
                <option>Jun 2023</option>
                <option>Jul 2023</option>
                <option>Aug 2023</option>
                <option>Sep 2023</option>
                <option>Oct 2023</option>
                <option>Nov 2023</option>
                <option>Dec 2023</option>
                <option>Jan 2023</option>
                <option>Feb 2023</option>
                <option>Mar 2023</option>
                <option>Apr 2023</option>
                <option>May 2023</option>
              </select>
            </form>

            <button>Go To Explore</button>
          </div>
          <div className="hero__wrapper__bottom">
            <ul>
              <Link>
                <li>
                  <p>
                    <TbJumpRope className="act-icon" />
                    <span>BUNGEE JUMP</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li>
                  <p>
                    <FaCity className="act-icon" />
                    <span>CITY TOURS</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li>
                  <p>
                    <GiHiking className="act-icon" />
                    <span>HIKING TRIPS</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li>
                  <p>
                    <GiHuntingHorn className="act-icon" />
                    <span>HUNTING TRIP</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li>
                  <p>
                    <FaBiking className="act-icon" />
                    <span>MOUNTAIN BIKING</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li>
                  <p>
                    <MdSailing className="act-icon" />
                    <span>SAILING TRIPS</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li>
                  <p>
                    <MdScubaDiving className="act-icon" />
                    <span>SCUBA DIVING</span>
                  </p>
                </li>
              </Link>
              <Link>
                <li className="last-li">
                  <p>
                    <GiDeer className="act-icon" />
                    <span>WILDLIFE SAFARI</span>
                  </p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="adventures">
        <div className="adventures__content">
          <h2>THE ADVENTURES</h2>
          <p>
            Mastering the art of perfect adventure for 10+ years in the wild?
          </p>
        </div>
        <div className="adventures__gallery">
          <div className="adventures__gallery__left">
            <div className="gallery__divs1 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><GiDesert className="adv-icon"/></Link>
                <span>BEACH</span>
              </div>
            </div>
            <div className="gallery__divs2 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><FaUmbrellaBeach className="adv-icon"/></Link>
                <span>DESERT</span>
              </div>
            </div>
            <div className="gallery__divs3 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><BiWater className="adv-icon"/></Link>
                <span>ICONIC</span>
              </div>
            </div>
            <div className="gallery__divs4 gallery__div">
              <div className="gallery__div__wrapper">
              <Link><GiJungle className="adv-icon"/></Link>
                <span>JUNGLE</span>
              </div>
            </div>
            <div className="gallery__divs5 gallery__div">
              <div className="gallery__div__wrapper">
              <Link><FaMountain className="adv-icon"/></Link>
                <span>MOUNTAIN</span>
              </div>
            </div>
            <div className="gallery__divs6 gallery__div">
              <div className="gallery__div__wrapper">
              <Link><GiVillage className="adv-icon"/></Link>
                <span>RURAL</span>
              </div>
            </div>
            <div className="gallery__divs7 gallery__div">
              <div className="gallery__div__wrapper">
              <Link><FaSnowboarding className="adv-icon"/></Link>
                <span>SNOW & ICE</span>
              </div>
            </div>
            <div className="gallery__divs8 gallery__div">
              <div className="gallery__div__wrapper">
              <Link><FaCity className="adv-icon"/></Link>
                <span>URBAN</span>
              </div>
            </div>
            <div className="gallery__divs9 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><MdWaterDrop className="adv-icon"/></Link>
                <span>WATER</span>
              </div>
            </div>
          </div>
          <div className="adventures__gallery__right">
            <h2>Living a Life of Adventure</h2>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit.
            </p>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
