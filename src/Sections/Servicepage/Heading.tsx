import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { IoChatbubbles } from 'react-icons/io5'
import { RiCheckDoubleFill } from 'react-icons/ri'
const Heading = ({ colors, data }: { colors: any; data: any }) => {
  const [tab, setTab] = useState<number>(0)
  const [img, setImg] = useState(undefined)

  React.useEffect(() => {
    if (!img) {
      setImg(data.items[0].image)
    }
  }, [img, data])

  const handleImage = (key: number, id: any) => {
    const filtered = data.items.filter((item: any) => item._id === id)
    setImg(filtered[0].image)
    setTab(key)
  }
  return (
    <div className="bg-backgroundGrayOne">
      <div className="container mx-auto">
        <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
          <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900">
            {data ? data.title : 'Heading Title'}
          </h1>
          <article className="mt-5 text-gray-600 max-w-2xl w-11/12 text-center xl:text-lg md:text-base text-sm">
            {data ? data.description : 'Description'}
          </article>
          <div className="flex flex-col sm:flex-row px-5 sm:px-0 items-center justify-between container mt-16">
            <div className="xl:w-1/4 sm:w-2/5 w-full 2xl:mr-36 xl:mr-36 md:mr-16 sm:mr-5   flex flex-col">
              {data &&
                data.items.map((item: any, index: any) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleImage(index, item._id)}
                    className={`${
                      tab === index
                        ? 'bg-white shadow-md  flex items-center p-5 rounded-lg mb-2 ease-in duration-200'
                        : 'flex items-center p-5 rounded-lg mb-2 ease-in duration-200'
                    }`}
                  >
                    {tab === index ? (
                      <div
                        className={`w-5 h-5 ${colors.buttonPrimary} grid items-center justify-center mr-6`}
                      >
                        <RiCheckDoubleFill className="text-white text-base" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 bg-gray-900 mr-6 grid justify-center items-center">
                        <FiCheck className="text-white text-base" />
                      </div>
                    )}

                    <h3 className="text-base text-gray-900">{item.name}</h3>
                  </button>
                ))}
            </div>
            <div className="relative bg-white xl:w-3/4 sm:w-3/5 w-full sm:h-96 sm:py-64 h-40 rounded-lg overflow-hidden shadow-xl mt-8 sm:mt-0">
              {img !== undefined && (
                <Image src={img} alt="" layout="fill" objectFit="cover" />
              )}
            </div>
          </div>
          {/* <Link href={data.buttonLink}>
            <a
              className={`text-base font-semibold drop-shadow-lg mt-16 text-gray-100 flex items-center shadow-secondaryTemplate ${colors.buttonPrimary} py-4 px-6 rounded-lg`}
            >
              <IoChatbubbles className="mr-4 text-xl" /> {data.buttonText}
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Heading
