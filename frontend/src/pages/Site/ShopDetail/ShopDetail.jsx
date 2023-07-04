import React, { useEffect, useState } from 'react'
import './ShopDetail.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ShopDetail() {
    const { id } = useParams()
    const [item, setData] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8080/listing/${id}`).then(res => setData(res.data))
        console.log(item.title);
    })

    return (
        <>
            <div className="shopdetail">
                <div className="shopdetail__left">
                    <img src={item.image} alt="img" />
                </div>
                <div className="shopdetail__right">
                    <h1>{item?.title}</h1>
                    <strong>${item?.price}</strong>
                    <p>{item?.content}</p>
                    <ul>
                        <li>
                            <h4>Vacation Style</h4>
                            <span>{item?.tripType}</span>
                        </li>
                        <li>
                            <h4>Activity Level</h4>
                            <p>{item?.activity}</p>
                        </li>
                    </ul>
                    <button>Book Now</button>
                </div>
            </div>
        </>
    )
}

export default ShopDetail