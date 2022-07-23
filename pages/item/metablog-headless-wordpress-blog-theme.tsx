import parse from 'html-react-parser'
import Head from 'next/head'
import { AiFillLayout, AiFillNotification, AiOutlineCode } from 'react-icons/ai'
import { BsWordpress } from 'react-icons/bs'
import { FaHourglassHalf, FaReact } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { MdHeadsetMic } from 'react-icons/md'
import { SiGutenberg, SiMicrogenetics } from 'react-icons/si'
import { WiHumidity } from 'react-icons/wi'
import useSWR from 'swr'
import Footer from '../../src/components/Footer'
import Navbar from '../../src/components/Navbar'
import Testimonials from '../../src/Sections/Homepage/Testimonials'
import Hire from '../../src/Sections/PreSalePage/Hire'
import MangeWebsite from '../../src/Sections/PreSalePage/ManageWebsite'
import Header from '../../src/Sections/ProductSinglePage/Header'
import Heading from '../../src/Sections/ProductSinglePage/Heading'
import SimpleTitleThird from '../../src/Sections/ProductSinglePage/SimpleTitleThird'
import { fetcher, productSeoFetcher, seoFetcher } from '../../src/utils/fetcher'
import { Woocommerce } from '../../src/utils/woocommerce'
// page primary colors
const colors = {
  textPrimary: 'text-[#65B639]',
  bgPrimary: 'bg-[#65B639]',
  buttonPrimary: 'bg-gradient-to-br from-[#65B639] to-[#30a117]',
}
const livePreview = {
  title: 'Live Preview',
  link: '#',
}

// page component data props
const localData = {
  buildWith: {
    title: 'Build with',
    icons: [
      {
        icon: (
          <BsWordpress className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-[#000] " />
        ),
      },
      {
        icon: (
          <FaReact className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-[#000]" />
        ),
      },
      {
        icon: (
          <SiGutenberg className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-black" />
        ),
      },

    ],
  },
  manageWebsite: {
    title: 'Everything You Need to Build Your Headless Blog Website',
    description:
      'MetaBlog is the best Headless WordPress blog theme to develop lighting fast website.',
    list: [
      {
        title: 'SSG and SEO Friendly',
        icon: (
          <SiMicrogenetics
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'MetaBlog SSG and SEO Friendly. This approach works great for SEO. ',
      },
      {
        title: 'Lightning Fast Loading',
        icon: (
          <IoIosRocket
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Best layout of seller profile with seller total review, individual reviews and total Jobs.',
      },
      {
        title: 'Gutenberg Ready',
        icon: (
          <SiGutenberg
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Meta Jobs has advanced search and filter functionality in both frontend and backend',
      },
      {
        title: 'Responsive Layout',
        icon: (
          <AiFillLayout
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description: 'Super Admin can manage everything from admin dashboard.',
      },
      {
        title: 'Real Time Content Update',
        icon: (
          <AiFillNotification
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Seller can buy, upgrade, downgrade packages and post their Jobs',
      },
      {
        title: 'Developer Friendly',
        icon: (
          <AiOutlineCode
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Real Time jobs, message and all functionality work. Best Approch',
      }
    ],
  },
  sampleInfo: {
    title: 'Multipurpose Pre-Designed Layout',
    description: 'There are many variation of pages to create blog your own style website quickly and easily. ',
    list: [
      {
        _id: '1',
        name: 'Multiple Home Page layouts',
        description:
          'The best job portal theme with amazing layout and features.Fully responsive and mobile friendly. You will love it',
        image: '/job-portal-theme.png',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
      {
        _id: '2',
        name: 'Easy to Cutomize from Gutenberg',
        description:
          'Professionally designed admin dashboard with amazing features. You can manage everything from admin dashboard',
        image: '/headerBg.svg',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
      {
        _id: '3',
        name: 'Multiple Others Page layouts',
        description:
          'Professionally designed for employer and integrated with employer features. Employer can manage their jobs from dashboard',
        image: '/job-portal-theme.png',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
    ],
  },
  preSale: {
    title: 'Get Pre-Sale Heading',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
    discount: {
      icon: <WiHumidity className="w-6 h-6 text-white" />,
      title: '90% Discount All',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    support: {
      icon: <MdHeadsetMic className="w-6 h-6 text-white" />,
      title: 'Life Time Support Access',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    delivery: {
      icon: <FaHourglassHalf className="w-6 h-6 text-white" />,
      title: '90% Discount All',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    pricing: {
      standard: {
        title: 'Standard License',
        save: 99,
        sale: 69,
        regular: 149,
        list: [
          {
            title: 'One Domain License',
            checked: true,
          },
          {
            title: '6 Month Support',
            checked: true,
          },
          {
            title: 'Installation & Setup',
            checked: false,
          },
          {
            title: 'Ticked Based Support',
            checked: true,
          },
          { title: 'Download Frontend Code', checked: true },
          { title: 'Download backend Code', checked: true },
          { title: 'Download API Collection', checked: true },
          {
            title: 'Download Figma Design',
            checked: false,
          },
          {
            title: 'Customization',
            checked: false,
          },
        ],
      },
      standardPlus: {
        title: 'Standard Plus License',
        save: 100,
        sale: 289,
        regular: 349,
        list: [
          {
            title: 'One Domain License',
            checked: true,
          },
          {
            title: '1 Year Support',
            checked: true,
          },
          {
            title: 'Installation & Setup',
            checked: true,
          },
          {
            title: 'Priority Based Support',
            checked: true,
          },
          { title: 'Download Frontend Code', checked: true },
          { title: 'Download backend Code', checked: true },
          { title: 'Download API Collection', checked: true },

          {
            title: 'Download Figma Design',
            checked: true,
          },
          {
            title: 'Theme Customization',
            checked: false,
          },
        ],
      },
      extended: {
        title: 'Extended License',
        save: 700,
        sale: 399,
        regular: 999,
        list: [
          {
            title: 'Unlimited Domain License',
            checked: true,
          },
          {
            title: '1 Year Support',
            checked: true,
          },
          {
            title: 'Installation & Setup',
            checked: true,
          },
          {
            title: 'Priority Based Support',
            checked: true,
          },
          { title: 'Download Frontend Code', checked: true },
          { title: 'Download backend Code', checked: true },
          { title: 'Download API Collection', checked: true },

          {
            title: 'Download Figma Design',
            checked: true,
          },
          {
            title: 'Theme Customization',
            checked: true,
          },
        ],
      },
    },
  },
}

const MetaBlogTheme = ( { seoData, foreignData }: { seoData: any, foreignData: any } ) => {
  const slug = 'metablog-headless-wordpress-blog-theme'
  // call data using swr
  const { data: swrData } = useSWR(
    `/api/products/${slug}`,
    fetcher,
    {
      fallbackData: foreignData,
    } as any
  )

  const { data: seoSWRData } = useSWR( `/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/item/${slug}`, seoFetcher, {
    fallbackData: seoData
  } )

  const head = parse( seoSWRData.head )

  return (
    <>
      <Head>
        <title> Headless WordPress Blog Theme </title>
        {head}
      </Head>
      <div>
        <div
          className={`sm:bg-[url('/products/heading-one.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
        >
          <Navbar.SingleProductNavbar />
          <Header
            data={swrData}
            icons={localData.buildWith}
            colors={colors}
            livePreview={livePreview}
          />
        </div>
        <MangeWebsite colors={colors} data={localData.manageWebsite} />
        <SimpleTitleThird colors={colors} data={localData.sampleInfo} />
        <Heading data={swrData} info={localData.preSale} colors={colors} />
        <Hire colors={colors} />
        <Testimonials />
        <Footer
          boxToColor="secondaryTemplateColorDark"
          boxFromColor="secondaryTemplateColorLight"
          shadowBox="secondaryTemplate"
          buttonToColor="secondaryTemplateColorDark"
          buttonFromColor="secondaryTemplateColorLight"
          shadowButton="secondaryTemplate"
        />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const slug = 'metablog-headless-wordpress-blog-theme'
  const { data } = await Woocommerce.get( 'products', {
    slug,
  } )

  // only return few fields
  const filteredData = data.map( ( item: any ) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.images[0].src,
      short_description: item.short_description,
      description: item.description,
      sku: item.sku,
      price: item.price,
      regular_price: item.regular_price,
      sale_price: item.sale_price,
      date_on_sale_from: item.date_on_sale_from,
      date_on_sale_from_gmt: item.date_on_sale_from_gmt,
      date_on_sale_to: item.date_on_sale_to,
      date_on_sale_to_gmt: item.date_on_sale_to_gmt,
      on_sale: item.on_sale,
    }
  } )

  const seoData = await productSeoFetcher( slug )

  const finalData =
    filteredData.length >= 1 ? Object.assign( filteredData[0], {} ) : null

  return {
    props: {
      foreignData: finalData,
      seoData
    },
  }
}

export default MetaBlogTheme
