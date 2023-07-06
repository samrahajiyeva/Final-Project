import React, { useState } from 'react'
import './AddShop.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddShop() {
  const [selectedFile1, setSelectedFile1] = useState(null);

  // const CreateSchema = Yup.object().shape({
  //   image: Yup.string().required("Image url is required"),
  //   title: Yup.string().required("Title is required"),
  //   content: Yup.string().required("Content is required!"),
  //   price: Yup.number().required("Price is required!")
  // });

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  const navigate = useNavigate()
  return (
    <div id='addnewproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            image: null,
            title: "",
            content: "",
            price: Number
          }}

          // validationSchema={CreateSchema}
          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              image: selectedFile1,
              title: values.title,
              content: values.content,
              price: Number(values.price),
            }

            const formData = new FormData();
            formData.append("image", selectedFile1);
            formData.append("title", newProduct.title);
            formData.append("content", newProduct.content);
            formData.append("price", newProduct.price);
            console.log(selectedFile1);


            axios.post("http://localhost:8080/shop", formData)
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

          {({ errors , handleChange }) => (
            <Form>
              <div className="shop-firstline">
                <label className='col-5'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field type="file" name="image" onChange={handleImageUpload1} />
                  {/* {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null} */}
                </label>
                <label className='col-5'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
              </div>
              <div className="shop-secondline">
                <label className='col-5'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label className='col-5'>
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