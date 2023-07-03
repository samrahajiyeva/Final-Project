import React, { useEffect, useState } from 'react'
import './Content.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios';

function Content() {
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
        ).then(res=>setdata(res.data.data))
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);
  return (
    <div>
      {
        (jwt&&datas.isAdmin)&&<div className="coontent" >
        <Outlet />
      </div>
      }
    </div>
  )
}

export default Content