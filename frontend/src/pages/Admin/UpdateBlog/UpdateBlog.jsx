import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateBlog.scss"
// import * as Yup from 'yup'


function UpdateBlog() {
  const { id } = useParams()
  const navigate = useNavigate()


  const [updateproduct, setUpdateProduct] = useState("")
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [content, setContent] = useState("")
  const [poster, setPoster] = useState("")
  const [comment, setComment] = useState(Number)

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };



  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get(`http://localhost:8080/blogs/${id}`);
      const data = res.data;
      setUpdateProduct(data);
      setSelectedFile1(data.image);
      setTitle(data.title);
      setDate(data.date);
      setContent(data.content);
      setPoster(data.poster);
      setComment(data.comment);
    };

    getProductById();
  }, [id]);


  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image", selectedFile1);
    formData.append("title", values.title);
    formData.append("date", values.date);
    formData.append("content", values.content);
    formData.append("poster", values.poster);
    formData.append("comment", Number(values.comment));
    try {
      await axios.put(`http://localhost:8080/blogs/${id}`, formData);
      message.success("Updated");
      navigate("/admin/blogdata");
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
              title,
              date,
              content,
              poster,
              comment,
            }}

            onSubmit={handleSubmit}
          >

            {({ errors }) => (
              <Form>
                <div className="firstline">
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
                    <span>Title: <span style={{ color: "red" }}>*</span></span>
                    <Field name="title" placeholder="TITLE..." />
                    {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Date: <span style={{ color: "red" }}>*</span></span>
                    <Field name="date" placeholder="DATE..." />
                    {errors.date ? <p style={{ color: "red" }}>{errors.date}</p> : null}
                  </label>
                </div>
                <div className="secondline">
                  <label className='col-3'>
                    <span>Content: <span style={{ color: "red" }}>*</span></span>
                    <Field name="content" placeholder="CONTENT..." />
                    {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Poster: <span style={{ color: "red" }}>*</span></span>
                    <Field name="poster" placeholder="POSTER..." />
                    {errors.poster ? <p style={{ color: "red" }}>{errors.poster}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Comment: <span style={{ color: "red" }}>*</span></span>
                    <Field name="comment" placeholder="COMMENT..." />
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