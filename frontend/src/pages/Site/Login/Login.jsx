import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Login.scss'
import Loading from '../../../components/Site/Loading/Loading'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Login() {
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
            <form>
              <h3>Sign In</h3>

              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>

              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                Have an account? <Link onClick={() => navigate('/register')}>Register</Link>
              </p>
            </form>
          </div>
      }
    </>
  )
}

export default Login

