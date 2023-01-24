import styled from 'styled-components'

export const Banner = styled.div`
  height: 90vh;
  background-color: ${props => props.theme.colors.lightGray};

  position: relative;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4rem 12.5rem 0;
`

export const Image = styled.img`
  width: 8.75rem;
  height: 5.625rem;
`

export const NavigationWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 55%;

  list-style: none;
  font-size: 24px;
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

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 12.5rem 5.5rem 0;
`

export const Button = styled.button`
  padding: 10px;
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
  
  padding: 10px;
  width: 150px;
  
  color: #FF4848;
  font-size: 16px;
  font-weight: 700;
  
  border-radius: 80px;
  border: 0;
  
  cursor: pointer;
`
