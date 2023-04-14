import * as Atom from './style'

import gridLeftImage from '../../utils/images/grid-left-image.png'
import gridRightImage from '../../utils/images/grid-right-image.png'
import gridMobileImage from '../../utils/images/grid-mobile.png'

import radio from '../../utils/icons/radio.svg'
import star from '../../utils/icons/star.svg'

export default function Sobre() {
  return (
    <Atom.Container id='about'>
      <Atom.Flex>
        <Atom.LeftImage src={gridLeftImage} />
        <Atom.RightContentContainer>
          <Atom.Title><Atom.Icon src={radio} style={{ marginRight: 10 }} />Uma nova concepção de rádio web</Atom.Title>
          <Atom.Text>
            A Rádio PG é uma nova concepção de rádio web que se baseia nas possibilidades que a internet oferece. Oferecemos  aos nossos ouvintes uma ampla variedade de entretenimento, informações e programações selecionadas. Estamos sempre buscando trazer conteúdos novos e interessantes para nossos ouvintes, e para isso, realizamos entrevistas com temas selecionados, levando conhecimento e ensinamentos.
          </Atom.Text>
          <Atom.Text>
            Nossa rádio pode ser ouvida através de áudio digital utilizando seu notebook, computador, smart tv, aplicativo e até mesmo o Echo Dot. Com a Rádio PG, você tem acesso a conteúdos de qualidade em qualquer lugar e a qualquer hora. Não perca mais tempo e sintonize-se conosco agora!
          </Atom.Text>
        </Atom.RightContentContainer>
      </Atom.Flex>

      <Atom.Flex>
        <Atom.LeftContentContainer>
          <Atom.RightTitle>Por quê escutar a Rádio PG?<Atom.Icon src={star} style={{ marginLeft: 10 }} /></Atom.RightTitle>
          <Atom.Text>
            A Rádio PG é mais do que uma simples rádio web, somos uma equipe apaixonada por comunicação e trabalhamos sem fins lucrativos, tendo como objetivo as ações sociais. Através da transmissão da nossa rádio, nosso objetivo é conectar nossos ouvintes a ONGs, e assim contribuir para a arrecadação de alimentos não perecíveis, roupas, cobertores, entre outros itens, para ajudar no combate a fome e ao frio.
          </Atom.Text>
          <Atom.Text>
            Não podemos mudar o Brasil sozinhos, mas podemos fazer a nossa parte para ajudar os menos afortunados. Apoiamos aqueles que queiram ajudar moradores de rua, famílias em extrema pobreza, abrigos de idosos, entre outros. Além disso, também prestamos atenção às ONGs que tem como objetivo resgatar animais de ruas, que sofrem maus tratos.
          </Atom.Text>
        </Atom.LeftContentContainer>
        <Atom.RightImage src={gridRightImage} />
      </Atom.Flex>

      <Atom.ImageMobile src={gridMobileImage} />
    </Atom.Container>
  )
}
