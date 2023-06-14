import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import Datas from "../pages/Admin/Datas/Datas";
import About from "../pages/Site/About/About";
import Activities from "../pages/Site/Activities/Activities";
import Blog from "../pages/Site/Blog/Blog";
import Cart from "../pages/Site/Cart/Cart";
import Contact from "../pages/Site/Contact/Contact";
import Home from "../pages/Site/Home/Home";
import Listings from "../pages/Site/Listings/Listings";
import Shop from "../pages/Site/Shop/Shop";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import User from "../pages/Site/User/User";
import NotFound from "../pages/Site/NotFound/NotFound";

export const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "listings",
        element: <Listings />
      },
      {
        path: "activities",
        element: <Activities />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "user",
        element: <User />
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "*",
        element: <NotFound />
      }
      // {
      //   path: ":id",
      //   element: <Detail />
      // }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "datas",
        element: <Datas />,
      },
    ],
  },
];
