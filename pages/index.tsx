import type { NextPage } from 'next'
import Navbar from '../src/components/Navbar'
import Header from '../src/Sections/Homepage/Header';
import styles from '../styles/Home.module.css'
// import headerBg from './../public/headerBg.svg';
import chandan from './../public/chandan.png';
import KnowUs from '../src/Sections/Homepage/KnowUs';
import Solution from '../src/Sections/Homepage/Solution';
import ChooseUs from '../src/Sections/Homepage/ChooseUs';
import Customer from '../src/Sections/Homepage/Customer';
import Testimonials from '../src/Sections/Homepage/Testimonials';
import Footer from '../src/components/Footer';

const Homepage: NextPage = () => {
  return (
    <section className="">
      <div className='bg-backgroundGray'>
        <div className='header-part'>
          <Navbar />
          <Header />
        </div>
        <KnowUs />
        <Solution />
      </div>
      <ChooseUs />
      <Customer />
      <Testimonials />
      <Footer />
    </section>
  )
}

export default Homepage
