import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { message } from 'antd';
import './UpdateShop.scss';

function UpdateShop() {
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
      const response = await axios.get(`http://localhost:8080/shop/${id}`);
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
        formData.append('image', selectedFile, selectedFile.name);
      }

      formData.append('title', values.title);
      formData.append('content', values.content);
      formData.append('price', values.price);

      await axios.put(`http://localhost:8080/shop/${id}`, formData, {
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

      navigate('/admin/shopdata');
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
    <div id="updateproduct">
      <div className="addnewproduct-form">
        {updateProduct && (
          <Formik
            initialValues={{
              title: updateProduct.title,
              content: updateProduct.content,
              price: updateProduct.price,
            }}
            onSubmit={handleSubmit}
          >
            {({ errors }) => (
              <Form>
                <label>
                  <span>Image: </span>
                  <input type="file" name="image" onChange={handleImageUpload} />
                </label>

                <label>
                  <span>Title: </span>
                  <Field name="title" placeholder="Title" />
                  {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                </label>

                <label>
                  <span>Content: </span>
                  <Field name="content" placeholder="Content" />
                  {errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}
                </label>

                <label>
                  <span>Price: </span>
                  <Field name="price" placeholder="Price" />
                  {errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
                </label>

                <button type="submit">Update</button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
}

export default UpdateShop;
