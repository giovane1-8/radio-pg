import styled from 'styled-components'

import shadow from '../../utils/images/sombra.png'

export const Container = styled.div`
  min-height: 1vh;
  max-width: 80vw;

  margin-left: 10vw;

  padding: 50px 75px;
  margin-top: 25px;

  position: relative;
  
  // cellphone query
  @media(max-width: 425px) {
    padding: 15px;
    padding-bottom: 350px;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // cellphone query
  @media(max-width: 425px) {
    :nth-child(2) {
      margin-top: 70px;
    }
  }
`

// (* TODO: fix the shadow background size *)
// Upper content
export const LeftImage = styled.img`
  margin-right: 2.5rem;

  background-image: url(${shadow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // cellphone query
  @media(max-width: 425px) {
    display: none;
  }
`

export const RightContentContainer = styled.div`
  margin-left: 2.5rem;

  // cellphone query
  @media(max-width: 425px) {
    text-align: center;
    margin: 0;
  }
`

// Down content
export const LeftContentContainer = styled.div`
  text-align: right;
  margin-right: 2.5rem;

  // cellphone query
  @media(max-width: 425px) {
    text-align: center;
  }
`

export const RightImage = styled.img`
  margin-left: 2.5rem;

  background-image: url(${shadow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // cellphone query
  @media(max-width: 425px) {
    display: none;
  }
`

// Shadow image
export const ShadowImage = styled.img`
  position: absolute;
  z-index: 1;

  // cellphone query
  @media(max-width: 425px) {
    display: none;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 2.375rem;
  font-weight: 500;

  display: flex;
  align-items: center;  

  // cellphone query
  @media(max-width: 425px) {
    font-size: 15px;
    justify-content: center;
  }
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 1.25rem;
  font-weight: 400;

  margin-top: 2.1875rem;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 12px;
    margin-top: 22px;
  }
`

export const Icon = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
  
  // cellphone query
  @media(max-width: 425px) {
    width: 20px;
  }
`

export const ImageMobile = styled.img`
  display: none;

  // cellphone query
  @media(max-width: 425px) {
    display: inherit;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    width: 100%;
  }
`