import parse from 'html-react-parser'
import { GetStaticPaths } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Footer from '../../src/components/Footer'
import Navbar from '../../src/components/Navbar'
import Header from '../../src/Sections/ProductSinglePage2/Header'
import Products from '../../src/Sections/ProductSinglePage2/Products'
import Testimonials from '../../src/Sections/ProductSinglePage2/Testimonials'
import { fetcher, productSeoFetcher, seoFetcher } from '../../src/utils/fetcher'
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



const ProductSinglePage2 = ( { foreignData, seoData }: { foreignData: any, seoData: any } ) => {

  const router = useRouter()

  const { slug } = router.query


  const { data: swrData } = useSWR( `/api/products/${slug}`, fetcher, {
    fallbackData: foreignData
  } as any )

  const { data: seoSWRData } = useSWR( `/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/item/${slug}`, seoFetcher, {
    fallbackData: seoData
  } )

  const head = parse( seoSWRData.head ) || ''

  return (
    <>
      {seoSWRData && (
        <Head>
          <title>JS Template- Top of Javascript Templates and Themes </title>
          {head}
        </Head>
      )}
      <div className="bg-[#E5E5E5]">
        <div
          className={`lg:bg-[url("/products/heading.svg")] bg-no-repeat bg-cover ${colors.bgPrimary}`}
        >
          <Navbar.SingleProductNavbar />
          <Header data={swrData} />
        </div>
        <Products data={swrData} info={data} colors={colors}>
          <div
            dangerouslySetInnerHTML={{ __html: swrData.description }}
          />
        </Products>
        {/* <RelatedProduct data={undefined} /> */}
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
    </>
  )
}

export default ProductSinglePage2

// export pages route and excludes some route by getStaticpath
export const getStaticPaths: GetStaticPaths = async () => {
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
    //fallback blocking
    fallback: true,
  }
}

export const getStaticProps = async ( ctx: any ) => {
  const { slug } = ctx.params
  const { data } = await Woocommerce.get( 'products', {
    slug,
  } )


  const seoData = await productSeoFetcher( slug )

  // only return few fields
  const filteredData = data.map( ( item: any ) => {
    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      image: item.images[0].src,
      short_description: item.short_description,
      description: item.description,
      sku: item.sku,
      date_created_gmt: item.date_created_gmt,
      date_modified_gmt: item.date_modified_gmt,
      price: item.price,
      regular_price: item.regular_price,
      sale_price: item.sale_price,
      date_on_sale_from: item.date_on_sale_from,
      date_on_sale_from_gmt: item.date_on_sale_from_gmt,
      date_on_sale_to: item.date_on_sale_to,
      date_on_sale_to_gmt: item.date_on_sale_to_gmt,
      on_sale: item.on_sale,
      tags: item.tags,
      attributes: item.attributes,
      meta_data: item.meta_data,
    }
  } )
  const finalData =
    filteredData.length >= 1 ? Object.assign( filteredData[0], {} ) : null
  // fetch seo data from wp rankmath plugin


  return {
    props: {
      foreignData: finalData ?? {},
      seoData: seoData ?? {},
    },

  }
}
