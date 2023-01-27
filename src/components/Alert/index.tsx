import { useRef, useState } from 'react'

import {
  Background,
  Container,
  TitleContainer,
  IconContainer,
  Icon,
  Title,
  Text,
  Footer,
  Date,
  GlowText,
} from './style'

import close from '../../utils/icons/plus.svg'
import sol from '../../utils/icons/sol.svg'

export const Alert = () => {
  const alert: any = useRef();
  const [closed, setClosed] = useState<Boolean>(false)

  const closeAlert = () => {
    setClosed(true)
  }

  return (
    <Background ref={alert} style={{ display: closed === true ? 'none' : '' }}>
      <Container>
        <IconContainer onClick={closeAlert}>
          <Icon src={close} />
        </IconContainer>

        <TitleContainer>
          <Icon src={sol} />
          <Title>Avisos importantes</Title>
        </TitleContainer>

        <Text>
          A Rádio PG atua sem fins lucrativos e tem como objetivo principal ajudar o próximo, fazendo a nossa parte no combate à fome. No entanto, divulgamos nossos parceiros que nos cedem brindes para sorteios, plataforma de hospedagem, entre outros. Nossos parceiros são fundamentais para que possamos manter nossas atividades e continuar ajudando as pessoas.
        </Text>

        <Text>
          As entrevistas e participações ao vivo que realizamos têm como finalidade levar conhecimento, estudo e entretenimento sem nenhum tipo de cobrança financeira de ambas as partes. Nós queremos oferecer conteúdos de qualidade e relevantes para nossos ouvintes, sempre sem fins lucrativos.
        </Text>

        <Text>
          Atualmente estamos cadastrando ONGs para parceria, pois acreditamos que juntos podemos fazer a diferença na vida de muitas pessoas. Se você tem uma ONG ou conhece alguma que possa se beneficiar desse tipo de parceria, entre em contato conosco. Juntos, podemos fazer a nossa parte e ajudar a mudar o mundo.
        </Text>

        <Footer>
          <Date>Estreia <GlowText>18/02/2023</GlowText></Date>
          <h2>10hs da manhã</h2>
        </Footer>
      </Container>
    </Background>
  )
}
