import styled from 'styled-components'

import shadow from '../../utils/images/sombra.png'

export const Container = styled.div`
  min-height: 1vh;

  width: 100%;
  max-width: 80%;

  margin-left: 10%;

  padding: 50px 75px;
  margin-top: 100vh;

  position: relative;

  top: 0;

  @media(max-width: 1470px) {
    max-width: 90%;
    margin-left: 5%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 75px;
  }

  @media(max-width: 1160px) {
    max-width: 90%;
    margin-left: 5%;
  }

  @media(max-width: 995px) {
    max-width: 100%;
    width: 100%;
    margin-left: 0;
  }

  @media(max-width: 660px) {
    max-width: 98%;
    margin-left: 1%;
  }

  // cellphone query
  @media(max-width: 425px) {
    padding: 0;
    padding-top: 35px;
    margin-left: 0px;
    gap: 0px;
    padding-bottom: 450px;
    max-width: none;
    overflow: none;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px) {
    flex-direction: column;
    gap: 50px;
  }

  @media(max-width: 660px) {
    width: 100%;
  }
`

// (* TODO: fix the shadow background size *)
// Upper content
export const LeftImage = styled.img`
  background-image: url(${shadow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 1400px) {
    width: 450px;
  }

  @media(max-width: 1160px) {
    width: 385px;
  }

  @media(max-width: 960px) {
    width: 350px;
  }

  @media(max-width: 850px) {
    width: 300px;
  }

  @media(max-width: 540px) {
    display: none;
  }
`

export const RightContentContainer = styled.div`
  @media(max-width: 800px) {
    text-align: center;
  }

  @media(max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;
    margin: 0;
    margin-bottom: 40px;
  }
`

// Down content
export const LeftContentContainer = styled.div`
  text-align: right;
  margin-right: 2.5rem;

  @media(max-width: 800px) {
    text-align: center;
  }

  @media(max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;
    margin: 0;
  }
`

export const RightImage = styled.img`
  background-image: url(${shadow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;

  @media(max-width: 800px) {
    display: none;
  }

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
  font-size: 3.8rem;
  font-weight: 500;

  display: flex;
  align-items: center;

  @media(max-width: 1745px) {
    font-size: 3.3rem
  }

  @media(max-width: 1570px) {
    font-size: 2.75rem
  }

  @media(max-width: 1470px) {
    font-size: 2.5rem
  }

  @media(max-width: 1090px) {
    font-size: 2rem
  }

  @media(max-width: 800px) {
    font-size: 3rem;
    justify-content: center;
  }

  @media(max-width: 670px) {
    font-size: 2.3rem;
  }

  @media(max-width: 660px) {
    font-size: 2.3rem;
    flex-direction: column;
    gap: 1rem;
  }

  // cellphone query
  @media(max-width: 425px) {
    font-size: 1.45rem;
    justify-content: center;
    align-items: center;
  }
`

export const RightTitle = styled.h1`
  font-family: 'Montserrat';
  font-size: 3.8rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: right;

  @media(max-width: 1745px) {
    font-size: 3.3rem
  }

  @media(max-width: 1560px) {
    font-size: 2.75rem
  }

  @media(max-width: 1470px) {
    font-size: 2.5rem
  }

  @media(max-width: 1090px) {
    font-size: 2rem
  }

  @media(max-width: 800px) {
    font-size: 3rem;
    justify-content: center;
    align-items: center;
    flex-direction: row-reverse;
    gap: 15px;
  }

  @media(max-width: 670px) {
    font-size: 2.3rem;
    flex-direction: column-reverse;
  }

  @media(max-width: 425px) {
    font-size: 1.45rem;
    justify-content: center;
  }
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 1.85rem;
  font-weight: 300;

  margin-top: 2.1875rem;

  @media(max-width: 1215px) {
    font-size: 1.5rem;
  }

  @media(max-width: 860px) {
    font-size: 1.35rem;
  }

  @media(max-width: 425px) {
    font-size: 1.2rem;
    margin-top: 17px;
    width: 80%;
  }
`

export const Icon = styled.img`
  width: 4rem;

  @media(max-width: 1090px) {
    width: 3rem;
  }

  @media(max-width: 660px) {
    width: 8rem;
  }

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

    padding: none;
    width: 100%;
  }
`