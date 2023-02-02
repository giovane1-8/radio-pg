import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  min-width: 100%;
  height: 70vh;
  margin-top: 250px;

  position: relative;
  
  background-color: ${props => props.theme.colors.primary};

  @media(max-width: 1700px) {
    margin-top: 0;
    height: 70vh;
  }

  @media(max-width: 1620px) {
    justify-content: center;
    height: 80vh;
  } 

  @media(max-width: 425px) {
    height: 75vh;
    width: 100%;
    margin-top: 0px;
  }
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  min-width: 100%;
  height: 90vh;
  margin-top: 250px;

  position: relative;
  
  background-color: ${props => props.theme.colors.primary};

  @media(max-width: 1700px) {
    margin-top: 0;
    height: 70vh;
  }

  @media(max-width: 1620px) {
    justify-content: center;
  } 

  @media(max-width: 900px) {
    height: 80vh;
  } 

  @media(max-width: 425px) {
    margin-top: 0;
    height: 60vh
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`

export const Image = styled.img`
  width: 78.5rem;
  margin-left: 5%;
  
  position: absolute;
  bottom: 0;

  @media(max-width: 1620px) {
    display: none;
  } 
`

export const Image2 = styled.img`
  width: 785px;
  margin-left: 5%;
  
  position: absolute;
  bottom: 0;

  @media(max-width: 1620px) {
    display: none;
  }
`

export const ContentContainer = styled.div`
  position: absolute;
  right: 0;
  max-width: 45%;
  
  @media(max-width: 1620px) {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    max-width: 70%;
    margin-left: 15%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  } 

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

  @media(max-width: 980px) {
    flex-direction: column;
    text-align: center;
  }
`

export const QRCode = styled.img`
  width: 23.5rem;

  @media(max-width: 1700px) {
    width: 18.5rem;
  }

  @media(max-width: 1620px) {
    width: 30rem;
  }
`

export const Logo = styled.img`
  @media(max-width: 1700px) {
    width: auto;
  }

  @media(max-width: 660px) {
    width: 35rem;
  } 

  @media(max-width: 425px) {
    width: 27rem;
  }

`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 3.6rem;

  margin-left: 34px;
  line-height: 1;

  color: ${props => props.theme.colors.white};

  @media(max-width: 1473px) {
    font-size: 3rem;
  }

  @media(max-width: 980px) {
    margin: 0;
    margin-top: 15px;
  }

  @media(max-width: 550px) {
    font-size: 2.5rem;
  }

  @media(max-width: 460px) {
    font-size: 2.3rem;
  }

  @media(max-width: 425px) {
    font-size: 2.2rem;
  }

  @media(max-width: 365px) {
    font-size: 1.85rem;
  }
`

export const LightTitle = styled.h1`
  font-weight: 500;
`

export const Content = styled.p`
  font-size: 2rem;
  font-family: 'Inter';
  font-weight: 400;

  margin-top: 50px;
  max-width: 85%;
  
  @media(max-width: 1620px) {
    text-align: center;
  }

  @media(max-width: 620px) {
    font-size: 1.8rem;
    max-width: none;
  }

  @media(max-width: 425px) {
    font-size: 1.4rem;
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

    width: 100%;
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
    font-size: 2.2rem;
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
