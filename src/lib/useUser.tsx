import { useRouter } from "next/router";
import React from "react";
import useSWR, { useSWRConfig } from "swr";
import { localGet, localRemove } from "../utils/localStorage";
import fetcher from "./api-user";
import { LoaderGrowing } from "./loader";

export const useUser = () => {
  const { data, error } = useSWR("api/v1/user/self", fetcher);
  const { mutate } = useSWRConfig();
  const loading = !data && !error;
  const loggedIn = localGet("jst_u_info") !== null;
  const loggedOut = localGet("jst_u_info") === null ? true : false;
  const localData = localGet("jst_u_info");

  // auto logout if token is expired or not found in localStorage
  if (error && error?.response?.status === 401) {
    localRemove("jst_u_info");
    mutate("api/v1/user/self");
  }

  React.useEffect(() => {
    if (localData) {
      const time = new Date(localData.expires_in).getTime();
      const now = new Date().getTime();
      if (time < now) {
        localRemove("jst_u_info");
        mutate("api/v1/user/self");
      }
    }
  }, [localData, mutate]);

  // @ts-ignore
  const isAdmin = data?.data?.role?.isAdmin;
  // @ts-ignore
  const isConfirmed = data?.data?.role?.isConfirmed;
  // @ts-ignore
  const isSubscribed = data?.data?.role?.isSubscribed;
  // @ts-ignore
  const isCandidate = data?.data?.role?.isCandidate;

  return {
    loading,
    loggedIn,
    loggedOut,
    //  @ts-ignore
    user: data?.user,
    mutate,
    isAdmin,
    isConfirmed,
    isSubscribed,
    isCandidate,
  };
};

// if user not logged in, redirect to home page
export const UserNotLogin = () => {
  const { loggedOut } = useUser();
  const router = useRouter();
  React.useEffect(() => {
    if (loggedOut) {
      router.push("/");
    }
  }, [loggedOut, router]);

  return <LoaderGrowing />;
};

// if user not logged in, redirect to go back to previous page
export const UserGoBack = () => {
  const { loggedIn } = useUser();
  const router = useRouter();
  React.useEffect(() => {
    if (loggedIn) {
      router.back();
    }
  }, [loggedIn, router]);

  return <LoaderGrowing />;
};

// if user logged in redirect to dashboard page
export const UserLogin = () => {
  const { loggedIn } = useUser();
  const router = useRouter();
  React.useEffect(() => {
    if (loggedIn) {
      router.push("/dashboard");
    }
  }, [loggedIn, router]);

  return <LoaderGrowing />;
};
