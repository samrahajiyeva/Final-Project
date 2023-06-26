import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loading from '../../../components/Site/Loading/Loading'
import { Link, useNavigate } from 'react-router-dom'
import './Register.scss'
import { FaUserAlt } from 'react-icons/fa'

function Register() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const navigate = useNavigate()

  return (
    <>
      {
        loading ?
          <Loading /> :
          <div>
            <Helmet>
              <title>Login</title>
            </Helmet>
            <div className="register">
              <form>
                <div className="userprofile">
                  <FaUserAlt className='user' />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <p className="forgot-password text-right">
                  Already registered? <Link onClick={() => navigate('/login')}>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
      }
    </>
  )
}

export default Register