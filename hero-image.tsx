import Image from 'next/image'
import styled from 'styled-components'

interface HeroWrapperProps {
  heightMobile: string,
  heightDesktop: string,
  breakPoint: string,
  objectPositionMobile?: string,
}

const HeroWrapper = styled.div<HeroWrapperProps>`
  position: relative;
  width: 100%;
  height: ${props => props.heightMobile};
  @media (min-width: ${props => props.breakPoint}) {
    height: ${props => props.heightDesktop};
  }
  img {
    @media (max-width: ${props => props.breakPoint}) {
      object-fit: cover;
      object-position: ${props => props.objectPositionMobile};
    }
  }
  display: grid;
  grid-template-rows: repeat(24 , 1fr);
  grid-template-columns: repeat(24, 1fr);
`

interface HeroImageProps {
  children?: React.ReactNode,
  heightMobile: string,
  heightDesktop: string,
  breakPoint: string,
  src: string | StaticImageData ,
  alt: string,
  objectPositionMobile?: string,
}

export default function HeroImage({ heightMobile, heightDesktop, breakPoint, src, alt, objectPositionMobile, children }: HeroImageProps) {
  return (

    <HeroWrapper 
      heightMobile={heightMobile} 
      heightDesktop={heightDesktop} 
      breakPoint={breakPoint}
    >
      <Image
        src={src}
        alt={alt}
        priority
        layout="fill"
        objectPosition={objectPositionMobile}
      >
      </Image>
      {children}
    </HeroWrapper>

  )
}
