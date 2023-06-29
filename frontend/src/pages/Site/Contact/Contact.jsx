import React, { useEffect, useState } from 'react'
import './Contact.scss'
import { TbDeviceLandlinePhone } from 'react-icons/tb'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdPayment } from 'react-icons/md'
import { Helmet } from 'react-helmet'
import Loading from '../../../components/Site/Loading/Loading'


function Contact() {
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
              <title>Contact</title>
            </Helmet>
            {/* SECTION 1 */}
            <div className="sec__1">
              <div className="sec__1__wrapper">
                <div className="sec__1__wrapper__text">
                  <h2>Contact Us</h2>
                  <p>The most detailed and modern Adventure ever!</p>
                </div>
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="sec__2">
              <div className="sec__2__top">
                <h2>GET IN TOUCH</h2>
                <p>Contact us by email, phone or through our web form below.</p>
              </div>

              <div className="sec__2__middle">
                <div className="row">
                  <div className="col-md-3">
                    <div className="sec__2__middle__cards__1">
                      <div className="sec__2__middle__cards__1__head">
                        <TbDeviceLandlinePhone /><span>020 8577 5771</span>
                      </div>
                      <div className="sec__2__middle__cards__1__body">
                        <h3>Booking Enquiries</h3>
                        <p>This is Photoshop’s version of Lorem Ipsum.
                          Proin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sec__2__middle__cards__2">
                      <div className="sec__2__middle__cards__2__head">
                        <BsTelephoneFill /><span> 020 8577 7777</span>
                      </div>
                      <div className="sec__2__middle__cards__2__body">
                        <h3>Post Booking Questions</h3>
                        <p>This is Photoshop’s version of Lorem Ipsum.
                          Proin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="sec__2__middle__cards__3">
                      <div className="sec__2__middle__cards__3__head">
                        <MdPayment /><span>020 8577 8787</span>
                      </div>
                      <div className="sec__2__middle__cards__3__body">
                        <h3>Payment Queries</h3>
                        <p>This is Photoshop’s version of Lorem Ipsum.
                          Proin gravida nibh vel velit auctor aliquet.
                          Aenean sollicitudin, lorem quis bibendum auctor,
                          nisi elit</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="sec__2__bottom">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121656.012188483!2d47.75453!3d40.17585849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sAzerbaijan!5e0!3m2!1sen!2saz!4v1687093139838!5m2!1sen!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Contact