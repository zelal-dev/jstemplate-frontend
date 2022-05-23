import React from 'react'
import SWR from 'swr'
import { GetStaticProps } from 'next'

import FooterWithoutSolution from '../src/components/FooterWithoutSolution'
import Navbar from '../src/components/Navbar'
import ContactUs from '../src/Sections/Productpage/ContactUs'
import Header from '../src/Sections/Productpage/Header'
import Products from '../src/Sections/Productpage/Products'
import { Axios } from '../src/utils/axiosKits'

const fetcher = (url: string) => Axios(url).then((res) => res.data.data) as any
export interface ProductDocument {
  id: string
  status: {
    isPublished: boolean
    isApproved: boolean
  }
  price: {
    standart: number
    standartPlus: number
    extended: number
  }
  isReady: boolean
  title: string
  description: string
  slug: string
  category: Array<string>
  createdAt: string
  updatedAt: string
  map: any
}

const ProductPage = ({ productData }: { productData: ProductDocument }) => {
  // fetch data using SWR
  const { data, error } = SWR('/api/v1/public/products', fetcher, {
    initialData: productData,
  } as any)

  console.log('data by SWR', data, 'error', error)

  return (
    <section>
      <div className="bg-backgroundGray">
        <div className="product-header-part">
          <Navbar.DefaultNavbar />
          <Header />
        </div>
        {/* pass props */}
        <Products data={data} />
        <ContactUs />
      </div>
      <FooterWithoutSolution />
    </section>
  )
}

export default ProductPage

// get staticspros function for prefetch data

export const getStaticProps: GetStaticProps = async (context) => {
  const productResponse = await fetch(
    `http://localhost:1337/api/v1/public/products`
  )
  const productData = await productResponse.json()

  return {
    props: {
      productData,
    },
  }
}
