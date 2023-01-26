import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import _default from './styles/themes/default'

import { InitialBanner } from './components/InitialBanner'
import { Sobre } from './components/Sobre'
import { BannerPromocional } from './components/BannerPromocional'
import { PedirUmaMusica } from './components/PedirUmaMusica'
import { FervendoNaPG } from './components/FervendoNaPG'
import { Depoimentos } from './components/Depoimentos'
import { Parceiros } from './components/Parceiros'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <ThemeProvider theme={_default}>
      <GlobalStyle />
      <InitialBanner />
      <Sobre />
      <BannerPromocional />
      <PedirUmaMusica />
      <FervendoNaPG />
      <Depoimentos />
      <Parceiros />
      <Footer />
    </ThemeProvider>
  )
}
