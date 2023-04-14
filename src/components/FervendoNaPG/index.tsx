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

export default function FervendoNaPG() {
  const data: CardProps[] = [
    {
      title: 'Moradores de prédio que sofreu dano estrutural em Praia Grande já têm data para retornar ao imóvel',
      img: destaque1,
      link: 'https://www.atribuna.com.br/cidades/praiagrande/moradores-de-predio-que-sofreu-dano-estrutural-em-praia-grande-ja-tem-data-para-retornar-ao-imovel-'
    },
    {
      title: 'Ambulantes temporários devem solicitar licença em Praia Grande; veja como fazer o pedido',
      img: destaque2,
      link: 'https://g1.globo.com/sp/santos-regiao/noticia/2023/01/23/ambulantes-temporarios-devem-solicitar-licenca-em-praia-grande-veja-como-fazer-o-pedido.ghtml'
    },
    {
      title: '7º Passeio Ciclístico de Praia Grande leva milhares de pessoas às ruas da cidade',
      img: destaque3,
      link: 'https://g1.globo.com/sp/santos-regiao/noticia/2023/01/22/7o-passeio-ciclistico-de-praia-grande-leva-milhares-de-pessoas-as-ruas-da-cidade.ghtml'
    },
    {
      title: 'Nova fonte de água interativa em Praia Grande será entregue na segunda-feira',
      img: destaque4,
      link: 'https://www.atribuna.com.br/noticias/reporterdebairro/nova-fonte-de-agua-interativa-em-praia-grande-sera-entregues-na-segunda-feira-#:~:text=A%20nova%20Pra%C3%A7a%20da%20%C3%81gua,vias%20arredores%20tamb%C3%A9m%20ser%C3%A3o%20entregues.'
    },
    {
      title: 'Granada é encontrada em frente a casa no litoral de SP e deixa moradores 3h sob tensão',
      img: destaque5,
      link: 'https://g1.globo.com/sp/santos-regiao/noticia/2023/01/22/granada-e-encontrada-em-frente-a-uma-casa-no-litoral-de-sp-e-cria-tensao-em-moradores.ghtml'
    },
    {
      title: 'Feira de Artesanato Itinerante é atração em Praia Grande neste domingo',
      img: destaque6,
      link: 'https://www.atribuna.com.br/cidades/praiagrande/feira-de-artesanato-itinerante-e-atracao-em-praia-grande-neste-domingo-22-'
    },
  ]

  return (
    <Container id='news'>
      <Title>Fervendo na Praia Grande</Title>
      <Grid>
        {data.map((item, index) => {
          return (
            <Cell key={index} target='_blank' href={item.link}>
              <Background src={item.img} />
              <SubTitle>{item.title}</SubTitle>
            </Cell>
          )
        })}
      </Grid>
    </Container>
  )
}
