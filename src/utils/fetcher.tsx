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

// function for call seo page fetcher
export const pageSeoFetcher = async ( slug: string ) => {
  //  call seo fetcher
  // fetch seo data from wp rankmath plugin
  return await fetch( `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/${slug}` ).then( ( res ) => res.json() )

}

export const singlePostPathFetcher = async () => {
  //  call seo fetcher
  // fetch seo data from wp rankmath plugin
  return await fetch( `${process.env.API_ENDPOINT}/wp-json/wp/v2/posts` ).then( ( res ) => res.json() )

}

export const singlePostseoFetcher = async ( slug: string ) => {
  //  call seo fetcher
  // fetch seo data from wp rankmath plugin
  return await fetch( `${process.env.NEXT_PUBLIC_API_ENDPOINT}/wp-json/rankmath/v1/getHead?url=${process.env.NEXT_PUBLIC_API_ENDPOINT}/post/${slug}` ).then( ( res ) => res.json() )

}