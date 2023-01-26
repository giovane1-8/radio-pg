import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  min-width: 100%;
  height: 1075px;
  margin-top: 250px;
  
  position: relative;
  
  background-color: ${props => props.theme.colors.primary};

  // cellphone query
  @media(max-width: 425px) {
    margin-top: 0;    
  }
`

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 785px;
  margin-left: 90px;

  // cellphone query
  @media(max-width: 425px) {
    display: none;
  }
`

export const ContentContainer = styled.div`
  position: absolute;
  right: 0;

  max-width: 45%;
  margin-right: 150px;

  // cellphone query
  @media(max-width: 425px) {
    top: 0;

    max-width: 100%;

    margin-left: 40px;
    margin-right: 40px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  
  // cellphone query
  @media(max-width: 425px) {
    padding-top: 140px;
  }
`

export const QRCode = styled.img`
  width: 235px;

  // cellphone query
  @media(max-width: 425px) {
    display: none;
  }
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 36px;

  margin-left: 34px;
  line-height: 1;

  color: ${props => props.theme.colors.white};

  // cellphone query
  @media(max-width: 425px) {
    font-size: 22px;
    margin: 0;
  }
`

export const LightTitle = styled.h1`
  font-weight: 500;
`

export const Content = styled.p`
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 400;

  margin-top: 50px;
  max-width: 85%;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 14px;
    margin-top: 35px;
    max-width: none;
  }
`

// Exclusive mobile contents
export const ImageMobile = styled.img`
  display: none;

  // cellphone query
  @media(max-width: 425px) {
    display: inherit;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    width: 425px;
  }
`

export const Link = styled.a`
  display: none;

  // cellphone query
  @media(max-width: 425px) {
    display: inherit;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    margin: 0;
    margin: 50px;

    width: 280px;
    height: 70px;

    border-radius: 33px;
    background-color: ${props => props.theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    outline: none;
    
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 22px;
    font-weight: 500;
  }
`

export const Icon = styled.img`
  display: none;

  // cellphone query
  @media(max-width: 425px) {
    display: inherit;
    width: 35px;
  }
`
