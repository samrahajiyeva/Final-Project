// import React, { useEffect, useState } from 'react';
// import { Helmet } from 'react-helmet';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromCart, addToCart } from '../../../redux/ShoppingSlice/ShoppingSlice';
// import Loading from '../../../components/Site/Loading/Loading';
// import './Cart.scss';
// import { Link, useNavigate } from 'react-router-dom';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { FaPlus, FaMinus } from 'react-icons/fa';

// function Cart() {
//   const items = useSelector((state) => state.shoppingcart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     setLoading(true);
//     window.scrollTo({ top: 0 });
//     setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//   }, [items]);

//   useEffect(() => {
//     const cartItems = localStorage.getItem('cartItems');
//     if (cartItems) {
//       dispatch({ type: 'shoppingcart/setItems', payload: JSON.parse(cartItems) });
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(items));
//   }, [items]);

//   const filteredItems = items.filter((item) =>
//     item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleIncrement = (item) => {
//     dispatch(addToCart({ id: item.id, count: item.count + 1 }));
//   };

//   let totalPrice = 0;
//   filteredItems.forEach((item) => {
//     totalPrice += item.price * item.count;
//   });

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//     toast.success('Item removed from cart.');
//   };

//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <div>
//           <Helmet>
//             <title>Cart</title>
//           </Helmet>
//           <div className="cart">
//             <div className="cart__top">
//               <div className="cart__top__wrapper">
//                 <div className="cart__top__wrapper__text">
//                   <h2>CART</h2>
//                   <p>
//                     <Link to="/">Home</Link>/Cart
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="cart__products">
//               <div className="cart__products__top">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <button onClick={() => navigate('/listings')}>Continue Shopping</button>
//               </div>

//               {filteredItems.length === 0 ? (
//                 <div className="no-items"><em>Your cart is currently empty.</em></div>
//               ) : (
//                 <table>
//                   {/* header */}
//                   <thead>
//                     <tr>
//                       <th className="col-1"></th>
//                       <th className="col-2"></th>
//                       <th className="col-3">SELECTED ITEMS</th>
//                       <th className="col-2">PRICE</th>
//                       <th className="col-2">QUANTITY</th>
//                       <th className="col-2">TOTAL PRICE</th>
//                     </tr>
//                   </thead>

//                   {/* body */}
//                   <tbody>
//                     {filteredItems.map((item, index) => {
//                       const itemTotalPrice = item.price * item.count;

//                       return (
//                         <tr key={index}>
//                           <td className="col-1">
//                             <button
//                               className="table-delete"
//                               onClick={() => handleRemoveFromCart(item.id)}
//                             >
//                               <RiDeleteBin6Line />
//                             </button>
//                           </td>
//                           <td className="col-2">
//                             <img
//                               src={`http://localhost:8080/public/${item?.image}`}
//                               alt="shop-img"
//                             />
//                           </td>
//                           <td className="col-3">
//                             <span>{item?.title}</span>
//                           </td>
//                           <td className="col-2">
//                             <span>${item?.price}</span>
//                           </td>
//                           <td className="col-2 counter-td">
//                             <div className="count">
//                               <button
//                                 className="counter-btn"
//                                 onClick={() => {
//                                   dispatch(removeFromCart(item.id));
//                                 }}
//                               >
//                                 <FaMinus />
//                               </button>
//                               <span className="counter">{item.count}</span>
//                               <button
//                                 className="counter-btn"
//                                 onClick={() => handleIncrement(item)}
//                               >
//                                 <FaPlus />
//                               </button>
//                             </div>
//                           </td>
//                           <td className="item-total-price col-2">
//                             <span>${itemTotalPrice}</span>
//                           </td>
//                         </tr>
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               )}

//               <div className="cart__total">
//                 <h2>Cart Totals</h2>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Subtotal</th>
//                       <td>${totalPrice}</td>
//                     </tr>
//                     <tr>
//                       <th>Total</th>
//                       <td>${totalPrice}</td>
//                     </tr>
//                   </thead>
//                 </table>
//                 <div className="total-btn">
//                   <button onClick={() => navigate('/buy')} disabled={totalPrice === 0}>Proceed to Checkout</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Cart;

// // import React, { useEffect, useState } from 'react';
// // import { Helmet } from 'react-helmet';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { removeFromCart, addToCart } from '../../../redux/ShoppingSlice/ShoppingSlice';
// // import Loading from '../../../components/Site/Loading/Loading';
// // import './Cart.scss';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { RiDeleteBin6Line } from 'react-icons/ri';
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';
// // import { FaPlus, FaMinus } from 'react-icons/fa';

// // function Cart() {
// //   const items = useSelector((state) => state.shoppingcart.items);
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   const [loading, setLoading] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   useEffect(() => {
// //     setLoading(true);
// //     window.scrollTo({ top: 0 });
// //     setTimeout(() => {
// //       setLoading(false);
// //     }, 1500);
// //   }, [items]);

// //   const filteredItems = items.filter((item) =>
// //     item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const handleIncrement = (item) => {
// //     dispatch(addToCart({ id: item.id, count: item.count + 1 }));
// //   };

// //   let totalPrice = 0;
// //   filteredItems.forEach((item) => {
// //     totalPrice += item.price * item.count;
// //   });

// //   return (
// //     <>
// //       {loading ? (
// //         <Loading />
// //       ) : (
// //         <div>
// //           <Helmet>
// //             <title>Cart</title>
// //           </Helmet>
// //           <div className="cart">
// //             <div className="cart__top">
// //               <div className="cart__top__wrapper">
// //                 <div className="cart__top__wrapper__text">
// //                   <h2>CART</h2>
// //                   <p>
// //                     <Link to="/">Home</Link>/Cart
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="cart__products">
// //               <div className="cart__products__top">
// //                 <input
// //                   type="text"
// //                   placeholder="Search..."
// //                   value={searchQuery}
// //                   onChange={(e) => setSearchQuery(e.target.value)}
// //                 />
// //                 <button onClick={() => navigate('/listings')}>Continue Shopping</button>
// //               </div>

// //               {filteredItems.length === 0 ? (
// //                 <div className="no-items"><em>Your cart is currently empty.</em></div>
// //               ) : (
// //                 <table>
// //                   {/* header */}
// //                   <thead>
// //                     <tr>
// //                       <th className="col-1"></th>
// //                       <th className="col-2"></th>
// //                       <th className="col-3">SELECTED ITEMS</th>
// //                       <th className="col-2">PRICE</th>
// //                       <th className="col-2">QUANTITY</th>
// //                       <th className="col-2">TOTAL PRICE</th>
// //                     </tr>
// //                   </thead>

// //                   {/* body */}
// //                   <tbody>
// //                     {filteredItems.map((item, index) => {
// //                       const itemTotalPrice = item.price * item.count;

// //                       return (
// //                         <tr key={index}>
// //                           <td className="col-1">
// //                             <button
// //                               className="table-delete"
// //                               onClick={() => {
// //                                 dispatch(removeFromCart(item.id));
// //                               }}
// //                             >
// //                               <RiDeleteBin6Line />
// //                             </button>
// //                           </td>
// //                           <td className="col-2">
// //                             <img
// //                               src={`http://localhost:8080/public/${item?.image}`}
// //                               alt="shop-img"
// //                             />
// //                           </td>
// //                           <td className="col-3">
// //                             <span>{item?.title}</span>
// //                           </td>
// //                           <td className="col-2">
// //                             <span>${item?.price}</span>
// //                           </td>
// //                           <td className="col-2 counter-td">
// //                             <div className="count">
// //                             <button
// //                               className="counter-btn"
// //                               onClick={() => {
// //                                 dispatch(removeFromCart(item.id));
// //                               }}
// //                             >
// //                               <FaMinus />
// //                             </button>
// //                               <span className="counter">{item.count}</span>
// //                               <button
// //                                 className="counter-btn"
// //                                 onClick={() => handleIncrement(item)}
// //                               >
// //                                 <FaPlus />
// //                               </button>
// //                             </div>
// //                           </td>
// //                           <td className="item-total-price col-2">
// //                            <span>${itemTotalPrice}</span>
// //                           </td>
// //                         </tr>
// //                       );
// //                     })}
// //                   </tbody>
// //                 </table>
// //               )}

// //               <div className="cart__total">
// //                 <h2>Cart Totals</h2>
// //                 <table>
// //                   <thead>
// //                     <tr>
// //                       <th>Subtotal</th>
// //                       <td>${totalPrice}</td>
// //                     </tr>
// //                     <tr>
// //                       <th>Total</th>
// //                       <td>${totalPrice}</td>
// //                     </tr>
// //                   </thead>
// //                 </table>
// //                 <div className="total-btn">
// //                   <button>Proceed to Checkout</button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default Cart;




import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addToCart, markItemsAsOrdered } from '../../../redux/ShoppingSlice/ShoppingSlice';
import Loading from '../../../components/Site/Loading/Loading';
import './Cart.scss';
import { Link, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Cart() {
  const items = useSelector((state) => state.shoppingcart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0 });
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [items]);

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      dispatch({ type: 'shoppingcart/setItems', payload: JSON.parse(cartItems) });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const filteredItems = items.filter((item) =>
    item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()) && !item.ordered
  );

  let totalPrice = 0;
  filteredItems.forEach((item) => {
    totalPrice += item.price * item.count;
  });

  const handleIncrement = (item) => {
    dispatch(addToCart({ id: item.id, count: item.count + 1 }));
  };

  // let totalPrice = 0;
  // filteredItems.forEach((item) => {
  //   if (!item.ordered) {
  //     totalPrice += item.price * item.count;
  //   }
  // });

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
    toast.success('Item removed from cart.');
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Helmet>
            <title>Cart</title>
          </Helmet>
          <div className="cart">
            <div className="cart__top">
              <div className="cart__top__wrapper">
                <div className="cart__top__wrapper__text">
                  <h2>CART</h2>
                  <p>
                    <Link to="/">Home</Link>/Cart
                  </p>
                </div>
              </div>
            </div>

            <div className="cart__products">
              <div className="cart__products__top">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={() => navigate('/listings')}>Continue Reservation</button>
              </div>

              {filteredItems.length === 0 ? (
                <div className="no-items"><em>Your cart is currently empty.</em></div>
              ) : (
                <table>
                  {/* header */}
                  <thead>
                    <tr>
                      <th className="col-1"></th>
                      <th className="col-2"></th>
                      <th className="col-3">SELECTED ITEMS</th>
                      <th className="col-2">PRICE</th>
                      <th className="col-2">QUANTITY</th>
                      <th className="col-2">TOTAL PRICE</th>
                    </tr>
                  </thead>

                  {/* body */}
                  <tbody>
                    {filteredItems.map((item, index) => {
                      const itemTotalPrice = item.price * item.count;

                      return (
                        <tr key={index}>
                          <td className="col-1">
                            <button
                              className="table-delete"
                              onClick={() => handleRemoveFromCart(item.id)}
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </td>
                          <td className="col-2">
                            <img
                              src={`http://localhost:8080/public/${item?.image}`}
                              alt="shop-img"
                            />
                          </td>
                          <td className="col-3">
                            <span>{item?.title}</span>
                            {item.date && (
                              <p className="date-picker">Date: {item.date.toLocaleDateString()}</p>
                            )}
                          </td>
                          <td className="col-2">
                            <span>${item?.price}</span>
                          </td>
                          <td className="col-2 counter-td">
                            <div className="count">
                              <button
                                className="counter-btn"
                                onClick={() => {
                                  dispatch(removeFromCart(item.id));
                                }}
                              >
                                <FaMinus />
                              </button>
                              <span className="counter">{item.count}</span>
                              <button
                                className="counter-btn"
                                onClick={() => handleIncrement(item)}
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </td>
                          <td className="item-total-price col-2">
                            <span>${itemTotalPrice}</span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}

              <div className="cart__total">
                <h2>Cart Totals</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <td>${totalPrice}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>${totalPrice}</td>
                    </tr>
                  </thead>
                </table>
                <div className="total-btn">
                  <button
                    onClick={() => {
                      dispatch(markItemsAsOrdered());
                      navigate('/buy');
                    }}
                    disabled={totalPrice === 0}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
