import { 
  Banner,
  Header,
  Image,
  NavigationWrapper,
  ListItem,
  ListItemGlow,
  Footer,
  Button,
  ButtonGlow
} from './style'

import logoFundoBranco from '../../utils/images/logoFundoBranco.png'
import broadcast from '../../utils/icons/broadcast.svg'
import communication from '../../utils/icons/communication.svg'
import pause from '../../utils/icons/pause.svg'
import playOne from '../../utils/icons/play-one.svg'

export const InitialBanner = () => {
  return (
    <Banner>
      <Header>
        <Image src={logoFundoBranco} alt="Logo Fundo Branco" />
        <NavigationWrapper>
          <ListItem href='#!'>Sobre nós</ListItem>
          <ListItem href='#!'>As Melhores</ListItem>
          <ListItem href='#!'>Pedir uma música</ListItem>
          <ListItem href='#!'>Hall dos premiados</ListItem>
          <ListItemGlow href='#!'>Parceiros</ListItemGlow>
        </NavigationWrapper>
      </Header>

      <Footer>
        <ButtonGlow><img src={broadcast} /> AO VIVO</ButtonGlow>
        <Button><img src={playOne} /></Button>
        <Button><img src={pause} /></Button>
        <Button><img src={communication} /></Button>
      </Footer>
    </Banner>
  )
}
