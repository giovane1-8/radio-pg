import {
  Container,
  Title,
  Text,
  Icon,
  Flex,
  LeftImage,
  RightContentContainer,
  LeftContentContainer,
  RightImage,
  ShadowImage,
  ImageMobile
} from './style'

import gridLeftImage from '../../utils/images/grid-left-image.png'
import gridRightImage from '../../utils/images/grid-right-image.png'
import gridMobileImage from '../../utils/images/grid-mobile.png'

import radio from '../../utils/icons/radio.svg'
import star from '../../utils/icons/star.svg'

export const Sobre = () => {
  return (
    <Container>
      <Flex>
        <LeftImage src={gridLeftImage} />
        <RightContentContainer>
          <Title><Icon src={radio} style={{marginRight: 10}} />Uma nova concepção de rádio web</Title>
          <Text>
            A Rádio PG é uma nova concepção de rádio web que se baseia nas possibilidades que a internet oferece. Oferecemos  aos nossos ouvintes uma ampla variedade de entretenimento, informações e programações selecionadas. Estamos sempre buscando trazer conteúdos novos e interessantes para nossos ouvintes, e para isso, realizamos entrevistas com temas selecionados, levando conhecimento e ensinamentos.
          </Text>
          <Text>
          Nossa rádio pode ser ouvida através de áudio digital utilizando seu notebook, computador, smart tv, aplicativo e até mesmo o Echo Dot. Com a Rádio PG, você tem acesso a conteúdos de qualidade em qualquer lugar e a qualquer hora. Não perca mais tempo e sintonize-se conosco agora!
          </Text>
        </RightContentContainer>
      </Flex> 

      <Flex>
        <LeftContentContainer>
          <Title style={{ justifyContent: 'end' }}>Por quê escutar a Rádio PG?<Icon src={star} style={{marginLeft: 10 }} /></Title>
          <Text>
            A Rádio PG é mais do que uma simples rádio web, somos uma equipe apaixonada por comunicação e trabalhamos sem fins lucrativos, tendo como objetivo as ações sociais. Através da transmissão da nossa rádio, nosso objetivo é conectar nossos ouvintes a ONGs, e assim contribuir para a arrecadação de alimentos não perecíveis, roupas, cobertores, entre outros itens, para ajudar no combate a fome e ao frio.
          </Text>
          <Text>
          Não podemos mudar o Brasil sozinhos, mas podemos fazer a nossa parte para ajudar os menos afortunados. Apoiamos aqueles que queiram ajudar moradores de rua, famílias em extrema pobreza, abrigos de idosos, entre outros. Além disso, também prestamos atenção às ONGs que tem como objetivo resgatar animais de ruas, que sofrem maus tratos.
          </Text>
        </LeftContentContainer>
        <RightImage src={gridRightImage} />
      </Flex> 

      <ImageMobile src={gridMobileImage} />
    </Container>
  )
}
