import {
  Container,
  Image,
  ContentContainer,
  TitleContainer,
  QRCode,
  Title,
  LightTitle,
  Content,
} from './style'

import imgDestaque from '../../utils/images/destaque-promocional.png'
import qrCode from '../../utils/images/destaque-promocional-qrcode.png'

export const BannerPromocional = () => {
  return (
    <Container>
      <Image src={imgDestaque} />
      <ContentContainer>
        <TitleContainer>
          <QRCode src={qrCode} />
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
  )
}
