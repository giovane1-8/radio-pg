import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import _default from './styles/themes/default'

import { InitialBanner } from './components/InitialBanner'
import { Sobre } from './components/Sobre'

export const App = () => {
  return (
    <ThemeProvider theme={_default}>
      <GlobalStyle />
      <InitialBanner />
      <Sobre />
    </ThemeProvider>
  )
}
