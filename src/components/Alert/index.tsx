import { useRef, useState } from 'react'

import * as Atom from './style'

import close from '../../utils/icons/plus.svg'
import sol from '../../utils/icons/sol.svg'

export default function Alert() {
  const alert: any = useRef();
  const [closed, setClosed] = useState<Boolean>(false)

  const closeAlert = () => {
    setClosed(true)
  }

  return (
    <Atom.Background ref={alert} style={{ display: closed === true ? 'none' : '' }}>
      <Atom.Container>
        <Atom.IconContainer onClick={closeAlert}>
          <Atom.Icon src={close} />
        </Atom.IconContainer>

        <Atom.TitleContainer>
          <Atom.Icon src={sol} />
          <Atom.Title>Avisos importantes</Atom.Title>
        </Atom.TitleContainer>

        <Atom.Text>
          A Rádio PG atua sem fins lucrativos e tem como objetivo principal ajudar o próximo, fazendo a nossa parte no combate à fome. No entanto, divulgamos nossos parceiros que nos cedem brindes para sorteios, plataforma de hospedagem, entre outros. Nossos parceiros são fundamentais para que possamos manter nossas atividades e continuar ajudando as pessoas.
        </Atom.Text>

        <Atom.Text>
          As entrevistas e participações ao vivo que realizamos têm como finalidade levar conhecimento, estudo e entretenimento sem nenhum tipo de cobrança financeira de ambas as partes. Nós queremos oferecer conteúdos de qualidade e relevantes para nossos ouvintes, sempre sem fins lucrativos.
        </Atom.Text>

        <Atom.Text>
          Atualmente estamos cadastrando ONGs para parceria, pois acreditamos que juntos podemos fazer a diferença na vida de muitas pessoas. Se você tem uma ONG ou conhece alguma que possa se beneficiar desse tipo de parceria, entre em contato conosco. Juntos, podemos fazer a nossa parte e ajudar a mudar o mundo.
        </Atom.Text>

        {/* <Footer>
          <Date>Estreia <GlowText>18/02/2023</GlowText></Date>
          <h2>10hs da manhã</h2>
        </Footer> */}
      </Atom.Container>
    </Atom.Background>
  )
}
