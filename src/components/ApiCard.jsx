import styled from 'styled-components'
import { Link } from 'react-router'

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  width: 300px;
`

const StyledName = styled.h2`
  font-size: 1.5rem;
`
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.buttonBackground};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
`

function ApiCard({ name, url, image }) {
  return (
    <StyledCard>
      <StyledImage src={image} alt={name} />
      <StyledName>{name}</StyledName>
      <StyledLink to={url}>{name}</StyledLink>
    </StyledCard>
  )
}

export default ApiCard
