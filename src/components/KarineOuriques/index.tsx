import {
  Center,
  Container,
  ImageContainer,
  Image,
  Emoji,
  Title,
  Text,
} from './style'

import deck from '../../utils/icons/deck.svg'
import karine from '../../utils/images/karineouriques.png'

export const KarineOuriques = () => {
  return (
    <Center>
      <Container>
        <ImageContainer>
          <Image src={karine} />
        </ImageContainer>

        <Title><Emoji src={deck} /> Karine Ouriques</Title>

        <Text>
          A Rádio PG tem o prazer de anunciar que todas as sextas-feiras, teremos a taróloga Karine Ouriques, ao vivo, como convidada especial. Ela irá responder uma pergunta de três ouvintes sorteados.
        </Text>

        <Text>
          Não importa se sua pergunta é sobre amor, financeiro ou profissional, a Karine Ouriques está preparada para dar conselhos e previsões. Para participar do sorteio, basta informar o seu nome completo e data de nascimento, e fique conectado nas programações onde iremos divulgar os sorteados.
        </Text>

        <Text>
          Conheça a Karine Ouriques, ela é uma taróloga experiente e altamente qualificada, com anos de experiência em ajudar as pessoas a compreender melhor seus caminhos e tomar decisões importantes. Não perca a oportunidade de obter conselhos valiosos de uma profissional experiente. Sintonize-se conosco todas as sextas-feira e participe do sorteio!
        </Text>
      </Container>
    </Center>
  )
}
