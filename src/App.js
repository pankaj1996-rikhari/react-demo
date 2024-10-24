import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Product from "./pages/Product.js";
import Blog from "./pages/Blog.js";
import BlogDetails from "./pages/BlogDetails.js";
import Add from "./pages/crud/Add.jsx";
import Read from "./pages/crud/Read.jsx";
import Update from "./pages/crud/Update.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
const App = ()=>{
  return(
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/:id" element={<BlogDetails/>}/>
          <Route path="/adduser" element={<Add/>} />
          <Route path="/readuser" element={<Read/>}/>
          <Route path="/updateuser" element={<Update/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
export default App;