import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlineX } from 'react-icons/hi'
import './DetailBlog.scss'
function DetailBlog() {
    const [detailproduct, setdDetailProduct] = useState("")
    const { id } = useParams()
    const getProductById = async () => {
        await axios.get(`http://localhost:8080/blogs/${id}`)
            .then(res => setdDetailProduct(res.data))
    }
    useEffect(() => {
        getProductById()
    }, [])
    return (
        <div id='productdetails'>
            <div className="productdetailform">
                <div className="product-image blog-detail-img">
                    <img src={`http://localhost:8080/public/${detailproduct.image}`} alt="img" />
                </div>
                <div className="product-infoo">
                    <div className="product-infoo-title">
                        <h4>TITLE :</h4>
                        <h6>{detailproduct.title}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>DATE :</h4>
                        <h6>{detailproduct.date}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>POSTER :</h4>
                        <h6>{detailproduct.poster}</h6>
                    </div>
                    <div className="product-infoo-title">
                        <h4>COMMENT :</h4>
                        <h6>{detailproduct.comment}</h6>
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

export default DetailBlog