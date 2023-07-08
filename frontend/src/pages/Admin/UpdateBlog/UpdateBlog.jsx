import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateBlog.scss"

function UpdateBlog() {
  const [updateProduct, setUpdateProduct] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const getProductById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/blogs/${id}`);
      setUpdateProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();

      if (selectedFile) {
        formData.append('image', selectedFile);
      }

      formData.append('title', values.title)
      formData.append('date', values.date)
      formData.append('content', values.content);
      formData.append('poster', values.poster);
      formData.append('comment', values.comment)

      await axios.put(`http://localhost:8080/blogs/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      message.open({
        type: 'success',
        content: 'Updated',
        style: {
          color: 'black',
        },
      });

      navigate('/admin/blogdata');
    } catch (error) {
      console.error(error);
      message.open({
        type: 'error',
        content: 'Error',
        style: {
          color: 'black',
        },
      });
    }
  };

  return (
    <div id='updateproduct'>
      <div className="addnewproduct-form">
        {updateProduct && (
          <Formik
            initialValues={{
              title: updateProduct.title,
              date: updateProduct.date,
              content: updateProduct.content,
              poster: updateProduct.poster,
              comment: updateProduct.comment,
            }}
            onSubmit={handleSubmit}
          >

            {({ errors }) => (
              <Form>
                <div className="firstline">
                  <label className='col-3'>
                    <span>Image:</span>
                    <input type="file" name="image" onChange={handleImageUpload} />
                    {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Title:</span>
                    <Field name="title" placeholder="TITLE..." />
                    {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Date:</span>
                    <Field name="date" placeholder="DATE..." />
                    {errors.date ? <p style={{ color: "red" }}>{errors.date}</p> : null}
                  </label>
                </div>
                <div className="secondline">
                  <label className='col-3'>
                    <span>Content:</span>
                    <Field name="content" placeholder="CONTENT..." />
                    {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Poster:</span>
                    <Field name="poster" placeholder="POSTER..." />
                    {errors.poster ? <p style={{ color: "red" }}>{errors.poster}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Comment:</span>
                    <Field name="comment" placeholder="COMMENT..." />
                    {errors.comment ? <p style={{ color: "red" }}>{errors.comment}</p> : null}
                  </label>
                </div>

                <button className='create-product' type='submit'>Update</button>
              </Form>
            )}

          </Formik>
        )}
      </div>
    </div>
  )
}


export default UpdateBlog