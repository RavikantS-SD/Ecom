import React from 'react'
import BreadCrum from './Partials/BreadCrum'
import AboutContent from './Partials/AboutContent'
import BrandSlider from './Partials/BrandSlider'
import Features from './Partials/Features'
import Testimonials from './Partials/Testimonials'
import Faqs from './Partials/Faqs'

export default function About() {
  return (
    <>
    <BreadCrum title="About US"/>
    <AboutContent/>
    <BrandSlider/>
    <Features/>
    <Testimonials/>
    <Faqs/>
    </>
  ) 
}
