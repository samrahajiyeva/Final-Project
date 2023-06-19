import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Loading from '../../../components/Site/Loading/Loading'

function User() {
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
        loading?
        <Loading />:
        <div>
          <Helmet>
            <title>User</title>
          </Helmet>
        </div>
      }
    </>
  )
}

export default User