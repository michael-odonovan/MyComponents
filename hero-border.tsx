import styled from 'styled-components'

const StyledHeroBorder = styled.div`
  z-index: 50;
  grid-row: 3 / 23;
  grid-column: 3 / 23;
  border-radius: 20px;
  border: 3px solid var(--white);
  padding: 20%;
`

export default function HeroBorder() {

  return (

    <StyledHeroBorder></StyledHeroBorder>

  )
}
