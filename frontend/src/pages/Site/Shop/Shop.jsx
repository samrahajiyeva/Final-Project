import React, { useEffect, useState } from 'react'
import './Shop.scss'
import Loading from '../../../components/Site/Loading/Loading'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/ShoppingSlice/ShoppingSlice';
import { Toaster , toast } from 'react-hot-toast';


function Shop() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const items = useSelector(state => state.shoppingcart.items)
    const dispatch = useDispatch()

    useEffect(() => {
        setLoading(true)
        window.scrollTo({ top: 0 })
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/shop").then(res => {
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
                            <title>Shop</title>
                        </Helmet>
                        {/* SECTION 1 */}
                        <div className="shop-sec__1">
                            <div className="shop-sec__1__wrapper">
                                <div className="shop-sec__1__wrapper__text">
                                    <h2>Adventure Shop</h2>
                                    <p>Shop for awesome trekking and adventure equipments</p>
                                </div>
                            </div>
                        </div>


                        {/* Section 2 */}
                        <div className="shop-sec__2">
                            {
                                data && data.map((item, index) => {
                                    return (
                                        <div className="shop-sec__2__card">
                                            <div className="shop-sec__2__card__img">
                                                <img src={`http://localhost:8080/public/${item.image}`} alt="img" />
                                            </div>
                                            <div className="shop-sec__2__card__title">
                                                <Link>{item.title}</Link>
                                            </div>
                                            <div className="shop-sec__2__card__text">
                                                <p>{item.content}</p>
                                                <button className='btn' onClick={() => {
                                                    dispatch(addToCart({ id: item._id, image: item.image ,  title: item.title, price: item.price }))
                                                    toast.success("Added to Cart")
                                                }}>Add to Basket</button>
                                            </div>
                                            <div className="shop-sec__2__card__count">
                                                <span>${item.price}</span>
                                                <div className="shop-sec__2__card__count__icons">
                                                    <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="shop__countIcon" /></Link>
                                                    <Link to="https://twitter.com/?lang=en" target="_blank"><FaTwitter className="shop__countIcon" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
            <Toaster />
        </>
    )
}

export default Shop