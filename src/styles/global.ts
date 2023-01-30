import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  // scroll bar (*TODO: Need a new style*)
  ::-webkit-scrollbar {
        width: 1rem;
    }
  ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.primary};
      border-radius: 25px;
  }

  // default configurations
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    outline: none;

    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;

    // cellphone query
    @media(max-width: 1900px) {
      font-size: 55%;
    }
  }
  
  body {
    background-color: ${props => props.theme.colors.white};
  }
`