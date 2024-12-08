import apis from '../util/apis'
import { Link } from 'react-router'
import StyledCard from './ApiCard'
import styled from 'styled-components'

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

function ApiList() {
  return (
    <>
      <StyledHeading>API List</StyledHeading>
      <StyledCards>
        {apis.map((api, index) => {
          return <StyledCard key={index} name={api.name} url={api.url} image={api.image} />
        })}
      </StyledCards>
    </>
  )
}

export default ApiList
