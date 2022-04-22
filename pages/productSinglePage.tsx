import React from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Testimonials from '../src/Sections/Homepage/Testimonials'
import Benefits from '../src/Sections/ProductSinglePage/Benefits'
import Header from '../src/Sections/ProductSinglePage/Header'
import Hire from '../src/Sections/ProductSinglePage/Hire'
import MangeWebsite from '../src/Sections/ProductSinglePage/ManageWebsite'
import Question from '../src/Sections/Servicepage/Question'

const ProductSinglePage = () => {
  return (
    <div>
      <div className='single-product-header-part'>
        <Navbar.SingleProductNavbar />
        <Header />
      </div>
        <MangeWebsite />
        <Benefits />
        <Hire />
        <Question />
        <Testimonials />
        <Footer boxToColor='secondaryTemplateColorDark' boxFromColor='secondaryTemplateColorLight' shadowBox='secondaryTemplate' buttonToColor='secondaryTemplateColorDark' buttonFromColor='secondaryTemplateColorLight' shadowButton='secondaryTemplate' />
    </div>
  )
}

export default ProductSinglePage