import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlineX } from 'react-icons/hi'
import './DetailActivity.scss'


function DetailActivity() {
    const [detailproduct, setdDetailProduct] = useState("")
    const { id } = useParams()
    const getProductById = async () => {
        await axios.get(`http://localhost:8080/activity/${id}`)
            .then(res => setdDetailProduct(res.data))
    }
    useEffect(() => {
        getProductById()
    }, [])
    return (
        <div id='productdetails'>
            <div className="productdetailform">
                <div className="product-image activity-detail-img">
                    <img src={`http://localhost:8080/public/${detailproduct.image}`} alt="img" />
                </div>
                <div className="product-infoo">
                    <div className="product-infoo-title">
                        <h4>TITLE :</h4>
                        <h6>{detailproduct.title}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>DAY :</h4>
                        <h6>{detailproduct.day}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>SEASON :</h4>
                        <h6>{detailproduct.season}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>LOCATION :</h4>
                        <h6>{detailproduct.location}</h6>
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

export default DetailActivity