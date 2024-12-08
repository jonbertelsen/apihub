import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import GlobalStyle from '../styles/GlobalStyle'
import LightDarkToggler from '../components/LightDarkToggler'
import styled from 'styled-components'
import TopMenu from '../components/TopMenu'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100svh;
  max-width: 968px; /* Maximum width */
  width: 100%; /* Allows it to shrink below 968px if needed */
`

const StyledHeader = styled.header`
  display: grid;
  row-gap: 20px;
  grid-template-areas:
    'banner banner'
    'menu toggler';
  grid-template-rows: auto auto; /* First row for the banner, second for the menu and toggler */
  grid-template-columns: 4fr 1fr; /* Two equal columns for the second row */
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
`

const StyledImgBanner = styled.img`
  grid-area: banner; /* Assign the image to the "banner" area */
  width: 100%; /* Fill the full width of the grid */
  height: auto; /* Maintain aspect ratio */
`

const StyledTopMenu = styled.div`
  grid-area: menu; /* Assign to the "menu" area */
  justify-self: start; /* Align content to the left */
`

const StyledToggler = styled.div`
  grid-area: toggler; /* Assign to the "toggler" area */
  justify-self: end; /* Align content to the right */
`

function MainLayout() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  const currentTheme = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Container>
        <StyledHeader>
          <StyledImgBanner src='/api_hub_logo_banner.png' alt='API Hub' />
          <StyledTopMenu>
            <TopMenu />
          </StyledTopMenu>
          <StyledToggler>
            <LightDarkToggler theme={theme} toggleTheme={toggleTheme} />
          </StyledToggler>
        </StyledHeader>
        <main>
          <Outlet />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default MainLayout
