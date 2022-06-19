import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { TbError404 } from "react-icons/tb";

const NotFound404 = () => {
  const router = useRouter();
  return (
    <section className="bg-backgroundGrayOne ">
      <div className="container mx-auto">
        <div className="pt-20 pb-36 px-6 sm:px-0">
          <div className="flex flex-col items-center justify-center">
            <TbError404 className="text-[500px] -mt-10 font-bold text-gray-500" />
            <h1 className="text-6xl font-bold font-montserrat -mt-20 text-gray-600">
              Page Not Found
            </h1>
            <p className="text-lg text-gray-400">
              Sorry, we couldn’t page you are looking for
            </p>
            <div className="flex gap-6 justify-center items-center mt-6">
              <Link href="/">
                <a className="bg-blueTwo text-white uppercase text-xl font-bold py-3 px-8 rounded-lg shadow-secondaryTemplate">
                  Go Home
                </a>
              </Link>
              <button
                type="button"
                onClick={() => router.back()}
                className="bg-secondaryTemplateColorDark text-white uppercase text-xl font-bold py-3 px-8 rounded-lg shadow-secondaryTemplate"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound404;
