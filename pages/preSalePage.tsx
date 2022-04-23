import React from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Testimonials from '../src/Sections/Homepage/Testimonials'
import Benefits from '../src/Sections/PreSalePage/Benefits'
import Header from '../src/Sections/PreSalePage/Header'
import Hire from '../src/Sections/PreSalePage/Hire'
import MangeWebsite from '../src/Sections/PreSalePage/ManageWebsite'
import Timeline from '../src/Sections/PreSalePage/Timeline'
import Question from '../src/Sections/Servicepage/Question'

const ProductSinglePage = () => {
  return (
    <div>
      <div className='single-product-header-part'>
        <Navbar.SingleProductNavbar />
        <Header />
      </div>
        <MangeWebsite />
        <Timeline />
        <Benefits />
        <Hire />
        <Question />
        <Testimonials />
        <Footer boxToColor='secondaryTemplateColorDark' boxFromColor='secondaryTemplateColorLight' shadowBox='secondaryTemplate' buttonToColor='secondaryTemplateColorDark' buttonFromColor='secondaryTemplateColorLight' shadowButton='secondaryTemplate' />
    </div>
  )
}

export default ProductSinglePage