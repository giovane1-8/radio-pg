import {
  Container,
  Title,
  Grid,
  Cell,
  Background,
  SubTitle
} from './style'

import destaque1 from '../../utils/images/destaque1.png'
import destaque2 from '../../utils/images/destaque2.png'
import destaque3 from '../../utils/images/destaque3.png'
import destaque4 from '../../utils/images/destaque4.png'
import destaque5 from '../../utils/images/destaque5.png'
import destaque6 from '../../utils/images/destaque6.png'

type CardProps = {
  title: string,
  img: string
}

export const FervendoNaPG = () => {
  // (* TODO: place all data in array and place in a .map *)
  const data: CardProps[] = [
    {
      title: 'Moradores de prédio que sofreu dano estrutural em Praia Grande já têm data para retornar ao imóvel', 
      img: destaque1
    },
    {
      title: 'Ambulantes temporários devem solicitar licença em Praia Grande; veja como fazer o pedido',
      img: destaque2
    },
    {
      title: '7º Passeio Ciclístico de Praia Grande leva milhares de pessoas às ruas da cidade',
      img: destaque3
    },
    {
      title: 'Nova fonte de água interativa em Praia Grande será entregue na segunda-feira',
      img: destaque4
    },
    {
      title: 'Granada é encontrada em frente a casa no litoral de SP e deixa moradores 3h sob tensão',
      img: destaque5
    },
    {
      title: 'Feira de Artesanato Itinerante é atração em Praia Grande neste domingo',
      img: destaque6
    },
  ]

  return (
    <Container>
      <Title>Fervendo na Praia Grande</Title>
      <Grid>
        {data.map((item) => {
          return (
            <Cell>
              <Background src={item.img} />
              <SubTitle>{item.title}</SubTitle>
            </Cell>  
          )
        })}
      </Grid>
    </Container>
  )
}
