import { GetStaticProps } from 'next'
import SWR from 'swr'

import _ from 'lodash'
import FooterWithoutSolution from '../src/components/FooterWithoutSolution'
import Navbar from '../src/components/Navbar'
import Header from '../src/Sections/Productpage/Header'
import Products from '../src/Sections/Productpage/Products'
import { Axios } from '../src/utils/axiosKits'
import { Woocommerce } from '../src/utils/woocommerce'

const fetcher = ( url: string ) => Axios( url ).then( ( res ) => res.data.data ) as any
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

export interface CategoryDocument {
	id: string
	name: string
	slug: string
	description: string
}

const ProductPage = ( {
	productData,
	categoryData,
}: {
	productData: ProductDocument
	categoryData: CategoryDocument
} ) => {
	// fetch data using SWR
	const { data, error } = SWR( '/api/products/shop', fetcher, {
		fallbackData: productData,
	} as any )

	// fetch category data using SWR

	const { data: categories, error: categoryError } = SWR(
		'/api/products/categories',
		fetcher,
		{
			fallbackData: categoryData,
		} as any
	)

	return (
		<section>
			<div className='bg-backgroundGray'>
				<div className='product-header-part'>
					<Navbar.DefaultNavbar />
					<Header />
				</div>
				{/* pass props */}
				<Products data={data} categoriesData={categories} />
				{/* <ContactUs /> */}
			</div>
			<FooterWithoutSolution />
		</section>
	)
}

export default ProductPage

// get staticspros function for prefetch data

export const getStaticProps: GetStaticProps = async ( context ) => {
	const data = await Woocommerce.get( 'products', {
		per_page: 100,
	} ).then( ( res ) => res.data )

	const filteredData = data.map( ( item: any ) => {
		return {
			id: item.id,
			name: item.name,
			slug: item.slug,
			image: item.images.length > 0 ? item.images[0].src : '',
			short_description: item.short_description,
			categories: item.categories.map( ( category: any ) => {
				return {
					id: category.id,
					name: category.name,
					slug: category.slug,
				}
			} ),
		}
	} )

	// Return products category and use as shop page filter

	const categoryData = await Woocommerce.get( 'products/categories' )
		.then( ( res ) => res.data )
		.catch( ( error ) => error.response.data )

	const categories = _.map( categoryData, ( category ) => {
		return {
			id: category.id,
			name: category.name,
			slug: category.slug,
			description: category.description,
			// count: category.count,
			// parent: category.parent,
			// link: category.link,
			// image: category.image,
			// menu_order: category.menu_order,
			// meta: category.meta,
			// _links: category._links,
		}
	} )

	return {
		props: {
			// Pass data to the page via props or null
			productData: filteredData ?? [],
			categoryData: categories ?? [],
		},
	}
}
