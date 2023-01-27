import styled from "styled-components";

export const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 412px;
`

export const Container = styled.div`
  width: 70%;
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
    width: 80%;
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

  // cellphone query
  @media(max-width: 425px) {
    flex-direction: column;
    gap: 10px;
    font-size: 24px;

    margin-top: 80px;
    margin-bottom: 20px;
  }
`

export const Emoji = styled.img`
  width: 130px;

  // cellphone query
  @media(max-width: 425px) {
    width: 50px;
  }
`

export const Text = styled.p`
  width: 75%;

  font-family: 'Inter';
  font-weight: 300;
  font-size: 20px;

  margin-top: 20px;

  // cellphone query
  @media(max-width: 425px) {
    text-align: center;
    font-size: 12px;
  }
`
