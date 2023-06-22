import React, { useEffect, useState } from 'react'
import './Shop.scss'
import Loading from '../../../components/Site/Loading/Loading'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Helmet } from 'react-helmet'

function Shop() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        window.scrollTo({ top: 0 })
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])
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
                            <div className="shop-sec__2__card">
                                <div className="shop-sec__2__card__img">
                                    <img src="	https://themes.waituk.com/entrada-default/wp-content/uploads/sites/3/2016/08/product-2.jpg" alt="img" />
                                </div>
                                <div className="shop-sec__2__card__title">
                                    <Link>Jungle Safari in Africa</Link>
                                </div>
                                <div className="shop-sec__2__card__text">
                                    <p>Son agreed others exeter period myself few yet nature.
                                        Mention mr manners opinion if garrets enabled.
                                        To an occasional dissimilar impossible sentiments.</p>
                                    <Link className="shop__explore">Explore</Link>
                                </div>
                                <div className="shop-sec__2__card__count">
                                    <span>$1449</span>
                                    <div className="shop-sec__2__card__count__icons">
                                        <Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="shop__countIcon" /></Link>
                                        <Link to="https://twitter.com/?lang=en" target="_blank"><FaTwitter className="shop__countIcon" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default Shop