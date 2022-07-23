import { useState } from 'react'

const MangeWebsite = ( props: any ) => {
  const { colors, data } = props

  console.log( "Colors", colors )

  const sample = [1, 2, 3]
  const [boxShadowOne, setBoxShadowOne] = useState( '' )
  const [boxShadowTwo, setBoxShadowTwo] = useState( '' )
  const [boxShadowThree, setBoxShadowThree] = useState( '' )
  const [boxShadowFour, setBoxShadowFour] = useState( '' )
  const [boxShadowFive, setBoxShadowFive] = useState( '' )
  const [boxShadowSix, setBoxShadowSix] = useState( '' )
  const handleMouseOverOne = () => {
    setBoxShadowOne( '' )
  }
  const handleMouseOutOne = () => {
    setBoxShadowOne( 'inset 0px 8px 4px -4px #E9F0FB' )
  }
  const handleMouseOverTwo = () => {
    setBoxShadowTwo( '' )
  }
  const handleMouseOutTwo = () => {
    setBoxShadowTwo( 'inset 0px 8px 4px -4px #E9F0FB' )
  }
  const handleMouseOverThree = () => {
    setBoxShadowThree( '' )
  }
  const handleMouseOutThree = () => {
    setBoxShadowThree( 'inset 0px 8px 4px -4px #E9F0FB' )
  }
  const handleMouseOverFour = () => {
    setBoxShadowFour( '' )
  }
  const handleMouseOutFour = () => {
    setBoxShadowFour( 'inset 0px 8px 4px -4px #E9F0FB' )
  }
  const handleMouseOverFive = () => {
    setBoxShadowFive( '' )
  }
  const handleMouseOutFive = () => {
    setBoxShadowFive( 'inset 0px 8px 4px -4px #E9F0FB' )
  }
  const handleMouseOverSix = () => {
    setBoxShadowSix( '' )
  }
  const handleMouseOutSix = () => {
    setBoxShadowSix( 'inset 0px 8px 4px -4px #E9F0FB' )
  }
  return (
    <div className="container mx-auto">
      <div className="xl:py-24 sm:py-16 py-14 flex flex-col items-center justify-center">
        {/* <video
          controls
          className="rounded-xl xl:-mt-96 lg:-mt-[21rem] md:-mt-80 sm:-mt-80 -mt-[18rem] shadow-2xl xl:w-[59.5rem] lg:w-[50rem] md:w-[40rem] sm:w-[30rem] w-[20rem] xl:h-[31.25rem] lg:h-[25rem] md:h-[20rem] sm:h-[15rem] h-[10.625rem]"
        >
          <source
            src="https://www.youtube.com/watch?v=Faow3SKIzq0"
            type="video/mp4"
          />
        </video> */}
        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-bold lg:mt-4 sm:mt-3 text-gray-900  md:w-2/4 w-4/6 text-center">
          {data ? data.title : 'Title Heading'}
        </h1>
        <article className="mt-5 text-gray-600 md:w-2/4 w-3/5 text-center xl:text-lg md:text-base text-sm">
          {data
            ? data.description
            : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text'}
        </article>
        {data && data.list.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-11 container mx-auto xl:my-16 md:mt-12 mt-8 px-5 lg:px-28 sm:px-16">
            {data.list.map( ( item: any, index: number ) => (
              <div
                className="bg-backgroundGrayOne p-10 rounded-lg flex flex-col items-center justify-center hover:bg-white cursor-pointer hover:drop-shadow-xl ease-in duration-200"
                style={{ boxShadow: `${boxShadowOne}` }}
                onMouseOver={handleMouseOverOne}
                onMouseOut={handleMouseOutOne}
                key={index}
              >
                <div
                  className={`p-5 rounded-md ${colors.buttonPrimary} shadow-secondaryTemplate`}
                >
                  {item.icon}
                </div>
                <h5 className="text-xl font-bold mt-7 text-gray-900 text-center">
                  {item.title}
                </h5>
                <article className="text-lg text-gray-600 mt-4 text-center">
                  {item.description}
                </article>
              </div>
            ) )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MangeWebsite
