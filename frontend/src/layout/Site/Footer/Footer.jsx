import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF , FaTwitter , FaInstagram , FaGooglePlusG , FaYoutube  } from 'react-icons/fa'
import { BsFillTelephoneFill , BsFillPrinterFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

function Footer() {
  return (
    <>
      <div className="footer">
          <div className="footer__contact">
            <h4>Contact</h4>
            <ul className='f__contact'>
              <div>
                <li>
                  <BsFillTelephoneFill /> <span>(020) 72077878</span>
                </li>
                <li>
                  <BsFillPrinterFill /> <span>(020) 72077878</span>
                </li>
              </div>

              <div>
                <li>
                <MdEmail /><Link to="mailto:support@waituk.net">support@waituk.net</Link>
                </li>
                <li  className='home-li'>
                  <AiFillHome className='home-icon'/><span>707 London Road Isleworth <br /> Middx TW7 7QD</span>
                </li>
              </div>
            </ul>
            <ul className='f__icons'>
              <li>
                <Link to="https://www.facebook.com/"><FaFacebookF  className='f-icon'/></Link>
              </li>
              <li>
                <Link to="https://twitter.com/"><FaTwitter  className='f-icon'/></Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/"><FaInstagram  className='f-icon'/></Link>
              </li>
              <li>
                <Link to="https://www.google.com/"><FaGooglePlusG  className='f-icon'/></Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/"><FaYoutube  className='f-icon'/></Link>
              </li>
            </ul>
          </div>
      </div>
      <div className="footer__bottom">
        <span>©Copyright 2016 - Entrada - An Adventure Theme - by Waituk</span>
        <img src="https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/04/payment-logo-sprite-2-2.png" alt="img" />
      </div>
    </>
  )
}

export default Footer