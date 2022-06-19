import React from 'react'
import { FaUser } from 'react-icons/fa'
import Footer from '../../src/components/Footer'
import Navbar from '../../src/components/Navbar'
import Testimonials from '../../src/Sections/Homepage/Testimonials'
import ChooseUs from '../../src/Sections/Servicepage/ChooseUs'
import Get from '../../src/Sections/Servicepage/Get'
import Header from '../../src/Sections/Servicepage/Header'
import Heading from '../../src/Sections/Servicepage/Heading'
import Hire from '../../src/Sections/Servicepage/Hire'
import Promise from '../../src/Sections/Servicepage/Promise'
import Question from '../../src/Sections/Servicepage/Question'
import Works from '../../src/Sections/Servicepage/Works'
import Products from '../admin-dashboard/products'

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
      'We are a team of web developers who are passionate about building websites that are lighting fast speed, secure and easy to use. We have experinced, skilled and dedicated team of web developers who are ready to help you with your web development needs.',
  },
  whyChooseUs: {
    title: 'We Provide Best MERN Stack Development Services',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your web app.',
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
    title: 'Steps to build Your MERN Stack Web Application',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.',
    items: [
      {
        name: 'Information Gathering',
        description:
          'We discuss your project requirements and gather all the information needed to create your MERN Stack web application. We will prefer to discuss on zoom, google meet video sessions.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Planning & Contract Agreement',
        description:
          'We will create a detailed plan for your MERN Stack web application including timeline, total cost and scope of work. We will also create a contract agreement for you to sign.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'UX/UI Design Using Figma',
        description:
          'Our professional designers will create a unique and beautiful user interface for your MERN Stack web application. You will be able collaborate with our designers to create a better user experience for your web application.',
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
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business website.',
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
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text',
    buttonText: 'Start a Project',
    buttonLink: '#',
  },
}

const ServicePage = () => {
  return (
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
      {/* <Hire colors={colors} data={data.hire} /> */}
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
  )
}

export default ServicePage
