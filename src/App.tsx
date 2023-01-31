import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import _default from './styles/themes/default'

import { InitialBanner } from './components/InitialBanner'
import { Sobre } from './components/Sobre'
import { BannerPromocional } from './components/BannerPromocional'
import { PedirUmaMusica } from './components/PedirUmaMusica'
import { KarineOuriques } from './components/KarineOuriques'
import { FervendoNaPG } from './components/FervendoNaPG'
import { Depoimentos } from './components/Depoimentos'
import { Parceiros } from './components/Parceiros'
import { Footer } from './components/Footer'
import { Alert } from './components/Alert'

export const App = () => {
  // alert('Site em desenvolvimento!')

  return (
    <ThemeProvider theme={_default}>
      <GlobalStyle />
      {/* <Alert /> */}
      <InitialBanner />
      <Sobre id='about' />
      <BannerPromocional />
      {/* <PedirUmaMusica /> */}
      <KarineOuriques />
      <FervendoNaPG />
      {/* <Depoimentos /> */}
      <Parceiros />
      <Footer />
    </ThemeProvider>
  )
}
