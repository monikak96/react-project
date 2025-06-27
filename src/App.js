import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

import {RouterProvider,createBrowserRouter,Outlet} from "react-router"
import RestaurantMenu from "./components/RestaurantMenu";

const AppComponent = () => (
    (
        <div className="main">
        <Header/>
        <Outlet/>
        </div>
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ]
  },
]);

root.render(<RouterProvider router={appRouter}/>)