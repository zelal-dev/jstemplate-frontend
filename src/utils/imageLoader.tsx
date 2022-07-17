import Image from 'next/image';


const myLoader = ( props: { src: any; width: any; height: any } ): any => {
  return `${props.src}?w=${props.width}&h=${props.height || 75}`
}


export const CustomImage = ( props: any ) => {
  return (
    <Image
      loader={myLoader}
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  )
}