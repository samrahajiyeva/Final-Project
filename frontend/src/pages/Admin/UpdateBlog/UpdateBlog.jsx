import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateBlog.scss"
// import * as Yup from 'yup'


function UpdateBlog() {
  const [updateproduct, setUpdateProduct] = useState("")
  const [imagee, setImage] = useState("")
  const [titlee, setTitle] = useState("")
  const [datee, setDate] = useState("")
  const [contentt, setContent] = useState("")
  const [posterr, setPoster] = useState("")
  const [commentt, setComment] = useState(0)

  const { id } = useParams()
  const navigate = useNavigate()
  const getProductById = async () => {
    await axios.get(`http://localhost:8080/blogs/${id}`)
      .then(res => {
        setUpdateProduct(res.data);
        setImage(res.data.image);
        setTitle(res.data.title);
        setDate(res.data.date);
        setContent(res.data.content);
        setPoster(res.data.poster);
        setComment(res.data.comment);
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
            date: "",
            content: "",
            poster: "",
            comment: 0
          }}

          onSubmit={(values) => {
            let UpdateProduct = {
              image: imagee,
              title: titlee,
              date: datee,
              content: contentt,
              poster: posterr,
              comment: commentt
            }

            axios.put(`http://localhost:8080/blogs/${id}`, UpdateProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Updated`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/blogdata")
                }
              })

          }}
        >
          {({ errors }) => (
            <Form>
              <div className="firstline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field name="image" placeholder="URL..." value={imagee} onChange={(e) => setImage(e.target.value)} />
                  {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." value={titlee} onChange={(e) => setTitle(e.target.value)} />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Date: <span style={{ color: "red" }}>*</span></span>
                  <Field name="date" placeholder="DATE..." value={datee} onChange={(e) => setDate(e.target.value)} />
                  {errors.date ? <p style={{ color: "red" }}>{errors.date}</p> : null}
                </label>
              </div>
              <div className="secondline">
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." value={contentt} onChange={(e) => setContent(e.target.value)} />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Poster: <span style={{ color: "red" }}>*</span></span>
                  <Field name="poster" placeholder="POSTER..." value={posterr} onChange={(e) => setPoster(e.target.value)} />
                  {errors.poster ? <p style={{ color: "red" }}>{errors.poster}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Comment: <span style={{ color: "red" }}>*</span></span>
                  <Field name="comment" placeholder="COMMENT..." value={commentt} onChange={(e) => setComment(e.target.value)} />
                  {errors.comment ? <p style={{ color: "red" }}>{errors.comment}</p> : null}
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

export default UpdateBlog