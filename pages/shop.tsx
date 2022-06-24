import React from 'react'
import SWR from 'swr'
import { GetStaticProps } from 'next'

import FooterWithoutSolution from '../src/components/FooterWithoutSolution'
import Navbar from '../src/components/Navbar'
import ContactUs from '../src/Sections/Productpage/ContactUs'
import Header from '../src/Sections/Productpage/Header'
import Products from '../src/Sections/Productpage/Products'
import { Axios } from '../src/utils/axiosKits'
import { Woocommerce } from '../src/utils/woocommerce'
import _ from 'lodash'

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
  const { data, error } = SWR('/api/products/retrives', fetcher, {
    initialData: productData,
  } as any)

  return (
    <section>
      <div className="bg-backgroundGray">
        <div className="product-header-part">
          <Navbar.DefaultNavbar />
          <Header />
        </div>
        {/* pass props */}
        <Products data={data} />
        {/* <ContactUs /> */}
      </div>
      <FooterWithoutSolution />
    </section>
  )
}

export default ProductPage

// get staticspros function for prefetch data

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await Woocommerce.get('products').then((res) => res.data)

  const filteredData = _.filter(data, (item: any) => {
    return item.status === 'publish'
  }).map((item: any) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.images[0].src,
      short_description: item.short_description,
      categories: item.categories.map((category: any) => {
        return {
          id: category.id,
          name: category.name,
          slug: category.slug,
        }
      }),
    }
  })

  return {
    props: {
      // Pass data to the page via props or null
      productData: filteredData ?? [],
    },
  }
}
