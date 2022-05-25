import Footer from "../../src/components/Footer";
import Navbar from "../../src/components/Navbar";
import Header from "../../src/Sections/ProductSinglePage/Header";
import Testimonials from "../../src/Sections/Homepage/Testimonials";
import Hire from "../../src/Sections/PreSalePage/Hire";
import MangeWebsite from "../../src/Sections/PreSalePage/ManageWebsite";
import Heading from "../../src/Sections/ProductSinglePage/Heading";
import SimpleTitleThird from "../../src/Sections/ProductSinglePage/SimpleTitleThird";
import { GetServerSideProps } from "next";
import ErrorProps from "next/error";

const PreSalePage = (props: any) => {
  if (props.statusCode) {
    return <ErrorProps statusCode={404} />;
  }

  return (
    <div>
      <div className="sm:bg-[url('/productSingleHeaderBg.svg')] bg-no-repeat bg-secondaryTemplateColorDark">
        <Navbar.SingleProductNavbar />
        <Header data={props.data} />
      </div>
      <MangeWebsite />
      <SimpleTitleThird />
      <Heading />
      <Hire />
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

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  // slug is available on the context parameter
  try {
    const { slug } = params as { slug: string };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/v1/product/slug/${slug}`
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
    res.statusCode = 404;
    return {
      props: {
        statusCode: 404,
      }, // will be passed to the page component as props
    };
  }
};

export default PreSalePage;
