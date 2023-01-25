import styled from 'styled-components'

import shadow from '../../utils/images/sombra.png'

export const Container = styled.div`
  min-height: 1vh;
  max-width: 80vw;

  margin-left: 10vw;

  padding: 50px 75px;
  margin-top: 25px;

  /* background-color: #000; */
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// (* TODO: fix the shadow background size *)
// Upper content
export const LeftImage = styled.img`
  margin-right: 40px;

  background-image: url(${shadow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const RightContentContainer = styled.div`
  margin-left: 40px;
`

// Down content
export const LeftContentContainer = styled.div`
  text-align: right;
  margin-right: 40px;
`

export const RightImage = styled.img`
  margin-left: 40px;

  background-image: url(${shadow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

// Shadow image
export const ShadowImage = styled.img`
  position: absolute;
  z-index: 1;
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 38px;
  font-weight: 500;

  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 400;

  margin-top: 35px;
`

export const Icon = styled.img`
  width: 45px;
  height: 45px;
`