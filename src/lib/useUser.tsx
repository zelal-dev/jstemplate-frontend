/* eslint-disable @typescript-eslint/ban-ts-comment */
import { deleteCookie, getCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { authAxios } from '../utils/axiosKits'
// import fetcher from './api-user'
import { LoaderGrowing } from './loader'

const fetcher = async ( url: string ) => authAxios.get( url ).then( ( res ) => res.data.data )

export const useUser = () => {
	const { data, error } = useSWR( '/api/user/self', fetcher )

	const { mutate } = useSWRConfig()
	const loading = !data && !error
	const loggedIn = getCookie( 'token' ) !== null && data !== null
	const loggedOut = getCookie( 'token' ) === null ? true : false

	// auto logout if token is expired or not found in localStorage
	if ( error && error?.response?.status === 401 ) {
		deleteCookie( 'token' )
		mutate( '/api/user/self', null, false )
	}

	// React.useEffect( () => {
	//  if ( token ) {

	//    if ( time < now ) {
	//      localRemove( 'jst_u_info' )
	//      mutate( '/api/user/self' )
	//    }
	//  }
	// }, [localData, mutate] )

	// @ts-ignore
	const isAdmin = data?.data?.role?.isAdmin
	// @ts-ignore
	const isConfirmed = data?.data?.role?.isConfirmed
	// @ts-ignore
	const isSubscribed = data?.data?.role?.isSubscribed
	// @ts-ignore
	const isCandidate = data?.data?.role?.isCandidate

	return {
		loading,
		loggedIn,
		loggedOut,
		//  @ts-ignore
		user: data,
		mutate,
		isAdmin,
		isConfirmed,
		isSubscribed,
		isCandidate,
	}
}

// if user not logged in, redirect to home page
export const UserNotLogin = () => {
	const { loggedOut } = useUser()
	const router = useRouter()
	React.useEffect( () => {
		if ( loggedOut ) {
			router.push( '/' )
		}
	}, [loggedOut, router] )

	return <LoaderGrowing />
}

// if user not logged in, redirect to go back to previous page
export const UserGoBack = () => {
	const { loggedIn } = useUser()
	const router = useRouter()
	React.useEffect( () => {
		if ( loggedIn ) {
			router.back()
		}
	}, [loggedIn, router] )

	return <LoaderGrowing />
}

// if user logged in redirect to dashboard page
export const UserLogin = () => {
	const { loggedIn } = useUser()
	const router = useRouter()
	React.useEffect( () => {
		if ( loggedIn ) {
			router.push( '/dashboard' )
		}
	}, [loggedIn, router] )

	return <LoaderGrowing />
}
