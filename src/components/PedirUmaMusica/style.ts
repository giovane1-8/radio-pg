import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 80%;
  margin-left: 10%;

  margin-top: 12.5rem;

  @media(max-width: 980px) {
    justify-content: center;
    flex-direction: column;
    max-width: 90%;
    margin-left: 5%;
  }

  @media(max-width: 425px) {
    padding: 15px;
  }
`

export const Content = styled.div`
  width: 60%;

  @media(max-width: 980px) {
    width: 85%;
  }

  @media(max-width: 425px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 7rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 1600px) {
    font-size: 6rem;
  }

  @media(max-width: 1400px) {
    font-size: 5rem;
  }

  @media(max-width: 1185px) {
    font-size: 4.5rem
  }

  @media(max-width: 1080px) {
    font-size: 4rem
  }

  @media(max-width: 870px) {
    font-size: 3.5rem
  }

  @media(max-width: 550px) {
    font-size: 3rem
  }
  
  @media(max-width: 480px) {
    font-size: 2.8rem;
    justify-content: center;
  }

  @media(max-width: 440px) {
    font-size: 2.5rem;
  }

  @media(max-width: 350px) {
    font-size: 2rem;
    justify-content: center;
  }
`

export const Icon = styled.img`
  width: 5rem;
  margin-right: 30px;

  @media(max-width: 870px) {
    width: 4rem;
    margin-right: 25px;
  }

  @media(max-width: 430px) {
    width: 2.8rem;
    margin-right: 15px;
  }
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 2rem;
  font-weight: 400;

  max-width: 35vw;

  margin-top: 2rem;

  @media(max-width: 980px) {
    max-width: 100%;
    text-align: center;
  }

  @media(max-width: 870px) {
    font-size: 1.75rem;
  }

  @media(max-width: 425px) {
    max-width: 80%;
    margin-left: 10%;
    margin-top: 22px;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 35%;

  font-family: 'Montserrat', sans-serif;

  @media(max-width: 980px) {
    width: 80%;
    margin-top: 70px;
  }

  @media(max-width: 425px) {
    width: 80%;
    margin-top: 70px;
  }
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 2rem;
  color: ${props => props.theme.colors.black};
`

export const Input = styled.input`
  width: 100%;
  
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1.2rem;

  height: 4.6rem;
  margin-top: 0.3125rem;
  padding: 1.25rem;

  font-weight: 300;
  font-size: 2rem;
  color: ${props => props.theme.colors.darkGray};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.lightGray};
  }
  :-ms-input-placeholder {
     color: ${props => props.theme.colors.lightGray};
  }
`

export const Button = styled.input`
  width: 100%;

  border: 0;
  background-color: ${props => props.theme.colors.black};

  color: ${props => props.theme.colors.white};
  font-size: 20px;

  padding: 20px 0;
  border-radius: 30px;

  cursor: pointer;
`

export const Margin = styled.div`
  margin-top: 1.5625rem;
`