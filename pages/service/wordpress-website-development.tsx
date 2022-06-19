import React from "react";
import { FaUser } from "react-icons/fa";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import Testimonials from "../../src/Sections/Homepage/Testimonials";
import ChooseUs from "../../src/Sections/Servicepage/ChooseUs";
import Get from "../../src/Sections/Servicepage/Get";
import Header from "../../src/Sections/Servicepage/Header";
import Heading from "../../src/Sections/Servicepage/Heading";
import Hire from "../../src/Sections/Servicepage/Hire";
import Products from "../../src/Sections/Servicepage/Products";
import Promise from "../../src/Sections/Servicepage/Promise";
import Question from "../../src/Sections/Servicepage/Question";
import Works from "../../src/Sections/Servicepage/Works";

// page primary colors
const colors = {
  textPrimary: "text-[#21759b]",
  bgPrimary: "bg-[#21759b]",
  borderPrimary: "border-[#96d7f5]",
  hoverBorderPrimary: "hover:border-[#21759b]",
  buttonPrimary: "bg-gradient-to-br from-[#21759b] to-[#50acd6]",
};

// page components data
const data = {
  heading: {
    title: "WordPress Web Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
  },
  whyChooseUs: {
    title: "Why Choose Us?",
    description:
      "We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.",
    items: [
      {
        name: "Feature Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        count: "01",
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: "Feature Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        count: "02",
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: "Feature Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        count: "03",
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: "Feature Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        count: "04",
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: "Feature Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        count: "05",
        icon: <FaUser className="text-white text-5xl" />,
      },
      {
        name: "Feature Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        count: "06",
        icon: <FaUser className="text-white text-5xl" />,
      },
    ],
  },
  productFeature: {
    title: "Simple Heading",
    description:
      "We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.",
    items: [
      {
        _id: "1",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
      {
        _id: "2",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
      {
        _id: "3",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
      {
        _id: "4",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
      {
        _id: "5",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
      {
        _id: "6",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
      {
        _id: "7",
        name: "Product Feature Title",
        image: "/productCartImg.svg",
      },
    ],
    buttonText: "Start a Project",
    buttonLink: "#",
  },
  howItWork: {
    title: "How It Works",
    description:
      "We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.",
    items: [
      {
        name: "Simple Step Title Here",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        icon: <FaUser />,
        image: "/happy.svg",
      },
      {
        name: "Simple Step Title Here",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        icon: <FaUser />,
        image: "/happy.svg",
      },
      {
        name: "Simple Step Title Here",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        icon: <FaUser />,
        image: "/happy.svg",
      },
      {
        name: "Simple Step Title Here",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
        icon: <FaUser />,
        image: "/happy.svg",
      },
    ],
  },
  ourPromise: {
    title: "Our Promise",
    description:
      "We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.",
    items: [
      {
        name: "Simple Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      },
      {
        name: "Simple Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      },
      {
        name: "Simple Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      },
      {
        name: "Simple Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      },
      {
        name: "Simple Title",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
      },
    ],
  },
  whatYouGet: {
    title: "What You Will Get",
    description:
      "We are a team of experienced developers and designers who are passionate about creating the best user experience for your business.",
    items: [
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
      {
        name: "Lorem Ipsum is simply industry dummy text",
      },
    ],
    buttonText: "Start a Project",
    buttonLink: "#",
  },
  hire: {
    title: "Hire WordPress Developers",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    buttonText: "Start a Project",
    buttonLink: "#",
  },
};

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
      {/* <Question /> */}
      <Hire colors={colors} data={data.hire} />
      <Testimonials />
      <Footer
        boxToColor="greenDark"
        boxFromColor="greenLight"
        shadowBox="green"
        buttonToColor="greenDark"
        buttonFromColor="greenLight"
        shadowButton="green"
      />
    </div>
  );
};

export default ServicePage;
