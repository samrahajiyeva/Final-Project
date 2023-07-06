import AdminRoot from "../pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard/Dashboard";
import About from "../pages/Site/About/About";
import Activities from "../pages/Site/Activities/Activities";
import Blog from "../pages/Site/Blog/Blog";
import Cart from "../pages/Site/Cart/Cart";
import Contact from "../pages/Site/Contact/Contact";
import Home from "../pages/Site/Home/Home";
import Listings from "../pages/Site/Listings/Listings";
import SiteRoot from "../pages/Site/SiteRoot/SiteRoot";
import User from "../pages/Site/User/User";
import Login from "../pages/Site/Login/Login";
import Register from "../pages/Site/Register/Register";
import NotFound from "../pages/Site/NotFound/NotFound";
import Shop from "../pages/Site/Shop/Shop";
import ListingData from "../pages/Admin/ListingTable/ListingData";
import ActivityData from "../pages/Admin/ActivityTable/ActivityData";
import BlogData from "../pages/Admin/BlogTable/BlogData";
import ShopData from "../pages/Admin/ShopTable/ShopData";
import UserData from "../pages/Admin/UsersTable/UserData";
import Content from "../components/Admin/Content/Content";
import AddListing from "../pages/Admin/AddListing/AddListing";
import UpdateListing from "../pages/Admin/UpdateListing/UpdateListing";
import DetailListing from "../pages/Admin/DetailListing/DetailListing";
import DetailActivity from "../pages/Admin/DetailActivity/DetailActivity";
import AddActivity from "../pages/Admin/AddActivity/AddActivity";
import UpdateActivity from "../pages/Admin/UpdateActivity/UpdateActivity";
import DetailShop from "../pages/Admin/DetailShop/DetailShop";
import AddShop from "../pages/Admin/AddShop/AddShop";
import UpdateShop from "../pages/Admin/UpdateShop/UpdateShop";
import DetailBlog from "../pages/Admin/DetailBlog/DetailBlog";
import AddBlog from "../pages/Admin/AddBlog/AddBlog";
import UpdateBlog from "../pages/Admin/UpdateBlog/UpdateBlog";
import DetailUser from "../pages/Admin/DetailUser/DetailUser";
import AdminData from "../pages/Admin/AdminData/AdminData";
import ShopDetail from "../pages/Site/ShopDetail/ShopDetail";


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
        path: "shop",
        element: <Shop />
      },
      {
        path: "activities",
        element: <Activities />
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
        path: "/:id",
        element: <ShopDetail />
      },
      {
        path: "/:id",
        element: <DetailListing />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
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
        path: "",
        element: <Content />,
        children: [
          {
            path: "listingdata",
            element: <ListingData />
          },
          {
            path: "activitydata",
            element: <ActivityData />
          },
          {
            path: "blogdata",
            element: <BlogData />
          },
          {
            path: "shopdata",
            element: <ShopData />
          },
          {
            path: "userdata",
            element: <UserData />
          }
          ,
          {
            path: "addlisting",
            element: <AddListing />
          }
          ,
          {
            path: "updatelisting/:id",
            element: <UpdateListing />
          }
          ,
          {
            path: "listing/:id",
            element: <DetailListing />
          }
          ,
          {
            path: "activity/:id",
            element: <DetailActivity />
          }
          ,
          {
            path: "addactivity",
            element: <AddActivity />
          }
          ,
          {
            path: "updateactivity/:id",
            element: <UpdateActivity />
          }
          ,
          {
            path: "shop/:id",
            element: <DetailShop />
          }
          ,
          {
            path: "addshop",
            element: <AddShop />
          }
          ,
          {
            path: "updateshop/:id",
            element: <UpdateShop />
          },
          {
            path: "blog/:id",
            element: <DetailBlog />
          }
          ,
          {
            path: "addblog",
            element: <AddBlog />
          }
          ,
          {
            path: "updateblog/:id",
            element: <UpdateBlog />
          }
          ,
          {
            path: "users/:id",
            element: <DetailUser />
          }
          ,
          {
            path: "admindata",
            element: <AdminData />
          }
        ]
      }
    ],
  },
];
