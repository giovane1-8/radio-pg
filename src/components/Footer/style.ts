import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;

  margin-top: 250px;
  padding: 100px 220px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${props => props.theme.colors.black};

  font-family: 'Inter';
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  color: ${props => props.theme.colors.white};
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 17px;
  font-weight: 300;
`

export const Ul = styled.ul`
  list-style: none;
`

export const DivIcon = styled.div`
  display: flex;
  gap: 15px;
`

export const Icon = styled.img`
  margin-top: 25px;
`

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 400;
`

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
`

export const Extra = styled.div`
  display: flex;
  align-items: center;
`

export const Language = styled.p`
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 55px;

  color: ${props => props.theme.colors.white};
  `

export const P = styled.p`
  color: ${props => props.theme.colors.white};
  margin-left: 35px;
`