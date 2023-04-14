import * as Atom from './style'

import destaque1 from '../../utils/images/destaque1.png'
import destaque2 from '../../utils/images/destaque2.png'
import destaque3 from '../../utils/images/destaque3.png'
import destaque4 from '../../utils/images/destaque4.png'
import destaque5 from '../../utils/images/destaque5.png'
import destaque6 from '../../utils/images/destaque6.png'
import { useEffect, useState } from 'react'
import { apiAxios } from '../../Axios'

type CardProps = {
  id_noticias: string,
  nm_titulo: string,
  imagem: Blob,
  nm_link: string
}

export const FervendoNaPG = () => {

  const [data, setData] = useState<CardProps[]>([])
  useEffect(() => {
    apiAxios.get("news").then((resonse) => {
      setData(resonse.data);
    })
  }, [])


  console.log(data)


  return (
    <Atom.Container id='news'>
      <Atom.Title>Fervendo na Praia Grande</Atom.Title>
      <Atom.Grid>
        {data.map((item, index) => {
          return (
            <Atom.Cell key={index} target='_blank' href={item.nm_link}>
              <Atom.Background src={"data:image/png;base64, " + item.imagem} />
              <Atom.SubTitle>{item.nm_titulo}</Atom.SubTitle>
            </Atom.Cell>
          )
        })}
      </Atom.Grid>
    </Atom.Container>
  )
}
