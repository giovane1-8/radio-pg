import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 12.5rem;
`

export const Title = styled.div`
  font-size: 70px;
  font-family: 'Montserrat';
  font-weight: 500;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);

  justify-content: center;
  align-items: center;

  gap: 40px;
  margin-top: 90px;
`

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 460px;
  height: 280px;

  padding: 25px;
  border-radius: 30px;

  background-color: red;
  position: relative;
`

export const Background = styled.img`
  position: absolute;
  border-radius: 30px;
  filter: brightness(50%);
`

export const SubTitle = styled.div`
  font-size: 24px;
  font-family: 'Montserrat';
  font-weight: 700;
  color: ${props => props.theme.colors.white};

  text-align: center;

  z-index: 10;
`