import apis from '../util/apis'
import StyledCard from './ApiCard'
import styled from 'styled-components'
import { useState } from 'react'

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const StyledHeading = styled.h1`
  text-align: center;
`

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  &:hover {
    background-color: ${({ theme }) => theme.hover};
  }
`
const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`

function ApiList() {
  const [apiData, setApiData] = useState(apis)

  // Utility function to sort and clean data
  function sortAndUpdateApiData(sortFunction) {
    const sortedData = [...apiData] // Create a new copy to avoid mutating the state
      .filter((api) => api && api.name && api.team !== undefined) // Filter out invalid objects
      .sort(sortFunction)
    setApiData(sortedData)
  }
  return (
    <>
      <StyledHeading>API List</StyledHeading>
      <StyledButtons>
        <StyledButton onClick={() => sortAndUpdateApiData((a, b) => a.team - b.team)}>
          Sort by Team
        </StyledButton>
        <StyledButton onClick={() => sortAndUpdateApiData((a, b) => a.name.localeCompare(b.name))}>
          Sort by Name
        </StyledButton>
      </StyledButtons>
      <StyledCards>
        {console.log('lige før map:', apiData)}
        {apiData.map((api, index) => {
          return (
            <StyledCard
              key={index}
              name={api.name}
              team={api.team}
              url={api.url}
              image={api.image}
            />
          )
        })}
      </StyledCards>
    </>
  )
}

export default ApiList
