
const Header = ( { data }: { data: any } ) => {

  return (
    <div className="xl:pt-32 lg:pt-28 md:pt-24 sm:pt-20 pt-16 xl:pb-[21.5rem] lg:pb-80 md:pb-72 sm:pb-60 pb-52 flex flex-col items-center">
      <h1 className="xl:text-4xxl lg:text-4xl md:text-3xl sm:text-2xl text-xl  font-bold text-gray-100">
        {data?.name}
      </h1>
      <h4 className="md:text-base flex-wrap text-gray-100 flex items-center justify-center mt-4">{data?.short_description}</h4>
      {/* <h3 className="md:text-base text-sm flex-wrap text-gray-100 flex items-center justify-center mt-4">
        <span className="mr-3">Home</span>
        <MdArrowForwardIos className="text-base mr-3" />
        <span className="mr-3">{data ? 'category' : 'Name'} Template</span>
        <MdArrowForwardIos className="text-base mr-3" />
        <span className="mr-3">
          Product Single Page Header
        </span>
      </h3> */}
    </div>
  )
}

export default Header

// xl:pt-32 lg:pt-28 md:pt-24 sm:mt-20 mt-16 xl:pb-[21.5rem] lg:pb-80 md:pb-72 sm:pb-60 pb-52
