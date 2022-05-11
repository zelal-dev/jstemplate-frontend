import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import FooterWithoutSolution from "../../src/components/FooterWithoutSolution";
import Navbar from "./../../src/components/Navbar";

const data = ["1", "2", "3", "4", "5", "6", "7", "8"];

const dataTwo = ["1", "2", "3", "4"];

const Details = () => {
  return (
    <>
      <div className="shadow-md">
        <Navbar.SecondaryDefaultNavbar />
      </div>
      <section className="bg-backgroundGrayOne">
        <div className="container mx-auto py-14 pb-28 px-5 sm:px-0">
          <div className="grid grid-cols-10 justify-center gap-7">
            <div className="col-span-10 md:col-span-7">
              <div className="bg-white rounded-2xl p-7 shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)]">
                <Image
                  src={"/serviceHeadBg.svg"}
                  width={810}
                  height={540}
                  layout="responsive"
                  objectFit="cover"
                  alt=""
                />
                <h1 className="text-3xl font-bold text-[#001324] truncate pt-8">
                  Simple and awesome blog or news title here
                </h1>
                <p className="pt-4 text-lg text-[#5D6D7E]">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                  Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
                  Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute
                  Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum
                  Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat
                  Cupidatat Non Proident.
                </p>
                <p className="pt-4 text-lg text-[#5D6D7E]">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                  Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
                  Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute
                  Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum
                  Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat
                  Cupidatat Non Proident.
                </p>
                <p className="text-xl text-[#5D6D7E] mt-4 pl-7 border-l-4 border-[#EBEDEF]">
                  Mauris aliquet ultricies ante, non faucibus ante gravida sed.
                  Sed ultrices pellentesque purus, vulputate volutpat ipsum
                  hendrerit sed neque sed sapien rutrum.
                </p>
                <p className="pt-7 text-lg text-[#5D6D7E]">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                  Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
                  Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
                  Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute
                  Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum
                  Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat
                  Cupidatat Non Proident.
                </p>
                <hr className="mt-7 border border-themeGrayLight" />
                <div className="flex flex-wrap items-center gap-11 mt-7">
                  <p className="text-xl font-bold text-[#001324]">Tags</p>
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#5D6D7E] border border-[#EBEDEF] rounded-md bg-white py-0.5 px-3">
                      Groups
                    </span>
                    <span className="text-base text-[#5D6D7E] border border-[#EBEDEF] rounded-md bg-white py-0.5 px-3">
                      Parkings
                    </span>
                    <span className="text-base text-[#5D6D7E] border border-[#EBEDEF] rounded-md bg-white py-0.5 px-3">
                      Team
                    </span>
                    <span className="text-base text-[#5D6D7E] border border-[#EBEDEF] rounded-md bg-white py-0.5 px-3">
                      Food
                    </span>
                  </div>
                </div>
              </div>
              <Comments />
            </div>
            <div className="col-span-8 md:col-span-3">
              <div className="bg-white rounded-2xl p-10 shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)]">
                <h1 className="text-3xl font-bold text-[#001324] pb-1">
                  Category List
                </h1>

                {data.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 pt-4">
                    <span className="border border-blueTwo w-5 opacity-30"></span>
                    <p className="text-lg text-[#001324] truncate w-full">
                      Category Name Here
                    </p>
                  </div>
                ))}
              </div>
              <h1 className="text-3xl font-bold text-[#001324] mt-8 mb-3 ">
                Latest Topic
              </h1>
              {dataTwo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-wrap xl:flex-nowrap items-center gap-5 bg-white rounded-2xl  shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)] p-5 mb-5"
                >
                  <div>
                    <Image
                      src="/serviceHeadBg.svg"
                      width={132}
                      height={100}
                      layout="fixed"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="text-sm text-[#1a2b3a]">14 SEP, 2020</p>
                    <h3 className="text-base font-bold text-[#001324] max-h-11 overflow-hidden">
                      Simple and Awesome News or Blog Title Here Lorem...
                    </h3>
                    <Link href="">
                      <a className="flex items-center gap-3 mt-2">
                        <button className="text-sm font-semibold text-blueTwo">
                          Read More
                        </button>
                        <BsArrowRightShort className="text-blueTwo text-2xl" />
                      </a>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FooterWithoutSolution />
    </>
  );
};

export default Details;

const Comments = () => {
  return (
    <div className="p-10 rounded-lg bg-white mt-8 shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)]">
      <h3 className="text-[2rem] font-bold text-[#001324]">Comments (3)</h3>
      <hr className="w-full my-8" />
      <div className="grid grid-cols-12 lg:gap-0 gap-6">
        <div className="lg:col-span-2 col-span-12">
          <div className="w-20 h-20 rounded-full bg-blueTwo" />
        </div>
        <div className="lg:col-span-10 col-span-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">User Name Here</h1>
              <h1 className="text-sm">14 SEP, 2020</h1>
            </div>
            <button className="text-base font-semibold py-2.5 px-8 rounded-lg bg-[#068179] bg-opacity-10">
              Reply
            </button>
          </div>
          <article className="text-base mt-4 text-[#5D6D7E]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor.
          </article>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8 lg:gap-0 gap-6">
        <div className="lg:col-span-2 col-span-12"></div>
        <div className="lg:col-span-10 col-span-12">
          <div className="grid grid-cols-12 lg:gap-0 gap-6">
            <div className="lg:col-span-2 col-span-12">
              <div className="w-20 h-20 rounded-full bg-blueTwo" />
            </div>
            <div className="lg:col-span-10  col-span-12">
              <div>
                <h1 className="text-xl font-bold">User Name Here</h1>
                <h1 className="text-sm">14 SEP, 2020</h1>
              </div>
              <article className="text-base mt-4 text-[#5D6D7E]">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor.
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-8 lg:gap-0 gap-6">
        <div className="lg:col-span-2 col-span-12"></div>
        <div className="lg:col-span-10 col-span-12">
          <div className="grid grid-cols-12 lg:gap-0 gap-6">
            <div className="lg:col-span-2 col-span-12">
              <div className="w-20 h-20 rounded-full bg-blueTwo" />
            </div>
            <div className="lg:col-span-10 col-span-12">
              <div>
                <h1 className="text-xl font-bold">User Name Here</h1>
                <h1 className="text-sm">14 SEP, 2020</h1>
              </div>
              <article className="text-base mt-4 text-[#5D6D7E]">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
                Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor.
              </article>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-full my-8" />
      <div className="grid grid-cols-12 lg:gap-0 gap-6">
        <div className="lg:col-span-2 col-span-12">
          <div className="w-20 h-20 rounded-full bg-blueTwo" />
        </div>
        <div className="lg:col-span-10 col-span-12">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold">User Name Here</h1>
              <h1 className="text-sm">14 SEP, 2020</h1>
            </div>
            <button className="text-base font-semibold py-2.5 px-8 rounded-lg bg-[#068179] bg-opacity-10">
              Reply
            </button>
          </div>
          <article className="text-base mt-4 text-[#5D6D7E]">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim
            Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut
            Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor.
          </article>
        </div>
      </div>
      <hr className="w-full my-8" />
      <h1 className="text-[2rem] font-bold text-[#001324]">
        Post Your Comment
      </h1>
      <form action="" className="mt-8">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
          <input
            type="text"
            className="py-4 px-5 rounded-md border border-[#D6DBDF] font-base"
            placeholder="Name"
          />
          <input
            type="email"
            className="py-4 px-5 rounded-md border border-[#D6DBDF] font-base"
            placeholder="Email"
          />
        </div>
        <textarea
          name=""
          id=""
          className="w-full h-40 py-4 px-5 rounded-md border border-[#D6DBDF] font-base mt-8"
          placeholder="Write your comment..."
        />
        <button className="text-base text-white py-4 px-10 rounded-md bg-gradient-to-br from-blueOne to-blueTwo shadow-3xl mt-8">
          Post Comment
        </button>
      </form>
    </div>
  );
};
