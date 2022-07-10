/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import useSWR from 'swr'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import ChooseUs from '../src/Sections/Homepage/ChooseUs'
import Customer from '../src/Sections/Homepage/Customer'
import Header from '../src/Sections/Homepage/Header'
import KnowUs from '../src/Sections/Homepage/KnowUs'
import Solution from '../src/Sections/Homepage/Solution'
import { Axios } from '../src/utils/axiosKits'
import { Woocommerce } from '../src/utils/woocommerce'
import { ProductDocument } from './shop'


const fetcher = ( url: string ) => Axios( url ).then( ( res ) => res.data.data )
const Homepage = ( { productData }: { productData: ProductDocument } ) => {
	// fetch data using SWR
	const { data } = useSWR( '/api/products/retrives' as string, fetcher, {
		initialData: productData
	} as any )

	return (
		<>
			{/* <NextSeo
        titleTemplate="JS Template - %s "
        title="Top of MERN Stack, React.js, Headless CMS, Frontity Themes"
        description="Buy Ready-Made JS Template Web Solution, Grow Your Business Faster. We developed best MERN Stack, Headless CMS, Tailwind CSS Themes, templates for your next project."
      /> */}
			<NextSeo noindex={ true } />
			<section className="">
				<div className="bg-backgroundGray">
					<div className="header-part">
						<Navbar.DefaultNavbar />
						<Header />
					</div>
					<KnowUs />
					<Solution data={ data } />
				</div>
				<ChooseUs />
				<Customer />
				{/* <Testimonials /> */ }
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

export const getStaticProps: GetStaticProps = async () => {
	const data = await Woocommerce.get( 'products', {
		per_page: 6,
		status: 'publish',
		featured: true,
	} ).then( ( res ) => res.data )

	const filteredData = data.map( ( item: any ) => {
		return {
			id: item.id,
			name: item.name,
			slug: item.slug,
			image: item.images[ 0 ].src,
			short_description: item.short_description,
			type: item.type === 'simple' ? 'simple' : 'variable',
			price: item.price,
			regular_price: item.regular_price,
			sale_price: item.sale_price,
			categories: item.categories.map( ( category: any ) => {
				return {
					id: category.id,
					name: category.name,
					slug: category.slug,
				}
			} ),
		}
	} )

	return {
		props: {
			productData: filteredData ?? [],
		},
	}
}
