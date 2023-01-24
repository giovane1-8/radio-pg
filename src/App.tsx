import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.routes'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import _default from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={_default}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
