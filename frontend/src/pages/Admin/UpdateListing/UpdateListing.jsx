import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateListing.scss"
// import * as Yup from 'yup'


function UpdateListing() {
  const { id } = useParams()
  const navigate = useNavigate()


  const [updateproduct, setUpdateProduct] = useState("")
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [day, setDay] = useState(Number)
  const [title, setTitle] = useState("")
  const [tripType, settripType] = useState("")
  const [place, setPlace] = useState(Number)
  const [activity, setActivity] = useState(Number)
  const [content, setContent] = useState("")
  const [price, setPrice] = useState(Number)

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };


  // const getProductById = async () => {
  //   await axios.get(`http://localhost:8080/listing/${id}`)
  //     .then(res => {
  //       setUpdateProduct(res.data);
  // setImage(res.data.image);
  // setDay(res.data.day);
  // setTitle(res.data.title);
  // settripType(res.data.tripType);
  // setPlace(res.data.place);
  // setActivity(res.data.activity);
  // setContent(res.data.content);
  // setPrice(res.data.price);
  //     }
  //     )
  // }


  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get(`http://localhost:8080/listing/${id}`);
      const data = res.data;
      setUpdateProduct(data);
      setSelectedFile1(data.image);
      setDay(data.day);
      setTitle(data.title);
      settripType(data.tripType);
      setPlace(data.place);
      setActivity(data.activity);
      setContent(data.content);
      setPrice(data.price);
    };

    getProductById();
  }, [id]);

  
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image", selectedFile1);
    formData.append("day", Number(values.day));
    formData.append("title", values.title);
    formData.append("tripType", values.tripType);
    formData.append("place", Number(values.place));
    formData.append("activity", Number(values.activity));
    formData.append("content", values.content);
    formData.append("price", Number(values.price));


    try {
      await axios.put(`http://localhost:8080/listing/${id}`, formData);
      message.success("Updated");
      navigate("/admin/listingdata");
    } catch (error) {
      message.error("Error");
    }
  };


  return (
    <div id='updateproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            image: null,
            day,
            title,
            tripType,
            place,
            activity,
            content,
            price,
          }}

          onSubmit={handleSubmit}
        >

          {({ errors, handleChange }) => (
            <Form>
              <div className="listing-firstline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field
                    id="inp"
                    type="file"
                    name="image"
                    onChange={handleImageUpload1}
                  />
                  {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>
                  <Field name="day" placeholder="DAY..." />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
              </div>
              <div className="listing-secondline">
                <label className='col-3'>
                  <span>Trip Type: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="TRIP TYPE..." />
                  {errors.tripType ? <p style={{ color: "red" }}>{errors.tripType}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Place: <span style={{ color: "red" }}>*</span></span>
                  <Field name="place" placeholder="PLACE..." />
                  {errors.place ? <p style={{ color: "red" }}>{errors.place}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Activity: <span style={{ color: "red" }}>*</span></span>
                  <Field name="activity" placeholder="ACTIVITY..." />
                  {errors.activity ? <p style={{ color: "red" }}>{errors.activity}</p> : null}
                </label>
              </div>
              <div className="listing-secondline">
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label className='col-3'>
                  <span>
                    Price: <span style={{ color: "red" }}>*</span>
                  </span>
                  <Field id="inp" name="price" placeholder="PRICE..." />
                  {errors.price ? (
                    <p style={{ color: "red" }}>{errors.price}</p>
                  ) : null}
                </label>
              </div>

              <button className='create-product' type='submit'>Update</button>
            </Form>
          )}

        </Formik>
      </div>
    </div>
  )
}

export default UpdateListing