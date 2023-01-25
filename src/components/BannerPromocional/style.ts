import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  min-width: 100%;
  height: 660px;
  margin-top: 250px;
  
  position: relative;
  
  background-color: ${props => props.theme.colors.primary};
`

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 785px;
  margin-left: 90px;
`

export const ContentContainer = styled.div`
  position: absolute;
  right: 0;

  max-width: 45%;
  margin-right: 150px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const QRCode = styled.img`
  width: 235px;
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 36px;

  margin-left: 34px;
  line-height: 1;


  color: ${props => props.theme.colors.white};
`

export const LightTitle = styled.h1`
  font-weight: 500;
`

export const Content = styled.p`
  font-size: 20px;
  font-family: 'Inter';
  font-weight: 400;

  margin-top: 50px;
  max-width: 85%;
`
