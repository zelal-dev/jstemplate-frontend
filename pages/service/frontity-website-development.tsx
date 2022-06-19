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
import Products from '../../src/Sections/Servicepage/Products'
import Promise from '../../src/Sections/Servicepage/Promise'
import Question from '../../src/Sections/Servicepage/Question'
import Works from '../../src/Sections/Servicepage/Works'

// page primary colors
const colors = {
  textPrimary: 'text-[#1f38c5]',
  bgPrimary: 'bg-[#1f38c5]',
  borderPrimary: 'border-[#cad1f9]',
  hoverBorderPrimary: 'hover:border-[#1f38c5]',
  buttonPrimary: 'bg-gradient-to-br from-[#1f38c5] to-[#4b63eb]',
}

// page components data
const data = {
  heading: {
    title: 'Headless WordPress Site With React',
    description:
      'We will create a lighting fast Website using WordPress and React. WordPress will be use as backend and React js will be use as frontend.',
  },
  whyChooseUs: {
    title: 'We Provide the best Headless WordPress Site Development Services',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.',
    items: [
      {
        name: 'Headless WordPress Custom Site Development',
        description:
          'We will create your custom website using WordPress and React. You can manage your website from your WordPress dashboard.',
        count: '01',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Headless WordPress Blog, News and Magazine Site Development',
        description:
          'If you are looking for best the solution to develop blog, news and magazine website, Headless WordPress with Frontity is the best choice for you.',
        count: '02',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Headless WordPress eCommerce Site Development',
        description:
          'If you are looking for best the solution to develop eCommerce website, Headless WordPress with Next.js is the best choice for you.',
        count: '03',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Headless WordPress Landing Page Development',
        description:
          'Frontity with WordPress gutenburg  or elementor will be best for you. You can manage all content and website design from WordPress dashboard.',
        count: '04',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Headless WordPress Portfolio Site Development',
        description:
          'If you are looking for best the solution to develop portfolio website, Headless WordPress with frontity is the best choice for you.',
        count: '05',
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: 'Headless WordPress SaaS Site Development',
        description:
          'If you are looking for best the solution to develop SaaS website, Headless WordPress with next.js is the best choice for you.',
        count: '06',
        icon: <FaUser className="text-white text-5xl" />,
      },
    ],
  },
  productFeature: {
    title: 'Our Recent Headless WordPress Projects',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.',
    items: [
      {
        _id: '1',
        name: 'Personal Portfolio Website',
        image: '/productCartImg.svg',
      },
      {
        _id: '2',
        name: 'eCommerce Website',
        image: '/productCartImg.svg',
      },
      {
        _id: '3',
        name: 'Newspaper Website',
        image: '/productCartImg.svg',
      },
    ],
    buttonText: 'Start a Project',
    buttonLink: '#',
  },
  howItWork: {
    title: 'Steps to build Your Headless WordPress Site with React',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.',
    items: [
      {
        name: 'Information Gathering',
        description:
          'We will collect all the information about your business and your requirements. We will chose the best solution that fit your needs. We are available live chat, zoom meeting and email for seemless communication.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Planning & Contract Agreement',
        description:
          'We will create a detailed plan for your Headless WordPress Site including timeline, total cost and scope of work. Both we agree on the plan and start the project.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'UX/UI Design Using Figma',
        description:
          'Our professional designers will create a unique and beautiful user interface for your Headless WordPress Site. If you have already designed your website, we will use your design as a starting point.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Development and API Integration',
        description:
          'In this phase, We will start coding your Headless WordPress site. We will integrate your WordPress site with your API and start developing your website.',
        icon: <FaUser />,
        image: '/happy.svg',
      },
      {
        name: 'Testing and Deployment',
        description:
          'We will test , review the requiremnts and deploy on live. We will also ensure your Headless Website is lighting fast speed, secured and working as expected.',
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
    title: 'Hire Us to Build Your Headless WordPress Website with React',
    description:
      'We are a team of experienced developers and designers who are passionate about creating the best user experience for your business website.',
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
      <Heading colors={colors} data={data.productFeature} />
      <Works colors={colors} data={data.howItWork} />
      <Promise colors={colors} data={data.ourPromise} />
      <Get colors={colors} data={data.whatYouGet} />
      {/* <Products /> */}
      <Question />
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
  )
}

export default ServicePage
