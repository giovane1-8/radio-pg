import styled from "styled-components";
import { motion } from 'framer-motion'

export const Main = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 80%;

  margin: 0 auto;
  margin-top: 260px;
  
  // cellphone query
  @media(max-width: 425px) {
    max-width: none;
    margin-top: 100px
  }
`

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`

export const Inner = styled(motion.div)`
  display: flex;
  gap: 85px;

  // cellphone query
  @media(max-width: 425px) {
    gap: 35px;
    margin-left: 50px;
  }
`

export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  min-height: 410px;
  min-width: 660px;
  max-width: 660px;
  padding: 0 75px 0;

  border-radius: 30px;

  background: linear-gradient(125deg, #D6F08D, #A7C36A, #3C7B1E);

  font-family: 'Montserrat';
  font-size: 26px;

  // cellphone query
  @media(max-width: 425px) {
    padding: 45px 25px;

    min-width: 300px;
  }
`
export const Name = styled.div`
  font-size: 26px;
  font-weight: 500;

  margin-bottom: 5px;

`

export const Locale = styled.div`
  font-family: 'Inter';
  font-size: 16px;
  font-weight: 400;

  margin-bottom: 25px;
`

export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 20px;

`

export const Content = styled.div`
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 400;

  // cellphone query
  @media(max-width: 425px) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
`