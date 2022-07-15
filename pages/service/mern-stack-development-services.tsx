import parse from 'html-react-parser'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { FaUser } from 'react-icons/fa'
import useSWR from 'swr'
import Footer from '../../src/components/Footer'
import Navbar from '../../src/components/Navbar'
import ChooseUs from '../../src/Sections/Servicepage/ChooseUs'
import Get from '../../src/Sections/Servicepage/Get'
import Header from '../../src/Sections/Servicepage/Header'
import Heading from '../../src/Sections/Servicepage/Heading'
import Hire from '../../src/Sections/Servicepage/Hire'
import Promise from '../../src/Sections/Servicepage/Promise'
import Works from '../../src/Sections/Servicepage/Works'
import { seoFetcher, seoPageFetcher } from '../../src/utils/fetcher'


// page primary colors
const colors = {
  textPrimary: 'text-[#0ea38a]',
  bgPrimary: 'bg-[#0ea38a]',
  borderPrimary: 'border-[#8bf5e3]',
  hoverBorderPrimary: 'hover:border-[#0ea38a]',
  buttonPrimary: 'bg-gradient-to-br from-[#0ea38a] to-[#37c3ab]',
}

// page components data
const data = {
  heading: {
    title: 'Best MERN Stack Development Services',
    description:
      'If you are looking for top-quality MERN stack development services, you have come to the right place. Our professional team has years of experience creating amazing websites using this technology stack.',
  },
  whyChooseUs: {
    title: 'We Provide Best MERN Stack Development Services',
    description:
      'MERN stack development is all the rage right now. If you are not familiar with it, Together, they make a powerful web development platform thats perfect for creating modern-looking web applications.',
    items: [
      {
        name: 'Web Application Development',
        description:
          'We create Web Applications that are fast, secure and easy to use. We provide the best MERN Stack web application development services.',
        count: '01',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Custom SAAS Web Development',
        description:
          'We create custom SAAS web applications that are fast, secure and easy to use. We provide the best MERN Stack web application development services.',
        count: '02',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'eCommerce Web Development',
        description:
          'We create eCommerce web applications that are fast, secure and easy to use. We provide the best MERN Stack web application development services.',
        count: '03',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'ERP Development Services',
        description:
          'We create ERP web applications that are fast, secure and easy to use. We provide the best MERN Stack web application development services.',
        count: '04',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'API Development Services',
        description:
          'We provide you best API development services for your web app. We create API Design, Development, Testing, Documentation, and Integration.',
        count: '05',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Real-time App Development Services',
        description:
          'We create real-time web applications that are fast, secure and easy to use. We provide the best MERN Stack web application development services.',
        count: '06',
        icon: <FaUser className="text-white text-5xl" />,
      },
    ],
  },
  productFeature: {
    title: 'Our recent MERN Stack Projects',
    description:
      'List of our recent project powered by Node JS, Express JS, MongoDB, React JS, SWR and more. ',
    items: [
      {
        _id: '1',
        name: 'Job Board Application',
        image: '/productCartImg.svg',
      },
      {
        _id: '2',
        name: 'Classified Ads Application',
        image: '/productCartImg.svg',
      },
      {
        _id: '3',
        name: 'Custom Web Application',
        image: '/productCartImg.svg',
      },
      {
        _id: '3',
        name: 'Finacial Web Application',
        image: '/productCartImg.svg',
      },
      {
        _id: '3',
        name: 'Saas Web Application',
        image: '/productCartImg.svg',
      },
    ],
    buttonText: 'Start Your Project with Us',
    buttonLink: '#',
  },
  howItWork: {
    title: 'Steps to Build Your MERN Stack Web Application',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.',
    items: [
      {
        name: 'Information Gathering',
        description:
          'After the project is initiated, the next step is information gathering. The project specifications are determined based on the customer’s requirements, and the team does a deep dive into understanding the customers needs.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Planning & Contract Agreement',
        description:
          'The next step is Planning and Contract Agreement. The team creates a proposal that outlines all of the deliverables and required tasks, and both parties sign off on the agreement.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'UX/UI Design Using Figma',
        description:
          'Once the contract is agreed to, UX/UI design begins in Figma. The design is based on the customer’s requirements and takes into account their brand and specific use cases. The goal is to create a design that not only looks great but also functions well for the customers users.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Frontend and Backend Development',
        description:
          'In this phase, We will start coding your MERN Stack web application. We will write the standard coding to create a robust, super fast and secure web application.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Testing, Review and Launch',
        description:
          'We will test your MERN Stack web application and ensure that it is working as expected. We will also review your MERN Stack web application and ensure that it is working as expected.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
    ],
  },
  ourPromise: {
    title: 'What You Will Get',
    description:
      'We are always there for you when you need us. Our team provides continuous support so that you are never left feeling stranded. In addition, we have strict NDA terms and conditions to ensure that your project remains confidential.',
    items: [
      {
        name: 'Lightning Fast Loading',
        description:
          'We will make sure that your website speed will be lightning fast and green score in Google Page Speed Insights.',
      },
      {
        name: 'SSR and SEO Friendly',
        description:
          'We will make sure that your Mern Stack web app will be  SSR and SEO friendly and will be easy to use.',
      },
      {
        name: 'Highly Scalable',
        description:
          'We will make sure that your Mern Stack web app will be highly scalable and will be easy to use.',
      },
      {
        name: 'Highly Secure',
        description:
          'We will make sure that your Mern Stack web app will be highly secure and will be easy to use.',
      },
      {
        name: 'Mobile Responsive',
        description:
          'We will make sure that your Mern Stack web app will be fully mobile responsive and will be easy to use.',
      },
    ],
  },
  whatYouGet: {
    title: 'You can think of us as your team',
    description:
      'We will be your best team to create your MERN Stack web application. We will support you with all the necessary steps to create your best  web application.',
    items: [
      {
        name: 'We will always be there for you',
      },
      {
        name: 'Continuous Support whenever you need',
      },
      {
        name: 'Website faster speed will be guaranteed',
      },
      {
        name: 'Your web app will be highly scalable and will be easy to use.',
      },
      {
        name: 'Full Stack team will be there for you',
      },
      {
        name: 'Ontime Delivery with quality work',
      },
      {
        name: 'Strict NDA Terms and Conditions',
      },
      {
        name: 'Affordable Pricing for your project',
      },
    ],
    buttonText: 'Start a Project',
    buttonLink: '#',
  },
  hire: {
    title: 'Hire MERN Stack Developers',
    description:
      'We have a team of experienced MERN stack developers who are well-versed in the latest trends and technologies. We use the latest tools and frameworks to build efficient and scalable applications.',
    buttonText: 'Start a Project',
    buttonLink: '#',
  },
}

const ServicePage = ( { seoData }: { seoData: any } ) => {
  const slug = 'mern-stack-development-services'

  const { data: seoSWRData } = useSWR( `/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/${slug}`, seoFetcher, {
    fallbackData: seoData
  } )

  const head = parse( seoSWRData.head )


  return (
    <>
      <Head>
        <title>MERN Stack Development Services by JS Template Team </title>
        {head}
      </Head>
      <div className="">
        <div
          className={`sm:bg-[url('/serviceHeadBg.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
        >
          <Navbar.ServiceNavbar />
          <Header colors={colors} data={data.heading} />
        </div>
        <ChooseUs colors={colors} data={data.whyChooseUs} />
        <Promise colors={colors} data={data.ourPromise} />

        <Works colors={colors} data={data.howItWork} />

        <Get colors={colors} data={data.whatYouGet} />
        <Heading colors={colors} data={data.productFeature} />
        {/* <Products /> */}
        {/* <Question /> */}
        <Hire colors={colors} data={data.hire} />
        {/* <Testimonials /> */}
        <Footer
          boxToColor="greenDark"
          boxFromColor="greenLight"
          shadowBox="green"
          buttonToColor="greenDark"
          buttonFromColor="greenLight"
          shadowButton="green"
        />
      </div>
    </>
  )
}

export default ServicePage

export const getStaticProps: GetStaticProps = async () => {
  //slug
  const slug = 'mern-stack-development-services'

  const seoData = await seoPageFetcher( slug )
  console.log( "seoData", seoData )
  return {
    props: {

      seoData: seoData ?? {}
    },
  }
}
