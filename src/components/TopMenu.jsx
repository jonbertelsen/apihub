import styled from 'styled-components'
import { NavLink, Link } from 'react-router'

const StyledMenuItems = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 1rem;
  list-style-type: none;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

const Item = styled.li`
  color: ${({ theme }) => theme.text};
`

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.buttonText};
  background-color: ${({ theme }) => theme.buttonBackground};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    color: red; /* Makes text red on hover */
  }

  &.active {
    color: ${({ theme }) => theme.hover};
  }
`

function TopMenu() {
  return (
    <>
      <StyledMenuItems>
        <li>
          <StyledNavLink to='/'>Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='https://dat3cph.github.io/material/frontend/react-4/exercises/friday'>
            SP-3 API
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='https://dat3cph.github.io/material/projects/sp-3-frontend-hub/'>
            SP-3 Frontend
          </StyledNavLink>
        </li>
      </StyledMenuItems>
    </>
  )
}

export default TopMenu
