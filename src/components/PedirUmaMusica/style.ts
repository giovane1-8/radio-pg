import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100%;
  padding-left: 10vw;
  padding-right: 10vw;

  margin-top: 12.5rem;

  // cellphone query
  @media(max-width: 425px) {
    padding: 15px;

    flex-direction: column;
  }
`

export const Content = styled.div`
  width: 60%;

  // cellphone query
  @media(max-width: 425px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 4.375rem;
  font-weight: 500;

  display: flex;
  align-items: center;

  // cellphone query
  @media(max-width: 425px) {
    font-size: 24px;
    justify-content: center;
  }
`

export const Icon = styled.img`
  width: 5rem;
  margin-right: 30px;

  // cellphone query
  @media(max-width: 425px) {
    width: 28px;
    margin-right: 15px;
  }
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 1.25rem;
  font-weight: 400;

  max-width: 35vw;

  margin-top: 2rem;

  // cellphone query
  @media(max-width: 425px) {
    max-width: 80%;
    text-align: center;
    margin-left: 10%;
    margin-top: 22px;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 28.75rem;
  /* background-color: blue; */

  font-family: 'Montserrat', sans-serif;

  // cellphone query
  @media(max-width: 425px) {
    width: 80%;
    margin-top: 70px;
  }
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 1.25rem;
  color: ${props => props.theme.colors.black};
`

export const Input = styled.input`
  width: 100%;
  
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 1.2rem;

  height: 3.125rem;
  margin-top: 0.3125rem;
  padding: 1.25rem;

  font-weight: 300;
  font-size: 1.125rem;
  color: ${props => props.theme.colors.darkGray};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${props => props.theme.colors.lightGray};
  }
  :-ms-input-placeholder {
     color: ${props => props.theme.colors.lightGray};
  }
`

export const Margin = styled.div`
  margin-top: 1.5625rem;
`