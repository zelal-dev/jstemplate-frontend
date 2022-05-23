import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import Navbar from '../src/components/Navbar'
import Header from '../src/Sections/Homepage/Header'
import styles from '../styles/Home.module.css'
// import headerBg from './../public/headerBg.svg';
import chandan from './../public/chandan.png'
import SWR from 'swr'
import KnowUs from '../src/Sections/Homepage/KnowUs'
import Solution from '../src/Sections/Homepage/Solution'
import ChooseUs from '../src/Sections/Homepage/ChooseUs'
import Customer from '../src/Sections/Homepage/Customer'
import Testimonials from '../src/Sections/Homepage/Testimonials'
import Footer from '../src/components/Footer'
import { ProductDocument } from './shop'
import { Axios } from '../src/utils/axiosKits'
import SolutionCart from '../src/components/SolutionCart'

const fetcher = (url: string) => Axios(url).then((res) => res.data.data) as any

const Homepage = ({ productData }: { productData: ProductDocument }) => {
  // fetch data using SWR
  const { data, error } = SWR('/api/v1/public/products', fetcher, {
    initialData: productData,
  } as any)

  return (
    <section className="">
      <div className="bg-backgroundGray">
        <div className="header-part">
          <Navbar.DefaultNavbar />
          <Header />
        </div>
        <KnowUs />
        <Solution data={data} />
      </div>
      <ChooseUs />
      <Customer />
      <Testimonials />
      <Footer
        boxToColor="blueTwo"
        boxFromColor="blueOne"
        shadowBox="3xl"
        buttonToColor="orangeTwo"
        buttonFromColor="orangeOne"
        shadowButton="4xl"
      />
    </section>
  )
}

export default Homepage

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
