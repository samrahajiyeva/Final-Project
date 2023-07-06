import React, { useState } from 'react'
import './AddActivity.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddActivity() {
  const [selectedFile1, setSelectedFile1] = useState(null);

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  // const CreateSchema = Yup.object().shape({
  //   title: Yup.string().required("Title is required "),
  //   day: Yup.number().required("Day is required"),
  //   content: Yup.string().required("Content is required"),
  //   image: Yup.string().required("Image url is required"),
  //   season: Yup.string().required("Season is required"),
  //   location: Yup.string().required("Location is required"),
  // });


  const navigate = useNavigate()
  return (
    <div id='addnewproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            title: "",
            day: Number,
            content: "",
            image: null,
            season: "",
            location: ""
          }}
          //validationSchema={CreateSchema}
          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              title: values.title,
              day: Number(values.day),
              content: values.content,
              image: selectedFile1,
              season: values.season,
              location: values.location
            }

            const formData = new FormData();
              formData.append("title", newProduct.title);
              formData.append("day", newProduct.day);
              formData.append("content", newProduct.content);
              formData.append("image", selectedFile1);
              formData.append("season", newProduct.season);
              formData.append("location", newProduct.location);
             


            axios.post("http://localhost:8080/activity", formData)
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

          {({ errors , handleChange }) => (
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
                  <Field type="file" name="image" onChange={handleImageUpload1} />
                  {/* {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null} */}
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