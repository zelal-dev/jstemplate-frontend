import { GetServerSideProps } from "next";
import React from "react";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import Header from "../../src/Sections/ProductSinglePage/Header";
import Testimonials from "../../src/Sections/Homepage/Testimonials";
import Hire from "../../src/Sections/PreSalePage/Hire";
import MangeWebsite from "../../src/Sections/PreSalePage/ManageWebsite";
import Heading from "../../src/Sections/ProductSinglePage/Heading";
import SimpleTitleThird from "../../src/Sections/ProductSinglePage/SimpleTitleThird";
import { RiUserFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { MdHeadsetMic } from "react-icons/md";
import { FaHourglassHalf, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

// page primary colors
const colors = {
  textPrimary: "text-[#2464bd]",
  bgPrimary: "bg-[#2464bd]",
  buttonPrimary: "bg-gradient-to-br from-[#2464bd] to-[#1d54a1]",
};

// page component data props
const data = {
  buildWith: {
    title: "Build with",
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
            style={{ color: "#00D8FF" }}
          />
        ),
      },
    ],
  },
  manageWebsite: {
    title: "Everything You Need to Manage Your Classified Ads Website",
    description:
      "Meta Ads is the best classifieds ads MERN Stack theme that will help you to develop scaleable ads business website. Here are the key features",
    list: [
      {
        title: "Ads Management",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Super admin, seller can manage their ads from dashboard. Included everything you need",
      },
      {
        title: "Seller Profile",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Best layout of seller profile with seller total review, individual reviews and total Ads.",
      },
      {
        title: "Advanced Search",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Meta Ads has advanced search and filter functionality in both frontend and backend",
      },
      {
        title: "Easy Super Admin",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description: "Super Admin can manage everything from admin dashboard.",
      },
      {
        title: "Seller Dashboard",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Seller can buy, upgrade, downgrade packages and post their Ads",
      },
      {
        title: "Real Time Notification",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Real Time ads, message and all functionality work. Best Approch",
      },
      {
        title: "Pricing Plan for Seller",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Pricing plan for seller can be controller from super admin dashboard.",
      },
      {
        title: "Ads Alert Functionality",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Best Ads alert functionality to get disired ads directly on buyer email",
      },
      {
        title: "Message Functionality",
        icon: (
          <RiUserFill
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        ),
        description:
          "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      },
    ],
  },
  sampleInfo: {
    title: "Simple Title Here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text",
    list: [
      {
        _id: "1",
        name: "Screen Title 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text",
        image: "/serviceHeadBg.svg",
        PreviewLink: "https://google.com",
        getStartLink: "https://google.com",
      },
      {
        _id: "2",
        name: "Screen Title 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text",
        image: "/headerBg.svg",
        PreviewLink: "https://google.com",
        getStartLink: "https://google.com",
      },
      {
        _id: "3",
        name: "Screen Title 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text dummy text",
        image: "/serviceHeadBg.svg",
        PreviewLink: "https://google.com",
        getStartLink: "https://google.com",
      },
    ],
  },
  preSale: {
    title: "Get Pre-Sale Heading",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text",
    discount: {
      icon: <WiHumidity className="w-6 h-6 text-white" />,
      title: "90% Discount All",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    support: {
      icon: <MdHeadsetMic className="w-6 h-6 text-white" />,
      title: "Life Time Support Access",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    delivery: {
      icon: <FaHourglassHalf className="w-6 h-6 text-white" />,
      title: "90% Discount All",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    pricing: {
      standard: {
        title: "Standard License",
        save: 99,
        sale: 89,
        regular: 149,
        list: [
          {
            title: "Free Installation Support",
            checked: true,
          },
          {
            title: "Short Specification Here",
            checked: true,
          },
          {
            title: "Modify the Code",
            checked: true,
          },
          {
            title: "One Domain License",
            checked: false,
          },
          {
            title: "Ticked Based Support",
            checked: false,
          },
          {
            title: "Access to Design Source",
            checked: false,
          },
          {
            title: "Custom Modification",
            checked: false,
          },
        ],
      },
      standardPlus: {
        title: "Standard Plus License",
        save: 100,
        sale: 289,
        regular: 349,
        list: [
          {
            title: "Free Installation Support",
            checked: true,
          },
          {
            title: "Short Specification Here",
            checked: true,
          },
          {
            title: "Modify the Code",
            checked: true,
          },
          {
            title: "One Domain License",
            checked: true,
          },
          {
            title: "Ticked Based Support",
            checked: true,
          },
          {
            title: "Access to Design Source",
            checked: false,
          },
          {
            title: "Custom Modification",
            checked: false,
          },
        ],
      },
      extended: {
        title: "Extended License",
        save: 700,
        sale: 399,
        regular: 999,
        list: [
          {
            title: "Free Installation Support",
            checked: true,
          },
          {
            title: "Short Specification Here",
            checked: true,
          },
          {
            title: "Modify the Code",
            checked: true,
          },
          {
            title: "One Domain License",
            checked: true,
          },
          {
            title: "Ticked Based Support",
            checked: true,
          },
          {
            title: "Access to Design Source",
            checked: true,
          },
          {
            title: "Custom Modification",
            checked: true,
          },
        ],
      },
    },
  },
};

const MernStackDirectoryListingTheme = (props: any) => {
  return (
    <div>
      <div
        className={`sm:bg-[url('/products/heading-one.svg')] bg-no-repeat bg-cover ${colors.bgPrimary}`}
      >
        <Navbar.SingleProductNavbar />
        <Header data={props.data} icons={data.buildWith} colors={colors} />
      </div>
      <MangeWebsite colors={colors} data={data.manageWebsite} />
      <SimpleTitleThird colors={colors} data={data.sampleInfo} />
      <Heading data={props.data} info={data.preSale} colors={colors} />
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
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // slug is available on the context parameter
  let path: any = context.resolvedUrl;
  path = path.split("/");
  path = path[path.length - 1];
  try {
    const { slug } = context.query as { slug: string };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/v1/product/slug/${path}`
    );
    let data = await res.json();
    data = await data.product;

    if (data) {
      return {
        props: {
          data,
        },
      };
    } else {
      return {
        props: {
          statusCode: 404,
        },
      };
    }
  } catch {
    return {
      props: {
        statusCode: 404,
      }, // will be passed to the page component as props
    };
  }
};

export default MernStackDirectoryListingTheme;
