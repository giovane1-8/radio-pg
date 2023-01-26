import {
  Container,
  Content,
  Title,
  Icon,
  Text,
  Form,
  Label,
  Input,
  Margin
} from './style'

import musicIcon from '../../utils/icons/music.svg'
import { useState } from 'react'

export const PedirUmaMusica = () => {

  const [name, setName] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()
  const [whatsapp, setWhatsapp] = useState()
  const [music, setMusic] = useState()
  //const [name, setName] = useState()

  return (
    <Container>
      <Content>
        <Title><Icon src={musicIcon} />E aí, o que quer ouvir?</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.</Text>
      </Content>

      <Form>
        <Margin>
          <Label htmlFor="name">Nome Completo:</Label>
          <Input type="text" id='name' onChange={(e: any) =>{ setName(e.target.value) } } placeholder='Seu nome' />
        </Margin>

        <Margin>
          <Label htmlFor="email">E-mail:</Label>
          <Input type="text" id='email' placeholder='Seu nome' />
        </Margin>

        <Margin style={{ display: 'flex', gap: 50 }}>
          <div>
            <Label htmlFor="state">Seu estado:</Label>
            <Input type="text" id='state' onChange={(e: any) =>{ setState(e.target.value) } } placeholder='Estado' />
          </div>

          <div>
            <Label htmlFor="city">Sua cidade:</Label>
            <Input type="text" id='city' onChange={(e: any) =>{ setCity(e.target.value) } } placeholder='Cidade' />
          </div>
        </Margin>

        <Margin>
          <Label htmlFor="whatsapp">Whatsapp:</Label>
          <Input type="text" id='whatsapp' onChange={(e: any) =>{ setWhatsapp(e.target.value) } } placeholder='(DDD) 91234-5678' />
        </Margin>

        <Margin>
          <Label htmlFor="music">Qual música quer ouvir?</Label>
          <Input type="text" id='music' onChange={(e: any) =>{ setMusic(e.target.value) } } placeholder='Nome da música' />
        </Margin>
      </Form>
    </Container>
  )
}
