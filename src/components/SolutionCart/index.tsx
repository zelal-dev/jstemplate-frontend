import Link from 'next/link'
import React from 'react'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import Image from 'next/image'

const SolutionCart = ({
  toColor,
  fromColor,
  item,
}: {
  toColor: string
  fromColor: string
  item: any
}) => {
  return (
    <div className="hover:shadow-grayLight shadow-md ease-in duration-300 rounded-xl cursor-pointer p-7 bg-white  flex flex-col items-start relative group">
      {item ? (
        <>
          <div className="w-full 2xl:h-64 lg:h-60 sm:h-56 h-48 rounded-lg relative mb-6">
            <Link href={`/item/${item?.slug}`}>
              <a>
                <Image
                  src={
                    item?.image ||
                    'http://res.cloudinary.com/js-template/image/upload/v1651478994/vi1pbxtwb3l7qyv2vhpz.jpg'
                  }
                  className={'w-full h-auto rounded-lg '}
                  alt="product"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                />
              </a>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link href={`/item/${item?.slug}`}>
            <a className="w-full 2xl:h-64 lg:h-60 sm:h-56 h-48 rounded-lg mb-6 bg-cartImageBgOne" />
          </Link>
        </>
      )}

      {item.categories &&
        item.categories.map((category: string, index: any) => {
          return (
            <>
              <span
                key={index}
                className={`text-xs py-1.5 rounded text-white px-2 bg-gradient-to-br from-${toColor} to-${fromColor} shadow-3xl`}
              >
                {category.name || ' Category Name'}
              </span>
            </>
          )
        })}
      <h5
        className={`text-xl mt-5 font-bold text-gray-900 group-hover:text-${fromColor} duration-200 leading-6`}
      >
        <Link href={`/item/${item?.slug}`}>
          {item?.name ? item?.name : 'Product Title'}
        </Link>
      </h5>
      <div className="text-gray-600 mt-3">
        {item?.short_description ? (
          <div dangerouslySetInnerHTML={{ __html: item?.short_description }} />
        ) : (
          'Product Description'
        )}
      </div>
      {/* <div className="p-1.5 rounded shadow mt-6 flex items-center">
        <div
          className={`bg-gradient-to-br from-${toColor} to-${fromColor} p-2 rounded`}
        >
          <BsFillEmojiSmileFill
            style={{ color: 'white', height: '16px', width: '16px' }}
          />
        </div>
        <span className="text-sm text-gray-500 font-bold ml-3">1234</span>
      </div> */}

      {/* Pre Sale hidden */}
      {/* <div className="text-sm font-semibold text-gray-100 bg-gradient-to-br from-orangeOne to-orangeTwo rounded py-2 px-3 absolute top-12 right-12 shadow-4xl">
        Pre-Sale
      </div> */}
    </div>
  )
}

export default SolutionCart
