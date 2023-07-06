import React, { useState } from 'react'
import './AddBlog.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddBlog() {
  const [selectedFile1, setSelectedFile1] = useState(null);

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  // const CreateSchema = Yup.object().shape({
  //   image: Yup.string().required("Image url is required"),
  //   title: Yup.string().required("Title is required "),
  //   date: Yup.string().required("Date is required"),
  //   content: Yup.string().required("Content is required"),
  //   poster: Yup.string().required("Poster is required"),
  //   comment: Yup.number().required("Comment is required"),
  // });


  const navigate = useNavigate()
  
  return (
    <div id='addnewproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            image: null,
            title: "",
            date: "",
            content: "",
            poster: "",
            comment: Number
          }}
          // validationSchema={CreateSchema}

          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              image: selectedFile1,
              title: values.title,
              date: values.date,
              content: values.content,
              poster: values.poster,
              comment: Number(values.comment),
            }

            const formData = new FormData();
            formData.append("image", selectedFile1);
            formData.append("title", newProduct.title);
            formData.append("date", newProduct.date);
            formData.append("content", newProduct.content);
            formData.append("poster", newProduct.poster);
            formData.append("comment", newProduct.comment);
           


            axios.post("http://localhost:8080/blogs", formData)
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
                console.log(err);
              })
          }}
        >

          {({ errors }) => (
            <Form>
              <div className="firstline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field type="file" name="image" onChange={handleImageUpload1} />
                  {/* {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null} */}
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
              <button className='create-product' type='submit'>ADD</button>
            </Form>
          )}

        </Formik>
      </div>
    </div>
  )
}

export default AddBlog