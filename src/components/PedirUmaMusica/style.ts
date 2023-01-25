import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100%;
  padding-left: 10vw;
  padding-right: 10vw;

  margin-top: 12.5rem;
`

export const Content = styled.div`
  width: 60%;
  /* background-color: red; */
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 4.375rem;
  font-weight: 500;

  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 5rem;
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 1.25rem;
  font-weight: 400;

  max-width: 35vw;

  margin-top: 4.0625rem;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 28.75rem;
  /* background-color: blue; */

  font-family: 'Montserrat', sans-serif;
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