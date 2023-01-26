import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 95%;

  margin-top: 200px;

  font-family: 'Montserrat';

  // cellphone query
  @media(max-width: 425px) {
    margin-top: 100px;
    width: 100%;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 70px;

  gap: 40px;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 26px;
    gap: 8px;
  }
`

export const Icon = styled.img`
  width: 84px;

  // cellphone query
  @media(max-width: 425px) {
    width: 35px;
  }
`

export const Image = styled.img`
  max-width: 270px;

  // cellphone query
  @media(max-width: 425px) {
    max-width: 175px;
  }
`

export const Content = styled.div`
  margin-left: 80px;

  // cellphone query
  @media(max-width: 425px) {
    margin: 0;
    text-align: center;
  }
`

export const ContentTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 22px;
    margin-top: 25px;
  }
`

export const SubTitle = styled.h2`
  font-family: 'Inter';
  font-weight: 300;
  font-size: 18px;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 12px;
  }
`

export const Text = styled.p`
  font-family: 'Inter';
  font-weight: 300;
  font-size: 16px;

  margin-top: 25px;

  color: #000;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 14px;
  }
`

export const Footer = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 25px;
`

export const Link = styled.a`
  outline: none;
  cursor: pointer;
`

export const SocialMedia = styled.img`
  width: 40px;
`