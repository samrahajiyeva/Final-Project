import React, { useEffect, useState } from 'react'
import './ShopDetail.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast , Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/ShoppingSlice/ShoppingSlice'


function ShopDetail() {
    const navigate = useNavigate();
    const { id } = useParams()
    const [data, setData] = useState({})
    const items = useSelector(state => state.shoppingcart.items)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`http://localhost:8080/listing/${id}`).then(res => setData(res.data))
        console.log(data.title);
    }, [])


    return (
        <>
            <div className="shopdetail" key={data._id}>
                <div className="shopdetail__left">
                    <img src={`http://localhost:8080/public/${data.image}`} alt="img" />
                </div>
                <div className="shopdetail__right">
                    <h1>{data?.title}</h1>
                    <strong>${data?.price}</strong>
                    <p>{data?.content}</p>
                    <ul>
                        <li>
                            <h4>Vacation Style</h4>
                            <span>{data?.tripType}</span>
                        </li>
                        <li>
                            <h4>Activity Level</h4>
                            <p>{data?.activity}</p>
                        </li>
                    </ul>
                    <button
                        onClick={() => {
                            dispatch(addToCart({ id: data._id, image: data.image, title: data.title, price: data.price }));
                            toast.success("Added to Cart");
                            setTimeout(() => {
                                navigate('/cart');
                            }, 1500);
                        }}
                    >
                        Book Now
                    </button>

                </div>
            </div>
            <Toaster />
        </>
    )
}

export default ShopDetail