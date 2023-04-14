import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

import * as Atom from './style'
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

export default function Parceiros() {
  return (
    <Atom.Container id='partners'>
      <Atom.Title><Atom.Icon src={success} />Nossos apoiadores</Atom.Title>

      <Swiper
        className='swiper'
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        autoplay={{ delay: 2500, pauseOnMouseEnter: false }}
        effect="fade"
        navigation
      >
        <SwiperSlide className='item'>
          <Atom.Image src={linkerwebLogo} />
          <Atom.Content>
            <Atom.ContentTitle>LinkerWeb</Atom.ContentTitle>
            <Atom.SubTitle>Hospedagem segura com quem sabe o que faz.</Atom.SubTitle>
            <Atom.Text>Hospedagem segura de alto desempenho para o seu site. Não perca mais clientes, garanta já a melhor velocidade para sua hospedagem.</Atom.Text>

            <Atom.Footer>
              <Atom.Link target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flinkerweb.com.br%2F#'>
                <Atom.SocialMedia src={facebook} />
              </Atom.Link>
              <Atom.Link target='_blank' href='https://linkerweb.com.br/#'>
                <Atom.SocialMedia src={internet} />
              </Atom.Link>
            </Atom.Footer>
          </Atom.Content>
        </SwiperSlide>

        <SwiperSlide className='item'>
          <Atom.Image src={versusLogo} />
          <Atom.Content>
            <Atom.ContentTitle>Versus Imobiliária</Atom.ContentTitle>
            <Atom.SubTitle>O melhor atendimento da Praia Grande </Atom.SubTitle>
            <Atom.Text>Tanto na compra quanto na venda estaremos a sua disposição</Atom.Text>

            <Atom.Footer>
              <Atom.Link target='_blank' href='https://www.instagram.com/versusimobiliaria/'>
                <Atom.SocialMedia src={instagram} />
              </Atom.Link>
              <Atom.Link target='_blank' href='https://www.facebook.com/profile.php?id=100086509107010'>
                <Atom.SocialMedia src={facebook} />
              </Atom.Link>
              <Atom.Link target='_blank' href='https://www.youtube.com/@versusimobiliaria3366'>
                <Atom.SocialMedia src={youtube} />
              </Atom.Link>
              <Atom.Link target='_blank' href='https://www.versusimobiliaria.com.br'>
                <Atom.SocialMedia src={internet} />
              </Atom.Link>
            </Atom.Footer>
          </Atom.Content>
        </SwiperSlide>

        <SwiperSlide className='item'>
          <Atom.Image src={karineouriquesLogo} />
          <Atom.Content>
            <Atom.ContentTitle>Karine Ouriques</Atom.ContentTitle>
            <Atom.SubTitle>Este não é só um canal, nos tornamos uma família que busca a evolução espiritual.</Atom.SubTitle>
            <Atom.Text>Nosso melhoramento enquanto seres humanos e espíritos. Não temos respostas prontas pois acreditamos que o futuro é um infinito de possibilidades, onde as cartas (leitura das ondas que se está emitindo) não mostram seu futuro, mas apenas, um dos caminhos para o qual se está olhando e atraindo para a sua própria vida.</Atom.Text>

            <Atom.Footer>
              <Atom.Link target='_blank' href='https://www.youtube.com/@KarineOuriques_oficial'>
                <Atom.SocialMedia src={instagram} />
              </Atom.Link>
              <Atom.Link target='_blank' href='https://www.instagram.com/karineouriques_oficial/'>
                <Atom.SocialMedia src={youtube} />
              </Atom.Link>
            </Atom.Footer>
          </Atom.Content>
        </SwiperSlide>
      </Swiper>
    </Atom.Container>
  )
}
