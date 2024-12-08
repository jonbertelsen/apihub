import ApiList from '../components/ApiList'
import styled from 'styled-components'

const StyledApiList = styled.div`
  margin-top: 2rem;
`

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>
      <StyledApiList>
        <ApiList />
      </StyledApiList>
    </>
  )
}

export default Home
