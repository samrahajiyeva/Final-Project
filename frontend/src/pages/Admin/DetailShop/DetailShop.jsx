import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import { HiOutlineX } from 'react-icons/hi'
import './DetailShop.scss'


function DetailShop() {
    const [detailproduct, setdDetailProduct] = useState("")
    const { id } = useParams()
    const getProductById = async () => {
        await axios.get(`http://localhost:8080/shop/${id}`)
            .then(res => setdDetailProduct(res.data))
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
                        <h4>TITLE :</h4>
                        <h6>{detailproduct.title}</h6>
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