import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateListing.scss"

function UpdateListing() {
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
      const response = await axios.get(`http://localhost:8080/listing/${id}`);
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

      formData.append('day', values.day);
      formData.append('title', values.title)
      formData.append('tripType', values.tripType)
      formData.append('place', values.place)
      formData.append('activity', values.activity)
      formData.append('content', values.content);
      formData.append('price', values.price);

      await axios.put(`http://localhost:8080/listing/${id}`, formData, {
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

      navigate('/admin/listingdata');
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
              day: updateProduct.day,
              title: updateProduct.title,
              tripType: updateProduct.tripType,
              place: updateProduct.place,
              activity: updateProduct.activity,
              content: updateProduct.content,
              price: updateProduct.price,
            }}
            onSubmit={handleSubmit}
          >

            {({ errors }) => (
              <Form>
                <div className="listing-firstline">
                  <label className='col-3'>
                    <span>Image:</span>
                    <input type="file" name="image" onChange={handleImageUpload} />
                    {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Day:</span>
                    <Field name="day" placeholder="DAY..." />
                    {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Title:</span>
                    <Field name="title" placeholder="TITLE..." />
                    {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                  </label>
                </div>
                <div className="listing-secondline">
                  <label className='col-3'>
                    <span>Trip Type:</span>
                    <Field name="tripType" placeholder="TRIP TYPE..." />
                    {errors.tripType ? <p style={{ color: "red" }}>{errors.tripType}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Place:</span>
                    <Field name="place" placeholder="PLACE..." />
                    {errors.place ? <p style={{ color: "red" }}>{errors.place}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>Activity:</span>
                    <Field name="activity" placeholder="ACTIVITY..." />
                    {errors.activity ? <p style={{ color: "red" }}>{errors.activity}</p> : null}
                  </label>
                </div>
                <div className="listing-secondline">
                  <label className='col-3'>
                    <span>Content:</span>
                    <Field name="content" placeholder="CONTENT..." />
                    {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                  </label>
                  <label className='col-3'>
                    <span>
                      Price:
                    </span>
                    <Field id="inp" name="price" placeholder="PRICE..." />
                    {errors.price ? (
                      <p style={{ color: "red" }}>{errors.price}</p>
                    ) : null}
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

export default UpdateListing