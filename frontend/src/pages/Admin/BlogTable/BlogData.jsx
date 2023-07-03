import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdEditSquare } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import axios from 'axios'
import './BlogData.scss'

function BlogData() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [deleted, setdeleted] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:8080/blogs").then(res => {
      setData(res.data)
      console.log(res.data);
    })
  }, [deleted])

  //delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/blogs/${id}`).then(res => {
      console.log(`${id}'s element has been deleted`);
    })
    setdeleted(true)
  }

  //detail
  const handleDetail = (id) => {
    navigate(`/admin/blog/${id}`)
  }

  //update
  const handleUpdate = (id) => {
    navigate(`/admin/updateblog/${id}`)
  }


  return (
    <>
      <div className="table-datas">
        <div className="table__btn">
          <button className='addnewblog' onClick={() => navigate("/admin/addblog")}>Add Blog</button>
          <input onKeyUp={(e) => setSearch(e.target.value)} className='searchinp' type="text" placeholder='Search...' />
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th className="col-3" scope="col">Title</th>
              <th className="col-3" scope="col">Date</th>
              <th className="col-2" scope="col">Poster</th>
              <th className="col-2" scope="col">Comment</th>
              <th className="col-2" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter(x => x.title.toLowerCase().includes(search.toLowerCase())).map(item => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.date}</td>
                  <td>{item.poster}</td>
                  <td>{item.comment}</td>
                  <td>
                    <button onClick={() => handleDelete(item._id)}>
                      <MdDelete className='act-icon-delete'/>
                    </button>
                    <button onClick={() => handleUpdate(item._id)}>
                      <MdEditSquare className='act-icon-edit'/>
                    </button>
                    <button onClick={() => handleDetail(item._id)}>
                      <BiDetail className='act-icon-detail'/>
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BlogData