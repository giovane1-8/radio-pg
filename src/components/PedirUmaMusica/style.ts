import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-width: 100vw;
  padding-left: 10vw;
  padding-right: 10vw;
`

export const Content = styled.div`
  width: 60%;
  /* background-color: red; */
`

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-size: 70px;
  font-weight: 500;

  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  width: 80px;
`

export const Text = styled.p`
  font-family: 'Inter';
  font-size: 20px;
  font-weight: 400;

  max-width: 35vw;

  margin-top: 65px;
`

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  width: 460px;
  /* background-color: blue; */

  font-family: 'Montserrat', sans-serif;
`

export const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  color: ${props => props.theme.colors.black};
`

export const Input = styled.input`
  width: 100%;
  
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 15px;

  height: 50px;
  margin-top: 5px;
  padding: 20px;

  font-weight: 300;
  font-size: 18px;
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
  margin-top: 25px;
`