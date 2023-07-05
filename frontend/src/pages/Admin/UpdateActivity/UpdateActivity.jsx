import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { message } from 'antd'
import "./UpdateActivity.scss"
// import * as Yup from 'yup'


function UpdateActivity() {
  const [updateproduct, setUpdateProduct] = useState("")
  const [titlee, setTitle] = useState("")
  const [dayy, setDay] = useState(0)
  const [contentt, setContent] = useState("")
  const [imagee, setImage] = useState("")
  const [seasonn, setSeason] = useState("")
  const [locationn, setLocation] = useState("")

  const { id } = useParams()
  const navigate = useNavigate()
  const getProductById = async () => {
    await axios.get(`http://localhost:8080/blogs/${id}`)
      .then(res => {
        setUpdateProduct(res.data);
        setTitle(res.data.title);
        setDay(res.data.day);
        setContent(res.data.content);
        setImage(res.data.image);
        setSeason(res.data.season);
        setLocation(res.data.location);
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
            title: "",
            day: 0,
            content: "",
            image: "",
            season: "",
            location: ""
          }}

          onSubmit={(values) => {
            let UpdateProduct = {
              title: titlee,
              day: dayy,
              content: contentt,
              image: imagee,
              season: seasonn,
              location: locationn
            }

            axios.put(`http://localhost:8080/activity/${id}`, UpdateProduct)
              .then(res => {
                if (res.status === 200) {
                  message.open({
                    type: "success",
                    content: `Updated`,
                    style: {
                      color: "black"
                    }

                  })
                  navigate("/admin/activitydata")
                }
              })

          }}
        >
          {({ errors }) => (
            <Form>
              <div className="firstline">
                <label className='col-3'>
                  <span>Title: <span style={{ color: "red" }}>*</span></span>
                  <Field name="title" placeholder="TITLE..." value={titlee} onChange={(e) => setTitle(e.target.value)} />
                  {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Day: <span style={{ color: "red" }}>*</span></span>
                  <Field name="day" placeholder="DAY..." value={dayy} onChange={(e) => setDay(e.target.value)} />
                  {errors.day ? <p style={{ color: "red" }}>{errors.day}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Content: <span style={{ color: "red" }}>*</span></span>
                  <Field name="content" placeholder="CONTENT..." value={contentt} onChange={(e) => setContent(e.target.value)} />
                  {errors.content ? <p style={{ color: "red" }}>{errors.content}</p> : null}
                </label>
              </div>
              <div className="secondline">
                <label className='col-3'>
                  <span>Image URL: <span style={{ color: "red" }}>*</span></span>
                  <Field name="image" placeholder="URL..." value={imagee} onChange={(e) => setImage(e.target.value)} />
                  {errors.image ? <p style={{ color: "red" }}>{errors.image}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Season: <span style={{ color: "red" }}>*</span></span>
                  <Field name="season" placeholder="Season..." value={seasonn} onChange={(e) => setSeason(e.target.value)} />
                  {errors.season ? <p style={{ color: "red" }}>{errors.season}</p> : null}
                </label>
                <label className='col-3'>
                  <span>Location: <span style={{ color: "red" }}>*</span></span>
                  <Field name="location" placeholder="LOCATION..." value={locationn} onChange={(e) => setLocation(e.target.value)} />
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