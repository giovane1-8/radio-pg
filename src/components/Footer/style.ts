import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  height: 500px;

  margin-top: 100px;
  padding: 100px 220px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  background-color: ${props => props.theme.colors.black};

  font-family: 'Inter';

  @media(max-width: 1150px) {
    padding: 100px;
  }

  @media(max-width: 860px) {
    min-height: 95vh;
    padding: 50px 100px;
  }

  @media(max-width: 425px) {
    min-height: 800px;
    flex-direction: column;

    padding: 54px 20px;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  color: ${props => props.theme.colors.white};

  // cellphone query
  @media(max-width: 860px) {
    flex-direction: column;
    align-items: center;

    gap: 50px;
  }
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
  object-fit: contain;

  @media(max-width: 860px) {
    width: 50px;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 300;

  @media(max-width: 860px) {
    font-size: 3.5rem;
  }
`

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 300;

  @media(max-width: 860px) {
    font-size: 2.5rem;
  }
`

export const Code = styled.img`
`

export const Extra = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;

  @media(max-width: 860px) {
    justify-content: center;
    margin-top: 3.5rem;
  }

  // cellphone query
  @media(max-width: 425px) {
    justify-content: space-between;
    flex-direction: column;
    font-size: 18px;
    gap: 15px;
  }
`

export const Language = styled.p`
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.colors.white};
  border-radius: 55px;

  color: ${props => props.theme.colors.white};
`

export const P = styled.p`
  color: ${props => props.theme.colors.white};
  font-size: 13px;
`