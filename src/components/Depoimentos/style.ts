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
`

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`

export const Inner = styled(motion.div)`
  display: flex;
  gap: 85px;
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
`


export const Flex = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Shadow = styled.div`
  width: 20%;
  height: 100%;
  opacity: 0.8;

  background: linear-gradient(to right, #fff, transparent);

  :nth-last-child(1) {
    background: linear-gradient(to left, #fff, transparent);
  }
`