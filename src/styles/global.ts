import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  // scroll bar (*TODO: Need a new style*)
  ::-webkit-scrollbar {
        width: 0.5rem;
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

  }
  
  body {
    background-color: ${props => props.theme.colors.white};
  }
`