import {
  Container,
  SecondContainer,
  Image,
  Image2,
  ContentContainer,
  TitleContainer,
  Logo,
  Title,
  LightTitle,
  Content,
  DonateButton
} from './style'
import './text.css'

import imgDestaque from '../../utils/images/destaque-promocional.png'
import imgDestaqueSecundaria from '../../utils/images/destaque-promocional-secundario.png'
import ccafLogo from '../../utils/images/ccaf-logo.png'

export const BannerPromocional = () => {
  return (
    <>
      <Container id='donations'>
        <Image src={imgDestaque} />
        <ContentContainer>
          <TitleContainer>
            <Title>
              <LightTitle>Faça uma</LightTitle>
              <h1>doação, ajude</h1>
              <h1 style={{ color: '#000' }}>ao próximo!</h1>
            </Title>
          </TitleContainer>

          <Content>
            A Rádio PG tem o prazer de anunciar uma parceria com a ONG CCAF - Centro Cristão de Apoio à Família. Através dessa parceria, temos como objetivo ajudar as famílias em situação de vulnerabilidade, proporcionando-lhes alimentação, vestuário, atividades recreativas e educação.
          </Content>

          <Content>
            Nós convidamos nossos ouvintes a ajudar no que for possível, doando alimentos não perecíveis, cobertores e participando dos bazares comunitários. A sua ajuda, por menor que seja, pode fazer toda a diferença na vida dessas pessoas.
          </Content>
        </ContentContainer>
      </Container>

      <SecondContainer style={{ margin: 0 }}>
        <Image2 src={imgDestaqueSecundaria} />
        <ContentContainer>
          <TitleContainer>
            <Logo src={ccafLogo} />
          </TitleContainer>

          <Content>
            Somos uma organização humanitária preserva os princípios e valores morais e éticos, promovendo a emancipação social por meio de programas, projetos e atividades que contribuem para a convivência e fortalecimento de vínculos, formação, participação, cidadania, desenvolvimento do protagonismo e da autonomia de pessoas em situação de risco pessoal e social. Por meio de atendimento direto com ações protetivas e inclusivas destinadas aos assistidos, ampliamos seu universo cultural e social.
          </Content>

          <Content>
            Nossa busca é alcançar o inicio e fim de um ciclo social, atuando com crianças e famílias em situação de risco e pessoas em situação de rua, no decorrer dos anos nossos projetos se ampliaram para hospitais, com a arte do palhaço e apoio a trabalhos no sertão nordestino e indígenas e ribeirinhos no estado do Amazonas.
          </Content>

          <Content className='text'>
            *direito de imagem cedido e reservado pela ONG CCAF
          </Content>

          <DonateButton target="_blank" href='#!'>Doar</DonateButton>
        </ContentContainer>
      </SecondContainer>
    </>
  )
}
