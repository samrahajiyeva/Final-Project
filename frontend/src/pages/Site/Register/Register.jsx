import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loading from '../../../components/Site/Loading/Loading'
import { Link, useNavigate }  from 'react-router-dom'

function Register() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const navigate=useNavigate()

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
              <h3>Sign Up</h3>

              <div className="mb-3">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="mb-3">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
              </div>

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

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <Link onClick={()=> navigate('/login')}>sign in?</Link>
              </p>
            </form>
          </div>
      }
    </>
  )
}

export default Register