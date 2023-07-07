import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Loading from '../../../components/Site/Loading/Loading';
import axios from 'axios';
import './User.scss'
import { AiFillTwitterCircle, AiFillHome } from 'react-icons/ai'
import { FaFacebook, FaInstagramSquare, FaSkype, FaLinkedin, FaGithubAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { RiPagesLine } from 'react-icons/ri'
import { MdAttachEmail } from 'react-icons/md'

function User() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);



  useEffect(() => {
    axios
      .get('http://localhost:8080/auth/getMe')
      .then((res) => {
        setUserData(res.data)
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Helmet>
            <title>User</title>
          </Helmet>
          <div>
            <div className="user-acc">
              <div className="user-acc__sidebar">
                <div className="user-acc__sidebar__top">
                  <img src={userData && userData.image} alt="user" />
                  <strong>{userData && userData.username}</strong>
                  <div className="user-acc__sidebar__top-icons">
                    <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2F" target='_blank'><AiFillTwitterCircle /></Link>
                    <Link to="https://www.facebook.com/" target='_blank'><FaFacebook /></Link>
                    <Link to="https://www.instagram.com/" target='_blank'><FaInstagramSquare /></Link>
                    <Link to="https://www.skype.com/en/" target='_blank'><FaSkype /></Link>
                    <Link to="https://www.linkedin.com/" target='_blank'><FaLinkedin /></Link>
                  </div>
                </div>
                <ul>
                  <li>
                    <AiFillHome /><Link to="/">Home</Link>
                  </li>
                  <li>
                    <FaGithubAlt /><Link to="https://github.com/" target='_blank'> Github</Link>
                  </li>
                  <li>
                    <RiPagesLine /><Link> Resume</Link>
                  </li>
                  <li>
                    <MdAttachEmail /><Link to="mailto:email@example.com">Email</Link>
                  </li>
                  <li>
                    <BsFillTelephoneFill /><Link to="https://www.facebook.com/">Contact</Link>
                  </li>

                </ul>
                <div className="bottom-user-acc">
                  <span>©Copyright 2023 - Entrada</span>
                </div>
              </div>


              <div className="user-acc__content" style={{
                backgroundImage: `url(${userData && userData.image})`,
              }}>
                <div className="user-acc__content__wrapper">
                  <div className="col-3 inner-content">
                    <h4>{userData && userData.username}</h4>
                    <p>I'm Traveller</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default User;



{/* {userData && (
              <div className='user-detail'>
                <div className="user-card col-4">
                  <img src={userData.image} alt="user" />
                  <p>Username: {userData.username}</p>
                  <p>Email: {userData.email}</p>
                </div>
              </div>
            )} */}