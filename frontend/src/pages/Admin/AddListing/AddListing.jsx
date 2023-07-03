import React from 'react'
import './AddListing.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddListing() {
  const CreateSchema = Yup.object().shape({
    image: Yup.string().required("Image url is required"),
    day: Yup.number().required("Day is required "),
    title: Yup.string().required("Title is required"),
    tripType: Yup.string().required("Trip Type is required"),
    place: Yup.number().required("Place is required"),
    activity: Yup.number().required("Activity is required"),
    content: Yup.string().required("Content is required!"),
    price: Yup.number().required("Price is required!")
  });


  const navigate = useNavigate()
  return (
    <div id='addnewproduct'>
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
          validationSchema={CreateSchema}
          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              image: values.img,
              day: values.day,
              title: values.title,
              tripType: values.tripType,
              place: values.place,
              activity: values.activity,
              content: values.content,
              price: values.price
            }
            axios.post("http://localhost:8080/blogs", newProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Create`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/listingdata")
                }
              })
              .catch(err => {
                message.open({
                  type: "error",
                  content: `Error`,
                  style: {
                    color: "black"
                  }

                })
              })
          }}
        >

          {({ errors }) => (
            <Form>
              <div className="firstline">
                <label>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field name="image" placeholder="URL..." />
                  {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                </label>
                <label>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>
                  <Field name="day" placeholder="DAY..." />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                </label>
                <label>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
              </div>
              <div className="secondline">
                <label>
                  <span>Trip Type: <span style={{ color: "red" }}>*</span></span>
                  <Field name="tripType" placeholder="TRIP TYPE..." />
                  {errors.tripType ? <p style={{ color: "red" }}>{errors.tripType}</p> : null}
                </label>
                <label>
                  <span>Place: <span style={{ color: "red" }}>*</span></span>
                  <Field name="place" placeholder="PLACE..." />
                  {errors.place ? <p style={{ color: "red" }}>{errors.place}</p> : null}
                </label>
                <label>
                  <span>Activity: <span style={{ color: "red" }}>*</span></span>
                  <Field name="activity" placeholder="ACTIVITY..." />
                  {errors.activity ? <p style={{ color: "red" }}>{errors.activity}</p> : null}
                </label>
              </div>
              <div className="secondline">
                <label>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label>
                  <span>Price: <span style={{ color: "red" }}>*</span></span>
                  <Field name="price" placeholder="PRICE..." />
                  {errors.price ? <p style={{ color: "red" }}>{errors.price}</p> : null}
                </label>
              </div>
              <button className='create-product' type='submit'>ADD</button>
            </Form>
          )}

        </Formik>
      </div>
    </div>
  )
}

export default AddListing