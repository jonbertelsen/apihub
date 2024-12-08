import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
  width: 100%; /* Inherit the width of the body */
  height: 100%; /* Fill the entire body */
  display: contents; /* Allows its children to behave as if #root isn't there */
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.5;
}

 body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: all 0.25s linear;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
  }
  
  main {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 2rem 1rem;
    width: 100%;
    max-width: 968px;
    height: 70svh
    
  }

  header {
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.text};
    line-height: 1.5rem;
  }

  footer {
    background-color: ${({ theme }) => theme.footer};
    color: ${({ theme }) => theme.text};
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.toggleBorder};
    width: 100%;

  }
    `

export default GlobalStyle;