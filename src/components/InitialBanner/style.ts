import styled from 'styled-components'

export const Banner = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 100%;

  position: absolute;
  overflow: hidden;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  // cellphone query
  @media(max-width: 1050px) {
    width: 100%;
    min-width: 100%;
  }

  `

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  display: block;
  object-fit: cover;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 0;

  width: 100%;
  max-width: 80%;
  margin-left: 10%;
  margin-top: 3rem;

  font-family: 'Montserrat', sans-serif;

  // cellphone query
  @media(max-width: 1050px) {
    justify-content: center;
  }
`

export const Image = styled.img`
  width: 14rem;

  @media(max-width: 1050px) {
    width: 16rem;
  }
`

export const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: auto;

  gap: 15px;
  
  list-style: none;
  font-size: 1.7rem;
  
  // cellphone query
  @media(max-width: 1050px) {
    display: none;
  }
`

export const ListItem = styled.a`
  color: ${props => props.theme.colors.white};
  font-weight: 500;

  outline: none;
  text-decoration: none;
`

export const ListItemGlow = styled.a`
  color: ${props => props.theme.colors.primary};
  font-weight: 700;

  outline: none;
  text-decoration: none;
`

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 100%;
  max-width: 18%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-right: 10%;
  margin-bottom: 8rem;

  // cellphone query
  @media(max-width: 1640px) {
    max-width: 25%;
  }

  @media(max-width: 1640px) {
    max-width: 30%;
  }

  @media(max-width: 1050px) {
    left: 0;
    right: 0;
    bottom: 0;

    margin: 0;
    justify-content: center;
    
    margin-bottom: 4rem;
    max-width: 100%;
    width: 100%;
  }
`

export const Button = styled.button`
  padding: 1rem;
  border-radius: 80px;

  border: 0;
  margin: 0 12px 0;
  
  cursor: pointer;
`

export const ButtonGlow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  padding: 0.625rem;
  width: 20rem;
  
  color: #FF4848;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  
  border-radius: 80px;
  border: 0;
  
  cursor: pointer;
`