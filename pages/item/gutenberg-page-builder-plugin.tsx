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
import { Axios } from '../../src/utils/axiosKits'
import { Woocommerce } from '../../src/utils/woocommerce'

// page primary colors
const colors = {
  textPrimary: 'text-[#7f54b3]',
  bgPrimary: 'bg-[#7f54b3]',
  buttonPrimary: 'bg-gradient-to-br from-[#7f54b3] to-[##693e9d]',
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
    title: 'Everything You Need to Manage Your Job Portal Website',
    description:
      'Meta Jobs is the best job board theme powered by node.js, MongoDB, React.js, tailwind CSS. Here are the key features',
    list: [
      {
        title: 'Jobs Management',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Super admin, seller can manage their jobs from dashboard. Included everything you need',
      },
      {
        title: 'Seller Profile',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Best layout of seller profile with seller total review, individual reviews and total Jobs.',
      },
      {
        title: 'Advanced Search',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Meta Jobs has advanced search and filter functionality in both frontend and backend',
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
          'Seller can buy, upgrade, downgrade packages and post their Jobs',
      },
      {
        title: 'Real Time Notification',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Real Time jobs, message and all functionality work. Best Approch',
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
        title: 'Jobs Alert Functionality',
        icon: (
          <RiUserFill
            style={{ color: 'white', width: '30px', height: '30px' }}
          />
        ),
        description:
          'Best Jobs alert functionality to get disired jobs directly on buyer email',
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
    title: 'Pre-made unique layouts',
    description: '',
    list: [
      {
        _id: '1',
        name: 'Amazing Layout',
        description:
          'The best job portal theme with amazing layout and features.Fully responsive and mobile friendly. You will love it',
        image: '/job-portal-theme.png',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
      {
        _id: '2',
        name: 'Admin Dashboard',
        description:
          'Professionally designed admin dashboard with amazing features. You can manage everything from admin dashboard',
        image: '/headerBg.svg',
        PreviewLink: 'https://google.com',
        getStartLink: 'https://google.com',
      },
      {
        _id: '3',
        name: 'Employer Dashboard',
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
const fetcher = ( url: string ) => Axios( url ).then( ( res: any ) => res.data ) as any
const GutenBuilderPlugin = ( props: any ) => {
  const slug = 'gutenberg-page-builder-plugin'
  // call data using swr
  const { data: swrData, error: productError } = useSWR(
    `/api/products/${slug}`,
    fetcher,
    {
      initialData: props.foreignData,
    } as any
  )
  // detructure data from productData
  const { data } = swrData || {}
  return (
    <div>
      <div
        className={`sm:bg-[url('/products/heading-one.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
      >
        <Navbar.SingleProductNavbar />
        <Header
          data={data}
          icons={localData.buildWith}
          colors={colors}
          livePreview={livePreview}
        />
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
  )
}

export const getStaticProps = async () => {
  const slug = 'gutenberg-page-builder-plugin'
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
    }
  } )

  const finalData =
    filteredData.length >= 1 ? Object.assign( filteredData[0], {} ) : null

  return {
    props: {
      foreignData: finalData,
    },
  }
}

export default GutenBuilderPlugin
