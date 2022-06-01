import axios from "axios";
import Image from "next/image";
import React from "react";
import useSWR from "swr";

const fetcher = (url: any) => axios(url).then((r) => r.data);

const FeaturedMedia = ({ id }: { id: any }) => {
  const { data, error } = useSWR(
    id
      ? `https://api-blog.jstemplate.net/wp-json/wp/v2/media?parent=${id}`
      : null,
    fetcher,
    {
      refreshInterval: 0,
    }
  );
  if (data) {
    if (data.length > 0) {
      return (
        <div className="w-full h-60 bg-slate-200 rounded-lg overflow-hidden grid justify-center items-center text-gray-300 text-2xl">
          <Image
            src={data[0].media_details.sizes.medium.source_url}
            alt={data[0].alt_text}
            width={data[0].media_details.width}
            height={data[0].media_details.height}
            priority
          />
        </div>
      );
    } else {
      return (
        <div className="w-full h-60 bg-slate-200 rounded-lg overflow-hidden grid justify-center items-center text-gray-300 text-2xl">
          No Featured Image
        </div>
      );
    }
  }
  return (
    <div className="w-full animate-pulse h-60 bg-slate-100 rounded-lg overflow-hidden grid justify-center items-center text-gray-300 text-2xl">
      Loading...
    </div>
  );
};

export default FeaturedMedia;
