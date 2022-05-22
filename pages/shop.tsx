import React from 'react'
import FooterWithoutSolution from '../src/components/FooterWithoutSolution'
import Navbar from '../src/components/Navbar'
import ContactUs from '../src/Sections/Productpage/ContactUs'
import Header from '../src/Sections/Productpage/Header'
import Products from '../src/Sections/Productpage/Products'

const ProductPage = () => {
  return (
    <section>
      <div className="bg-backgroundGray">
        <div className="product-header-part">
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

// get staticspros function for prefetch data
export async function getStaticProps() {
  const productResponse = await fetch(`http://localhost:1337/api/v1/products`)
  const productData = await productResponse.json()

  console.log('producst Data', productData)
  return {
    props: {
      // props for the page
    },
  }
}

// getStaticPaths function for prerendering data
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
    ],
    fallback: false,
  }
}
