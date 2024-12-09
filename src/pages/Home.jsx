import ApiList from '../components/ApiList'
import styled from 'styled-components'

const StyledApiList = styled.div`
  margin-top: 2rem;
`

const StyledHeading = styled.h1`
  text-align: center;
`

function Home() {
  return (
    <>
      <StyledHeading>Home of 3rd Semester DAT Fall 2024</StyledHeading>
      <StyledApiList>
        <ApiList />
      </StyledApiList>
    </>
  )
}

export default Home
