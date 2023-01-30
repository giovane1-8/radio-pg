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

  @media(max-width: 425px) {
    font-size: 2.3rem;
  }  
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  justify-content: center;
  align-items: center;

  gap: 40px;
  margin-top: 90px;

  // cellphone query
  @media(max-width: 425px) {
    grid-template-columns: repeat(1, auto);
  }
`

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 460px;
  height: 280px;

  padding: 25px;
  border-radius: 30px;

  position: relative;

  @media(max-width: 425px) {
    width: 350px;
  }  
`

export const Background = styled.img`
  position: absolute;
  border-radius: 30px;
  filter: brightness(50%);

  @media(max-width: 425px) {
    height: 280px;
    width: 350px;
  }  
`

export const SubTitle = styled.div`
  font-size: 2.4rem;
  font-family: 'Montserrat';
  font-weight: 700;
  color: ${props => props.theme.colors.white};

  text-align: center;

  z-index: 10;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 1.8px;
  }
`