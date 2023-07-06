import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlineX } from 'react-icons/hi'
import './DetailListing.scss'


function DetailShop() {
    const [detailproduct, setdDetailProduct] = useState([])
    const { id } = useParams()
    const getProductById = async () => {
        await axios.get(`http://localhost:8080/listing/${id}`)
            .then(res => setdDetailProduct(res.data))
    }
    useEffect(() => {
        getProductById()
    }, [])

    
    return (
        <div id='productdetails'>
            <div className="productdetailform">
                <div className="product-image">
                    <img src={`http://localhost:8080/public/${detailproduct.image}`} alt="img" />
                </div>
                <div className="product-infoo">
                    <div className="product-infoo-title">
                        <h4>DAY :</h4>
                        <h6>{detailproduct.day}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>TITLE :</h4>
                        <h6>{detailproduct.title}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>TRIP TYPE :</h4>
                        <h6>{detailproduct.tripType}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>PLACE :</h4>
                        <h6>{detailproduct.place}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>ACTIVITY :</h4>
                        <h6>{detailproduct.activity}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>PRICE :</h4>
                        <h6>{detailproduct.price}</h6>
                    </div>
                    <div className="product-infoo-title infoo-content">
                        <h4>CONTENT :</h4>
                        <h6 className='infoo-content-title'>{detailproduct.content}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailShop