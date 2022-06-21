import { GetServerSideProps } from 'next'
import React from 'react'
import Footer from '../../src/components/Footer'
import Navbar from '../../src/components/Navbar'
import Header from '../../src/Sections/ProductSinglePage/Header'
import Testimonials from '../../src/Sections/Homepage/Testimonials'
import Hire from '../../src/Sections/PreSalePage/Hire'
import MangeWebsite from '../../src/Sections/PreSalePage/ManageWebsite'
import Heading from '../../src/Sections/ProductSinglePage/Heading'
import SimpleTitleThird from '../../src/Sections/ProductSinglePage/SimpleTitleThird'
import { RiUserFill } from 'react-icons/ri'
import { WiHumidity } from 'react-icons/wi'
import { MdHeadsetMic } from 'react-icons/md'
import { FaHourglassHalf, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb } from 'react-icons/si'

// page primary colors
const colors = {
  textPrimary: 'text-[#209805]',
  bgPrimary: 'bg-[#209805]',
  buttonPrimary: 'bg-gradient-to-br from-[#32b514] to-[#30a117]',
}
const livePreview = {
  title: 'Live Preview',
  link: 'https://metajobs.vercel.app/',
}

// page component data props
const data = {
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
            title: 'Free Installation Support',
            checked: true,
          },
          {
            title: 'Short Specification Here',
            checked: true,
          },
          {
            title: 'Modify the Code',
            checked: true,
          },
          {
            title: 'One Domain License',
            checked: false,
          },
          {
            title: 'Ticked Based Support',
            checked: false,
          },
          {
            title: 'Access to Design Source',
            checked: false,
          },
          {
            title: 'Custom Modification',
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
            title: 'Free Installation Support',
            checked: true,
          },
          {
            title: 'Short Specification Here',
            checked: true,
          },
          {
            title: 'Modify the Code',
            checked: true,
          },
          {
            title: 'One Domain License',
            checked: true,
          },
          {
            title: 'Ticked Based Support',
            checked: true,
          },
          {
            title: 'Access to Design Source',
            checked: false,
          },
          {
            title: 'Custom Modification',
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
            title: 'Free Installation Support',
            checked: true,
          },
          {
            title: 'Short Specification Here',
            checked: true,
          },
          {
            title: 'Modify the Code',
            checked: true,
          },
          {
            title: 'One Domain License',
            checked: true,
          },
          {
            title: 'Ticked Based Support',
            checked: true,
          },
          {
            title: 'Access to Design Source',
            checked: true,
          },
          {
            title: 'Custom Modification',
            checked: true,
          },
        ],
      },
    },
  },
}

const MernStackDirectoryListingTheme = (props: any) => {
  return (
    <div>
      <div
        className={`sm:bg-[url('/products/heading-one.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
      >
        <Navbar.SingleProductNavbar />
        <Header
          data={props.data}
          icons={data.buildWith}
          colors={colors}
          livePreview={livePreview}
        />
      </div>
      <MangeWebsite colors={colors} data={data.manageWebsite} />
      <SimpleTitleThird colors={colors} data={data.sampleInfo} />
      <Heading data={props.data} info={data.preSale} colors={colors} />
      <Hire colors={colors} />
      {/* <Testimonials /> */}
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
  // call api to a get single post by id
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/mern-stack-job-board-theme`
  const response = await fetch(URL)
  const data = await response.json()
  console.log('data', data)
  return {
    props: {
      data: data.data,
    },
  }
}

export default MernStackDirectoryListingTheme
