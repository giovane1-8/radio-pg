import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
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
  font-size: 7rem;

  gap: 40px;

  @media(max-width: 1100px) {
    font-size: 5rem;
    gap: 20px;
  }

  @media(max-width: 700px) {
    font-size: 4rem;
    gap: 15px;
  }

  @media(max-width: 700px) {
    flex-direction: column;
  }

  @media(max-width: 425px) {
    font-size: 2.6rem;
    gap: 8px;
  }
`

export const Icon = styled.img`
  width: 84px;

  @media(max-width: 1100px) {
    width: 7rem;
  }

  @media(max-width: 700px) {
    width: 6rem;
  }

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

  @media(max-width: 1315px) {
    text-align: center;
    margin: 0;
    margin-top: 15px;
  }
`

export const ContentTitle = styled.h1`
  font-weight: 700;
  font-size: 4rem;

  @media(max-width: 1065px) {
    font-size: 3.5rem;
  }

  @media(max-width: 425px) {
    font-size: 2.2rem;
    margin-top: 25px;
  }
`

export const SubTitle = styled.h2`
  font-family: 'Inter';
  font-weight: 300;
  font-size: 1.8rem;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 1.2rem;
  }
`

export const Text = styled.p`
  font-family: 'Inter';
  font-weight: 300;
  font-size: 1.6rem;

  margin-top: 25px;

  color: #000;

  @media(max-width: 1315px) {
    font-size: 2rem;
  }

  @media(max-width: 425px) {
    font-size: 1.4rem;
  }
`

export const Footer = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 25px;

  @media(max-width: 1315px) {
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`

export const Link = styled.a`
  outline: none;
  cursor: pointer;
`

export const SocialMedia = styled.img`
  width: 50px;
  aspect-ratio: 3/2;
  object-fit: contain;
`