import React, { useEffect, useState } from 'react'
import './About.scss'
import { Helmet } from 'react-helmet'
import { GiHummingbird, GiJungle, GiHiking, GiFootprint } from 'react-icons/gi'
import { FaBiking } from 'react-icons/fa'
import { TbJumpRope } from 'react-icons/tb'
import image from '../../../images/localimg.png';
import Slider2 from '../../../components/Site/Slider2/Slider2'
import Loading from '../../../components/Site/Loading/Loading'

function About() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <>
      {
        loading ?
          <Loading /> :
          <div>
            <Helmet>
              <title>
                About
              </title>
            </Helmet>
            {/* section-1 */}
            <div className="sec1">
              <div className="sec1__wrapper">
                <div className="sec1__wrapper__text">
                  <h2>About Us</h2>
                  <p>The most detailed and modern adventure tours theme of 2023</p>
                </div>
              </div>
            </div>
            {/* section-2 */}
            <div className="sec2">
              <div className="sec2__content">
                <h2>TRAVEL COMPANY</h2>
                <p>Mastering the art of perfect adventure for 10+ years in the wild!</p>
              </div>

              <div className="sec2__cards">
                <div className="sec2__cards__1">
                  <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/ico09-1.png" alt="img" />
                  <h3>Travel & Tourism</h3>
                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum
                  </p>
                </div>
                <div className="sec2__cards__1">
                  <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/ico08-1.png" alt="img" />
                  <h3>Travel & Tourism</h3>
                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum
                  </p>
                </div>
                <div className="sec2__cards__1">
                  <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/05/ico07-1.png" alt="img" />
                  <h3>Travel & Tourism</h3>
                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum
                  </p>
                </div>
              </div>
            </div>
            {/* section-3 */}
            <div className="sec3">
              <div className="sec3__content">
                <h2>ABOUT ENTRADA</h2>
                <p>A work of art is above all an adventure of mind!</p>
              </div>
              <div className="sec3__text">
                <div className="sec3__text__card">
                  <h3>Top Adventure Tours Template</h3>
                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                </div>

                <div className="sec3__text__card">
                  <h3>Top Adventure Tours Template</h3>
                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.
                  </p>

                  <p>This is Photoshop's version of Lorem Ipsum.
                    Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor,
                    nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                </div>
              </div>
            </div>
            {/* section-4 */}
            <div className="sec4">
              <div className="sec4__wrapper">
                <div className="sec4__wrapper__cards">
                  <GiHummingbird className='p-icon' />
                  <h5>Rural</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
                </div>
                <div className="sec4__wrapper__cards">
                  <FaBiking className='p-icon' />
                  <h5>Mountain Biking</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
                </div>
                <div className="sec4__wrapper__cards">
                  <GiJungle className='p-icon' />
                  <h5>Jungle</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
                </div>
                <div className="sec4__wrapper__cards">
                  <GiHiking className='p-icon' />
                  <h5>Hiking Trips</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
                </div>
                <div className="sec4__wrapper__cards">
                  <TbJumpRope className='p-icon' />
                  <h5>Bungee Jump</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
                </div>
                <div className="sec4__wrapper__cards">
                  <GiFootprint className='p-icon' />
                  <h5>Beach</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
                </div>
              </div>
            </div>
            {/* section-5 */}
            <div className="sec5">
              <div className="sec5__content">
                <h2>PEOPLE POWER</h2>
                <p>Our Guides are the Secret Weapon behind our Success.</p>
              </div>
              <div className="sec5__cards">
                <div className="sec5__cards__left">
                  <h3>Amazing support for all!</h3>
                  <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                  <p>This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                </div>

                <div className="sec5__cards__right">
                  <img src={image} alt="img" />
                </div>
              </div>
            </div>
            {/* section-6 */}
            <div className="sec6">
              <div className="sec6__wrapper">
                <div className="sec6__wrapper__text">
                  <span>``Let us step into the night and pursue that flighty temptress, adventure.``</span>
                </div>
              </div>
            </div>
            {/* section-7 */}
            <div className="partners">
              <div className="partners__content">
                <h2>PARTNER</h2>
                <p>People who always support and endorse our good work</p>
              </div>

              <div className="partners__slider">
                <Slider2 />
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default About