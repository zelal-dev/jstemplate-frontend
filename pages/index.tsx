import { GetStaticProps } from 'next'
import SWR from 'swr'
import { NextSeo, BrandJsonLd } from 'next-seo'
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
  // fetch data using SWR
  const { data, error } = SWR('api/v1/public/products', fetcher, {
    initialData: productData,
  } as any)

  return (
    <>
      <NextSeo
        titleTemplate="JS Template - %s "
        title="Top of MERN Stack, React.js, Headless CMS, Frontity Themes"
        description="Buy Ready-Made JS Template Web Solution, Grow Your Business Faster. We developed best MERN Stack, Headless CMS, Tailwind CSS Themes, templates for your next project."
      />
      <BrandJsonLd
        slogan="Top of MERN Stack, React.js, Headless CMS, Frontity Themes"
        id="https://jstemplate.net"
        logo="https://jstemplate.net/images/logo.png"
        aggregateRating={{
          ratingValue: '0',
          ratingCount: '0',
        }}
      />
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
    </>
  )
}

export default Homepage

export const getStaticProps: GetStaticProps = async (context) => {
  const productResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/public/products`
  )
  const productData = await productResponse.json()

  return {
    props: {
      productData,
    },
  }
}
