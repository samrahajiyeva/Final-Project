import React from "react";
import "./Home.scss";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { TbJumpRope } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaCity, FaBiking, FaHiking, FaUmbrellaBeach, FaSnowboarding, FaMountain, FaPaw  } from "react-icons/fa";
import { GiWorld, GiHiking, GiDuration, GiTreeBranch, GiHuntingHorn, GiDeer, GiDesert, GiJungle, GiVillage, GiSpermWhale } from "react-icons/gi";
import { MdLocalActivity, MdSailing, MdScubaDiving, MdWaterDrop } from "react-icons/md";
import { BiWater } from 'react-icons/bi'
import { GiLobArrow } from 'react-icons/gi'
import Slider from "../../../components/Site/Slider/Slider";
import Slider2 from "../../../components/Site/Slider2/Slider2";


function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {/* Section-1 */}
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

      {/* Section-2 */}
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
                <Link><GiDesert className="adv-icon" /></Link>
                <span>BEACH</span>
              </div>
            </div>
            <div className="gallery__divs2 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><FaUmbrellaBeach className="adv-icon" /></Link>
                <span>DESERT</span>
              </div>
            </div>
            <div className="gallery__divs3 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><BiWater className="adv-icon" /></Link>
                <span>ICONIC</span>
              </div>
            </div>
            <div className="gallery__divs4 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><GiJungle className="adv-icon" /></Link>
                <span>JUNGLE</span>
              </div>
            </div>
            <div className="gallery__divs5 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><FaMountain className="adv-icon" /></Link>
                <span>MOUNTAIN</span>
              </div>
            </div>
            <div className="gallery__divs6 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><GiVillage className="adv-icon" /></Link>
                <span>RURAL</span>
              </div>
            </div>
            <div className="gallery__divs7 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><FaSnowboarding className="adv-icon" /></Link>
                <span>SNOW & ICE</span>
              </div>
            </div>
            <div className="gallery__divs8 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><FaCity className="adv-icon" /></Link>
                <span>URBAN</span>
              </div>
            </div>
            <div className="gallery__divs9 gallery__div">
              <div className="gallery__div__wrapper">
                <Link><MdWaterDrop className="adv-icon" /></Link>
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

      {/* Section-3 */}
      <div className="block">
        <p>Get special discount on select treks, this week. <Link> Call +1 5775 7525</Link></p>
      </div>

      {/* Section-4 --> API'den datalar gelecek */}
      <div className="popular">
        <div className="popular__content">
          <h2>POPULAR TOURS</h2>
          <p>We have a unique way of meeting your adventurous expectations!</p>
        </div>

        {/* API-den gelecek data-1 */}
        <div className="popular__datas">
          <div className="popular__datas__card">
            <div className="popular__datas__card__img">
              <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/tour-37-550x358.jpg" alt="img" />
            </div>
            <div className="popular__datas__card__img__wrapper">
              <div className="popular__icon">
                <Link><GiLobArrow /></Link>
              </div>
              <div className="popular__cost">
                <em>from</em>
                <span>$779</span>
              </div>
              <div className="day">
                <span>18 Days</span>
              </div>
            </div>

            <div className="popular__datas__card__content">
              <Link>Mountain Biking Trip</Link>
              <p>Son agreed others exeter period myself few yet nature.
                Mention mr manners opinion if garrets enabled.
                To an occasional dissimilar impossible sentiments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* section-5 */}
      <div className="statistic">
        <div className="statistic__card1 s-card">
          <FaPaw className="s-icon" />
          <span>15000+</span>
          <p>WILDLIFE SPECIES</p>
        </div>
        <div className="statistic__card2 s-card">
          <GiSpermWhale className="s-icon" />
          <span>3077</span>
          <p>ARCTIC EXPERIENCES</p>
        </div>
        <div className="statistic__card3 s-card">
          <GiTreeBranch className="s-icon" />
          <span>13</span>
          <p>NATIONAL PARKS</p>
        </div>
        <div className="statistic__card4 s-card">
          <GiDuration className="s-icon" />
          <span>8973</span>
          <p>DAYS IN THE WILD</p>
        </div>
      </div>

      {/* section-6 --> API'den datalar gelecek */}
      <div className="bestSeller">
        <div className="bestSeller__content">
          <h2>BEST SELLERS OF 2023</h2>
          <p>Our collection of the most popular adventures in 2023.</p>
        </div>
        <div className="bestSeller__datas">
          <div className="bestSeller__datas__card">
            <div className="bestSeller__datas__card__img">
              <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/tour-05-min-550x358.jpg" alt="img" />
            </div>
            <div className="bestSeller__datas__card__title">
              <Link>Jungle Safari in Africa</Link>
              <div className="bestSeller__title__spans">
                <span className="bestSeller__trip">Hunting Trip , </span>
                <span className="bestSeller__trip">Jungle ,</span>
                <span className="bestSeller__trip"> Wildlife Safari</span>
              </div>
              <div className="bestSeller__activity">
                <span className="bestSeller__icon"><GiWorld /> 10 Places</span>
                <span className="bestSeller__icon"><MdLocalActivity /> 3 Activities</span>
              </div>
            </div>
            <div className="bestSeller__datas__card__text">
              <p>Son agreed others exeter period myself few yet nature.
                Mention mr manners opinion if garrets enabled.
                To an occasional dissimilar impossible sentiments.</p>
              <Link className="bestSeller__explore">Explore</Link>
            </div>
            <div className="bestSeller__datas__card__count">
              <span>$1449</span>
              <div className="bestSeller__datas__card__count__icons">
                <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="bestSeller__countIcon" /></Link>
                <Link to="https://twitter.com/?lang=en" target="_blank"><FaTwitter className="bestSeller__countIcon" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-7 */}
      <div className="browse">
        <div className="browse__left">
          <Link>BROWSE BY DESTINATION</Link>
        </div>
        <div className="browse__right">
          <Link>BROWSE BY ADVENTURE</Link>
        </div>
      </div>

      {/* section-8 */}
      <div className="guides">
        <div className="guides__content">
          <h2>MEET THE GUIDES</h2>
          <p>Our highly trained and efficient guides at your service</p>
        </div>
        <div className="guides__cards">
        <div className="guides__cards__card">
            <div className="guide__img">
              <img src="	https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/guide-03.jpg" alt="img" />
            </div>
            <div className="guides__cards__card__wrapper">
              <div className="guides__cards__card__wrapper__icon">
                    <Link to="https://twitter.com/?lang=en"><FaTwitter /></Link>
                    <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
              </div>
                <div className="guides__cards__card__wrapper__div">
                  <h3>Jason Stratham</h3>
                  <span>TOURISM EXPERT</span>
                </div>
            </div>
          </div>
          <div className="guides__cards__card">
            <div className="guide__img">
              <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/guide-02.jpg" alt="img" />
            </div>
            <div className="guides__cards__card__wrapper">
              <div className="guides__cards__card__wrapper__icon">
                    <Link to="https://twitter.com/?lang=en"><FaTwitter /></Link>
                    <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
              </div>
                <div className="guides__cards__card__wrapper__div">
                  <h3>Cleona Tropez</h3>
                  <span>ADVENTURE GURU</span>
                </div>
            </div>
          </div>
          <div className="guides__cards__card">
            <div className="guide__img">
              <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/guide-01.jpg" alt="img" />
            </div>
            <div className="guides__cards__card__wrapper">
              <div className="guides__cards__card__wrapper__icon">
                    <Link to="https://twitter.com/?lang=en"><FaTwitter /></Link>
                    <Link to="https://www.facebook.com/"><FaFacebookF /></Link>
              </div>
                <div className="guides__cards__card__wrapper__div">
                  <h3>Martin Blake</h3>
                  <span>TREKKING GUIDE</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* section-9 */}
      <div className="parallax">
        <div className="parallax__wrapper">
          <Slider />
        </div>
      </div>

      {/* section-10 */}
      <div className="partners">
        <div className="partners__content">
          <h2>PARTNER</h2>
          <p>People who always support and endorse our good work</p>
        </div>

        <div className="partners__slider">
          <Slider2 />
        </div>
      </div>

    </>
  );
}

export default Home;
