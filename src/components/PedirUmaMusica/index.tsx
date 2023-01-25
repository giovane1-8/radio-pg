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

import music from '../../utils/icons/music.svg'

export const PedirUmaMusica = () => {
  return (
    <Container>
      <Content>
        <Title><Icon src={music} style={{marginRight: 30}} />E aí, o que quer ouvir?</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.</Text>
      </Content>

      <Form>
        <Margin>
          <Label htmlFor="name">Nome Completo:</Label>
          <Input type="text" id='name' placeholder='Seu nome' />
        </Margin>

        <Margin style={{ display: 'flex', gap: 50 }}>
          <div>
            <Label htmlFor="state">Seu estado:</Label>
            <Input type="text" id='state' placeholder='Estado' />
          </div>

          <div>
            <Label htmlFor="city">Sua cidade:</Label>
            <Input type="text" id='city' placeholder='Cidade' />
          </div>
        </Margin>

        <Margin>
          <Label htmlFor="whatsapp">Whatsapp:</Label>
          <Input type="text" id='whatsapp' placeholder='(DDD) 91234-5678' />
        </Margin>

        <Margin>
          <Label htmlFor="music">Qual música quer ouvir?</Label>
          <Input type="text" id='music' placeholder='Nome da música' />
        </Margin>
      </Form>
    </Container>
  )
}
