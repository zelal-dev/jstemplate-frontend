import React, { useEffect } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { ProductDocument, CategoryDocument } from '../../../pages/shop'
import SolutionCart from '../../components/SolutionCart'

const Products = ({
	data,
	categoriesData,
}: {
	data: any
	categoriesData: any
}) => {
	const [isSelected, setIsSelected] = React.useState('all')
	const [selectedProduct, setSelectedProduct] = React.useState(data)

	console.log('Data from products', data)

	useEffect(() => {
		if (data) {
			setSelectedProduct(data)
		}
	}, [data])

	// on change select option
	const onChangeSelect = (value: string) => {
		setIsSelected(value)
		if (value === 'all') {
			setSelectedProduct(data)
		} else {
			// filter the data by category array
			const filteredData = data.filter((item: any) => {
				return item.categories.some((category: any) => category.slug === value)
			})
			setSelectedProduct(filteredData)
		}
	}

	return (
		<div className='container mx-auto flex flex-col items-center px-5 sm:px-0 pb-2 pt-10'>
			<div className='flex flex-col lg:flex-row items-center justify-between bg-white py-6 px-8 rounded-lg shadow-md container mx-auto'>
				<div className='flex items-center justify-start sm:justify-center lg:justify-start overflow-auto w-full sm:w-auto pb-5 sm:pb-0'>
					<button
						type='button'
						onClick={() => onChangeSelect('all')}
						className={`${
							isSelected === 'all' ? 'text-secondary' : 'text-gray-600'
						} text-base mr-5`}>
						All Products
					</button>
					{categoriesData &&
						categoriesData.map((category: CategoryDocument) => {
							return (
								<button
									key={category.id}
									type='button'
									onClick={() => onChangeSelect(category.slug)}
									className={`${
										isSelected === category.slug
											? 'text-secondary'
											: 'text-gray-600'
									} text-base mr-5`}>
									{category.name}
								</button>
							)
						})}
				</div>
				{/* <button
					type='button'
					className='mt-6 lg:mt-0 py-3 px-4 rounded-lg shadow-sm border border-cartImageBgOne flex items-center'>
					<span>Most Recent</span>{' '}
					<IoIosArrowDown className='text-gray-700 ml-6' />
				</button> */}
			</div>

			<div className='mt-11 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 container'>
				{selectedProduct &&
					selectedProduct.map((item: any) => (
						<SolutionCart
							key={item._id}
							toColor='blueOne'
							fromColor='blueTwo'
							item={item}
						/>
					))}
				{selectedProduct && selectedProduct.length === 0 && (
					<div className='text-center xl:col-span-3 md:col-span-2 col-span-1 text-gray-400'>
						No Products Found
					</div>
				)}
			</div>

			{selectedProduct && selectedProduct.length >= 9 && (
				<button
					type='button'
					className='text-base shadow-3xl text-gray-100 mt-20 py-4 px-8 bg-gradient-to-br from-blueOne to-blueTwo rounded-md drop-shadow-lg'>
					Load More
				</button>
			)}
		</div>
	)
}

export default Products
