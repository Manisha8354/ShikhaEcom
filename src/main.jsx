import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutUs from "./components/About/About.jsx";
import Layout from "./Layout.jsx";
// import Returnpolicy from "./components/Returnpolicy/Returnpolicy.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Contact from "./components/contact/Contact.jsx";
import Terms from "./components/termand Privacy/Terms.jsx";
import Privacy from "./components/termand Privacy/Privacy.jsx";
import Shippingpolicy from "./components/Shipping/Shippingpolicy.jsx";

let router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    {/* <Route path="/return" element={<Returnpolicy/>}/> */}
    <Route path="/shipping" element={<Shipping/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/terms" element={<Terms/>}/>
    <Route path="/privacy" element={<Privacy/>}/>
    <Route path="/shippingpolicy" element={<Shippingpolicy/>}/>
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
