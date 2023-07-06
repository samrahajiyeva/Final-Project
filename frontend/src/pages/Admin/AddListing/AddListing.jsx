import React, { useState } from 'react'
import './AddListing.scss'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { message } from 'antd'


function AddListing() {
  const [selectedFile1, setSelectedFile1] = useState(null);

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };

  // const CreateSchema = Yup.object().shape({
  //   image: Yup.string().required("Image url is required"),
  //   day: Yup.number().required("Day is required "),
  //   title: Yup.string().required("Title is required"),
  //   tripType: Yup.string().required("Trip Type is required"),
  //   place: Yup.number().required("Place is required"),
  //   activity: Yup.number().required("Activity is required"),
  //   content: Yup.string().required("Content is required!"),
  //   price: Yup.number().required("Price is required!")
  // });


  const navigate = useNavigate()
  return (
    <div id='addnewproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            image: null,
            day: Number,
            title: "",
            tripType: "",
            place: Number,
            activity: Number,
            content: "",
            price: Number
          }}

          // validationSchema={CreateSchema}


          onSubmit={(values, { resetForm }) => {
            let newProduct = {
              image: selectedFile1,
              day: Number(values.day),
              title: values.title,
              tripType: values.tripType,
              place: Number(values.place),
              activity: Number(values.activity),
              content: values.content,
              price: Number(values.price)
            }

            const formData = new FormData();
            formData.append("image", selectedFile1);
            formData.append("day", newProduct.day);
            formData.append("title", newProduct.title);
            formData.append("tripType", newProduct.tripType);
            formData.append("place", newProduct.place);
            formData.append("activity", newProduct.activity);
            formData.append("content", newProduct.content);
            formData.append("price", newProduct.price);
           


            axios.post("http://localhost:8080/listing", formData)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Create`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/listingdata")
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
              <div className="listing-firstline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field type="file" name="image" onChange={handleImageUpload1}/>
                  {/* {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null} */}
                </label>
                <label className='col-3'>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>
                  <Field name="day" placeholder="DAY..." />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
              </div>
              <div className="listing-secondline">
                <label className='col-3'>
                  <span>Trip Type: <span style={{ color: "red" }}>*</span></span>
                  <Field name="tripType" placeholder="TRIP TYPE..." />
                  {errors.tripType ? <p style={{ color: "red" }}>{errors.tripType}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Place: <span style={{ color: "red" }}>*</span></span>
                  <Field name="place" placeholder="PLACE..." />
                  {errors.place ? <p style={{ color: "red" }}>{errors.place}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Activity: <span style={{ color: "red" }}>*</span></span>
                  <Field name="activity" placeholder="ACTIVITY..." />
                  {errors.activity ? <p style={{ color: "red" }}>{errors.activity}</p> : null}
                </label>
              </div>
              <div className="listing-secondline">
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
                <label className='col-3'>
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

export default AddListing