import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateActivity.scss"
// import * as Yup from 'yup'


function UpdateActivity() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [updateproduct, setUpdateProduct] = useState("")
  const [title, setTitle] = useState("")
  const [day, setDay] = useState(Number)
  const [content, setContent] = useState("")
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [season, setSeason] = useState("")
  const [location, setLocation] = useState("")

  const handleImageUpload1 = (event) => {
    const file = event.target.files[0];
    setSelectedFile1(file);
  };


  // const getProductById = async () => {
  //   await axios.get(`http://localhost:8080/blogs/${id}`)
  //     .then(res => {
  //       setUpdateProduct(res.data);
  // setTitle(res.data.title);
  // setDay(res.data.day);
  // setContent(res.data.content);
  // setImage(res.data.image);
  // setSeason(res.data.season);
  // setLocation(res.data.location);
  //     }
  //     )
  // }



  useEffect(() => {
    const getProductById = async () => {
      const res = await axios.get(`http://localhost:8080/activity/${id}`);
      const data = res.data;
      setUpdateProduct(data);
      setTitle(data.title);
      setDay(data.day);
      setContent(data.content);
      setSelectedFile1(data.image);
      setSeason(data.season);
      setLocation(data.location);
    };

    getProductById();
  }, [id]);

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("day", Number(values.day));
    formData.append("content", values.content);
    formData.append("image", selectedFile1);
    formData.append("season", values.season);
    formData.append("location", values.location);


    try {
      await axios.put(`http://localhost:8080/activity/${id}`, formData);
      message.success("Updated");
      navigate("/admin/activitydata");
    } catch (error) {
      message.error("Error");
    }
  };


  return (
    <div id='updateproduct'>
      <div className="addnewproduct-form">
        <Formik
          initialValues={{
            title,
            day,
            content,
            image: null,
            season,
            location,
          }}

          onSubmit={handleSubmit}
        >

          {({ errors, handleChange }) => (
            <Form>
              <div className="firstline">
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>
                  <Field name="day" placeholder="DAY..." />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
              </div>
              <div className="secondline">
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
                  <span>Season: <span style={{ color: "red" }}>*</span></span>
                  <Field name="season" placeholder="Season..." />
                  {errors.season ? <p style={{ color: "red" }}>{errors.season}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Location: <span style={{ color: "red" }}>*</span></span>
                  <Field name="location" placeholder="LOCATION..." />
                  {errors.location ? <p style={{ color: "red" }}>{errors.location}</p> : null}
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

export default UpdateActivity