import {
  Container,
  Details,
  Links,
  Ul,
  DivIcon,
  Icon,
  Title,
  SubTitle,
  Code,
  Extra,
  Language,
  P
} from './style'

import qrCode from '../../utils/images/footer-qrcode.png'
import instagram from '../../utils/icons/instagram-green.svg'
import facebook from '../../utils/icons/facebook-green.svg'
import heart from '../../utils/icons/heart.svg'

export const Footer = () => {
  return (
    <Container>
      <Details>
        <Links>
          {/* <Ul>
            <li>Quem somos</li>
            <li>Perguntas frequentes</li>
            <li>Contato</li>
          </Ul> */}

          <DivIcon>
            <Icon src={facebook} />
            <Icon src={instagram} />
            <Icon src={heart} />
          </DivIcon>
        </Links>

        <div>
          <Title>Parceiros</Title> 
          <SubTitle>Versus Imobiliária</SubTitle>
          <SubTitle>Karine Ouriques</SubTitle>
          <SubTitle>LinkerWeb</SubTitle>
        </div>

        <Code src={qrCode} alt="qr code" />
      </Details>

      <Extra>
        <Language>Português</Language>
        <P>Radio PG - Todos os direitos reservados</P>
      </Extra>
    </Container>
  )
}
