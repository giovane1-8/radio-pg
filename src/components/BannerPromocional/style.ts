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
    height: 55vh;
  }

  @media(max-width: 1500px) {
    height: 45vh;
  }

  @media(max-width: 1366px) {
    margin-top: 15%;
  }

  @media(max-width: 1050px) {
    height: 38vh;
  }

  @media(max-width: 940px) {
    /* height: 35vh; */
  }

  @media(max-width: 830px) {
    height: 40vh;
  }

  @media(max-width: 600px) {
    height: 65vh;
  }

  @media(max-width: 425px) {
    height: 60vh;
    width: 100%;
    margin-top: 0px;
  }

  @media(max-width: 285px) {
    height: 75vh;
  }
`

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100%;
  margin-top: 0;
  height: 95vh;

  position: relative;

  background-color: ${props => props.theme.colors.primary};

  @media(max-width: 1620px) {
    height: 85vh;
  }

  @media(max-width: 1250px) {
    height: 60vh;
  }

  @media(max-width: 940px) {
    height: 60vh;
  }

  @media(max-width: 750px) {
    height: 70vh;
  }

  @media(max-width: 600px) {
    height: 80vh;
  }

  @media(max-width: 350px) {
    height: 95vh;
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
    width: 70rem;
    margin-left: 10%;
  }

  @media(max-width: 1500px) {
    width: 60rem;
  }

  @media(max-width: 1250px) {
    width: 55rem;
    margin-left: 5%;
  }

  @media(max-width: 1024px) {
    width: 50rem;
    /* margin-left: 5%; */
  }

  @media(max-width: 940px) {
    width: 45rem;
  }

  @media(max-width: 830px) {
    display: none;
  }
`

export const Image2 = styled.img`
  width: 785px;
  margin-left: 5%;

  position: absolute;
  bottom: 0;

  @media(max-width: 1620px) {
    width: 650px;
    margin-left: 10%;
    height: 100%;
  }

  @media(max-width: 1500px) {
    width: 550px;
  }

  @media(max-width: 1250px) {
    width: 500px;
    margin-left: 5%;
  }

  @media(max-width: 1050px) {
    width: 450px;
  }

  @media(max-width: 940px) {
    width: 400px;
  }

  @media(max-width: 830px) {
    display: none;
  }
`

export const ContentContainer = styled.div`
  position: absolute;
  right: 0;
  max-width: 45%;

  display: flex;
  flex-direction: column;
  gap: 3.5em;

  @media(max-width: 830px) {
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

  @media(max-width: 600px) {
    max-width: 80%;
    margin-left: 10%;
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

  @media(max-width: 600px) {
    text-align: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

export const Logo = styled.img`
  width: auto;

  @media(max-width: 1620px) {
    width: 50rem;
    justify-content: left;
  }

  @media(max-width: 1500px) {
    width: 45rem;
  }

  @media(max-width: 1366px) {
    width: 35rem;
  }

  @media(max-width: 1050px) {
    width: 30rem;
  }

  @media(max-width: 980px) {
    width: 25rem;
  }

  @media(max-width: 600px) {
    width: 40rem
  }

  @media(max-width: 425px) {
    width: 27rem;
  }

  @media(max-width: 285px) {
    width: 24rem;
  }
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 3.6rem;

  line-height: 1;

  color: ${props => props.theme.colors.white};

  @media(max-width: 1660px) {
    font-size: 3rem;
  }

  @media(max-width: 1500px) {
    font-size: 2.7rem;
  }

  @media(max-width: 1366px) {
    font-size: 2rem;
    margin-left: 15px;
  }

  @media(max-width: 980px) {
    font-size: 1.75rem
  }

  @media(max-width: 830px) {
    align-items: center;
    font-size: 2rem;
  }

  @media(max-width: 600px) {
    font-size: 2.5rem;
    margin: 0;
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

  max-width: 85%;

  @media(max-width: 1620px) {
    width: 70%;
    font-size: 1.75rem;
  }

  @media(max-width: 1500px) {
    width: 80%;
    font-size: 1.5rem;
  }

  @media(max-width: 1366px) {
    font-size: 1.35rem;
  }

  @media(max-width: 1050px) {
    font-size: 1.35rem;
  }

  @media(max-width: 980px) {
    font-size: 1.2rem
  }

  @media(max-width: 830px) {
    font-size: 1.5rem;
    text-align: center;
    max-width: none;
  }

  @media(max-width: 425px) {
    font-size: 1.4rem;
    max-width: none;
  }

  @media(max-width: 285px) {
    font-size: 1.2rem;
  }
`

export const DonateButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 35%;
  padding: 15px 0;

  background-color: ${props => props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors.white};
  border-radius: 80px;

  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  color: ${props => props.theme.colors.secondary};
  text-decoration: none;

  cursor: pointer;
  outline: none;
  transition: .3s;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media(max-width: 830px) {
    width: 80%;
  }
`