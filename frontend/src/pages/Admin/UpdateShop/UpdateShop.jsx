import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateShop.scss"
// import * as Yup from 'yup'


function UpdateShop() {
  const [updateproduct, setUpdateProduct] = useState("")
  const [imagee, setImage] = useState("")
  const [titlee, setTitle] = useState("")
  const [contentt, setContent] = useState("")
  const [pricee, setPrice] = useState(0)

  const { id } = useParams()
  const navigate = useNavigate()
  const getProductById = async () => {
    await axios.get(`http://localhost:8080/shop/${id}`)
      .then(res => {
        setUpdateProduct(res.data);
        setImage(res.data.image);
        setTitle(res.data.title);
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
            title: "",
            content: "",
            price: 0
          }}

          onSubmit={(values) => {
            let UpdateProduct = {
              image: imagee,
              title: titlee,
              content: contentt,
              price: pricee
            }

            axios.put(`http://localhost:8080/shop/${id}`, UpdateProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Updated`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/shopdata")
                }
              })

          }}
        >
          {({ errors }) => (
            <Form>
              <div className="firstline">
                <label className='col-5'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field name="image" placeholder="URL..." value={imagee} onChange={(e) => setImage(e.target.value)} />
                  {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                </label>
                <label className='col-5'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." value={titlee} onChange={(e) => setTitle(e.target.value)} />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
              </div>
              <div className="secondline">
                <label className='col-5'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." value={contentt} onChange={(e) => setContent(e.target.value)} />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label className='col-5'>
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

export default UpdateShop