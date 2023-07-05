import React from 'react'
import './AddActivity.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddActivity() {
  const CreateSchema = Yup.object().shape({
    title: Yup.string().required("Title is required "),
    day: Yup.number().required("Day is required"),
    content: Yup.string().required("Content is required"),
    image: Yup.string().required("Image url is required"),
    season: Yup.string().required("Season is required"),
    location: Yup.string().required("Location is required"),
  });


  const navigate = useNavigate()
  return (
    <div id='addnewproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            title: "",
            day: 0,
            content: "",
            image: "",
            season: "",
            location: ""
          }}
          validationSchema={CreateSchema}
          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              title: values.title,
              day: values.day,
              content: values.content,
              image: values.image,
              season: values.season,
              location: values.location
            }
            axios.post("http://localhost:8080/activity", newProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Create`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/activitydata")
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
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>

                  <Field name="day" placeholder="DAY..." />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}

                </label>
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
              </div>
              <div className="secondline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field name="image" placeholder="URL..." />
                  {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Season: <span style={{ color: "red" }}>*</span></span>
                  <Field name="season" placeholder="SEASON..." />
                  {errors.season ? <p style={{ color: "red" }}>{errors.season}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Location: <span style={{ color: "red" }}>*</span></span>
                  <Field name="location" placeholder="LOCATION..." />
                  {errors.location ? <p style={{ color: "red" }}>{errors.location}</p> : null}
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

export default AddActivity