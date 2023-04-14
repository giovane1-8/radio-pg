import { useState } from 'react'
import { Link } from 'react-scroll'

import * as Atom from './style'
import './navigation.css'

import logoFundoBranco from '../../utils/images/logoFundoBranco.png'
import broadcast from '../../utils/icons/broadcast.svg'
import communication from '../../utils/icons/communication.svg'
import pause from '../../utils/icons/pause.svg'
import playOne from '../../utils/icons/play-one.svg'
import backgroundVideo from '../../utils/videos/banner-background.mp4'
import { Player } from '../Player'

export default function InitialBanner() {
  const [inLive, IsInLive] = useState<boolean>(true)

  return (
    <Atom.Banner>
      <Atom.Container>
        <Atom.Header>
          <Atom.Image src={logoFundoBranco} alt="Logo Fundo Branco" />
          <Atom.NavigationWrapper>
            <Link to="about" smooth={true} duration={100} className='itemNavigation'>Sobre nós</Link>
            <Link to="donations" smooth={true} duration={100} className='itemNavigation'>Doações</Link>
            <Link to="requestmusic" smooth={true} duration={100} className='itemNavigation'>Pedir uma música</Link>
            <Link to="news" smooth={true} duration={100} className='itemNavigation'>Notícias</Link>
            <Link to="partners" smooth={true} duration={100} className='itemNavigation glow'>Apoiadores</Link>
          </Atom.NavigationWrapper>
        </Atom.Header>

        <Atom.Footer>
          {inLive === true ? (
            <Atom.ButtonGlow><img src={broadcast} />AO VIVO</Atom.ButtonGlow>
          ) : (
            <Atom.ButtonGlow style={{ color: "#7C7A7F" }}><img src={broadcast} />OFFLINE</Atom.ButtonGlow>
          )}

          <iframe src="https://app.kshost.com.br/player-barra4/8888" frameBorder="0" width="50%" height="200" scrolling='no'></iframe>
        </Atom.Footer>

        <Atom.BackgroundVideo id="background-video" src={backgroundVideo} loop muted autoPlay>
          {/* <source src={backgroundVideo} type="video/mp4" /> */}
        </Atom.BackgroundVideo>
      </Atom.Container>
    </Atom.Banner>
  )
}
