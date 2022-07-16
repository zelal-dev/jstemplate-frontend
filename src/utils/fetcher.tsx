import { Axios, SeoAxios } from './axiosKits'

export const fetcher = ( url: string ) => Axios( url ).then( ( res ) => res.data.data )

export const seoFetcher = ( url: string ) => SeoAxios( url ).then( ( res ) => res.data )

export const seoPageFetcher = async ( slug: string ) => {
  //  call seo fetcher
  // fetch seo data from wp rankmath plugin
  return await fetch( `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/${slug}` ).then( ( res ) => res.json() )

}

export const productSeoFetcher = async ( slug: string ) => {
  //  call seo fetcher
  // fetch seo data from wp rankmath plugin
  return await fetch( `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/item/${slug}` ).then( ( res ) => res.json() )

}

