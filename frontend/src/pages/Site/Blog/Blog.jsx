import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import './Blog.scss'
import { Link } from 'react-router-dom'
import Loading from '../../../components/Site/Loading/Loading'
import axios from 'axios'


function Blog() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.scrollTo({ top: 0 })
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  //axios
  useEffect(() => {
    axios.get("http://localhost:8080/blogs").then(res => {
      setData(res.data)
    })
  }, [data])

  return (
    <>
      {
        loading ?
          <Loading /> :
          <div>
            <Helmet>
              <title>Blog</title>
            </Helmet>

            {/* section 1 */}
            <div className="section__1">
              <div className="section__1__wrapper">
                <div className="section__1__wrapper__text">
                  <h1>Blog</h1>
                  <p>Say Your Thoughts about Your Amazing Travel</p>
                </div>
              </div>
            </div>

            {/* API- den datalar gelecek */}
            <div className="posts">
              <div className="posts__wrapper">
                {
                  data && data.map((item, index) => {
                    return (
                      <div className="posts__wrapper__card" key={index}>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="posts__wrapper__card__img">
                              <img src={`http://localhost:8080/public/${item.image}`} alt="img" />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="posts__wrapper__card__content">
                              <Link>{item.title}</Link>
                              <span>{item.date}</span>
                              <p> {item.content}
                              </p>
                              <div className="spans">
                                <span className='poster'>Post by <strong>{item.poster}</strong></span>
                                <span>{item.comment} Comments</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
      }
    </>
  )
}

export default Blog