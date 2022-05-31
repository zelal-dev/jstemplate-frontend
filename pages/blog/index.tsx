// import Image from '../../src/components/optimize/image';
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Navbar from "../../src/components/Navbar";

import FooterWithoutSolution from "../../src/components/FooterWithoutSolution";
import useSWR, { useSWRConfig } from "swr";
import { Axios } from "../../src/utils/axiosKits";
import { FormLoader, LoaderGrowing } from "../../src/lib/loader";
import FeaturedMedia from "../../src/components/Blog/FeaturedMedia";

const img = [
  {
    img: "/blog-1.png",
  },
  {
    img: "/blog-2.png",
  },
  {
    img: "/blog-3.png",
  },
  {
    img: "/blog-4.png",
  },
  {
    img: "/blog-5.png",
  },
  {
    img: "/blog-6.png",
  },
  {
    img: "/blog-7.png",
  },
  {
    img: "/blog-8.png",
  },
  {
    img: "/blog-9.png",
  },
];

const fetcher = (url: any) => fetch(url).then((r) => r.json());

const News = ({ getData }: { getData: any }) => {
  const [showPerPage, setShowPerPage] = React.useState(9);
  const [posts, setPosts] = React.useState([]);
  const { mutate } = useSWRConfig();
  const {
    data,
    error: errorPosts,
    isValidating,
  } = useSWR(
    `https://api-blog.jstemplate.net/wp-json/wp/v2/posts?per_page=${showPerPage}`,
    fetcher,
    {
      refreshInterval: 0,
      fallbackData: getData,
    }
  );

  React.useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const showPerPageHandler = async () => {
    setShowPerPage(showPerPage + 6);
    await mutate(
      `https://api-blog.jstemplate.net/wp-json/wp/v2/posts?per_page=${
        showPerPage + 6
      }`
    );
  };

  return (
    <>
      <div className="sm:bg-[url('/productSingleHeaderBg.svg')] bg-no-repeat bg-secondaryTemplateColorDark">
        <Navbar.SingleProductNavbar />
        <div className="container mx-auto">
          <div className="py-28 relative ">
            <h1 className="font-bold text-2xl sm:text-4xl text-white text-center">
              News &amp; Blog
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-backgroundGrayOne ">
        <div className="py-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-6 gap-7 px-5 sm:px-0">
              {posts.length > 0 &&
                posts.map((item: any, index: any) => {
                  const date = new Date(item.date);
                  const postDate = date.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  });
                  return (
                    <div
                      key={index}
                      className="col-span-6 md:col-span-3 lg:col-span-2 bg-white p-7 rounded-2xl transition duration-500 ease-in-out hover:shadow-grayLight "
                    >
                      {/* post thumbnail image */}
                      <Link href={`/blog/${item.slug}`}>
                        <a>
                          <FeaturedMedia id={item.id} />
                        </a>
                      </Link>
                      <p className="text-lg text-[#1a2b3a] pt-5 pb-2">
                        {postDate}
                      </p>
                      <h1 className="text-lg sm:text-xl text-[#001324] font-bold text-ellipsis overflow-hidden max-h-14">
                        <Link href={`/blog/${item.slug}`}>
                          <a>{item.title.rendered}</a>
                        </Link>
                      </h1>
                      <div
                        className="text-base text-[#5D6D7E] pt-3 text-ellipsis overflow-hidden max-h-28"
                        dangerouslySetInnerHTML={{
                          __html: item.excerpt.rendered,
                        }}
                      />
                      <Link href={`/blog/${item.slug}`}>
                        <a className="flex items-center gap-4 pt-2 group">
                          <span className="text-base font-semibold text-blueTwo group-hover:opacity-70 transition duration-300 ease-in-out">
                            Read More
                          </span>
                          <HiOutlineArrowNarrowRight className="w-4 h-3 text-blueTwo" />
                        </a>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {posts.length === showPerPage && (
          <div className="container mx-auto flex items-center justify-center pb-16">
            <button
              type="button"
              disabled={isValidating}
              onClick={showPerPageHandler}
              className={`text-base flex gap-1 ${
                isValidating
                  ? "opacity-60"
                  : "hover:bg-blueOne hover:text-black"
              } items-center py-3 px-6 rounded-lg bg-blueTwo text-white duration-200 mr-1`}
            >
              Load More
              {isValidating && <FormLoader color={"text-white"} />}
            </button>
          </div>
        )}
        {isValidating && (
          <div className="container mx-auto flex items-center justify-center pb-16">
            <FormLoader color={undefined} />
          </div>
        )}
      </section>
      <FooterWithoutSolution />
    </>
  );
};

export default News;

// getStaticProps function for fetching data from internal API
export async function getStaticProps() {
  const res = await fetch(
    `https://api-blog.jstemplate.net/wp-json/wp/v2/posts?per_page=9`
  );
  const data = await res.json();

  if (data.length > 0) {
    return {
      props: {
        getData: data,
      },
    };
  } else {
    // return 404 page
    return {
      props: {
        getData: [],
      },
    };
  }
}
