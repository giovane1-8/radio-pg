import { 
  Banner,
  Header,
  Image,
  NavigationWrapper,
  Footer,
} from './style'

import logoFundoBranco from '../../utils/images/logoFundoBranco.png'

export const InitialBanner = () => {
  return (
    <Banner>
      <Header>
        <Image src={logoFundoBranco} alt="Logo Fundo Branco" />
        <NavigationWrapper>
          <ul>
            <li>Sobre nós</li>
            <li>As Melhores</li>
            <li>Pedir uma música</li>
            <li>Hall dos premiados</li>
            <li>Parceiros</li>
          </ul>
        </NavigationWrapper>
      </Header>

      <Footer>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </Footer>
    </Banner>
  )
}
