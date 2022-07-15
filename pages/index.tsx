/* eslint-disable @typescript-eslint/no-explicit-any */

import parse from 'html-react-parser'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import useSWR from 'swr'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import ChooseUs from '../src/Sections/Homepage/ChooseUs'
import Customer from '../src/Sections/Homepage/Customer'
import Header from '../src/Sections/Homepage/Header'
import KnowUs from '../src/Sections/Homepage/KnowUs'
import Solution from '../src/Sections/Homepage/Solution'
import { Axios, SeoAxios } from '../src/utils/axiosKits'
import { Woocommerce } from '../src/utils/woocommerce'
import { ProductDocument } from './shop'


const fetcher = ( url: string ) => Axios( url ).then( ( res ) => res.data.data )

const seoFetcher = ( url: string ) => SeoAxios( url ).then( ( res ) => res.data )

const Homepage = ( { productData, seoData }: { productData: ProductDocument, seoData: any } ) => {

	// fetch data using SWR
	const { data } = useSWR( '/api/products/retrives' as string, fetcher, {
		fallbackData: productData
	} as any )

	const { data: seoSWRData, error: seoError } = useSWR( `/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}`, seoFetcher, {
		fallbackData: seoData
	} )

	const head = parse( seoSWRData.head )

	return (
		<>
			<Head>
				<title>JS Template- Top of Javascript Templates and Themes </title>
				{head}
			</Head>

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

export const getStaticProps: GetStaticProps = async ( context ) => {


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
			image: item.images[0].src,
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

	// fetch seo data from wp rankmath plugin
	const seoData = await fetch( `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}` ).then( ( res ) => res.json() )

	return {
		props: {
			productData: filteredData ?? [],
			seoData: seoData ?? {}
		},
	}
}
