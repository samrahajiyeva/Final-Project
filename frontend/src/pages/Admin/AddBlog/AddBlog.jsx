import React from 'react'
import './AddBlog.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddBlog() {
  const CreateSchema = Yup.object().shape({
    image: Yup.string().required("Image url is required"),
    title: Yup.string().required("Title is required "),
    date: Yup.string().required("Date is required"),
    content: Yup.string().required("Content is required"),
    poster: Yup.string().required("Poster is required"),
    comment: Yup.number().required("Comment is required"),
  });


  const navigate = useNavigate()
  return (
    <div id='addnewproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            image: "",
            title: "",
            date: "",
            content: "",
            poster: "",
            comment: 0
          }}
          validationSchema={CreateSchema}
          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              image: values.img,
              title: values.title,
              date: values.date,
              content: values.content,
              poster: values.poster,
              comment: values.comment
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
                  navigate("/admin/blogdata")
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
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
                <label>
                  <span>Date: <span style={{ color: "red" }}>*</span></span>

                  <Field name="date" placeholder="DATE..." />
                  {errors.date ? <p style={{ color: "red" }}>{errors.date}</p> : null}

                </label>
              </div>
              <div className="secondline">
                <label>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label>
                  <span>Poster: <span style={{ color: "red" }}>*</span></span>
                  <Field name="poster" placeholder="POSTER..." />
                  {errors.poster ? <p style={{ color: "red" }}>{errors.poster}</p> : null}
                </label>
                <label>
                  <span>Comment: <span style={{ color: "red" }}>*</span></span>
                  <Field name="comment" placeholder="COMMENT..." />
                  {errors.comment ? <p style={{ color: "red" }}>{errors.comment}</p> : null}
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

export default AddBlog