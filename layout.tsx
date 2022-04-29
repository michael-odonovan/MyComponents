import Header from './header'
import Footer from './footer'
import Credits from './credits'
import Topbar from './topbar'
import Meta from './meta'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  font-family: var(--secondary-font);
`

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

  const pngLogoSrc = "/logo.png"

  return (

    <>

      <Meta />

      <Topbar />

      <Header pngLogoSrc={pngLogoSrc} />

      <ContentWrapper>
        {children}
      </ContentWrapper>

      <Footer pngLogoSrc={pngLogoSrc} />

      <Credits />

    </>

  )
}
