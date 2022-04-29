import styled from 'styled-components'

const StyledHeroText = styled.div`
  z-index: 50;
  color: var(--white);
  grid-row: 12;
  grid-column: 12;
  font-size: calc(12px + 5.5vw);
  font-family: Montserrat;
  letter-spacing: 0.1em;
  text-align: center;
`

interface HeroTextProps {
  children: string;
}

export default function HeroText({ children }: HeroTextProps) {

  return (
    <StyledHeroText>{children}</StyledHeroText>
  )
}
