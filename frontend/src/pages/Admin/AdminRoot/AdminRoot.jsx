import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate  } from "react-router-dom";
import Sidebar from '../../../components/Admin/Sidebar/Sidebar';
import axios from 'axios'
import {useCookies} from 'react-cookie'

function AdminRoot() {
  const [datas, setdata] = useState({})
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();
  const jwt = cookies.jwt
  console.log(cookies);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        await axios.get(
          "http://localhost:8080/auth/getMe",
          {
            withCredentials: true,
          }
        ).then(res=>setdata(res.data))
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);
  return (
    <>
    {
      (jwt&&datas.isAdmin)?(<Sidebar/>):(<button onClick={()=>navigate("/")}>Go Home</button>)
    }
    </>
  )
}

export default AdminRoot