import { useState, useEffect, useRef } from 'react'

import * as Atom from './style'

type Carousel = {
  name: string,
  state: string,
  city: string,
  title: string,
  content: string,
}

export default function Depoimentos() {
  const data: Carousel[] = [
    {
      name: 'Maria Célia',
      state: 'São Paulo',
      city: 'Praia Grande',
      title: 'Vencedora - Hospedagem grátis',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.',
    },
    {
      name: 'Henry Sanches',
      state: 'Santa Catarina',
      city: 'Blumenau',
      title: 'Vencedor - Caneta Azul',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.',
    },
    {
      name: 'Rodrigo Araujo',
      state: 'Rio de Janeiro',
      city: 'Rio de Janeiro',
      title: 'Vencedor - Caneta Azul',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.',
    },
    {
      name: 'Alexandre',
      state: 'São Paulo',
      city: 'Praia Grande',
      title: 'Vencedor - Caneta Azul',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.',
    },
  ]

  const carouselDiv: any = useRef()
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    console.log(carouselDiv.current?.scrollWidth, carouselDiv.current?.offsetWidth)
    setWidth(carouselDiv.current?.scrollWidth - carouselDiv.current?.offsetWidth)
  }, [])

  return (
    <Atom.Main>
      <Atom.Carousel ref={carouselDiv} whileTap={{ cursor: 'grabbing' }}>
        <Atom.Inner
          drag="x" dragConstraints={{ right: 0, left: -width }}
        >
          {data.map((item, index) => {
            return (
              <Atom.Card key={index}>
                <Atom.Name>{item.name}</Atom.Name>
                <Atom.Locale>{item.state} - {item.city}</Atom.Locale>
                <Atom.Title>{item.title}</Atom.Title>
                <Atom.Content>{item.content}</Atom.Content>
              </Atom.Card>
            )
          })}
        </Atom.Inner>
      </Atom.Carousel>
    </Atom.Main>
  )
}
