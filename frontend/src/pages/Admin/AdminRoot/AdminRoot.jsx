import React, { useEffect } from 'react'
import Header from '../../../layout/Admin/Header/Header'
import { Outlet, useNavigate  } from "react-router-dom";
import Footer from '../../../layout/Admin/Footer/Footer';
import axios from 'axios'
import {useCookies} from 'react-cookie'
function AdminRoot() {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:8080/auth/login",
          {},
          {
            withCredentials: true,
          }
        );
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AdminRoot