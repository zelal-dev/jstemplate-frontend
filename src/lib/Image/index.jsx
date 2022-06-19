import Image from 'next/image'
import React from 'react'

export default function ImageOpt({
  src,
  alt,
  width,
  height,
  className,
  layout,
  noPlaceholder,
}) {
  const logoLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div style={{ marginBottom: '-7px' }}>
      {!noPlaceholder ? (
        <Image
          loader={logoLoader}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          layout={layout}
          blurDataURL={src}
          placeholder="blur"
          priority
        />
      ) : (
        <Image
          loader={logoLoader}
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          layout={layout}
          priority
        />
      )}
    </div>
  )
}
