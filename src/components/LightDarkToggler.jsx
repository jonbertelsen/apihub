import styled from 'styled-components'

const StyledImg = styled.img`
  width: 25px;
  cursor: pointer;
  margin-right: 1rem;
  vertical-align: middle;
`

function LightDarkToggler({ theme, toggleTheme }) {
  return (
    <>
      <StyledImg
        onClick={toggleTheme}
        src='/dark_light.svg'
        alt={theme === 'light' ? 'Dark' : 'Light'}
      />
    </>
  )
}

export default LightDarkToggler
