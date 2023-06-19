import React from 'react'
import { Helmet } from 'react-helmet'
import './Blog.scss'
import { Link } from 'react-router-dom'


function Blog() {
  return (
    <>
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
          <div className="posts__wrapper__card">
            <div className="posts__wrapper__card__img">
              <img src="https://www.micasa.co.in/blog/photo-1504732099162-d8c9d5ba3bfd.jpeg" alt="img" />
            </div>
            <div className="posts__wrapper__card__content">
              <Link>Luxury Tours in Bahamas</Link>
              <span>30th, May</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor…
                </p>
              <div className="spans">
                <span className='poster'>Post by <strong>Sanjeev</strong></span>
                <span>0 Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog