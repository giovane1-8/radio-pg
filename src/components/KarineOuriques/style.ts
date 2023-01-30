import styled from "styled-components";

export const Center = styled.div`
  width: 100%;
  max-width: 80%;
  margin-left: 10%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 412px;

  @media(max-width: 820px) {
    margin-top: 285px;
  }

  @media(max-width: 600px) {
    margin-top: 200px;
  }

  @media(max-width: 425px) {
    margin-top: 100px;
  }
`

export const Container = styled.div`
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;

  padding: 150px 80px;
  border-radius: 30px;

  filter: drop-shadow(0px 8px 30px rgba(43, 43, 43, 0.25));

  // cellphone query
  @media(max-width: 425px) {
    width: 95%;
    padding: 40px 20px;
  }
`

export const ImageContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  `

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 70px;
  
  gap: 20px;
  margin-bottom: 40px;
  margin-top: 60px;
  
  @media(max-width: 1110px) {
    font-size: 5rem;
    margin-top: 10rem;
  }

  @media(max-width: 800px) {
    font-size: 4rem;
  }

  @media(max-width: 650px) {
    font-size: 3.75rem;
    flex-direction: column;
    gap: 10px;

    margin-top: 30px;
  }
  
  @media(max-width: 575px) {
    font-size: 2.5rem;
    margin-top: 0;
  }
  // cellphone query
  @media(max-width: 430px) {
    font-size: 2rem;
    
    margin-top: 80px;
    margin-bottom: 20px;
  }
`

export const Emoji = styled.img`
  width: 130px;

  @media(max-width: 1110px) {
    width: 10rem;
  }

  @media(max-width: 800px) {
    width: 8rem;
  }

  @media(max-width: 675px) {
    width: 6rem;
  }

  @media(max-width: 425px) {
    width: 50px;
  }
`

export const Text = styled.p`
  width: 75%;

  font-family: 'Inter';
  font-weight: 300;
  font-size: 2rem;

  margin-top: 20px;

  @media(max-width: 850px) {
    text-align: center;
  }

  @media(max-width: 850px) {
    width: 100%;
    font-size: 1.75rem;
  }

  @media(max-width: 425px) {
    text-align: center;
    font-size: 12px;
  }
`
