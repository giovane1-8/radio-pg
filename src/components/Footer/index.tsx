import * as Atom from './style'

import qrCode from '../../utils/images/footer-qrcode.png'
import instagram from '../../utils/icons/instagram-green.svg'
import facebook from '../../utils/icons/facebook-green.svg'
import heart from '../../utils/icons/heart.svg'

export default function Footer() {
  return (
    <Atom.Container>
      <Atom.Details>
        <Atom.Links>
          {/* <Ul>
            <li>Quem somos</li>
            <li>Perguntas frequentes</li>
            <li>Contato</li>
          </Ul> */}

          <Atom.DivIcon>
            <Atom.Icon src={facebook} />
            <Atom.Icon src={instagram} />
            <Atom.Icon src={heart} />
          </Atom.DivIcon>
        </Atom.Links>

        <div>
          <Atom.Title>Parceiros</Atom.Title>
          <Atom.SubTitle>Versus Imobiliária</Atom.SubTitle>
          <Atom.SubTitle>Karine Ouriques</Atom.SubTitle>
          <Atom.SubTitle>LinkerWeb</Atom.SubTitle>
        </div>

        <Atom.Code src={qrCode} alt="qr code" />
      </Atom.Details>

      <Atom.Extra>
        <Atom.Language>Português</Atom.Language>
        <Atom.P>Radio PG - Todos os direitos reservados</Atom.P>
      </Atom.Extra>
    </Atom.Container>
  )
}
