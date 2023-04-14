import * as Atom from './style'
import './text.css'

import imgDestaque from '../../utils/images/destaque-promocional.png'
import imgDestaqueSecundaria from '../../utils/images/destaque-promocional-secundario.png'
import ccafLogo from '../../utils/images/ccaf-logo.png'

export default function BannerPromocional() {
  return (
    <>
      <Atom.Container id='donations'>
        <Atom.Image src={imgDestaque} />
        <Atom.ContentContainer>
          <Atom.TitleContainer>
            <Atom.Title>
              <Atom.LightTitle>Faça uma</Atom.LightTitle>
              <h1>doação, ajude</h1>
              <h1 style={{ color: '#000' }}>ao próximo!</h1>
            </Atom.Title>
          </Atom.TitleContainer>

          <Atom.Content>
            A Rádio PG tem o prazer de anunciar uma parceria com a ONG CCAF - Centro Cristão de Apoio à Família. Através dessa parceria, temos como objetivo ajudar as famílias em situação de vulnerabilidade, proporcionando-lhes alimentação, vestuário, atividades recreativas e educação.
          </Atom.Content>

          <Atom.Content>
            Nós convidamos nossos ouvintes a ajudar no que for possível, doando alimentos não perecíveis, cobertores e participando dos bazares comunitários. A sua ajuda, por menor que seja, pode fazer toda a diferença na vida dessas pessoas.
          </Atom.Content>
        </Atom.ContentContainer>
      </Atom.Container>

      <Atom.SecondContainer style={{ margin: 0 }}>
        <Atom.Image2 src={imgDestaqueSecundaria} />
        <Atom.ContentContainer>
          <Atom.TitleContainer>
            <Atom.Logo src={ccafLogo} />
          </Atom.TitleContainer>

          <Atom.Content>
            Somos uma organização humanitária preserva os princípios e valores morais e éticos, promovendo a emancipação social por meio de programas, projetos e atividades que contribuem para a convivência e fortalecimento de vínculos, formação, participação, cidadania, desenvolvimento do protagonismo e da autonomia de pessoas em situação de risco pessoal e social. Por meio de atendimento direto com ações protetivas e inclusivas destinadas aos assistidos, ampliamos seu universo cultural e social.
          </Atom.Content>

          <Atom.Content>
            Nossa busca é alcançar o inicio e fim de um ciclo social, atuando com crianças e famílias em situação de risco e pessoas em situação de rua, no decorrer dos anos nossos projetos se ampliaram para hospitais, com a arte do palhaço e apoio a trabalhos no sertão nordestino e indígenas e ribeirinhos no estado do Amazonas.
          </Atom.Content>

          <Atom.Content className='text'>
            *direito de imagem cedido e reservado pela ONG CCAF
          </Atom.Content>

          <Atom.DonateButton target="_blank" href='#!'>Doar</Atom.DonateButton>
        </Atom.ContentContainer>
      </Atom.SecondContainer>
    </>
  )
}
