import { GetStaticProps } from 'next'
import useSWR from 'swr'
import { NextSeo } from 'next-seo'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import ChooseUs from '../src/Sections/Homepage/ChooseUs'
import Customer from '../src/Sections/Homepage/Customer'
import Header from '../src/Sections/Homepage/Header'
import KnowUs from '../src/Sections/Homepage/KnowUs'
import Solution from '../src/Sections/Homepage/Solution'
import Testimonials from '../src/Sections/Homepage/Testimonials'
import { Axios } from '../src/utils/axiosKits'
import { ProductDocument } from './shop'

const fetcher = (url: string) => Axios(url).then((res) => res.data.data) as any

const Homepage = ({ productData }: { productData: ProductDocument }) => {
  // // fetch data using SWR
  // const { data, error } = useSWR('/api/products/retrives', fetcher, {
  //   initialData: productData,
  //   refreshInterval: 1000,
  // } as any)
  // console.log('productData', productData, 'data', data, 'error', error)
  return (
    <>
      <NextSeo
        titleTemplate="JS Template - %s "
        title="Top of MERN Stack, React.js, Headless CMS, Frontity Themes"
        description="Buy Ready-Made JS Template Web Solution, Grow Your Business Faster. We developed best MERN Stack, Headless CMS, Tailwind CSS Themes, templates for your next project."
      />
      <section className="">
        <div className="bg-backgroundGray">
          <div className="header-part">
            <Navbar.DefaultNavbar />
            <Header />
          </div>
          <KnowUs />
          <Solution data={productData} />
        </div>
        <ChooseUs />
        <Customer />
        {/* <Testimonials /> */}
        <Footer
          boxToColor="blueTwo"
          boxFromColor="blueOne"
          shadowBox="3xl"
          buttonToColor="orangeTwo"
          buttonFromColor="orangeOne"
          shadowButton="4xl"
        />
      </section>
    </>
  )
}

export default Homepage

export const getStaticProps: GetStaticProps = async (context) => {
  // fetch all products from woocommerce using fecth api
  const BASE_URL =
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/retrives` as string

  const productResponse = await fetch(BASE_URL)
  const productData = await productResponse.json()

  return {
    props: {
      productData: productData.data,
    },
  }
}
