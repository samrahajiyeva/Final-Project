import React, { useEffect, useState } from 'react'
import './ActivityData.scss'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdEditSquare } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import axios from 'axios'

function ActivityData() {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const [deleted, setdeleted] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:8080/activity").then(res => {
      setData(res.data)
      console.log(res.data);
    })
  }, [deleted])


  //delete
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/activity/${id}`).then(res => {
      console.log(`${id}'s element has been deleted`);
    })
    setdeleted(true)
  }

  //detail
  const handleDetail = (id) => {
    navigate(`/admin/activity/${id}`)
  }

  //update
  const handleUpdate = (id) => {
    navigate(`/admin/updateactivity/${id}`)
  }


  return (
    <>
      <div className="table-datas">
        <div className="table__btn">
          <button className='addnewactivity' onClick={() => navigate("/admin/addactivity")}>Add Activity</button>
          <input onKeyUp={(e) => setSearch(e.target.value)} className='searchinp' type="text" placeholder='Search...' />
        </div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th className="col-3" scope="col">Title</th>
              <th className="col-3" scope="col">Season</th>
              <th className="col-3" scope="col">Location</th>
              <th className="col-1" scope="col">Day</th>
              <th className="col-2" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter(x => x.title.toLowerCase().includes(search.toLowerCase())).map(item => (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.season}</td>
                  <td>{item.location}</td>
                  <td>{item.day}</td>
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



export default ActivityData