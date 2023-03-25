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

  @media(max-width: 1025px) { font-size: 5rem; }
  @media(max-width: 1025px) { font-size: 3.5rem;  }
  @media(max-width: 515px) { font-size: 2.3rem; }
  @media(max-width: 335px) { font-size: 2rem; }
`

export const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  gap: 25px;
  margin-top: 90px;

  @media(max-width: 535px) { gap: 50px }
`

export const Cell = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 460px;
  height: 280px;

  padding: 25px;
  border-radius: 30px;

  position: relative;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  @media(max-width: 540px) { gap: 50px }
`

export const Background = styled.img`
  position: absolute;
  border-radius: 30px;
  filter: brightness(50%);

  object-fit: cover;

  width: 100%;

  @media(max-width: 540px) { height: 100% }
`

export const SubTitle = styled.div`
  font-size: 2.4rem;
  font-family: 'Montserrat';
  font-weight: 700;
  color: ${props => props.theme.colors.white};

  text-align: center;

  z-index: 10;

  @media(max-width: 500px) { font-size: 1.8rem; }
`