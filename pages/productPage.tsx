import React from 'react'
import FooterWithoutSolution from '../src/components/FooterWithoutSolution'
import Navbar from '../src/components/Navbar'
import ContactUs from '../src/Sections/Productpage/Contactus'
import Header from '../src/Sections/Productpage/Header'
import Products from '../src/Sections/Productpage/Products'

const ProductPage=()=>{
  return (
    <section>
        <div className='bg-backgroundGray'>
            <div className='header-part'>
                <Navbar />
                <Header />
            </div>
            <Products />
            <ContactUs />
        </div>
        <FooterWithoutSolution />
    </section>
  )
}

export default ProductPage