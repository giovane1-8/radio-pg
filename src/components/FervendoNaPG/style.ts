import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 12.5rem;

  width: 100%;
  max-width: 80%;
  margin-left: 10%;
`

export const Title = styled.div`
  font-size: 7rem;
  font-family: 'Montserrat';
  font-weight: 500;

  @media(max-width: 1025px) {
    font-size: 5rem;
  }  

  @media(max-width: 1025px) {
    font-size: 3.5rem;
  }  

  @media(max-width: 515px) {
    font-size: 2.3rem;
  }  

  @media(max-width: 335px) {
    font-size: 2rem;
  }  
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  justify-content: center;
  align-items: center;

  gap: 40px;
  margin-top: 90px;

  @media(max-width: 1515px) {
    grid-template-columns: repeat(2, auto);
  }

  @media(max-width: 1100px) {
    grid-template-columns: repeat(1, auto);
    width: 85%;
    margin-top: 250px;
    gap: 400px;
  }

  @media(max-width: 1000px) { gap: 350px; margin-top: 200px }
  @media(max-width: 900px) { gap: 300px; }
  @media(max-width: 725px) { gap: 250px; margin-top: 150px }
  @media(max-width: 600px) { gap: 175px; margin-top: 100px }
  @media(max-width: 500px) { gap: 100px; margin-top: 50px }
`

export const Cell = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 460px;
  height: 280px;

  padding: 25px;
  border-radius: 30px;

  position: relative;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  @media(max-width: 1100px) {
    width: 100%;
    height: 100%;
  }

  @media(max-width: 500px) {
    width: 300px;
  } 
`

export const Background = styled.img`
  position: absolute;
  border-radius: 30px;
  filter: brightness(50%);

  @media(max-width: 1100px) {
    width: 100%;
  }
`

export const SubTitle = styled.div`
  font-size: 2.4rem;
  font-family: 'Montserrat';
  font-weight: 700;
  color: ${props => props.theme.colors.white};

  text-align: center;

  z-index: 10;


  @media(max-width: 500px) {
    font-size: 1.8rem;
  }
`