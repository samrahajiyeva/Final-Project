import React from 'react'
import './AddShop.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddShop() {
  const CreateSchema = Yup.object().shape({
    image: Yup.string().required("Image url is required"),
    title: Yup.string().required("Title is required"),
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
            title: "",
            content: "",
            price: 0
          }}
          validationSchema={CreateSchema}
          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              image: values.img,
              title: values.title,
              content: values.content,
              price: values.price
            }
            axios.post("http://localhost:8080/shop", newProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Create`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/shopdata")
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

export default AddShop