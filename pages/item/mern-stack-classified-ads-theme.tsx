import parse from "html-react-parser"
import Head from 'next/head'
import { FaHourglassHalf, FaNodeJs, FaReact } from 'react-icons/fa'
import { MdHeadsetMic } from 'react-icons/md'
import { RiUserFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
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
  textPrimary: 'text-[#2464bd]',
  bgPrimary: 'bg-[#2464bd]',
  buttonPrimary: 'bg-gradient-to-br from-[#2464bd] to-[#1d54a1]',
}

// page component data props
const localData = {
  buildWith: {
    title: 'Build with',
    icons: [
      {
        icon: (
          <FaNodeJs className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-primaryGreen" />
        ),
      },
      {
        icon: (
          <SiMongodb className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-primaryGreen" />
        ),
      },
      {
        icon: (
          <SiExpress className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem] text-black" />
        ),
      },
      {
        icon: (
          <FaReact
            className="xl:w-6 md:w-5 w-[1.0625rem] xl:h-6 md:h-5 h-[1.0625rem]"
            style={{ color: '#00D8FF' }}
          />
        ),
      },
    ],
  },
  manageWebsite: {
    title: 'Everything You Need to Manage Your Classified Ads Website',
    description:
      'Meta Ads is the best classifieds ads MERN Stack theme that will help you to develop scaleable ads business website. Here are the key features',
    list: [
      {
        title: 'Ads Management',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Super admin, seller can manage their ads from dashboard. Included everything you need',
      },
      {
        title: 'Seller Profile',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Best layout of seller profile with seller total review, individual reviews and total Ads.',
      },
      {
        title: 'Advanced Search',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Meta Ads has advanced search and filter functionality in both frontend and backend',
      },
      {
        title: 'Easy Super Admin',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description: 'Super Admin can manage everything from admin dashboard.',
      },
      {
        title: 'Seller Dashboard',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Seller can buy, upgrade, downgrade packages and post their Ads',
      },
      {
        title: 'Real Time Notification',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Real Time ads, message and all functionality work. Best Approch',
      },
      {
        title: 'Pricing Plan for Seller',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Pricing plan for seller can be controller from super admin dashboard.',
      },
      {
        title: 'Ads Alert Functionality',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Best Ads alert functionality to get disired ads directly on buyer email',
      },
      {
        title: 'Message Functionality',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
      },
    ],
  },
  sampleInfo: {
    title: 'Simple Title Here',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text',
    list: [
      {
        _id: '1',
        name: 'Screen Title 1',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text',
        image: '/serviceHeadBg.svg',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
      {
        _id: '2',
        name: 'Screen Title 2',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text',
        image: '/headerBg.svg',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
      {
        _id: '3',
        name: 'Screen Title 3',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text',
        image: '/serviceHeadBg.svg',
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
        sale: 89,
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

const MernStackAdsTheme = ( { seoData, foreignData }: { seoData: any, foreignData: any } ) => {
  const slug = 'mern-stack-classified-ads-theme'
  // call data using swr
  const { data: swrData, error: productError } = useSWR(
    `/api/products/${slug}`,
    fetcher,
    {
      fallbackData: foreignData,
    } as any
  )
  // detructure data from productData
  const { data } = swrData || {}

  const { data: seoSWRData } = useSWR( `/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/item/${slug}`, seoFetcher, {
    fallbackData: seoData
  } )

  const head = parse( seoSWRData.head )

  return (
    <>
      <Head>
        <title> Mern Stack Classified Ads Theme by JS Template </title>
        {head}
      </Head>
      <div>
        <div
          className={`sm:bg-[url('/products/heading-one.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
        >
          <Navbar.SingleProductNavbar />
          <Header data={data} icons={localData.buildWith} colors={colors} />
        </div>
        <MangeWebsite colors={colors} data={localData.manageWebsite} />
        <SimpleTitleThird colors={colors} data={localData.sampleInfo} />
        <Heading data={data} info={localData.preSale} colors={colors} />
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
  const slug = 'mern-stack-classified-ads-theme'
  const { data } = await Woocommerce.get( 'products', {
    slug,
    status: 'publish',
  } )

  const seoData = await productSeoFetcher( slug )

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

  const finalData = Object.assign( filteredData[0], {} )


  return {
    props: {
      foreignData: finalData,
      seoData
    },
  }
}

export default MernStackAdsTheme
