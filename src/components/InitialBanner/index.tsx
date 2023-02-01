import { useState } from 'react'
import { Link } from 'react-scroll'

import {
  Banner,
  Container,
  BackgroundVideo,
  Header,
  Image,
  NavigationWrapper,
  Footer,
  Button,
  ButtonGlow,
} from './style'
import './navigation.css'

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
            <Link to="about" smooth={true} duration={100} className='itemNavigation'>Sobre nós</Link>
            <Link to="donations" smooth={true} duration={100} className='itemNavigation'>Doações</Link>
            <Link to="requestmusic" smooth={true} duration={100} className='itemNavigation'>Pedir uma música</Link>
            <Link to="news" smooth={true} duration={100} className='itemNavigation'>Notícias</Link>
            <Link to="partners" smooth={true} duration={100} className='itemNavigation glow'>Apoiadores</Link>
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
