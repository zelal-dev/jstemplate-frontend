import styled from '@emotion/styled'
import parse from 'html-react-parser'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsArrowRightShort } from 'react-icons/bs'
import useSWR from 'swr'
import Thumbnail from '../../src/components/Blog/Thumbnail'
import FooterWithoutSolution from '../../src/components/FooterWithoutSolution'
import Navbar from '../../src/components/Navbar'
import { seoFetcher, singlePostPathFetcher, singlePostSeoFetcher } from '../../src/utils/fetcher'
const fetcher = ( url: any ) => fetch( url ).then( ( r ) => r.json() )

const Details = ( {
  singlePostForeignData,
  latestPosts,
  seoForeignData
}: {
  singlePostForeignData: any
  latestPosts: any
  seoForeignData: any
} ) => {


  const router = useRouter()
  const { slug } = router.query

  const { data: singlePostData, error: singlePostError } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/wp/v2/posts?slug=${slug}`,
    fetcher,
    {
      fallbackData: singlePostForeignData,
    }
  )
  // latestPosts data fetching
  const { data: latestPostsData, error: latestPostsError } = useSWR(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/wp/v2/posts?per_page=5`,
    fetcher,
    {
      fallbackData: latestPosts,
    }
  )

  // get seo data using swr and fetch
  const { data: seoSwrData, error: seoSwrError } = useSWR( `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/${slug}`, seoFetcher,
    {
      fallbackData: seoForeignData
    } )
  const head = seoSwrData.head ? parse( seoSwrData.head ) : '<meta name="robots" content="nofollow, noindex">'

  return (
    <>
      {seoSwrData && (
        <Head>
          {head}
        </Head>
      )}

      <div className="shadow-md">
        <Navbar.SecondaryDefaultNavbar />
      </div>
      <section className="bg-backgroundGrayOne">
        <div className="container mx-auto py-14 pb-28 px-5 sm:px-0">
          <div className="grid grid-cols-10 justify-center gap-7">
            <div className="col-span-10 md:col-span-7">
              <div className="bg-white rounded-2xl p-7 shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)]">
                {/* post thumbnail image */}
                <Thumbnail id={singlePostData[0].id} />
                <h1
                  className="text-3xl font-bold text-[#001324] truncate pt-8"
                  dangerouslySetInnerHTML={{
                    __html: singlePostData[0].title.rendered,
                  }}
                />
                <PostContent
                  className="pt-4 text-lg text-[#5D6D7E]"
                  dangerouslySetInnerHTML={{
                    __html: singlePostData[0].content.rendered,
                  }}
                />

                {/* Tags component hidden */}
                {/* <hr className="mt-7 border border-themeGrayLight" />
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
                </div> */}
              </div>
              {/* Comments component hidden */}
              {/* <Comments /> */}
            </div>
            <div className="col-span-8 md:col-span-3">
              {/* Category component hidden */}
              {/* <div className="bg-white rounded-2xl p-10 shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)]">
                <h1 className="text-3xl font-bold text-[#001324] pb-1">
                  Category List
                </h1>

                {dataOne.map((item: any, index: any) => (
                  <div key={index} className="flex items-center gap-4 pt-4">
                    <span className="border border-blueTwo w-5 opacity-30"></span>
                    <p className="text-lg text-[#001324] truncate w-full">
                      Category Name Here
                    </p>
                  </div>
                ))}
              </div> */}
              <h1 className="text-3xl font-bold text-[#001324] mt-8 mb-3 ">
                Latest Topic
              </h1>
              {latestPostsData &&
                latestPostsData.map( ( item: any, index: any ) => {
                  const date = new Date( item.date )
                  const postDate = date.toLocaleDateString( 'en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  } )
                  return (
                    <div
                      key={index}
                      className="flex flex-wrap xl:flex-nowrap items-center gap-5 bg-white rounded-2xl  shadow-[0_6px_24px_rgba(6, 129, 121, 0.08)] p-5 mb-5"
                    >
                      <div>
                        <Link href={`/blog/${item.slug}`}>
                          <a>
                            <PostImage id={item.id} />
                          </a>
                        </Link>
                      </div>
                      <div>
                        <p className="text-sm text-[#1a2b3a]">{postDate}</p>
                        <h3 className="text-base font-bold text-[#001324] hover:text-blueTwo max-h-11 overflow-hidden">
                          <Link href={`/blog/${item.slug}`}>
                            <a
                              dangerouslySetInnerHTML={{
                                __html: item.title.rendered,
                              }}
                            />
                          </Link>
                        </h3>
                        <Link href={`/blog/${item.slug}`}>
                          <a className="flex items-center gap-3 mt-2 text-blueTwo">
                            <span className="text-sm font-semibold ">
                              Read More
                            </span>
                            <BsArrowRightShort className="text-2xl" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  )
                } )}
            </div>
          </div>
        </div>
      </section>
      <FooterWithoutSolution />
    </>
  )
}

const PostImage = ( { id }: { id: any } ) => {
  const { data, error } = useSWR(
    id
      ? `https://api-blog.jstemplate.net/wp-json/wp/v2/media?parent=${id}`
      : null,
    fetcher,
    {
      refreshInterval: 0,
    }
  )

  if ( data ) {
    if ( data.length > 0 ) {
      return (
        <div className="w-[100px] h-[100px] bg-slate-200 rounded-lg overflow-hidden grid justify-center items-center text-gray-300 text-2xl">
          <Image
            src={data[0].media_details.sizes.full.source_url}
            alt={data[0].alt_text}
            width={100}
            height={100}
            priority
          />
        </div>
      )
    } else {
      return (
        <div className="w-[100px] h-[100px] bg-slate-200 rounded-lg overflow-hidden grid justify-center items-center text-gray-300 text-lg">
          No Image
        </div>
      )
    }
  }
  return (
    <div className="w-[100px] animate-pulse h-[100px] bg-slate-100 rounded-lg overflow-hidden grid justify-center items-center text-gray-300 text-2xl">
      Loading...
    </div>
  )
}

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
  )
}

export default Details

// Export all the the paths from getStaticPaths as an array of objects
export const getStaticPaths = async () => {

  // call Api to get all the posts
  const posts = await singlePostPathFetcher()

  const paths = posts.map( ( post: any ) => ( {
    params: {
      slug: post.slug,
    },
  } ) )
  return {
    paths,
    fallback: false,

  }
}


// getServerSideProps function for fetching data from external API
export const getStaticProps: GetStaticProps = async ( ctx: any ) => {
  const { slug } = ctx.params
  const res = await fetch(
    `${process.env.API_ENDPOINT}/wp-json/wp/v2/posts?slug=${slug}`
  )
  const data = await res.json()



  const resTwo = await fetch(
    `${process.env.API_ENDPOINT}/wp-json/wp/v2/posts?per_page=5`
  )
  const latestPosts = await resTwo.json()

  // get seo data from the api
  const seoData = await singlePostSeoFetcher( slug )

  return {
    props: {
      singlePostForeignData: data || {},
      latestPosts: latestPosts || [],
      seoForeignData: seoData || {},
    },
  }

}



const PostContent = styled.div`
  figcaption {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 10px 0;
    color: #5d6d7e;
  }
  h2 {
    font-size: 1.5rem;
    color: #001324;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.35rem;
    color: #001324;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.25rem;
    color: #001324;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  h5 {
    font-size: 1rem;
    color: #001324;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  h6 {
    font-size: 0.75rem;
    color: #001324;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    color: #5d6d7e;
  }
  a {
    color: #001324;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
  img {
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }
`
