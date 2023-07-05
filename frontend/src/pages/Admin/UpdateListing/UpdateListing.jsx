import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateListing.scss"
// import * as Yup from 'yup'


function UpdateListing() {
  const [updateproduct, setUpdateProduct] = useState("")
  const [imagee, setImage] = useState("")
  const [dayy, setDay] = useState(0)
  const [titlee, setTitle] = useState("")
  const [tripTypee, settripType] = useState("")
  const [placee, setPlace] = useState(0)
  const [activityy, setActivity] = useState(0)
  const [contentt , setContent] = useState("")
  const [pricee , setPrice] = useState(0)

  const { id } = useParams()
  const navigate = useNavigate()
  const getProductById = async () => {
    await axios.get(`http://localhost:8080/listing/${id}`)
      .then(res => {
        setUpdateProduct(res.data);
        setImage(res.data.image);
        setDay(res.data.day);
        setTitle(res.data.title);
        settripType(res.data.tripType);
        setPlace(res.data.place);
        setActivity(res.data.activity);
        setContent(res.data.content);
        setPrice(res.data.price);
      }
      )
  }

  useEffect(() => {
    getProductById()
  }, [])
  return (
    <div id='updateproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            image: "",
            day: 0,
            title: "",
            tripType: "",
            place: 0,
            activity: 0,
            content: "",
            price: 0
          }}

          onSubmit={(values) => {
            let UpdateProduct = {
              image: imagee,
              day: dayy,
              title: titlee,
              tripType: tripTypee,
              place: placee,
              activity: activityy,
              content: contentt,
              price: pricee
            }

            axios.put(`http://localhost:8080/listing/${id}`, UpdateProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Updated`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/listingdata")
                }
              })

          }}
        >
          {({ errors }) => (
            <Form>
              <div className="listing-firstline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field name="image" placeholder="URL..." value={imagee} onChange={(e) => setImage(e.target.value)} />
                  {errors.image ? <p style={{ color: "red" }}>{errors.imagee}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>
                  <Field name="day" placeholder="DAY..." value={dayy} onChange={(e) => setDay(e.target.value)} />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." value={titlee} onChange={(e) => setTitle(e.target.value)} />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
              </div>
              <div className="listing-secondline">
                <label className='col-3'>
                  <span>Trip Type: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="TRIP TYPE..." value={tripTypee} onChange={(e) => settripType(e.target.value)} />
                  {errors.tripType ? <p style={{ color: "red" }}>{errors.tripType}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Place: <span style={{ color: "red" }}>*</span></span>
                  <Field name="place" placeholder="PLACE..." value={placee} onChange={(e) => setPlace(e.target.value)} />
                  {errors.place ? <p style={{ color: "red" }}>{errors.place}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Activity: <span style={{ color: "red" }}>*</span></span>
                  <Field name="activity" placeholder="ACTIVITY..." value={activityy} onChange={(e) => setActivity(e.target.value)} />
                  {errors.activity ? <p style={{ color: "red" }}>{errors.activity}</p> : null}
                </label>
              </div>
                <div className="listing-secondline">
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." value={contentt} onChange={(e) => setContent(e.target.value)} />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Price: <span style={{ color: "red" }}>*</span></span>
                  <Field name="price" placeholder="PRICE..." value={pricee} onChange={(e) => setPrice(e.target.value)} />
                  {errors.price ? <p style={{ color: "red" }}>{errors.price}</p> : null}
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