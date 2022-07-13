import Image from 'next/image'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Navbar from '../../src/components/Navbar'
import Header from '../../src/Sections/ProductSinglePage2/Header'
import Products from '../../src/Sections/ProductSinglePage2/Products'
import { Axios } from '../../src/utils/axiosKits'
import { Woocommerce } from '../../src/utils/woocommerce'

// page primary colors
const colors = {
  textPrimary: 'text-[#250dae]',
  bgPrimary: 'bg-[#250dae]',
  buttonPrimary: 'bg-gradient-to-br from-[#250dae] to-[#472ce0]',
}

// page component data props
const data = {
  pricing: {
    salePrice: 9,
    regularPrice: 18,
  },
  thumbnail: '',
  offer: 'Limited Offer',
  updateAt: 'May 27, 2022',
  released: 'July 14, 2021',
  tools: 'React JS, Next.js',
  version: '4.5.12 or Above',
  responsive: true,
  doc: true,
  previewLink:
    'https://digiency.vercel.app/?_ga=2.199265518.1587672729.1653890609-1338439813.1645556177',
  tags: ['React', 'NextJS'],
}

const fetcher = async ( url: string ) => Axios( url ).then( ( res ) => res.data )

const ProductSinglePage2 = ( props: any ) => {

  const router = useRouter()

  const { slug } = router.query

  console.log( 'slug', slug )

  const { data: swrData, error: swrError } = useSWR( `/api/products/${slug}`, fetcher, {
    initialData: props.foreignData,
  } as any )


  return (
    <>
      <div className="bg-[#E5E5E5]">
        <div
          className={`lg:bg-[url("/products/heading.svg")] bg-no-repeat bg-cover ${colors.bgPrimary}`}
        >
          <Navbar.SingleProductNavbar />
          <Header data={swrData?.data} />
        </div>
        <Products info={data} colors={colors}>
          Product description under the Products box
          <h1 className="text-2xl font-bold text-gray-900">Product Title</h1>
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
        {/* <RelatedProduct data={ undefined } />
      <Testimonials /> */}
        {/* <Footer
        boxToColor="secondaryTemplateColorDark"
        boxFromColor="secondaryTemplateColorLight"
        shadowBox="secondaryTemplate"
        buttonToColor="secondaryTemplateColorDark"
        buttonFromColor="secondaryTemplateColorLight"
        shadowButton="secondaryTemplate"
      /> */}
      </div>
    </>
  )
}

export default ProductSinglePage2

// export pages route and excludes some route by getStaticpath
export const getStaticPaths = async () => {
  const { data } = await Woocommerce.get( 'products' )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = data.map( ( product: { slug: any } ) => {

    return {
      params: {
        slug: product.slug,
      },
    }
  } )

  // excludes some route from paths
  const excludedPaths = [
    'mern-stack-job-board-theme',
    'mern-stack-classified-ads-theme',
    'portfo-frontity-personal-portfolio-theme',
    'elementor-template-kits-blocks-library',
    'metablog-headless-wordpress-blog-theme',
    'metashop-headless-woocommerce-theme',
    'padma-multipurpose-frontity-theme',
    'gutenberg-page-builder-plugin'
  ]

  const filteredPaths = paths.filter( ( path: { params: { slug: string } } ) => !excludedPaths.includes( path.params.slug ) )

  return {
    paths: filteredPaths,
    fallback: true,
  }
}

export const getStaticProps = async ( ctx: any ) => {
  const { slug } = ctx.params
  const { data } = await Woocommerce.get( 'products', {
    slug,
  } )

  // only return few fields
  const filteredData = data.map( ( item: any ) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.images[0].src,
      short_description: item.short_description,
    }
  } )
  const finalData =
    filteredData.length >= 1 ? Object.assign( filteredData[0], {} ) : null

  return {
    props: {
      foreignData: finalData,
    },
  }
}
