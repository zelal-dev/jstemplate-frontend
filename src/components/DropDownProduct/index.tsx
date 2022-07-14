import _ from 'lodash'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { productMenuData } from '../../../data/menu.data'

const DropDownProduct = ( { handler }: { handler: any } ) => {
	// eslint-disable-next-line @typescript-eslint/ban-types
	const [activeSubmenu, setActiveSubmenu] = useState<Array<Object>>( [] )
	const [activeID, setActiveID] = useState( 1 )

	useEffect( () => {
		//  filter based on parent menu item and map the child using lodash
		const submenu = _.filter( productMenuData, { menu_order: activeID } )
		// detructure the submenu
		if ( submenu[0]?.children.length > 0 ) {
			const { children } = submenu[0] as any
			setActiveSubmenu( children )
		}

	}, [activeID, productMenuData] )

	const clickHandler = ( id: number ) => {
		setActiveID( id )
	}

	return (
		<div className='bg-white xl:w-[55.625rem] w-10/12 h-auto drop-shadow-xl rounded-lg'>
			<div className='pt-7'>
				<div className=' lg:px-8 md:px-7 sm:px-6 flex items-center border-b-2 border-gray-200'>
					{productMenuData?.map( ( item: any ) => (

						<button
							onClick={() => clickHandler( item.menu_order )}
							key={item.id}
							className={`xl:pb-5 xl:px-8 lg:pb-3 lg:px-4 md:pb-2 md:px-3 sm:pb-2 sm:px-1 lg:text-base sm:text-xs ${item.menu_order === activeID
								? 'text-secondary'
								: 'text-gray-700'
								} peer cursor-pointer duration-200 ease-in`}>
							{item.title}
						</button>
					) )}
				</div>
				<div
					className='lg:px-8 md:px-7 sm:px-6  md:py-7 sm:py-6 grid
           xl:grid-cols-2 lg:grid-cols-1 container gap-2 '>
					{activeSubmenu.length > 0 &&
						activeSubmenu.map( ( item: any ) => (

							<div>
								<ButtonLayout
									key={item.ID}
									title={item.title}
									url={item.url}
									shortDescription={item.description}>
									{/* <FaShoppingCart
                        className={`w-6 h-6 drop-shadow-lg text-orangeTwo`}
                      /> */}
									{/* {item.iconClass === 'FaShoppingCart' && (
                    <FaShoppingCart
                      className={`w-6 h-6 drop-shadow-lg text-orangeTwo`}
                    />
                  )} */}
									<FaShoppingCart
										className={`w-6 h-6 drop-shadow-lg text-orangeTwo`}
									/>
								</ButtonLayout>
							</div>

						) )}
				</div>
				<div className=' lg:px-8 md:px-7 sm:px-6 md:py-7 sm:py-6  bg-backgroundGrayOne flex flex-col xl:flex-row justify-between items-center rounded-b-lg'>
					<div>
						<h2 className='text-gray-900 text-base font-semibold xl:text-left text-center'>
							You will love our solutions
						</h2>
						<article className='text-gray-600 text-sm'>
							Lightning fast speed, secure and scale your website as you need
						</article>
					</div>
					<Link href='/shop'>
						<a className='mt-3 shadow-3xl flex sm:w-auto items-center xl:text-lg text-base xl:py-3 md:py-2 xl:px-4 md:px-3 py-2.5 px-3 rounded-lg bg-gradient-to-br from-blueOne to-blueTwo '>
							<span className='md:ml-2 ml-1 text-white mr-2'>
								View All Solution
							</span>{' '}
							<HiOutlineArrowNarrowRight style={{ color: 'white' }} />
						</a>
					</Link>
				</div>
			</div>
			<div className='arrow bg-white m-0 border-0 w-10 h-6 absolute -top-4 2xl:left-72 xl:left-64 lg:left-28 md:left-20 sm:left-10' />
		</div>
	)
}

export default DropDownProduct

const ButtonLayout = ( {
	children,
	title,
	url,
	shortDescription,
}: {
	children: any
	title: string
	url: string
	shortDescription: string
} ) => {
	return (
		<Link href={`/item/${url}`}>
			<a>
				<div className='flex items-start group p-5 rounded-lg hover:bg-backgroundGray cursor-pointer ease-in duration-200 border border-white hover:border-cartImageBgOne'>
					<div className='shadow-lg rounded-lg bg-white p-3 mr-6'>
						{children}
					</div>
					<div>
						<h1 className='text-lg text-gray-900 group-hover:text-blueTwo font-semibold'>
							{title}
						</h1>
						<article className='text-gray-700 text-sm w-4/5 mt-2'>
							{shortDescription}
						</article>
					</div>
				</div>
			</a>
		</Link>
	)
}
