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
import { Woocommerce } from '../src/utils/woocommerce'
import _ from 'lodash'

const fetcher = (url: string) => Axios(url).then((res) => res.data.data) as any

const Homepage = ({ productData }: { productData: ProductDocument }) => {
  // fetch data using SWR
  const { data, error } = useSWR('/api/products/retrives', fetcher, {
    initialData: productData,
    refreshInterval: 1000,
  } as any)
  console.log('productData from SWR', productData, 'data', data, 'error', error)
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
      productData: filteredData ?? [],
    },
  }
}
