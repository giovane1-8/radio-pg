import * as Atom from './style'

import musicIcon from '../../utils/icons/music.svg'
import { useState } from 'react'
import { apiAxios } from '../../Axios'


export default function PedirUmaMusica() {
  const [name, setName] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [music, setMusic] = useState("")
  const [email, setEmail] = useState("")


  const handleSendMusic = () => {

    apiAxios.post("email/sendmusic", JSON.stringify({
      name: name,
      state: state,
      city: city,
      whatsapp: whatsapp,
      music: music,
      email: email
    })).then(function (response) {
      console.log(response.data)
    })

  }

  return (
    <Atom.Container id='requestmusic'>
      <Atom.Content>
        <Atom.Title><Atom.Icon src={musicIcon} />E aí, o que quer ouvir?</Atom.Title>
        <Atom.Text style={{ marginTop: '4rem' }}>Na Rádio PG, você é o nosso principal convidado! </Atom.Text>

        <Atom.Text>
          Temos um sistema de pedidos de músicas on-line, onde você pode pedir a música que deseja ouvir e para quem irá dedicá-la. Não importa se você quer ouvir uma música romântica para o seu amor, ou uma música animada para animar seus amigos, nós temos a música certa para cada momento.
        </Atom.Text>

        <Atom.Text>
          Não perca mais tempo e faça seu pedido agora! Sintonize-se conosco e ouça sua música favorita na Rádio PG.
        </Atom.Text>
      </Atom.Content>

      <Atom.Form>
        <Atom.Margin>
          <Atom.Label htmlFor="name">Nome Completo:</Atom.Label>
          <Atom.Input type="text" id='name' value={name} onChange={(e: any) => { setName(e.target.value) }} placeholder='Seu nome' />
        </Atom.Margin>

        <Atom.Margin>
          <Atom.Label htmlFor="email">E-mail:</Atom.Label>
          <Atom.Input type="text" id='email' value={email} onChange={(e: any) => { setEmail(e.target.value) }} placeholder='Seu nome' />
        </Atom.Margin>

        <Atom.Margin style={{ display: 'flex', gap: 20 }}>
          <div>
            <Atom.Label htmlFor="state">Seu estado:</Atom.Label>
            <Atom.Input type="text" id='state' value={state} onChange={(e: any) => { setState(e.target.value) }} placeholder='Estado' />
          </div>

          <div>
            <Atom.Label htmlFor="city">Sua cidade:</Atom.Label>
            <Atom.Input type="text" id='city' value={city} onChange={(e: any) => { setCity(e.target.value) }} placeholder='Cidade' />
          </div>
        </Atom.Margin>

        <Atom.Margin>
          <Atom.Label htmlFor="whatsapp">Whatsapp:</Atom.Label>
          <Atom.Input type="text" id='whatsapp' value={whatsapp} onChange={(e: any) => { setWhatsapp(e.target.value) }} placeholder='(DDD) 91234-5678' />
        </Atom.Margin>

        <Atom.Margin>
          <Atom.Label htmlFor="music">Qual música quer ouvir?</Atom.Label>
          <Atom.Input type="text" id='music' value={music} onChange={(e: any) => { setMusic(e.target.value) }} placeholder='Nome da música' />
        </Atom.Margin>

        <Atom.Margin>
          <Atom.Button id="enviar" type="submit" onClick={(e) => {
            e.preventDefault()
            handleSendMusic()
          }} />
        </Atom.Margin>
      </Atom.Form>
    </Atom.Container>
  )
}
