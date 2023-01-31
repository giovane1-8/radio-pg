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
  img: string,
  link: string
}

export const FervendoNaPG = () => {
  const data: CardProps[] = [
    {
      title: 'Moradores de prédio que sofreu dano estrutural em Praia Grande já têm data para retornar ao imóvel', 
      img: destaque1,
      link: ''
    },
    {
      title: 'Ambulantes temporários devem solicitar licença em Praia Grande; veja como fazer o pedido',
      img: destaque2,
      link: ''
    },
    {
      title: '7º Passeio Ciclístico de Praia Grande leva milhares de pessoas às ruas da cidade',
      img: destaque3,
      link: ''
    },
    {
      title: 'Nova fonte de água interativa em Praia Grande será entregue na segunda-feira',
      img: destaque4,
      link: ''
    },
    {
      title: 'Granada é encontrada em frente a casa no litoral de SP e deixa moradores 3h sob tensão',
      img: destaque5,
      link: ''
    },
    {
      title: 'Feira de Artesanato Itinerante é atração em Praia Grande neste domingo',
      img: destaque6,
      link: ''
    },
  ]

  return (
    <Container id='news'>
      <Title>Fervendo na Praia Grande</Title>
      <Grid>
        {data.map((item, index) => {
          return (
            <Cell key={index} target='_blank' href='https://google.com'>
              <Background src={item.img} />
              <SubTitle>{item.title}</SubTitle>
            </Cell>
          )
        })}
      </Grid>
    </Container>
  )
}
