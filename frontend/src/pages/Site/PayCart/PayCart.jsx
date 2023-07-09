// import React, { useState } from 'react'
// import './PayCart.scss'
// import { Form, Formik, Field } from 'formik'
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { empty } from '../../../redux/ShoppingSlice/ShoppingSlice';
// import Swal from 'sweetalert2';
// import * as Yup from 'yup';

// function PayCart() {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const nameregex = /^[A-Za-z" "]+$/
//     const cardnumberregex = /^(?:\d[ -]*?){16}$/
//     const dateregex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
//     const cvvregex = /^[0-9]{3}$/
//     const BuySchema = Yup.object().shape({
//         name: Yup.string().matches(nameregex).required("İsim gereklidir"),
//         date: Yup.string().matches(dateregex, "Geçersiz tarih").required("Tarih gereklidir"),
//         cardnumber: Yup.string().matches(cardnumberregex, "Geçersiz kart numarası").required("Kart numarası gereklidir"),
//         cvv: Yup.string().matches(cvvregex).required("CVV gereklidir")
//     });
//     const [borderClass2, setBorderClass2] = useState(null)
//     const [borderClass3, setBorderClass3] = useState(null)
//     const [borderClass4, setBorderClass4] = useState(null)
//     const [borderClass5, setBorderClass5] = useState(null)
//     const [number, setNumber] = useState("XXXX XXXX XXXX XXXX")
//     const [name, setName] = useState("NAME")
//     const [date, setDate] = useState("XX/XX")

//     const handlePayment = (resetForm) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: "question",
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 dispatch(empty())
//                 resetForm()
//                 Swal.fire('Payment Successful', '', 'success')
//                 navigate("/cart")
//             }
//         })
//     };

//     const handleCancel = () => {
//         Swal.fire({
//             title: 'Payment Cancelled',
//             icon: 'info'
//         });
//         navigate('/cart')
//     };

//     return (
//         <div id='buycart'>
//             <div className="buycart-wrapper">
// <div className="credit-cart">
//     <img className='map' src="https://www.freeiconspng.com/thumbs/world-map-png/world-map-png-13.png" alt="" />
//     <div className="cart-visa">
//         <img src="https://seeklogo.com/images/C/Chip-logo-3C162A3B9B-seeklogo.com.png" alt="" />
//         <h3 className='visa'>VISA</h3>
//     </div>
//     <div className="cart-number">
//         <div className="cart-number-number">
//             <h3 className='number-example'>{number.length !== 0 ? number : "XXXX XXXX XXXX XXXX"}</h3>
//         </div>
//     </div>
//     <div className="cart-cvv-date">
//         <div className="cart-name">
//             <h3 className='name-example'>{name.length !== 0 ? name : "İSİM"}</h3>
//         </div>
//         <div className="cvv-date">
//             <h4>{date.length !== 0 ? date : "XX/XX"}</h4>
//             <h4> &#183;&#183;&#183;</h4>
//         </div>
//     </div>
// </div>
// <div className="cart-inputs">
//     <Formik
//         initialValues={{
//             name: "",
//             cardnumber: "",
//             date: "",
//             cvv: ""
//         }}
//         validationSchema={BuySchema}
//         onSubmit={(values, { resetForm }) => handlePayment(resetForm)}
//     >
//         {({ errors, dirty }) => (
//             <Form>
//                 <Field
//                     onKeyUp={(e) => setName(e.target.value)}
//                     className={borderClass2}
//                     name="name"
//                     placeholder="İSİM"
//                 />
//                 {errors.name ? setBorderClass2("borderred") : setBorderClass2(null)}
//                 <Field
//                     onKeyUp={(e) => setNumber(e.target.value)}
//                     className={borderClass3}
//                     name="cardnumber"
//                     placeholder="XXXX-XXXX-XXXX-XXXX"
//                     type="text"
//                 />
//                 {errors.cardnumber ? setBorderClass3("borderred") : setBorderClass3(null)}
//                 <Field
//                     onKeyUp={(e) => setDate(e.target.value)}
//                     className={borderClass4}
//                     name="date"
//                     placeholder="XX/XX"
//                 />
//                 {errors.date ? setBorderClass4("borderred") : setBorderClass4(null)}
//                 <Field
//                     className={borderClass5}
//                     type="password"
//                     name="cvv"
//                     placeholder="CVV"
//                 />
//                 {errors.cvv ? setBorderClass5("borderred") : setBorderClass5(null)}
//                 <button type="submit" disabled={!dirty} className='payment-btn'>
//                     ORDER
//                 </button>
//                 <button type="button" onClick={handleCancel} className='payment-btn'>
//                     CANCEL
//                 </button>
//             </Form>
//         )}
//     </Formik>
// </div>
//             </div>
//         </div>
//     )
// }

// export default PayCart


import React, { useState } from 'react';
import './PayCart.scss';
import { Form, Formik, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { empty, markItemsAsOrdered } from '../../../redux/ShoppingSlice/ShoppingSlice';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

function PayCart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.shoppingcart.items);
    const nameregex = /^[A-Za-z" "]+$/;
    const cardnumberregex = /^(?:\d[ -]*?){16}$/;
    const dateregex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvregex = /^[0-9]{3}$/;
    const BuySchema = Yup.object().shape({
        name: Yup.string().matches(nameregex).required("Name is required"),
        date: Yup.string().matches(dateregex, "Date is not valid").required("Date is required"),
        cardnumber: Yup.string().matches(cardnumberregex, "Phone number is not valid").required("Card number is required"),
        cvv: Yup.string().matches(cvvregex).required("CVV is required")
    });
    const [borderClass2, setBorderClass2] = useState(null);
    const [borderClass3, setBorderClass3] = useState(null);
    const [borderClass4, setBorderClass4] = useState(null);
    const [borderClass5, setBorderClass5] = useState(null);
    const [number, setNumber] = useState("XXXX XXXX XXXX XXXX");
    const [name, setName] = useState("NAME");
    const [date, setDate] = useState("XX/XX");

    const handlePayment = (resetForm) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(markItemsAsOrdered());
                dispatch(empty());
                resetForm();
                Swal.fire('Payment Successful', '', 'success').then(() => {
                    navigate("/cart");
                });
            } else {
                resetForm()
                navigate('/')
            }
        });
    };

    // const handleCancel = () => {
    //     // Swal.fire({
    //     //     title: 'Payment Cancelled',
    //     //     icon: 'info'
    //     // });
    //     navigate('/cart');
    // };

    return (
        <div id='buycart'>
            <div className="buycart-wrapper">
                <div className="credit-cart">
                    <img className='map' src="https://www.freeiconspng.com/thumbs/world-map-png/world-map-png-13.png" alt="" />
                    <div className="cart-visa">
                        <img src="https://seeklogo.com/images/C/Chip-logo-3C162A3B9B-seeklogo.com.png" alt="" />
                        <h3 className='visa'>VISA</h3>
                    </div>
                    <div className="cart-number">
                        <div className="cart-number-number">
                            <h3 className='number-example'>{number.length !== 0 ? number : "XXXX XXXX XXXX XXXX"}</h3>
                        </div>
                    </div>
                    <div className="cart-cvv-date">
                        <div className="cart-name">
                            <h3 className='name-example'>{name.length !== 0 ? name : "İSİM"}</h3>
                        </div>
                        <div className="cvv-date">
                            <h4>{date.length !== 0 ? date : "XX/XX"}</h4>
                            <h4> &#183;&#183;&#183;</h4>
                        </div>
                    </div>
                </div>
                <div className="cart-inputs">
                    <Formik
                        initialValues={{
                            name: "",
                            cardnumber: "",
                            date: "",
                            cvv: ""
                        }}
                        validationSchema={BuySchema}
                        onSubmit={(values, { resetForm }) => handlePayment(resetForm)}
                    >
                        {({ errors, dirty }) => (
                            <Form>
                                <Field
                                    onKeyUp={(e) => setName(e.target.value)}
                                    className={borderClass2}
                                    name="name"
                                    placeholder="NAME"
                                />
                                {errors.name ? setBorderClass2("borderred") : setBorderClass2(null)}
                                <Field
                                    onKeyUp={(e) => setNumber(e.target.value)}
                                    className={borderClass3}
                                    name="cardnumber"
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                    type="text"
                                />
                                {errors.cardnumber ? setBorderClass3("borderred") : setBorderClass3(null)}
                                <Field
                                    onKeyUp={(e) => setDate(e.target.value)}
                                    className={borderClass4}
                                    name="date"
                                    placeholder="XX/XX"
                                />
                                {errors.date ? setBorderClass4("borderred") : setBorderClass4(null)}
                                <Field
                                    className={borderClass5}
                                    type="password"
                                    name="cvv"
                                    placeholder="CVV"
                                />
                                {errors.cvv ? setBorderClass5("borderred") : setBorderClass5(null)}
                                <button type="submit" disabled={!dirty} className='payment-btn'>
                                    ORDER
                                </button>
                                {/* <button type="button" onClick={handleCancel} className='payment-btn'>
                                    CANCEL
                                </button> */}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default PayCart;
