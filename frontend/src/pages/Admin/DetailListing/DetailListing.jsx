import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlineX } from 'react-icons/hi'
import './DetailListing.scss'


function DetailListing() {
  const [detailproduct, setdDetailProduct] = useState("")
  let { productsId } = useParams()
  const getProductById = async () => {
    await axios.get(`http://localhost:8080/listing/${productsId}`)
      .then(res => console.log(res.data))
  }
  useEffect(() => {
    getProductById()
  }, [])
  return (
    <div id='productdetails'>
      <div className="productdetailform">
        <div className="product-image">
          <img src={detailproduct.image} alt="img" />
        </div>
        <div className="product-infoo">
          <div className="product-infoo-title">
            <h4>DAY :</h4>
            <h6>{detailproduct.day}</h6>
          </div>
          <div className="product-infoo-title">
            <h4>Title :</h4>
            <h6>{detailproduct.title}</h6>
          </div>
          <div className="product-infoo-title">
            <h4>Trip Type :</h4>
            <h6>{detailproduct.tripType}</h6>
          </div>
          <div className="product-infoo-title">
            <h4>Place :</h4>
            <h6>{detailproduct.place}</h6>
          </div>
          <div className="product-infoo-title">
            <h4>Activity :</h4>
            <h6>{detailproduct.activity}</h6>
          </div>
          <div className="product-infoo-title">
            <h4>Price :</h4>
            <h6>{detailproduct.price}</h6>
          </div>
          <div className="product-infoo-title">
            <h4>Content :</h4>
            <h6>{detailproduct.content}</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailListing