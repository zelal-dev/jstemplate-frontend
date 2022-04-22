import React from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Testimonials from '../src/Sections/Homepage/Testimonials'
import ChooseUs from '../src/Sections/Servicepage/ChooseUs'
import Get from '../src/Sections/Servicepage/Get'
import Header from '../src/Sections/Servicepage/Header'
import Heading from '../src/Sections/Servicepage/Heading'
import Hire from '../src/Sections/Servicepage/Hire'
import Products from '../src/Sections/Servicepage/Products'
import Promise from '../src/Sections/Servicepage/Promise'
import Question from '../src/Sections/Servicepage/Question'
import Works from '../src/Sections/Servicepage/Works'

const ServicePage=()=> {
  return (
    <div className=''>
        <div className='service-part bg-templateColor'>
            <Navbar.ServiceNavbar />
            <Header />
        </div>
        <ChooseUs />
        <Heading />
        <Works />
        <Promise />
        <Get />
        <Products />
        <Question />
        <Hire />
        <Testimonials />
        <Footer  boxToColor='greenDark' boxFromColor='greenLight' shadowBox='green' buttonToColor='greenDark' buttonFromColor='greenLight' shadowButton='green' />
    </div>
  )
}

export default ServicePage