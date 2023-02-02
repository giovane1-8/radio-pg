import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat';
`

export const Container = styled.div`
  width: 50%;
  height: 95vh;
  border-radius: 30px;
  background-color: white;

  text-align: center;
  
  position: absolute;

  padding: 80px;
  filter: drop-shadow(0px 8px 15px rgba(43, 43, 43, 0.25));

  // cellphone query
  @media(max-width: 425px) {
    width: 100%;
    height: 100%;
    border-radius: 0;

    padding: 40px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const IconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  cursor: pointer;
`

export const Icon = styled.img`
  width: 80px;
`

export const Title = styled.h1`
  font-family: 38px;
  font-weight: 500;
`

export const Text = styled.h2`
  font-family: 'Inter';
  font-weight: 300;
  font-size: 20px;
  margin-top: 50px;
  text-align: left;

  // cellphone query
  @media(max-width: 425px) {
    text-align: center;
    font-size: 12px;
    margin-top: 25px;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 50px;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 16px;
  }
`

export const Date = styled.h1``

export const GlowText = styled.h1`
  color: ${props => props.theme.colors.secondary};
`
