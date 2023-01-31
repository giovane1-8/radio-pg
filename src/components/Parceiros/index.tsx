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

export const Parceiros = () => {
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
        <SwiperSlide className='item'>
          <Image src={linkerwebLogo} />
          <Content>
            <ContentTitle>LinkerWeb</ContentTitle>
            <SubTitle>Hospedagem segura com quem sabe o que faz.</SubTitle>
            <Text>Hospedagem segura de alto desempenho para o seu site. Não perca mais clientes, garanta já a melhor velocidade para sua hospedagem.</Text>

            <Footer>
              <Link target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flinkerweb.com.br%2F#'><SocialMedia src={facebook} /></Link>
              <Link target='_blank' href='https://linkerweb.com.br/#'><SocialMedia src={internet} /></Link>
            </Footer>
          </Content>
        </SwiperSlide>

        <SwiperSlide className='item'>
          <Image src={versusLogo} />
          <Content>
            <ContentTitle>Versus Imobiliária</ContentTitle>
            <SubTitle>O melhor atendimento da Praia Grande </SubTitle>
            <Text>Tanto na compra quanto na venda estaremos a sua disposição</Text>

            <Footer>
              <Link target='_blank' href='https://www.instagram.com/versusimobiliaria/'><SocialMedia src={instagram} /></Link>
              <Link target='_blank' href='https://www.facebook.com/profile.php?id=100086509107010'><SocialMedia src={facebook} /></Link>
              <Link target='_blank' href='https://www.youtube.com/@versusimobiliaria3366
'><SocialMedia src={youtube} /></Link>
              <Link target='_blank' href='https://www.versusimobiliaria.com.br'><SocialMedia src={internet} /></Link>
            </Footer>
          </Content>
        </SwiperSlide>

        <SwiperSlide className='item'>
          <Image src={karineouriquesLogo} />
          <Content>
            <ContentTitle>Karine Ouriques</ContentTitle>
            <SubTitle>Este não é só um canal, nos tornamos uma família que busca a evolução espiritual.</SubTitle>
            <Text>Nosso melhoramento enquanto seres humanos e espíritos. Não temos respostas prontas pois acreditamos que o futuro é um infinito de possibilidades, onde as cartas (leitura das ondas que se está emitindo) não mostram seu futuro, mas apenas, um dos caminhos para o qual se está olhando e atraindo para a sua própria vida.</Text>

            <Footer>
              <Link target='_blank' href='https://www.youtube.com/@KarineOuriques_oficial'><SocialMedia src={instagram} /></Link>
              <Link target='_blank' href='https://www.instagram.com/karineouriques_oficial/'><SocialMedia src={youtube} /></Link>
            </Footer>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}
