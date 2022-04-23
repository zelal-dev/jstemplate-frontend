import React from 'react'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Testimonials from '../src/Sections/Homepage/Testimonials'
import Header from '../src/Sections/PreSalePage/Header'
import Heading from '../src/Sections/PreSalePage/Heading'
import SimpleTitleFirst from '../src/Sections/PreSalePage/SimpleTitleFirst'
import SimpleTitleSecond from '../src/Sections/PreSalePage/SimpleTitleSecond'
import SimpleTitleThird from '../src/Sections/PreSalePage/SimpleTitleThird'
import Hire from '../src/Sections/ProductSinglePage/Hire'
import MangeWebsite from '../src/Sections/ProductSinglePage/ManageWebsite'
import Question from '../src/Sections/Servicepage/Question'

const PreSalePage = () => {
  return (
    <div>
        <div className="sm:bg-[url('/productSingleHeaderBg.svg')] bg-no-repeat bg-secondaryTemplateColorDark">
            <Navbar.SingleProductNavbar />
            <Header />
        </div>
        <MangeWebsite />
        <SimpleTitleFirst />
        <SimpleTitleSecond />
        <SimpleTitleThird />
        <Heading />
        <Hire />
        <Question />
        <Testimonials />
        <Footer boxToColor='secondaryTemplateColorDark' boxFromColor='secondaryTemplateColorLight' shadowBox='secondaryTemplate' buttonToColor='secondaryTemplateColorDark' buttonFromColor='secondaryTemplateColorLight' shadowButton='secondaryTemplate' />
    </div>
  )
}

export default PreSalePage