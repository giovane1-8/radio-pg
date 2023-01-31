import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import {
  Container,
  Title,
  Icon,
  Image,
  Content,
  ContentTitle,
  SubTitle,
  Text,
  Footer,
  Link,
  SocialMedia
} from './style'
import './swiper.css'

import versusLogo from '../../utils/images/versus-logo.png'
import linkerwebLogo from '../../utils/images/linkerweb-logo.png'
import karineouriquesLogo from '../../utils/images/karineouriques-logo.png'

import success from '../../utils/icons/success.svg'
import youtube from '../../utils/icons/youtube.svg'
import twitter from '../../utils/icons/twitter.svg'
import linkedin from '../../utils/icons/linkedIn.svg'
import internet from '../../utils/icons/internet.svg'
import instagram from '../../utils/icons/instagram.svg'
import facebook from '../../utils/icons/facebook.svg'
import { useEffect, useState } from 'react';

type SwipeContentProps = {
  title: string,
  subTitle: string,
  text: string,
  image: string,
  medias: string[]
}

type SocialMedias = {
  icon: string;
}

export const Parceiros = () => {
  const data: SwipeContentProps[] = [
    {
      title: 'LinkerWeb',
      subTitle: 'Hospedagem segura com quem sabe o que faz.',
      text: 'Hospedagem segura de alto desempenho para o seu site. Não perca mais clientes, garanta já a melhor velocidade para sua hospedagem.',
      image: linkerwebLogo,
      medias: [instagram, facebook, internet]
    },
    {
      title: 'Versus Imobiliária',
      subTitle: 'O melhor atendimento da Praia Grande',
      text: 'Tanto na compra quanto na venda estaremos a sua disposição',
      image: versusLogo,
      medias: [instagram, facebook, youtube, linkedin]
    },
    {
      title: 'Karine Ouriques',
      subTitle: 'Este não é só um canal, nos tornamos uma família que busca a evolução espiritual.',
      text: 'Nosso melhoramento enquanto seres humanos e espíritos. Não temos respostas prontas pois acreditamos que o futuro é um infinito de possibilidades, onde as cartas (leitura das ondas que se está emitindo) não mostram seu futuro, mas apenas, um dos caminhos para o qual se está olhando e atraindo para a sua própria vida.',
      image: karineouriquesLogo,
      medias: [instagram, facebook, youtube]
    },
  ]

  return (
    <Container>
      <Title><Icon src={success} />Nossos apoiadores</Title>

      <Swiper
        className='swiper'
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 2500, pauseOnMouseEnter: false }}
        effect="fade"
        navigation
      >

        {data.map((parceiro, index) => {
          return (
            <SwiperSlide className='item' key={index}>
              <Image src={parceiro.image} />
              <Content>
                <ContentTitle>{parceiro.title}</ContentTitle>
                <SubTitle>{parceiro.subTitle}</SubTitle>
                <Text>{parceiro.text}</Text>

                <Footer>
                  <Link href=''><SocialMedia src={instagram} /></Link>
                  <Link href=''><SocialMedia src={facebook} /></Link>
                  <Link href=''><SocialMedia src={youtube} /></Link>
                  <Link href=''><SocialMedia src={linkedin} /></Link>
                </Footer>
              </Content>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Container>
  )
}
