import React from "react";
import FooterWithoutSolution from "../src/components/FooterWithoutSolution";
import Navbar from "../src/components/Navbar";
import { TbError404 } from "react-icons/tb";
import { useRouter } from "next/router";
import Head from "next/head";
import NotFound404 from "../src/components/NotFound";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>404 Page - JS Template</title>
      </Head>
      <div className="shadow-md">
        <Navbar.SecondaryDefaultNavbar />
      </div>
      <NotFound404 />
      <FooterWithoutSolution />
    </>
  );
};

export default NotFound;
