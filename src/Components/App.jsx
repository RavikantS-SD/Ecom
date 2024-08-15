import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Partials/Navbar'
import Footer from './Partials/Footer'
import About from './About'
import ContactUs from './ContactUs'
import Error404 from './Error404'
import Product from './Product'
import Shop from './Shop'
import Signup from './Signup'
import Login from './Login'

import AdminHome from './Admin/AdminHome/AdminHome'

import AdminMaincategory from './Admin/AdminMaincategory/AdminMaincategory'
import AdminCreateMaincategory from './Admin/AdminMaincategory/AdminCreateMaincategory'
import AdminUpdateMaincategory from './Admin/AdminMaincategory/AdminUpdateMaincategory'

import AdminSubcategory from './Admin/AdminSubcategory/AdminSubcategory'
import AdminCreateSubcategory from './Admin/AdminSubcategory/AdminCreateSubcategory'
import AdminUpdateSubcategory from './Admin/AdminSubcategory/AdminUpdateSubcategory'

import AdminBrand from './Admin/AdminBrand/AdminBrand'
import AdminCreateBrand from './Admin/AdminBrand/AdminCreateBrand'
import AdminUpdateBrand from './Admin/AdminBrand/AdminUpdateBrand'

import AdminProduct from './Admin/AdminProduct/AdminProduct'
import AdminCreateProduct from './Admin/AdminProduct/AdminCreateProduct'
import AdminUpdateProduct from './Admin/AdminProduct/AdminUpdateProduct'

import AdminTestimonial from './Admin/AdminTestimonial/AdminTestimonial'
import AdminCreateTestimonial from './Admin/AdminTestimonial/AdminCreateTestimonial'
import AdminUpdateTestimonial from './Admin/AdminTestimonial/AdminUpdateTestimonial'

export default function App() {
  return (
    <BrowserRouter>
       <Navbar/>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />

             {/* Admin Routes */}
            <Route path="/admin" element={<AdminHome/>} />

            <Route path="/admin/maincategory" element={<AdminMaincategory/>} />
            <Route path="/admin/maincategory/create" element={<AdminCreateMaincategory/>} />
            <Route path="/admin/maincategory/update/:id" element={<AdminUpdateMaincategory/>} />
    
            <Route path="/admin/subcategory" element={<AdminSubcategory/>} />
            <Route path="/admin/subcategory/create" element={<AdminCreateSubcategory/>} />
            <Route path="/admin/subcategory/update/:id" element={<AdminUpdateSubcategory/>} />

            <Route path="/admin/brand" element={<AdminBrand/>} />
            <Route path="/admin/brand/create" element={<AdminCreateBrand/>} />
            <Route path="/admin/brand/update/:id" element={<AdminUpdateBrand/>} />
            
            <Route path="/admin/product" element={<AdminProduct/>} />
            <Route path="/admin/product/create" element={<AdminCreateProduct/>} />
            <Route path="/admin/product/update/:id" element={<AdminUpdateProduct/>} />
            
            <Route path="/admin/testimonial" element={<AdminTestimonial/>} />
            <Route path="/admin/testimonial/create" element={<AdminCreateTestimonial/>} />
            <Route path="/admin/testimonial/update/:id" element={<AdminUpdateTestimonial/>} />

            <Route path="/*" element={<Error404/>} />
          </Routes>

       <Footer/>
    </BrowserRouter>
  )
}
