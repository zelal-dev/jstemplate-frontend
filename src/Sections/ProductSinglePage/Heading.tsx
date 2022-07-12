import {
  FaCheck
} from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

const Heading = ( props: any ) => {
  const { colors, info, data } = props
  return (
    <div
      id={data?.slug}
      className="container mx-auto md:-mt-80 bg-white w-full shadow-xl xl:p-24 lg:p-16 md:p-10 sm:p-8 p-6 rounded-xl"
    >
      <div className="flex flex-col items-center">
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 mt-2 text-gray-900 text-center">
          Pricing Plans
        </h1>
        <article className="mt-5 text-gray-600 md:w-3/5 w-3/4 text-center xl:text-lg md:text-base text-sm">
          We have three different pricing plans for you to choose from. Each
          plan has a different set of features and benefits.
        </article>

        {/* <div className="mt-16 grid xl:grid-cols-3 lg:grid-cols-2  gap-10 container">
          <div className="flex items-start bg-secondaryGrayLight border border-cartImageBgOne p-5 rounded-lg">
            <div className="p-3 rounded-lg bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark">
              {info.discount.icon}
            </div>
            <div className="ml-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                {info.discount.title}
              </h1>
              <article className="text-gray-500 font-sm mt-2">
                {info.discount.description}
              </article>
            </div>
          </div>
          <div className="flex items-start bg-secondaryGrayLight border border-cartImageBgOne p-5 rounded-lg">
            <div className="p-3 rounded-lg bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark">
              {info.support.icon}
            </div>
            <div className="ml-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                {info.support.title}
              </h1>
              <article className="text-gray-500 font-sm mt-2">
                {info.support.description}
              </article>
            </div>
          </div>
          <div className="flex items-start bg-secondaryGrayLight border border-cartImageBgOne p-5 rounded-lg">
            <div className="p-3 rounded-lg bg-gradient-to-br from-secondaryTemplateColorLight to-secondaryTemplateColorDark">
              {info.delivery.icon}
            </div>
            <div className="ml-5">
              <h1 className="text-lg text-gray-900 font-semibold">
                {info.delivery.title}
              </h1>
              <article className="text-gray-500 font-sm mt-2">
                {info.delivery.description}
              </article>
            </div>
          </div>
        </div> */}
        {/* Pricing box's */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-10 container mt-16">
          <HeadingNormalCart
            price={data?.price}
            info={info.pricing.standard}
            colors={colors}
          />

          <HeadingPlusCart
            price={data?.price}
            info={info.pricing.standardPlus}
            colors={colors}
          />
          <HeadingExtendedCart
            price={data?.price}
            info={info.pricing.extended}
            colors={colors}
          />
        </div>
        {/* <div className="grid sm:grid-cols-12 gap-12 mt-16 sm:p-8 border border-cartImageBgOne">
          <div className="xl:col-span-3 sm:col-span-4 ">
            <div className="w-60 h-60" />
          </div>
          <div className="xl:col-span-7 sm:col-span-8  px-4 sm:px-0">
            <h1 className="text-3xl font-bold text-gray-900">
              Our Refund Policy
            </h1>
            <article className="text-gray-500 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting...
            </article>
            <span className={`${colors.textPrimary} mt-4 block font-bold`}>
              Read More
            </span>
          </div>
          <div className="xl:col-span-2 sm:col-span-8 ">
            <h3 className="text-sm text-gray-900 px-4 sm:px-0">
              Our Payment Method
            </h3>
            <div className="flex xl:flex-col flex-row mt-5">
              <div className="flex items-center">
                <FaCcPaypal className="w-16 h-10 text-gray-500" />
                <FaCcVisa className="w-16 h-10 text-gray-500 " />
              </div>
              <div className="flex items-center xl:mt-3">
                <FaCcMastercard className="w-16 h-10 text-gray-500" />
                <SiAmericanexpress className="w-16 h-10 text-gray-500 " />
              </div>
              <div className="flex items-center xl:mt-3">
                <FaCcJcb className="w-16 h-10 text-gray-500" />
                <FaCcDiscover className="w-16 h-10 text-gray-500 " />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Heading

const HeadingNormalCart = ( {
  price,
  info,
  colors,
}: {
  price: any
  info: any
  colors: any
} ) => {

  return (
    <div
      className="p-7 my-auto bg-secondaryGrayLight rounded-lg border border-cartImageBgOne"
      style={{ boxShadow: 'inset 0px 8px 4px -4px #E9F0FB' }}
    >
      <h2 className="text-lg font-bold text-gray-900">
        {info?.title ?? 'title'}
      </h2>
      <h5 className="text-gray-500 text-sm">Save ${info?.save}</h5>
      <div className="flex items-end">
        <h3 className={`text-4xl font-black ${colors?.textPrimary} mr-2`}>
          {info ? `$${info?.sale}` : '$69'}
        </h3>
        <h5 className="text-lg text-gray-500 pb-1.5 line-through">
          ${info?.regular}
        </h5>
      </div>
      <hr className="w-full text-secondaryGrayLighter mt-6 mb-7" />
      <div>
        {info?.list?.map( ( item: any, index: number ) => (
          <div className="flex items-center mb-4 last-of-type:mb-0" key={index}>
            <div
              className={`${item.checked ? colors.buttonPrimary : 'bg-gray-400'
                } p-1.5 rounded-full`}
            >
              {item.checked ? (
                <FaCheck className="text-white w-2.5 h-2.5" />
              ) : (
                <ImCross className="text-white w-2.5 h-2.5" />
              )}
            </div>
            <h3 className="text-base text-gray-700 ml-3">{item.title}</h3>
          </div>
        ) )}
      </div>
      <button
        type="button"
        className={`text-gray-100 text-base font-semibold ${colors.buttonPrimary} w-full py-4 rounded-lg mt-8 shadow-secondaryTemplate`}
      >
        Buy Now
      </button>
      {/* <div className="flex justify-center mt-7">
        <button
          type="button"
          className="text-gray-700 tex-base mx-auto flex items-center"
        >
          <span>See Details</span>{" "}
          <MdOutlineKeyboardArrowDown className="text-gray-700 ml-3" />
        </button>
      </div> */}
    </div>
  )
}

const HeadingPlusCart = ( {
  price,
  info,
  colors,
}: {
  price: any
  info: any
  colors: any
} ) => {
  return (
    <div
      className="p-7 my-auto bg-secondaryGrayLight rounded-lg border border-cartImageBgOne"
      style={{ boxShadow: 'inset 0px 8px 4px -4px #E9F0FB' }}
    >
      <h2 className="text-lg font-bold text-gray-900">{info.title}</h2>
      <h5 className="text-gray-500 text-sm">Save ${info.save}</h5>
      <div className="flex items-end">
        <h3 className={`text-4xl font-black ${colors.textPrimary} mr-2`}>
          {info ? `$${info.sale}` : '$149'}
        </h3>
        <h5 className="text-lg text-gray-500 pb-1.5 line-through">
          ${info.regular}
        </h5>
      </div>
      <hr className="w-full text-secondaryGrayLighter mt-6 mb-7" />
      <div>
        {info.list.map( ( item: any, index: number ) => (
          <div className="flex items-center mb-4 last-of-type:mb-0" key={index}>
            <div
              className={`${item.checked ? colors.buttonPrimary : 'bg-gray-400'
                } p-1.5 rounded-full`}
            >
              {item.checked ? (
                <FaCheck className="text-white w-2.5 h-2.5" />
              ) : (
                <ImCross className="text-white w-2.5 h-2.5" />
              )}
            </div>
            <h3 className="text-base text-gray-700 ml-3">{item.title}</h3>
          </div>
        ) )}
      </div>
      <button
        type="button"
        className={`text-gray-100 text-base font-semibold ${colors.buttonPrimary} w-full py-4 rounded-lg mt-8 shadow-secondaryTemplate`}
      >
        Buy Now
      </button>
      {/* <div className="flex justify-center mt-7">
        <button
          type="button"
          className="text-gray-700 tex-base mx-auto flex items-center"
        >
          <span>See Details</span>{" "}
          <MdOutlineKeyboardArrowDown className="text-gray-700 ml-3" />
        </button>
      </div> */}
    </div>
  )
}

const HeadingExtendedCart = ( {
  price,
  info,
  colors,
}: {
  price: any
  info: any
  colors: any
} ) => {
  return (
    <div
      className={`rounded-lg relative overflow-hidden ${colors.bgPrimary} shadow-secondaryTemplate`}
    >
      <div
        className="w-80 -top-32 -left-40  z-10 absolute h-[36rem] bg-[rgba(23,23,23,0.08)]"
        style={{ transform: 'matrix(0.84, 0.47, -0.58, 0.86, 0, 0)' }}
      />
      <div
        className="w-80 -bottom-36 -right-44  z-10 absolute h-[36rem] bg-[rgba(23,23,23,0.08)]"
        style={{ transform: 'matrix(0.84, 0.47, -0.58, 0.86, 0, 0)' }}
      />
      <div
        className={`z-20 absolute bg-white top-5 right-5 ${colors.textPrimary} text-sm py-2 px-3 shadow-md rounded-lg`}
      >
        Recommended
      </div>
      <div className="px-10 py-12 z-20 relative">
        <h2 className="text-lg font-bold text-gray-100 pt-px">{info.title}</h2>
        <h5 className="text-gray-100 text-sm">Save ${info.save}</h5>
        <div className="flex items-end">
          <h3 className="text-4xl text-white font-black mr-2">${info.sale}</h3>
          <h5 className="text-lg text-gray-100 opacity-70 pb-1.5 line-through">
            {info ? `$${info.regular}` : '$999'}
          </h5>
        </div>
        <hr className="w-full text-secondaryGrayLighter mt-6 mb-7 opacity-20" />
        <div>
          {info.list.map( ( item: any, index: number ) => (
            <div
              className="flex items-center mb-4 last-of-type:mb-0"
              key={index}
            >
              <div
                className={`bg-gradient-to-br from-[#FFFFFF] to-[#81FFF7] p-1.5 rounded-full`}
              >
                {item.checked ? (
                  <FaCheck className={`${colors.textPrimary} w-2.5 h-2.5`} />
                ) : (
                  <ImCross className={`${colors.textPrimary} w-2.5 h-2.5`} />
                )}
              </div>
              <h3 className="text-base text-gray-100 ml-3">{item.title}</h3>
            </div>
          ) )}
        </div>
        <button
          type="button"
          className={`${colors.textPrimary} text-base font-semibold bg-white w-full py-4 rounded-lg mt-8 shadow-secondaryTemplate`}
        >
          Buy Now
        </button>
        {/* <div className="flex justify-center mt-7">
          <button
            type="button"
            className="text-gray-100 tex-base mx-auto flex items-center"
          >
            <span>See Details</span>{" "}
            <MdOutlineKeyboardArrowDown className="text-gray-100 ml-3" />
          </button>
        </div> */}
      </div>
    </div>
  )
}
