import React, { useEffect, useState } from 'react';
import './ShopDetail.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/ShoppingSlice/ShoppingSlice';
import { FaFacebookF, FaTwitter, FaHiking } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { BsFillAirplaneEnginesFill } from 'react-icons/bs';
import { TbActivityHeartbeat } from 'react-icons/tb';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function ShopDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null); // New state for selected date
  const items = useSelector(state => state.shoppingcart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`http://localhost:8080/listing/${id}`).then(res => setData(res.data));
    console.log(data.title);
  }, []);

  const handleBookNow = () => {
    if (!selectedDate) {
      toast.error("Please choose a date");
      return;
    }

    const cartItemId = `${data._id}-${selectedDate.getTime()}`; // Include the selected date in the item ID
    dispatch(addToCart({
      id: cartItemId,
      image: data.image,
      title: data.title,
      price: data.price,
      date: selectedDate,
    }));
    toast.success("Added to Cart");
    setTimeout(() => {
      navigate('/cart');
    }, 1200);
  };

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
              <div className='activity-div'>
                <span>{data?.tripType}</span>
                <div className="activity-icons">
                  <GiWorld /> <BsFillAirplaneEnginesFill />
                </div>
              </div>
            </li>
            <li>
              <h4>Activity Level</h4>
              <div className='activity-div'>
                <span>{data?.activity}</span>
                <div className="activity-icons">
                  <FaHiking /><TbActivityHeartbeat />
                </div>
              </div>
            </li>
          </ul>
          <div>
            <h4>Select Date</h4>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()} // Set minimum date to today
              placeholderText="Select a date"
            />
          </div>
          <button className='book-now' onClick={handleBookNow}>
            Book Now
          </button>
          <div className="share-icons">
            <p><FaFacebookF className='fb-icon' /><span>Share</span></p>
            <p><FaTwitter /><span>Tweet</span></p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default ShopDetail;