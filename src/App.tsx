import { useState, useEffect } from 'react'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import _default from './styles/themes/default'

import {
  InitialBanner,
  Sobre,
  BannerPromocional,
  PedirUmaMusica,
  KarineOuriques,
  FervendoNaPG,
  Depoimentos,
  Parceiros,
  Footer,
  Alert,
  Player,
  Loader
} from './components'

export const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])

  return (
    <ThemeProvider theme={_default}>
      <GlobalStyle />

      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <Alert /> */}
          <InitialBanner />
          <Sobre />
          <BannerPromocional />
          {/* <PedirUmaMusica /> */}
          <KarineOuriques />
          <FervendoNaPG />
          {/* <Depoimentos /> */}
          <Parceiros />
          <Footer />
        </>
      )}
    </ThemeProvider>
  )
}
