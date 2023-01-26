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
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.</Text>
        </RightContentContainer>
      </Flex> 

      <Flex>
        <LeftContentContainer>
          <Title>Por quê escutar a Rádio PG?<Icon src={star} style={{marginLeft: 10}} /></Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu urna nunc. Nulla elementum scelerisque varius. Maecenas tempus suscipit metus, vitae luctus dolor semper et. Nam vulputate volutpat mauris in eleifend. In placerat iaculis sem ut malesuada. Suspendisse potenti. Morbi consequat mi et tortor blandit laoreet. Nam feugiat ullamcorper eros sit amet malesuada. Nam vel metus aliquam, consectetur nisl non, porta augue. Ut sodales elementum libero a faucibus. Mauris pellentesque luctus velit, eget malesuada dolor mollis sed. Sed mattis dui eget lectus ornare, in efficitur tortor vehicula.</Text>
        </LeftContentContainer>
        <RightImage src={gridRightImage} />
      </Flex> 

      <ImageMobile src={gridMobileImage} />
    </Container>
  )
}
