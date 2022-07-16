import { v4 as uuidv4 } from 'uuid'

export interface serviceMenuDocument {
	_id: string
	name: string
	description: string
	slug: string
}

export const serviceMenuData = [
	{
		id: uuidv4(),
		title: 'MERN Stack Development Services',
		description: 'We can help you to develop your website using MERN Stack',
		slug: 'mern-stack-development-services',
	},
	{
		id: uuidv4(),
		title: 'Headless WoordPress Development Services',
		description: 'Create lightning fast websites using WordPress and React.',
		slug: 'frontity-website-development',
	},

	{
		id: uuidv4(),
		title: 'Figma to React.js Website Development',
		description:
			'We can help you to convert your design to pixel perfect code.',
		slug: 'convert-design-to-code',
	},
	{
		id: uuidv4(),
		title: 'WordPress Website Development',
		description: 'We can help you to develop your website using MERN Stack',
		slug: 'wordpress-website-development',
	},
]

export interface productMenuDocument {
	id: string
	title: string
	menu_order: number
	attr_title: string
	url: string
	children: productMenuDocument[]
}

export const productMenuData = [
	{
		id: 2431,
		title: 'MERN Stack',
		menu_order: 1,
		attr_title: 'mern',
		url: '#',
		children: [
			{
				id: 2432,
				title: 'MetaJobs- Job Board Theme',
				description:
					'MetaJobs is the best Job Board Theme. Built with node.js, MongoDB, React',
				url: 'mern-stack-job-board-theme',
				iconClass: 'FaShoppingCart',
			},
			{
				id: 2433,
				title: 'MetaAds- Classified Ads Theme',
				description:
					'MetaAds is the best Classified Ads Theme. Built with node.js, MongoDB, React',
				url: 'mern-stack-classified-ads-theme',
				iconClass: '',
			},
		],
	},
	{
		id: 2439,
		title: 'WordPress Themes & Plugins',
		menu_order: 10,
		attr_title: 'figma',
		url: '#',
		children: [
			{
				id: 2442,
				title: 'ELkits- Elementor Template Kits & Blocks Library',
				description: 'Start coding with our pre-made Tailwind CSS components',
				url: 'elementor-template-kits-blocks-library',
				iconClass: '',
			},
			{
				id: 2443,
				title: 'Guten Builder- Gutenberg Page Builder, Blocks & Templates',
				description:
					'Download professional Ready-Made Tailwind CSS Landing Pages',
				url: 'gutenberg-page-builder-plugin',
				iconClass: '',
			},
			// {
			//  id: 2442,
			//  title: 'Jamuna- Multi-Purpose WordPress Blog Theme',
			//  description: 'Start coding with our pre-made Tailwind CSS components',
			//  url: 'jamuna-multi-purpose-wordpress-blog-theme',
			//  iconClass: '',
			// },
		],
	},

	{
		id: 2438,
		title: 'Headless Theme',
		menu_order: 7,
		attr_title: 'react',
		url: '#',
		children: [
			{
				id: 2441,
				title: 'MetaBlog- Headless WordPress Blog Theme',
				description: 'Multipurpose frontity to buid your site quickly',
				url: 'metablog-headless-wordpress-blog-theme',
				iconClass: '',
			},
			{
				id: 2444,
				title: 'MetaShop- Headless WooCommerce Theme',
				description: 'Best React Admin Dashboard Template',
				url: 'metashop-headless-woocommerce-theme',
				iconClass: '',
			},
			{
				id: 2437,
				title: 'Padma- Multipurpose Frontity Theme',
				description: 'Headless WordPress theme with Eementor and React',
				url: 'padma-multipurpose-frontity-theme',
				iconClass: '',
			},
			{
				id: 2436,
				title: 'Portfo- Personal Portfolio Theme',
				description: 'Best Personal Portfolio Theme with WordPress and React',
				url: 'portfo-frontity-personal-portfolio-theme',
				iconClass: '',
			},
		],
	},
	{
		id: 2435,
		title: 'UI Kits & Templates',
		menu_order: 4,
		attr_title: 'headless',
		url: '#',
		children: [
			{
				id: 2436,
				title: 'Tailwind CSS UI Components & Landing Pages',
				description: 'Best Personal Portfolio Theme with WordPress and React',
				url: 'portfo-frontity-personal-portfolio-theme',
				iconClass: '',
			},
			{
				id: 2437,
				title: 'MetaDash- Admin Dashboard Template',
				description: 'Headless WordPress theme with Eementor and React',
				url: '#',
				iconClass: '',
			},
		],
	},
]
