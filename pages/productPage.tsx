import React from 'react'
import FooterWithoutSolution from '../src/components/FooterWithoutSolution'
import Navbar from '../src/components/Navbar'
import ContactUs from '../src/Sections/Productpage/ContactUs'
import Header from '../src/Sections/Productpage/Header'
import Products from '../src/Sections/Productpage/Products'

const ProductPage=()=>{
  return (
    <section>
        <div className='bg-backgroundGray'>
            <div className='product-header-part'>
                <Navbar.DefaultNavbar />
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