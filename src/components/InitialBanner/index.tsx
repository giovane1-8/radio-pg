import { useState } from 'react'

import {
  Banner,
  Container,
  BackgroundVideo,
  Header,
  Image,
  NavigationWrapper,
  ListItem,
  ListItemGlow,
  Footer,
  Button,
  ButtonGlow,
} from './style'

import logoFundoBranco from '../../utils/images/logoFundoBranco.png'
import broadcast from '../../utils/icons/broadcast.svg'
import communication from '../../utils/icons/communication.svg'
import pause from '../../utils/icons/pause.svg'
import playOne from '../../utils/icons/play-one.svg'
import backgroundVideo from '../../utils/videos/banner-background.mp4'

export const InitialBanner = () => {
  const [inLive, IsInLive] = useState<boolean>(false)

  return (
    <Banner>
      <Container>
        <Header>
          <Image src={logoFundoBranco} alt="Logo Fundo Branco" />
          <NavigationWrapper>
            <ListItem href='#!'>Sobre nós</ListItem>
            <ListItem href='#!'>Doações</ListItem>
            <ListItem href='#!'>As melhores</ListItem>
            <ListItem href='#!'>Pedir uma música</ListItem>
            <ListItem href='#!'>Notícias</ListItem>
            <ListItemGlow href='#!'>Parceiros</ListItemGlow>
          </NavigationWrapper>
        </Header>

        <Footer>
          {inLive === true ? (
            <ButtonGlow><img src={broadcast} />AO VIVO</ButtonGlow>
          ) : (
            <ButtonGlow style={{ color: "#7C7A7F" }}><img src={broadcast} />OFFLINE</ButtonGlow>
          )}
          <Button><img src={playOne} /></Button>
          <Button><img src={pause} /></Button>
          <Button><img src={communication} /></Button>
        </Footer>

        <BackgroundVideo id="background-video" src={backgroundVideo} loop muted autoPlay>
          {/* <source src={backgroundVideo} type="video/mp4" /> */}
        </BackgroundVideo>
      </Container>
    </Banner>
  )
}
