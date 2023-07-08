import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateActivity.scss"

function UpdateActivity() {
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
      const response = await axios.get(`http://localhost:8080/activity/${id}`);
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
      formData.append('day', values.day);
      formData.append('content', values.content);
      formData.append('season', values.season);
      formData.append('location', values.location)

      await axios.put(`http://localhost:8080/activity/${id}`, formData, {
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

      navigate('/admin/activitydata');
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
              day: updateProduct.day,
              content: updateProduct.content,
              season: updateProduct.season,
              location: updateProduct.location,
            }}
            onSubmit={handleSubmit}
          >

            {({ errors, handleChange }) => (
              <Form>
                <div className="firstline">
                  <label className='col-3'>
                    <span>Title:</span>
                    <Field name="title" placeholder="TITLE..." />
                    {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Day:</span>
                    <Field name="day" placeholder="DAY..." />
                    {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Content:</span>
                    <Field name="content" placeholder="CONTENT..." />
                    {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                  </label>
                </div>
                <div className="secondline">
                  <label className='col-3'>
                    <span>Image:</span>
                    <input type="file" name="image" onChange={handleImageUpload} />
                    {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Season:</span>
                    <Field name="season" placeholder="Season..." />
                    {errors.season ? <p style={{ color: "red" }}>{errors.season}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Location:</span>
                    <Field name="location" placeholder="LOCATION..." />
                    {errors.location ? <p style={{ color: "red" }}>{errors.location}</p> : null}
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

export default UpdateActivity