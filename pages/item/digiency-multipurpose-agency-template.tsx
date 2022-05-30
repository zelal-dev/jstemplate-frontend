import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import Header from "../../src/Sections/ProductSinglePage2/Header";
import Products from "../../src/Sections/ProductSinglePage2/Products";
import RelatedProduct from "../../src/Sections/ProductSinglePage2/RelatedProduct";
import Testimonials from "../../src/Sections/ProductSinglePage2/Testimonials";
import { Axios } from "../../src/utils/axiosKits";

const feater = async (url: string) =>
  Axios(url).then((res) => res.data.product);

// page primary colors
const colors = {
  textPrimary: "text-[#004edf]",
  bgPrimary: "bg-[#004edf]",
  buttonPrimary: "bg-gradient-to-br from-[#004edf] to-[#0845b7]",
};

// page component data props
const data = {
  pricing: {
    salePrice: 9,
    regularPrice: 18,
  },
  thumbnail: "",
  offer: "Limited Offer",
  updateAt: "May 27, 2022",
  released: "July 14, 2021",
  tools: "React JS, Next.js",
  version: "4.5.12 or Above",
  responsive: true,
  doc: true,
  previewLink:
    "https://digiency.vercel.app/?_ga=2.199265518.1587672729.1653890609-1338439813.1645556177",
  tags: ["React", "NextJS"],
};

const ProductSinglePage2 = (props: any) => {
  return (
    <div className="bg-[#E5E5E5]">
      <div
        className={`lg:bg-[url("/products/heading.svg")] bg-no-repeat bg-cover ${colors.bgPrimary}`}
      >
        <Navbar.SingleProductNavbar />
        <Header data={props.data} />
      </div>
      <Products info={data} colors={colors}>
        {/* Product description under the Products box */}
        <h1 className="text-2xl font-bold text-gray-900">{props.data.title}</h1>
        <article className="text-base text-gray-600 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          corporis, esse nam inventore laboriosam nihil quasi rem facere ipsa
          neque itaque optio eveniet nisi? Dolorem quod praesentium accusantium
          harum nobis.
        </article>
        <article className="text-base text-gray-600 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          corporis, esse nam inventore laboriosam nihil quasi rem facere ipsa
          neque itaque optio eveniet nisi? Dolorem quod praesentium accusantium
          harum nobis.
        </article>
        <h3 className="text-base font-bold text-gray-900 mt-5">FEATURES</h3>
        <ul className="list-disc ml-5">
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
        <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-10">
          <div className="w-full xl:h-64 lg:h-44 relative rounded-xl">
            <Image
              src="/productCartImg.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full xl:h-64 lg:h-44 relative rounded-xl">
            <Image
              src="/productCartImg.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full xl:h-64 lg:h-44 relative rounded-xl">
            <Image
              src="/productCartImg.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full xl:h-64 lg:h-44 relative rounded-xl">
            <Image
              src="/productCartImg.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full xl:h-64 lg:h-44 relative rounded-xl">
            <Image
              src="/productCartImg.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="w-full xl:h-64 lg:h-44 relative rounded-xl">
            <Image
              src="/productCartImg.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </Products>
      <RelatedProduct data={undefined} />
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
export default ProductSinglePage2;
